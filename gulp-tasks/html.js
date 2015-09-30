var onError = require("./on-error");
var swig = require("swig");
var swigExtras = require("swig-extras");
var runSequence = require("run-sequence");
var merge = require("merge-stream");
var through = require("through2");
var path = require("path");

module.exports = function (gulp, config, plugins) {
  var paths = config.build.paths;

  swig.setDefaults({
    loader: swig.loaders.fs(path.join(__dirname, "../", paths.templates.base)),
    locals: { now: function () { return new Date(); } },
    cache: false
  });
  swigExtras.useFilter(swig, "truncate");

  var applyTemplate = function (templateFile) {
    var template = swig.compileFile(path.join(__dirname, "../", templateFile));

    return through.obj(function (file, encoding, callback) {
      var data = {
        site: config.site,
        page: file.page,
        content: file.contents.toString()
      };
      file.contents = new Buffer(template(data), "utf8");
      this.push(file);
      callback();
    });
  };

  // inspiration from http://blog.crushingpennies.com/a-static-site-generator-with-gulp-proseio-and-travis-ci.html
  // articles
  gulp.task("html:articles", function () {
    var articlesHtml = gulp.src(paths.articles, { base: paths.src + "/content" })
      .pipe(plugins.frontMatter({ property: "page", remove: true }))
      .pipe(plugins.marked())
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
          config.site.articles = articles;
          callback();
        });
      })())
      .pipe(applyTemplate(paths.templates.article))
      .pipe(plugins.highlight())
      .pipe(plugins.rename({extname: ".html"}));

    var articlesJson = gulp.src(paths.articles, { base: paths.src + "/content" })
      .pipe(plugins.frontMatter({ property: "page", remove: true }))
      .pipe(plugins.marked())
      .pipe(applyTemplate(paths.templates.articleJson))
      .pipe(plugins.rename({ extname: ".json.js" }));

    return merge(articlesHtml, articlesJson).pipe(gulp.dest(paths.dest))
  });

  // pages
  gulp.task("html:pages", function () {
    var html = gulp.src([paths.pagesHtml])
      .pipe(plugins.frontMatter({property: "page", remove: true}))
      .pipe(through.obj(function (file, enc, callback) {
        var data = {
          site: config.site,
          page: {}
        };
        var template = swig.compileFile(file.path);
        file.contents = new Buffer(template(data), "utf8");
        this.push(file);
        callback();
      }));

    var markdown = gulp.src(paths.pagesMarkdown)
      .pipe(plugins.frontMatter({property: "page", remove: true}))
      .pipe(plugins.marked())
      .pipe(applyTemplate(paths.templates.page))
      .pipe(plugins.rename({extname: ".html"}));

    var pageJson = gulp.src([paths.pagesMarkdown, paths.pagesHtml])
      .pipe(plugins.frontMatter({property: "page", remove: true}))
      .pipe(through.obj(function (file, enc, callback) {
        var data = {
          site: config.site,
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
      .pipe(plugins.rename({ extname: ".json.js" }));

    return merge(html, markdown, pageJson).pipe(gulp.dest(paths.dest));
  });

  return function () {
    return runSequence("html:articles", "html:pages");
    // return runSequence(articles);
  }
}
