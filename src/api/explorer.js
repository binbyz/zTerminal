import fs from 'fs'

/**
 * @param {string} path
 * @return {array}
 */
export function getSubTrees(path) {
  let trees = fs.readdirSync(path)
  return trees.map(r => `${path}${r}`)
}

/**
 * @param {string} path
 * @return {object}
 */
 export function getPathInfo(path) {
  try {
    const stats = fs.lstatSync(path)

    return {
      path,
      isDirectory: stats.isDirectory(),
      isFile: stats.isFile(),
      isSymbolicLink: stats.isSymbolicLink(),
      subTrees: [],
    }
  } catch (e) {
    console.error(e)
  }
}

/**
 * @param {Array} paths
 * @return {Array}
 */
export function getPathInfos(paths) {
  return paths.map(path => {
    return getPathInfo(path)
  })
}

export function getPathSeperator() {
  switch (process.platform) {
    case 'darwin':
    case 'aix':
    case 'freebsd':
    case 'openbsd':
    case 'sunos':
      return '/'
    case 'win32':
      return '\\'
    default:
      return '/'
  }
}
