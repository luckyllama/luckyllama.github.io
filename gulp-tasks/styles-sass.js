var onError = require('./on-error')

module.exports = function (gulp, build, plugins) {
  return function () {
    gulp.src(build.paths.scss)
      .pipe(plugins.plumber({ errorHandler: onError }))
      .pipe(plugins.sass({ sourcemap: true }))
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.autoprefixer({ browsers: build.browsers }))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(build.paths.dest))
  }
}
