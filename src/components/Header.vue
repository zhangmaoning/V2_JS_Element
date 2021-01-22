<template>
  <div class="tip">
    <span>
      <i class="el-icon-location-outline icon"></i>
      <span>{{$store.state.headerInfo}}</span>
    </span>
    <h1>欢迎来到小猪猪的世界~~</h1>
  </div>
</template>

<script>
export default {
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
.tip {
  display: flex;
  align-items: center;
  color: #222;
}
.tip span {
  flex-basis: 15%;
}
.tip h1 {
  flex: 1;
  text-align: center;
}

.icon {
  font-size: 20px;
  color: #0612f8;
}
</style>
