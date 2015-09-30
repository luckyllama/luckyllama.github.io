var onError = require('./on-error')

module.exports = function (gulp, build, plugins) {
  return function () {
    return gulp.src(build.paths.js, build.gulpSettings)
      .pipe(plugins.plumber({ errorHandler: onError }))
      .pipe(plugins.jshint())
  // .pipe(plugins.jshint.reporter("jshint-stylish"))
  }
}
