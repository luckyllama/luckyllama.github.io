/*jslint node: true */
"use strict";

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();
var del = require("del");
var runSequence = require("run-sequence");
var browserSync = require("browser-sync");

var config = require("./config.js");
var build = config.build;
var paths = build.paths;

var onError = function (err) {
	plugins.util.beep();
	plugins.util.log(plugins.util.colors.green(err));
	this.emit("end"); // tells watch to keep going, we"re done
};
var settings = { base: build.src };

gulp.task("styles:css", require("./gulp-tasks/styles-css")(gulp, build, plugins))
gulp.task("styles:sass", require("./gulp-tasks/styles-sass")(gulp, build, plugins))
gulp.task("styles:less", require("./gulp-tasks/styles-less")(gulp, build, plugins))
gulp.task("styles", ["styles:css", "styles:sass", "styles:less"])

gulp.task("scripts:typescript", require("./gulp-tasks/scripts-typescript")(gulp, build, plugins))
gulp.task("scripts:jshint", require("./gulp-tasks/scripts-jshint")(gulp, build, plugins))
gulp.task("scripts:bower", require("./gulp-tasks/scripts-bower")(gulp, build, plugins))
gulp.task("scripts:coffeescript", require("./gulp-tasks/scripts-coffeescript")(gulp, build, plugins))
gulp.task("scripts", ["scripts:jshint", "scripts:typescript", "scripts:coffeescript", "scripts:bower"])

gulp.task("static:root", require("./gulp-tasks/static-root")(gulp, build, plugins))
gulp.task("static:all", require("./gulp-tasks/static")(gulp, build, plugins))
gulp.task("static", ["static:root", "static:all"])

gulp.task("html", require("./gulp-tasks/html")(gulp, config, plugins))

gulp.task("serve", function () {
  runSequence("build", "watch", function () {
    browserSync({
      notify: true,
      port: config.server.port,
      server: {
        baseDir: config.build.paths.dest,
        routes: config.server.routes,
        directory: false
      }
    })
  })
})

gulp.task("watch", function () {
  gulp.watch(build.paths.sass, ["styles:sass", browserSync.reload])
  gulp.watch(build.paths.less, ["styles:less", browserSync.reload])
  gulp.watch(build.paths.css, ["styles:css", browserSync.reload])
  gulp.watch(build.paths.coffee, ["scripts:coffeescript", browserSync.reload])
  gulp.watch(build.paths.typescript, ["scripts:typescript", browserSync.reload])
  gulp.watch(build.paths.vendorSrc, ["scripts:bower", browserSync.reload])
  gulp.watch(build.paths.static, ["static", browserSync.reload])
  gulp.watch(build.paths.htmlWatch, ["html", browserSync.reload])
})


// gulp.task("watch", function () {
// 	gulp.watch(paths.styles, ["styles"]);
// 	gulp.watch([paths.templates.base + "/**/*", paths.pagesHtml, paths.articles], ["pages"]);
//    gulp.watch([paths.jsGeneral, paths.jsProject, paths.jsVendor], ["scripts"]);
// 	gulp.watch(paths.coffeeProject, ["coffeescript"]);
// 	gulp.watch(paths.tsProject, ["typescript"]);
// 	gulp.watch([
// 		paths.staticAssets,
// 		paths.images
// 	], ["static"]);
// });

gulp.task("default", function() {
	runSequence("serve");
});

gulp.task("clean", del.bind(null, build.paths.clean, { dot: true }));

gulp.task("build", function (callback) {
  return runSequence("clean", ["styles", "scripts", "html", "static"], function () { callback() })
})

gulp.task("deploy", function () {
   return gulp.src(build.dest + "**/*")
      .pipe(plugins.ghPages({ branch: "master" }));
});
