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
              方法一：Mutations.js；{{getUserName}}
              <br />将"我爱蓝色的猪"更改为“肖战”
              <el-button plain type="success" size="mini" @click="getUserName1">同步存值</el-button>
            </li>
            <li>
              方法二: Action.js：{{getUserName}}
              <br />将"我爱蓝色的猪"或"肖战"更改为“王一博”
              <el-button plain type="warning" size="mini" @click="getUserName2">异步存值（{{time}}s）</el-button>
            </li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as types from '@/store/constant.js'
export default {
  data() {
    return {
      // 组件headertop的数据：
      btnInfo: {
        type: 'Vuex',
        tips: 'Vuex的使用'
      },
      newUserName: '肖战',
      newUserName2: '王一博',
      time: 5
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
  watch: {
    username: {
      handler(newVal, oldVal) {
        this.time = newVal == '王一博' ? 0 : 5
      }
    }
  },
  created() {
    this.newList = this.$store.state.newList
  },
  methods: {
    // 同步存值:commit
    getUserName1() {
      if (this.username == '肖战') return
      this.$store.commit(types.SET_USERNAME, this.newUserName)
    },
    // 异步存值:dispatch
    // 可以在dispatch的时候异步，也可以在组件内commit的时候异步；
    getUserName2() {
      if (this.username == '王一博') return
      //计时器
      let timer = setInterval(() => {
        if (this.time >= 0) {
          this.time--
        }
        if (this.time == 0) {
          clearInterval(timer)
          this.$store.dispatch(types.SET_USERNAME, this.newUserName2)
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
