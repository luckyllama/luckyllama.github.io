var onError = require('./on-error')

module.exports = function (gulp, build, plugins) {
  var tsProject = plugins.typescript.createProject('tsconfig.json')

  return function () {
    return gulp.src(build.paths.typescript, build.gulpSettings)
      .pipe(plugins.plumber({ errorHandler: onError }))
      .pipe(plugins.typescript(tsProject))
      .pipe(gulp.dest(build.paths.dest))
  }
}
