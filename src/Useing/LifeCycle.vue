<template>
  <div>
  {{testInfo}}
    <el-button type="danger" round @click="Updatapage">页面更新一下</el-button>
  </div>
</template>
<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      testInfo: '生命周期更新前'
    }
  },
  beforeCreate() {alert('组件化实例之前执行的函数')},
  created() {alert('组件实例化完毕，但页面还没有显示')},
  beforeMount() {alert('组件挂载前，页面仍没有显示，但虚拟Dom已经配置')},
  mounted() {alert('组件挂载后，此方法执行后，页面显示')},
  beforeUpdate() {alert('组件更新前，页面仍未显示，但虚拟Dom已经配置')},
  updated() {alert('组件更新，此方法执行后，页面更新')},
  beforeDestroy() {alert('组件销毁前')},
  destroyed() {alert('组件销毁')},
  methods: {
    Updatapage() {
      this.testInfo = '页面更新了啊~~'
    }
  }
}
</script>