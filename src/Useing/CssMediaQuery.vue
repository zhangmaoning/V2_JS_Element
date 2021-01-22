<template>
  <!-- 媒体查询 -->
  <div>
    <div id="box">box：device-width</div>
    <div id="box2">box2 :width</div>
    <h1>@media常用参数</h1>
    <ul>
      <li v-for="(item,index) in pointsArr" :key="index">
        <span>{{index+1}}.{{item.content}}--{{item.range}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pointsArr: [
        { content: '浏览器可视宽度、高度：width,height', range: 'pc端' },
        {
          content: '设备的宽度、高度：device-width,device-height',
          range: '移动端'
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
#box {
  width: 100px;
  height: 100px;
  border: 1px solid #333;
}
@media screen and (min-device-width: 100px) and (max-device-width: 300px) {
  #box {
    background-color: red;
  }
}
@media screen and (min-device-width: 301px) and (max-device-width: 500px) {
  #box {
    background-color: blue;
  }
}
#box2 {
  width: 200px;
  height: 200px;
  border: 1px solid #333;
}
@media screen and (min-width: 200px) and (max-width: 299px) {
  #box2 {
    background-color: greenyellow;
  }
}
@media screen and (min-width: 300px) and (max-width: 399px) {
  #box2 {
    background-color: pink;
  }
}
</style>
<style media="(min-width: 400px) and (max-width: 499px)">
#box2 {
  background-color: orange;
}
</style>
<style media="(min-width: 500px) and (max-width: 599px)">
#box2 {
  background-color: yellow;
}
</style>
