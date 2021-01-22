<template>
  <div>
    TODO
    
  </div>
</template>

<script>
export default {
  name:"DataArray",
  data() {
    return {
      btnInfo:{
        tips:"数组的各种循环"
      }
    }
  },
  created() {},
  mounted() {
    this.getArray()
  },
  methods: {
    getArray() {
      this.$api.post('/arraydemo').then(res => {
        console.log(res.data, '11111111')
      })
    }
  }
}
</script>

<style scoped>
</style>
