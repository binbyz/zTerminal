'use strict'

const { ipcRenderer } = require('electron')
const task = require('./task')

window.onload = () => {
  ipcRenderer.on('background-start', () => {
    ipcRenderer.send('background-response', {
      result: task(),
    })
  })
}