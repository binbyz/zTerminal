import { getPathInfo, getSubTrees } from './explorer' // eslint-disable-line
import isUndefined from 'lodash/isUndefined'

/**
 * @param {string} default path
 * @returns
 */
export function createWorkspace(payload = {}) {
  const pathInfo = 'path' in payload ? getPathInfo(payload.path) : undefined
  const slotName = payload?.slotName // if noset, undefined

  let workspaceProto = createWorkspaceSlotProto()

  if (!isUndefined(slotName)) {
    workspaceProto.slotName = slotName
  }

  if (!isUndefined(pathInfo)) {
    workspaceProto.pathInfo = pathInfo
  }

  return workspaceProto
}

function createWorkspaceSlotProto() {
  return {
    slotName: 'SLOT',
    search: undefined,
    filters: {
      path: undefined,
      filetype: undefined,
    },
    histories: [],
    results: [],
    pathInfo: undefined,
  }
}
