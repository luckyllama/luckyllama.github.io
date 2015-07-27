/*jslint node: true */
"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var del = require("del");
var path = require("path");
var swig = require("swig");
var swigExtras = require("swig-extras");
var through = require("through2");
var runSequence = require("run-sequence");
var merge = require("merge-stream");

var config = require("./config.json");
var build = config.build;
var paths = build.paths;

var onError = function (err) {
	$.util.beep();
	$.util.log($.util.colors.green(err));
	this.emit("end"); // tells watch to keep going, we"re done
};
var settings = { base: build.src };
var site = config.site;

gulp.task("styles", function () {
	return gulp.src(paths.less, settings)
		.pipe($.plumber({ errorHandler: onError }))
		.pipe($.less({ paths: [ path.join(__dirname, "less", "includes") ] }))
		.pipe($.autoprefixer({ browsers: build.browsers }))
		.pipe(gulp.dest(build.dest));
});

swig.setDefaults({
    loader: swig.loaders.fs(path.join(__dirname, paths.templates.base)),
    locals: { now: function () { return new Date(); } },
    cache: false
});
swigExtras.useFilter(swig, "truncate");

var applyTemplate = function (templateFile) {
   var template = swig.compileFile(path.join(__dirname, templateFile));

   return through.obj(function (file, encoding, callback) {
      var data = {
         site: site,
         page: file.page,
         content: file.contents.toString()
      };
      file.contents = new Buffer(template(data), "utf8");
      this.push(file);
      callback();
   });
};

// inspiration from http://blog.crushingpennies.com/a-static-site-generator-with-gulp-proseio-and-travis-ci.html
gulp.task("articles", function () {
   var articlesHtml = gulp.src(paths.articles, { base: build.src + "/content" })
      .pipe($.frontMatter({ property: "page", remove: true }))
      .pipe($.marked())
      // Collect all the articles and place them on the site object.
      .pipe((function () {
         var articles = [];
         return through.obj(function (file, encoding, callback) {
            file.page.url = path.relative(file.cwd + "/" + file.base, file.path);
            articles.push(file.page);
            articles[articles.length - 1].content = file.contents.toString();
            this.push(file);
            callback();
         },
         function (callback) {
            articles.sort(function (a, b) {
               return b.date - a.date;
            });
				articles = articles.filter(function (article) {
					return typeof article.published === "undefined" || article.published;
				});
            site.articles = articles;
            callback();
         });
      })())
      .pipe(applyTemplate(paths.templates.article))
		.pipe($.highlight())
      .pipe($.rename({extname: ".html"}));

   var articlesJson = gulp.src(paths.articles, { base: build.src + "/content" })
      .pipe($.frontMatter({ property: "page", remove: true }))
      .pipe($.marked())
      .pipe(applyTemplate(paths.templates.articleJson))
      .pipe($.rename({ extname: ".json.js" }));

	return merge(articlesHtml, articlesJson)
		.pipe(gulp.dest(build.dest));
});

gulp.task("pages", ["articles"], function () {
   var html = gulp.src([paths.pagesHtml])
      .pipe($.frontMatter({property: "page", remove: true}))
      .pipe(through.obj(function (file, enc, callback) {
         var data = {
            site: site,
            page: {}
         };
         var template = swig.compileFile(file.path);
         file.contents = new Buffer(template(data), "utf8");
         this.push(file);
         callback();
      }));

   var markdown = gulp.src(paths.pagesMarkdown)
      .pipe($.frontMatter({property: "page", remove: true}))
      .pipe($.marked())
      .pipe(applyTemplate(paths.templates.page))
      .pipe($.rename({extname: ".html"}));

	var pageJson = gulp.src([paths.pagesMarkdown, paths.pagesHtml])
      .pipe($.frontMatter({property: "page", remove: true}))
      .pipe(through.obj(function (file, enc, callback) {
         var data = {
            site: site,
            page: {}
         };
        	var contents = String(file.contents);
			contents = contents.replace(/{%\sextends.*%}/gi, ""); // remove {extends} swig tag
         var template = swig.compile(contents, { filename: file.path });
         file.contents = new Buffer(template(data), "utf8");
         this.push(file);
         callback();
      }))
      .pipe(applyTemplate(paths.templates.pageJson))
		.pipe($.rename({ extname: ".json.js" }));

	return merge(html, markdown, pageJson)
		.pipe(gulp.dest(build.dest));
});

gulp.task("jshint", function () {
	return gulp.src(paths.jsGeneral)
		.pipe($.jshint())
		.pipe($.jshint.reporter("jshint-stylish"));
});
gulp.task("typescript", function () {
	var tsconfig = $.typescript.createProject("tsconfig.json");
   return gulp.src(paths.tsProject, settings)
		.pipe($.typescript(tsconfig))
		.pipe(gulp.dest(build.dest));
});
gulp.task("coffeescript", function () {
	return gulp.src(paths.coffeeProject, settings)
		.pipe($.coffee().on('error', onError))
		.pipe(gulp.dest(build.dest));
});
gulp.task("scripts", ["jshint", "typescript", "coffeescript"], function () {
	var projectJs = gulp.src([paths.jsProject, paths.jsVendor], settings);

	var generalJs = gulp.src(paths.jsGeneral, settings)
		.pipe($.size({title: "js:general::before"}))
		.pipe($.plumber())
		.pipe($.uglify())
		.pipe($.concat(paths.jsGeneralDest))
		.pipe($.size({title: "js:general::after"}));

	return merge(projectJs, generalJs)
		.pipe(gulp.dest(build.dest));
});

gulp.task("images", function () {
	return gulp.src(paths.images, settings)
      .pipe($.changed(build.dest))
		.pipe(gulp.dest(build.dest))
		.pipe($.size({title: "images"}));
});
gulp.task("static", ["images"], function () {
	var staticAssets = gulp.src(paths.staticAssets, settings)
		.pipe($.changed(build.dest))
		.pipe(gulp.dest(build.dest));

	var rootAssets = gulp.src(paths.rootAssets)
		.pipe($.changed(build.dest))
		.pipe(gulp.dest(build.dest));

	return merge(staticAssets, rootAssets);
});

gulp.task("watch", function () {
	gulp.watch(paths.styles, ["styles"]);
	gulp.watch([paths.templates.base + "/**/*", paths.pagesHtml, paths.articles], ["pages"]);
   gulp.watch([paths.jsGeneral, paths.jsProject, paths.jsVendor], ["scripts"]);
	gulp.watch(paths.coffeeProject, ["coffeescript"]);
	gulp.watch(paths.tsProject, ["typescript"]);
	gulp.watch([
		paths.staticAssets,
		paths.images
	], ["static"]);
});

gulp.task("clean", del.bind(null, build.clean, { dot: true }));

gulp.task("default", function() {
	runSequence("build", "watch");
});

gulp.task("build", ["clean"], function () {
	runSequence("styles", "scripts", "static", "pages");
});

gulp.task("deploy", function () {
   return gulp.src(build.dest + "**/*")
      .pipe($.ghPages({ branch: "master" }));
});
