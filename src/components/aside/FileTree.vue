<template lang="pug">
  ul.file-tree
    li(v-for="tree in fileTree")
      FileNode(:file="tree")
      FileTree(v-if="tree.subTrees.length > 0", :trees="tree.subTrees")
</template>

<style lang="scss" scoped>
.file-tree {
  margin-left: 15px;
  li {
    line-height: 140%;
  }
}
</style>

<script>
import { mapState, mapMutations } from 'vuex'
import FileNode from '@/components/aside/FileNode.vue'
import { list as drivelist } from 'drivelist'
import uniqBy from 'lodash/uniqBy'
import merge from 'lodash/merge'
import { getPathInfo } from '@/api/explorer'

export default {
  name: 'FileTree',
  components: {
    FileNode,
  },
  computed: {
    ...mapState([
      'fileTree',
    ]),
  },
  methods: {
    ...mapMutations([
      'updateDrives'
    ]),
    async collectDrives() {
      try {
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

        this.updateDrives(uniqDrives)
      } catch (e) {
        console.error(e)
      }
    },
  },
  beforeMount() {
    this.collectDrives()
  },
  // `mounted` 훅은 부모의 mounted가 자식의 mounted보다 먼저 실행되지 않는다.
  mounted() {

  }
}
</script>
