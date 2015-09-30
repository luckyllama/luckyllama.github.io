var onError = require('./on-error')

module.exports = function (gulp, build, plugins) {
  return function () {
    return gulp.src(build.paths.css, build.gulpSettings)
      .pipe(plugins.plumber({ errorHandler: onError }))
      .pipe(plugins.autoprefixer({ browsers: build.browsers }))
      .pipe(gulp.dest(build.paths.dest))
  }
}
