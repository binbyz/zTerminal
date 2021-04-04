<template lang="pug">
  .explorer
    table.files
      thead
        tr
          th 파일명
          th 크기
          th 생성날짜
          th 수정날짜
      tbody
        each val in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
          tr
            td 파일명입니다.txt
            td 24,334 bytes
            td 2021-03-22 04:22:41
            td 2021-03-22 04:22:41
</template>

<script>
export default {
  name: 'Explorer',
}
</script>

<style lang="scss">
@import '~@/assets/scss/_variables';

.explorer {
  table.files {
    width: 100%;
    th {
      font-size: 90%;
      font-weight: normal;
    }
    td {
      padding: 0 5px;
      line-height: 130%;
    }
    tbody {
      tr:nth-child(odd) {
        background-color: $color-black-900;
      }
    }
  }
}
</style>
