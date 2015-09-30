// var onError = require('./on-error')
var mainBowerFiles = require('main-bower-files')

module.exports = function (gulp, build, plugins) {
  return function () {
    return gulp.src(mainBowerFiles().concat('bower_components/**/modernizr.js'), build.gulpSettings)
      .pipe(plugins.flatten())
      .pipe(plugins.if('**/*.css',
        gulp.dest(build.paths.cssVendorDest),
        gulp.dest(build.paths.jsVendorDest))
    )
  }
}
