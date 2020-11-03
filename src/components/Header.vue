<template>
  <div class="content">
    <div class="tip">
      <span>
        <i class="el-icon-location-outline icon"></i>
        <span>{{btnInfo.tips}}</span>
      </span>
      <el-button
        v-if="btnInfo.tips!='首页'"
        size="mini"
        type="success"
        icon="el-icon-s-home "
        circle
        @click="goHome"
      ></el-button>
    </div>
    <h1>欢迎来到小猪猪的世界~~~中国加油</h1>
  </div>
</template>

<script>
export default {
  props: ['btnInfo'],
  data() {
    return {}
  },
  created() {},
  methods: {
    goHome() {
      this.$router.push({
        path: '/Home'
      })
    }
  }
}
</script>

<style scoped>
.content {
  padding: 20px;
}
.tip {
  display: flex;
  justify-content: space-between;
  color: #222;
}
.icon {
  font-size: 20px;
  color: #0612f8;
}
</style>
