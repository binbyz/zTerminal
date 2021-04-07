import fs from 'fs'
import { list as drivelist } from 'drivelist'
import uniqBy from 'lodash/uniqBy'
import merge from 'lodash/merge'

export async function collectDrives() {
  let drives = await drivelist()
  let uniqDrives = []

  for (let drive of drives) {
    if (drive.mountpoints.length) {
      for (let mount of drive.mountpoints) {
        switch (process.platform) {
          case 'darwin':
          case 'aix':
          case 'freebsd':
          case 'openbsd':
          case 'sunos':
            if (!/^\/System/i.test(mount.path)) {
              uniqDrives.push(mount)
            }
          break
          case 'win32':
          break
        }
      }
    }
  }

  uniqDrives = uniqBy(uniqDrives, r => r.path)
  uniqDrives = uniqDrives.map(r => {
    const pathInfo = getPathInfo(r.path)

    return merge(pathInfo, { label: r.label })
  })

  return uniqDrives
}

/**
 * @param {string} path
 * @return {array}
 */
export function getSubTrees(path) {
  let trees = fs.readdirSync(path)
  const seperator = getPathSeperator()
  const pathTest = new RegExp(`${seperator}$`).test(path)

  return trees.map(r => {
    if (pathTest) {
      return `${path}${r}`
    } else {
      return `${path}${seperator}${r}`
    }
  })
}

/**
 * @param {string} path
 * @return {object}
 */
 export function getPathInfo(path) {
  try {
    const stats = fs.lstatSync(path)
    const label = path.split(getPathSeperator()).slice(-1)[0] // aka filename

    return {
      label,
      path,
      isDirectory: stats.isDirectory(),
      isFile: stats.isFile(),
      isSymbolicLink: stats.isSymbolicLink(),
      subTrees: [],
      createdAt: stats.birthtime,
      modifiedAt: stats.mtime,
      accessedAt: stats.atime,
      statusChangedAt: stats.ctime,
    }
  } catch (e) {
    console.error(`No Such File: ${path}`)
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

export function isWindows() {
  return (process.platform == 'win32') ? true : false
}

/**
 * @param {string} path
 * @return {string}
 */
export function extractRootDrive(path) {
  const seperator = getPathSeperator()

  return path.split(seperator).slice(0, 2).join(seperator)
}

/**
 * @param {string} path
 * @return {Array}
 * @example
 *   ["", ""] => ["/"]
 *   ["", "Applications"]
 *   ["", "Applications", "Directories"]
 *   ["C:", "Program FIles", "Blizzard"]
 */
export function splitPath(path) {
  let paths = path.split(getPathSeperator())

  if (!isWindows()) {
    paths[0] = getPathSeperator()
    paths = paths.filter(r => !!r)
  }

  return paths
}
