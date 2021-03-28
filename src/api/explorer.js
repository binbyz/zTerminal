export default {
  buildFile ({ path, label, isDirectory, created_at = '', modified_at = '', subTrees = [] }) {
    if (typeof isDirectory === 'undefined') {
      throw new TypeError(`The Directory Whether property must always be entered.`)
    }

    return {
      path,
      label,
      isDirectory,
      created_at,
      modified_at,
      subTrees, 
    }
  }
}