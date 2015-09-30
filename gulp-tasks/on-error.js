var beep = require('beepbeep')
var chalk = require('chalk')

module.exports = function () {
  return function (error) {
    beep()
    error.showStack = true
    console.log(chalk.red.bold('[error]'), error.toString())
    this.emit('end')
  }
}
