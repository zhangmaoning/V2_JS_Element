<template>
  <div>
    <ul>
      <li>
        <span>姓名： {{userInfo.username}}</span>
        <br />
        <span>ID： {{userInfo.id}}</span>
        <br />
        <span>email： {{userInfo.email}}</span>
        <br />
        <img
          width="200"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604861692401&di=883e90322fa86c52c94df37271405441&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F30%2F20181130173031_QddlZ.jpeg"
        />
        <p style="text-align:left;text-indent: 2em;">{{userInfo.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MockDemo',
  data() {
    return {
      userInfo: {}
    }
  },
  created() {},
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$api
        .get('/main/userinfo')
        .then(res => {
          if (res.status === 200) {
            console.log(res.data)
            this.userInfo = res.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
