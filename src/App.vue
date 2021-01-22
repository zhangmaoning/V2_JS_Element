<template>
  <div id="app">
    <headertop />
    <div class="content">
      <leftbars class="left"></leftbars>
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/fontsvg/iconfont.js'
export default {
  name: 'App'
}
</script>
<style scoped>
.content {
  display: flex;
  height: 95vh;
}
.left {
  flex-basis: 15%;
  max-width: 200px;
}
.right {
  flex: 1;
}
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.el-button {
  min-width: 110px;
}
.el-button.is-circle {
  min-width: 0px;
}
</style>
