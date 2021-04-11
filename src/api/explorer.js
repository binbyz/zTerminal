import fs from 'fs'
import { list as drivelist } from 'drivelist'
import uniqBy from 'lodash/uniqBy'
import merge from 'lodash/merge'
import { getClass } from 'file-icons-js'
import find from 'lodash/find'
import path from 'path'

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
export function getSubTrees(fpath) {
  let trees = fs.readdirSync(fpath)
  const seperator = getPathSeperator()
  const pathTest = new RegExp(`${seperator}$`).test(fpath)

  return trees.map(r => {
    if (pathTest) {
      return `${fpath}${r}`
    } else {
      return `${fpath}${seperator}${r}`
    }
  })
}

/**
 * @param {string} path
 * @return {object}
 */
 export function getPathInfo(fpath) {
  try {
    const stats = fs.lstatSync(fpath)
    const label = fpath.split(getPathSeperator()).slice(-1)[0] // aka filename
    const iconClass = getClass(fpath)

    return {
      label,
      iconClass,
      path: fpath,
      isDirectory: stats.isDirectory(),
      isFile: stats.isFile(),
      isSymbolicLink: stats.isSymbolicLink(),
      subTrees: [],
      createdAt: stats.birthtime,
      modifiedAt: stats.mtime,
      accessedAt: stats.atime,
      statusChangedAt: stats.ctime,
      isExpanded: false,
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
  return paths.map(fpath => {
    return getPathInfo(fpath)
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
export function extractRootDrive(fpath) {
  const seperator = getPathSeperator()

  return fpath.split(seperator).slice(0, 2).join(seperator)
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
export function splitPath(fpath) {
  let paths = fpath.split(getPathSeperator())

  if (!isWindows()) {
    paths[0] = getPathSeperator()
    paths = paths.filter(r => !!r)
  }

  return paths
}

/**
 * @param Object root
 * @param String findPath
 * @returns Object|undefined
 */
export function findTreePath(root, fpath) {
  const seperator = getPathSeperator()

  let cursor = root
  let found = undefined
  let paths = splitPath(fpath)
  const diffMax = paths.length - 1

  if (paths.length == 1) {
    found = find(cursor, r => r.path == paths[0])
  } else {
    for (let p = 0; p < paths.length; p++) {
      let diff = paths.slice(0, (p + 1)).join(seperator)
      diff = path.resolve(diff)

      cursor = find(cursor, r => r.path == diff)

      if (p == diffMax) {
        found = cursor
      } else {
        cursor = cursor.subTrees
      }
    }
  }

  return found
}
