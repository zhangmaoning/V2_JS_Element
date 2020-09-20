<template>
  <!-- vue slot插槽的使用 -->
  <div>
    slot子组件： {{infoData.title}}
    <hr />
    <!-- 匿名插槽 -->
    <slot></slot>
    <div v-for="(item,index) in infoData.array" :key="index + '-only'">
      <!-- 具名插槽 -->
      <slot :name="item"></slot>
    </div>
    <!-- 作用域插槽：可以叫它带数据的插槽。作用域插槽要求，在slot上面绑定数据。 -->
    <slot name="up" :data="dataInfo"></slot>

  
  </div>
</template>

<script>
export default {
  props: ['infoData'],
  data() {
    return {
      dataInfo: ['zhangsan', 'lisi', 'wanwu', 'zhaoliu', 'tianqi', 'xiaoba']
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
</style>
