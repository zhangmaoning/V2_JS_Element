<template>
  <div class="vuexclass">
    <headertop :btnInfo="btnInfo" />
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <h4>vuex数据读取</h4>
          <ul style="text-align:left;">
            <li>方法一：直接读取state中的数据：{{username}}；</li>
            <li>方法二：将state中的数据暴露到this.$store.getters对象中：{{getUserName}}</li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <h4>vuex数据存储</h4>
          <ul style="text-align:left;">
            <li>
              方法一：vue_commit:{{$store.state.vuecommit}}
              <br />
              <el-button
                plain
                type="success"
                size="mini"
                @click="getUserName1"
              >异步存值commit(vue组件存值)（{{time1}}s）</el-button>
            </li>
            <li>
              方法二: vue_dispatch：{{$store.state.vuedispatch}}
              <br />
              <el-button
                plain
                type="warning"
                size="mini"
                @click="getUserName2"
              >异步存值dispatch(vue组件存值)（{{time2}}s）</el-button>
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <ul>
            <li>
              方法三: Action.js： {{$store.state.constant}}
              <br />
              <el-button plain type="warning" size="mini">异步存值(action.js组件存值)</el-button>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 组件headertop的数据：
      btnInfo: {
        type: 'Vuex',
        tips: 'Vuex的使用'
      },
      time1: 5,
      time2: 5
    }
  },
  computed: {
    username() {
      //不建议
      return this.$store.state.username
    },
    getUserName() {
      return this.$store.getters.getUserName
    }
  },
  watch: {},
  created() {
    this.$store.dispatch(this.$types.GET_CONSTANT)
  },
  methods: {
    getUserName1() {
      // 异步存值:commit
      //计时器
      let timer = setInterval(() => {
        if (this.time1 >= 0) {
          this.time1--
        }
        if (this.time1 == 0) {
          clearInterval(timer)
          this.$store.commit(this.$types.GET_VUECOMMIT, '小飞侠')
        }
      }, 1000)
    },
    getUserName2() {
      // 异步存值:dispatch
      //计时器
      let timer = setInterval(() => {
        if (this.time2 >= 0) {
          this.time2--
        }
        if (this.time2 == 0) {
          clearInterval(timer)
          this.$store.dispatch(this.$types.GET_VUEDISPATCH, '常量数据2')
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.vuexclass {
  padding: 0 20px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
</style>
