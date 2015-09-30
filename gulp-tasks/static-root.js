module.exports = function (gulp, build, plugins) {
  return function () {
    return gulp.src(build.paths.root, { base: build.paths.rootBase })
      .pipe(gulp.dest(build.paths.dest))
  }
}
