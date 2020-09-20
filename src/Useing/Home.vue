<template>
  <div class="homeclass">
    <headertop :btnInfo="btnInfo" />
    <div class="content">
      <ul>
        <li
          v-for="(item,index) in contenlist"
          :key="index"
          @mouseenter="enterLi(index)"
          @click="goToLook(item.path)"
        >
          <div :class="isactiveli==index?'icon2':'icon1'">
            <i :class="item.icon"></i>
          </div>
          <div class="text">
            <h2>{{index+1}}.{{item.title}}</h2>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // 组件headertop的数据：
      btnInfo: {
        tips: '首页'
      },
      contenlist: [
        {
          path: '/Slot',
          title: 'Vue-Slot插槽',
          icon: 'el-icon-star-off',
          detail:
            '父组件与子组件的通讯方式，可以将父组件定义的模块显示在子组件中。'
        },
        {
          path: '/Vuex',
          title: 'Vuex',
          icon: 'el-icon-goods',
          detail:
            '是一个专为 Vue.js 应用程序开发的状态管理模式。理解为数据管理仓库。'
        },
        {
          path: '/LifeCycle',
          title: 'Vue生命周期',
          icon: 'el-icon-magic-stick',
          detail:
            '每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。'
        },
        {
          path: '/MoveSlicksort',
          title: 'vue拖拽插件之slicksort',
          icon: 'el-icon-ice-drink',
          detail: ''
        },
        {
          path: '/MoveAwednd',
          title: 'vue拖拽插件之Awednd',
          icon: 'el-icon-milk-tea',
          detail: ''
        },
        {
          path: '/FormComponentUser',
          title: '表单组件的使用',
          icon: 'el-icon-tickets',
          detail: ''
        },
        { path: '/TableComponentUser', title: '表格组件的使用', icon: 'el-icon-s-grid', detail: '' },
        { path: '/DataArray', title: '常用的数组循环', icon: '', detail: '' }
      ],
      isactiveli: -1
    }
  },
  created() {},
  methods: {
    goToLook(path) {
      this.$router.push({
        path: path
      })
    },
    enterLi(index) {
      this.isactiveli = index
    }
  }
}
</script>

<style scoped>
.homeclass {
  padding: 0 20px;
}

.content {
  width: 100%;
  min-width: 1200px;
  margin: 20px auto;
  box-sizing: border-box;
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
  color: #0612f8;
}
li .text {
  padding-left: 8px;
  flex-grow: 1;
}
li .text h2 {
  text-align: center;
}
</style>

