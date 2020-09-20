<template>
  <div class="todolist">
    <headertop :btnInfo="btnInfo" />
    监听路由跳转的参数：name-{{ name }};row-{{ row }}
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-input placeholder="请输入内容" v-model="inputValue" class="input-with-select">
          <el-button slot="append" icon="el-icon-edit" @click="addTodoList"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <ul>
          <li v-for="(item, index) in todolist" :key="index">
            <span class="todo_item">{{item.name}}:{{ item.value }}</span>
            <i class="el-icon-delete" @click="delTodoListItem(index)"></i>
          </li>
        </ul>
      </el-col>
    </el-row>
    <hr />
    <h2>v-html与函数：</h2>
    <div class="box" style="white-space: pre-wrap;" v-html="change(content)">{{content}}</div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      // 组件headertop的数据：
      btnInfo: {
        type: 'TodoList',
        tips: '监听路由的变化：'
      },
      inputValue: '',
      todolist: [],
      // 路由参数
      params: '',
      name: '',
      row: '',
      // v-html
      content:
        '手中雕刻生花；刀锋千转蜿蜒成画；盛名功德塔；是桥畔某处人家；春风绕过发梢红纱；刺绣赠；眉目刚烈拟作妆嫁；轰烈流沙枕上白发；杯中酒比划；年少风雅鲜衣怒马；也不过一刹那；难免疏漏儿时檐下；莫测变化；隔却山海；转身从容煎茶 一生长;重寄一段过;将希冀都流放;可曾添些荒唐;才记得你的模样 一身霜;谁提笔只两行;换一隅你安康；便销得这沧桑；你还在我的心上；手中雕刻生花；刀锋千转蜿蜒成画；盛名功德塔；是桥畔某处人家；春风绕过发梢红纱；刺绣赠他；眉目刚烈拟作妆嫁；轰烈流沙枕上白发；杯中酒比划；年少风雅鲜衣怒马；也不过一刹那；难免疏漏儿时檐下；莫测变化；隔却山海；转身从容煎茶 一生长；重寄一段过往；将希冀都流放；可曾添些荒唐；才记得你的模样 一身霜；谁提笔只两行 换..'
    }
  },
  // computed: {
  //   params() {
  //     return this.$route.params;
  //   },
  // },
  watch: {
    $route: {
      handler(newVal, oldVal) {
        // this.name = this.$route.query.name;
        // this.row = this.$route.query.row;
        this.name = this.$route.params.name
        this.row = this.$route.params.row
      },
      deep: true
    },
    params: {
      handler(newVal, oldVal) {},
      deep: true
    },
    $route(to, from) {
      // console.log(to, from);
    }
  },

  beforeRouteUpdate(to, from, next) {
    console.log(to, from, next)
    next() // 一定要有next
  },
  mounted() {
    console.log(this.$route.params, '我是谁？？')
    this.params = JSON.stringify(this.$route.params)
    // this.name = this.$route.query.name;
    // this.row = this.$route.query.row;
    this.name = this.$route.params.name
    this.row = this.$route.params.row
    this.getData()
  },
  methods: {
    // 数据初始化
    getData() {
      this.$api.get('/todolist').then(res => {
        this.todolist = []
        if (res.data.data.length != 0) {
          res.data.data.forEach((item, index) => {
            let obj = {
              name: item.user_name,
              value: item.title,
              id: item.id,
              img_url: item.thumbnail_pic_s
            }
            this.todolist.push(obj)
          })
        }
      })
    },
    // 添加
    addTodoList() {
      this.todolist.push({
        id: '',
        value: this.inputValue
      })
      this.inputValue = ''
    },
    // 删除
    delTodoListItem(index) {
      this.todolist.splice(index, 1)
    },
    // v-html
    change(content) {
      content = content.replace(/;/g, ';</br>')
      content = content.replace(/；/g, '；</br>')
      return content
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todolist {
  width: 100%;
  /* margin: 0 auto; */
}
.input-with-select >>> .el-button .el-icon-edit,
.todolist li > .el-icon-delete {
  font-size: 20px;
  color: #409eff;
}
.todolist ul {
  padding: 0;
  margin-top: 30px;
}
.todolist li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.todolist li > span,
.todolist li > i {
  font-size: 16px;
  color: #2c3e50;
}
.todolist li > .todo_item {
  padding-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.todolist li > i {
  padding-right: 10px;
  line-height: 40px;
}
/* 滚动条样式 */
.box {
  height: 300px;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid red;
  overflow: auto;
}
.box::-webkit-scrollbar {
  background-color: #fff;
}
.box:hover::-webkit-scrollbar {
  cursor: pointer;
  width: 7px;
  height: 7px;
  border-radius: 4px;
  background-color: '#fofofo';
}
.box:hover::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 4px;
}
.box:hover::-webkit-scrollbar-button,
.box:hover::-webkit-scrollbar-track,
.box:hover::-webkit-scrollbar-track-piece,
.box:hover::-webkit-scrollbar-corner,
.box:hover::-webkit-scrollbar-resizer {
  display: none;
}
</style>
