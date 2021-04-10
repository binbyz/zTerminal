import { getPathInfo, getSubTrees } from './explorer' // eslint-disable-line
import isUndefined from 'lodash/isUndefined'

/**
 * @param {string} default path
 * @returns
 */
export function createWorkspace(fpath) {
  fpath = fpath || undefined
  const pathInfo = isUndefined(fpath) ? undefined : getPathInfo(fpath)

  let workspaceProto = createFinderProto()

  if (!isUndefined(pathInfo)) {
    workspaceProto = {
      ...workspaceProto,
      ...pathInfo,
    }
  } else {
    workspaceProto.path = undefined
  }

  return workspaceProto
}

function createFinderProto() {
  return {
    word: undefined,
    filters: {
      path: undefined,
      filetype: undefined,
    },
    histories: [],
    results: [],
  }
}
