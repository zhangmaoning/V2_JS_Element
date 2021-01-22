<template>
  <!-- css布局demo -->
  <div class="wrap">
    <div class="left"></div>
    <div class="right">
      <div class="top"></div>
      <div class="main"></div>
      <div class="bottom">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
.wrap {
  height: 95vh;
  /* height: 100vh; */
  background-color: pink;
  display: flex;
}
.wrap .left {
  width: 15vw;
  background-color: blue;
  margin-right: 20px;
}
.wrap .right {
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.wrap .right .top {
  background-color: yellow;
  height: 100px;
}
.wrap .right .main {
  flex: 1;
  background-color: greenyellow;
  margin: 10px;
  border: 5px solid red;
}
.wrap .right .bottom {
  background-color: goldenrod;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
