var onError = require('./on-error')

module.exports = function (gulp, build, plugins) {
  return function () {
    return gulp.src(build.paths.coffee, build.gulpSettings)
      .pipe(plugins.plumber({ errorHandler: onError }))
      .pipe(plugins.coffee())
      .pipe(gulp.dest(build.paths.dest))
  }
}
