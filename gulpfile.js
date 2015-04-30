/// <reference path="typings/node/node.d.ts"/>
"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var del = require("del");
var path = require("path");
var swig = require("swig");
var swigExtras = require("swig-extras");
var through = require("through2")
var runSequence = require("run-sequence");
var merge = require("merge-stream");

var config = require("./config.json");
var build = config.build;

var onError = function (err) {
	$.util.beep();
	$.util.log($.util.colors.green(err));
	this.emit("end"); // tells watch to keep going, we"re done
};
var settings = { base: build.src };
var site = config.site;

gulp.task("styles", function () {
	return gulp.src(build.paths.less, settings)
		.pipe($.plumber({ errorHandler: onError }))
		.pipe($.less({ paths: [ path.join(__dirname, "less", "includes") ] }))
		.pipe($.autoprefixer({ browsers: build.browsers }))
		.pipe(gulp.dest(build.dest));
});

swig.setDefaults({
    loader: swig.loaders.fs(path.join(__dirname, build.paths.templates.base)),
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

gulp.task("articles", function () {
   var articles = gulp.src(build.paths.articles, { base: build.src + "/content" })
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
      .pipe(applyTemplate(build.paths.templates.article))
		.pipe($.highlight())
      .pipe($.rename({extname: ".html"}))
      .pipe(gulp.dest(build.dest));

	return merge(articles);
});

gulp.task("pages", ["articles"], function () {
   var html = gulp.src([build.paths.pagesHtml])
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

      var markdown = gulp.src(build.paths.pagesMarkdown)
         .pipe($.frontMatter({property: "page", remove: true}))
         .pipe($.marked())
         .pipe(applyTemplate(build.paths.templates.page))
         .pipe($.rename({extname: ".html"}));

    return merge(html, markdown)
        .pipe(gulp.dest(build.dest));
});

gulp.task("jshint", function () {
	return gulp.src([
			config.src + "assets/scripts/**/*.js",
			"!" + config.src + "assets/scripts/vendor/**/*"
		])
		.pipe($.jshint())
		.pipe($.jshint.reporter("jshint-stylish"));
});
gulp.task("scripts", ["jshint"], function () {
	var js = gulp.src([
			config.src + "assets/scripts/**/*.js",
			"!" + config.src + "assets/scripts/**/app.*.js"
		], settings)
		.pipe(gulp.dest(config.dest));

	gulp.src([
			config.src + "assets/scripts/**/app.*.js",
			"!" + config.src + "assets/scripts/vendor/**/*"
		], settings)
		.pipe($.size({title: "javascript::before"}))
        .pipe($.plumber())
        .pipe($.uglify())
        .pipe($.concat("assets/scripts/app.js"))
		.pipe(gulp.dest(config.dest))
		.pipe($.size({title: "javascript::after"}));;
});

gulp.task("images", function () {
	return gulp.src(build.paths.images, settings)
      .pipe($.changed(build.dest))
		.pipe(gulp.dest(build.dest))
		.pipe($.size({title: "images"}));
});
gulp.task("static", ["images"], function () {
	return gulp.src(build.paths.staticAssets, settings)
		.pipe($.changed(build.dest))
		.pipe(gulp.dest(build.dest));
});

gulp.task("watch", function () {
	gulp.watch(build.paths.styles, ["styles"]);
	gulp.watch(build.paths.templates.base + "/**/*", ["articles"]);
	gulp.watch(build.paths.articles, ["articles"]);
	gulp.watch(build.paths.pagesHtml, ["pages"]);
   //  gulp.watch(config.src + "assets/scripts/**/*.js", ["scripts"]);
	gulp.watch([
		build.paths.staticAssets,
		build.paths.images
	], ["static"]);
});

gulp.task("clean", del.bind(null, build.clean, { dot: true }));

gulp.task("default", function() {
	runSequence("build", "watch");
});

gulp.task("build", ["clean"], function () {
	runSequence("styles", "static", "pages");
});

gulp.task("deploy", ["build"], function () {
   return gulp.src(build.dest + "/**/*")
      .pipe($.deploy());
});
