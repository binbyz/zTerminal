'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import os from 'os'

const isDevelopment = process.env.NODE_ENV !== 'production'
const threads = os.cpus().length

let mainWindow = null
let jobs = []
let tasks = []

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {

      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION, // true
      contextIsolation: false,
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    try {
      // Load the url of the dev server if in development mode
      await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    } catch (e) {
      console.error(e)
    }

    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  return win
}

async function createBackgroundWindow() {
  const win = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION, // true
      contextIsolation: false,
    }
  })

  try {
    await win.loadURL(`file://${__dirname}/../src/jobs/index.html`)
    win.webContents.openDevTools()
  } catch (e) {
    console.error(e)
  }

  return win
}

function doJob() {
  while (tasks.length > 0 && jobs.length > 0) {
    let task = tasks.shift()

    // task[0] == 'task'
    jobs.shift().send(task[0], task[1])
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }

  mainWindow = await createWindow()

  for (let thread = 0; thread < 1; thread++) {
    await createBackgroundWindow()
  }
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

ipcMain.on('job-ready', (event) => {
  jobs.push(event.sender)
  doJob()
})

ipcMain.on('assign-task', (event, payload) => {
  tasks.push(['task', payload])
  doJob()
})

ipcMain.on('success-task', (event, payload) => {
  console.log(payload)
})
