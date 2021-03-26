'use strict'

module.exports = function task() {
  let result = 0

  for (let i = 0; i < 1000; i++) {
    result += i
  }

  return result
}