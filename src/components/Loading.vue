<template>
  <div class="zh-load-mark">
    <el-button type="primary" @click="clickBtn">Loading</el-button>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    clickBtn() {
      this.$loading('正在加载中...')
      setInterval(() => {
        this.$loading.close()
      }, 5000)
    }
  }
}
</script>

<style scoped>
.loader {
  background-color: pink;
}
</style>
