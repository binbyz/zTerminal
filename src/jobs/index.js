'use strict'

const { ipcRenderer } = require('electron')

function ready() {
  ipcRenderer.send('job-ready')
}

ipcRenderer.on('task', (event, payload) => {
  ipcRenderer.send('success-task', { status: true })

  ready()
})

ready()