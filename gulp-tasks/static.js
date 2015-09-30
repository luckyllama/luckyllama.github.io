module.exports = function (gulp, build, plugins) {
  return function () {
    return gulp.src(build.paths.static)
      .pipe(gulp.dest(build.paths.dest))
  }
}
