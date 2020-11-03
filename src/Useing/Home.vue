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
          <div>
            <i v-if="isactiveli!=index" class="iconfont" :class="item.icon"></i>
            <svg v-else class="icon iconfont" aria-hidden="true">
              <use :xlink:href="item.svg" />
            </svg>
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
          icon: 'iconDesert-1',
          svg: '#iconDesert-1',
          detail:
            '父组件与子组件的通讯方式，可以将父组件定义的模块显示在子组件中。'
        },
        {
          path: '/Vuex',
          title: 'Vuex',
          icon: 'iconDesert-2',
          svg: '#iconDesert-2',
          detail:
            '是一个专为 Vue.js 应用程序开发的状态管理模式。理解为数据管理仓库。'
        },
        {
          path: '/LifeCycle',
          title: 'Vue生命周期',
          icon: 'iconDesert-3',
          svg: '#iconDesert-3',
          detail:
            '每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。'
        },
        {
          path: '/MoveSlicksort',
          title: 'vue拖拽插件之slicksort',
          icon: 'iconDesert-4',
          svg: '#iconDesert-4',
          detail: ''
        },
        {
          path: '/MoveAwednd',
          title: 'vue拖拽插件之Awednd',
          icon: 'iconDesert-5',
          svg: '#iconDesert-5',
          detail: ''
        },
        {
          path: '/FormComponentUser',
          title: '表单组件的使用',
          icon: 'iconDesert-6',
          svg: '#iconDesert-6',
          detail: ''
        },
        {
          path: '/TableComponentUser',
          title: '表格组件的使用',
          icon: 'iconDesert-7',
          svg: '#iconDesert-7',
          detail: ''
        },
        {
          path: '/DataArray',
          title: '常用的数组循环',
          icon: 'iconDesert-8',
          svg: '#iconDesert-8',
          detail: ''
        }
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

