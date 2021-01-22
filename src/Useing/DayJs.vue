<template>
  <div class="block">
    <hr />
    <div class="box">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>日期时间处理神器</span>
        </div>
        <div
          v-for="(o,index) in dataINfo"
          :key="index"
          class="text item"
        >{{ o.title+':' + o.content }}</div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayJs',
  data() {
    return {
      dataINfo: [
        {
          title: '获取当前时间，并指定格式 ',
          content: ''
        },
        {
          title: '获取当前时间的前2年 ',
          content: ''
        },
        {
          title: '获取当前时间的前2年 ',
          content: ''
        },
        {
          title: '传入指定日期 ',
          content: ''
        }
      ]
    }
  },
  created() {
    this.dataINfo[0].content = this.dayjs(new Date()).format('YYYY年MM月DD日')
    this.dataINfo[1].content = this.dayjs(new Date())
      .subtract(2, 'year')
      .format('YYYY年MM月DD日')
    this.dataINfo[2].content = this.dayjs(new Date())
      .subtract(2, 'week')
      .format('YYYY年MM月DD日')
    this.dataINfo[3].content = this.dayjs('19950808').format('YYYY年MM月DD日')
  },
  methods: {}
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
