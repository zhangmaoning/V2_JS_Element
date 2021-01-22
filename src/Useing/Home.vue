<template>
  <div class="homeclass">
    <!-- <leftbars></leftbars>
    <div class="content">
      <router-view />
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
.homeclass {
  width: 100%;
  background-color: pink;
}
.content {
  min-width: 1200px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  padding: 30px;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
}
li:hover {
  border: 1px solid #0612f8;
  cursor: pointer;
}
li .icon1 {
  width: 45px;
  height: 45px;
  line-height: 45px;
  font-size: 45px;
  color: #69696a;
}
li .icon2 {
  width: 45px;
  height: 45px;
  line-height: 45px;
  font-size: 45px;
  /* color: #0612f8; */
}
li .text {
  padding-left: 8px;
  flex-grow: 1;
}
li .text h2 {
  text-align: center;
}
.iconfont {
  font-size: 45px;
}
</style>

