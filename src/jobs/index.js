const { ipcRenderer } = require('electron')

console.log(ipcRenderer)
// const remote = require('electron').remote;
// console.log(remote)

/**
 * @param {boolean} status
 * @param {object|nullable} payload
 * @returns object
 */
function result(status, payload = null) {
  return {
    status,
    payload,
  }
}

/**
 * @returns void
 */
function ready() {
  ipcRenderer.send('job-ready')
}

/**
 * @param {object} payload {
 *                            "method": String,
 *                         }
 */
function fire(payload) {
  if (!('method' in payload)) {
    return result(false, { "message": `해당 메소드를 찾을 수 없습니다. ${payload}` })
  }

  switch (payload.method) {
    default:
      return {}
  }
}

ipcRenderer.on('task', (event, payload) => {
  ipcRenderer.send('success-task', fire(payload))

  ready()
})

ready()
