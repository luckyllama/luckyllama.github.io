var path = require('path')
var onError = require('./on-error')

module.exports = function (gulp, build, plugins) {
  return function () {
    gulp.src(build.paths.less, build.gulpSettings)
      .pipe(plugins.plumber({ errorHandler: onError }))
      .pipe(plugins.less({ paths: [ path.join(__dirname, 'less', 'includes') ] }))
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(plugins.autoprefixer({ browsers: build.browsers }))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest(build.paths.dest))
  }
}
