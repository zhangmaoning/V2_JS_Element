<template>
  <div>
    <h4>变形(transform)、转换(transition)和动画(animation)</h4>
    <div class="main">
      <div class="left">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3324085275,2765887484&fm=26&gp=0.jpg"
        />
      </div>
      <div class="right">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830976495,2697832182&fm=26&gp=0.jpg"
        />
      </div>

      <div class="up">
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4029593326,180845528&fm=26&gp=0.jpg"
        />
      </div>

      <div class="down">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=516229142,868726809&fm=26&gp=0.jpg"
        />
      </div>

      <div class="foward">
        <img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3247120342,3129870920&fm=26&gp=0.jpg"
        />
      </div>

      <div class="backward">
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646192061,3107377584&fm=26&gp=0.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '立体旋转图片盒css3',
  data() {
    return {}
  },
  created() {},
  mounted() {},
  beforeDestroy() {},

  methods: {}
}
</script>

<style scoped>
img {
  vertical-align: top;
  width: 200px;
}
.main {
  width: 200px;
  height: 200px;
  margin: 200px auto;
  transform-style: preserve-3d;
  transform: rotateX(30deg) rotateY(-30deg);
  position: relative;
  transition: all 3s;
}
.main div {
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  opacity: 0.6;
}
.left {
  transform-origin: left;
  transform: rotateY(90deg) translateX(-100px);
}
.right {
  transform-origin: right;
  transform: rotateY(90deg) translateX(100px);
}
.foward {
  transform: translateZ(100px);
}
.backward {
  transform: translateZ(-100px);
}
.up {
  transform: rotateX(90deg) translateZ(100px);
}
.down {
  transform: rotateX(90deg) translateZ(-100px);
}
/* .rotate {
  transform: rotateX(310deg) rotateY(-310deg);
} */
</style>
