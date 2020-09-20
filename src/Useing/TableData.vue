<template>
  <!-- table_model使用 -->
  <div>
    <headertop :btnInfo="btnInfo" />
    <h1>table_model使用(简单的基本类型)</h1>
    <div class="content">
      <TableModel :tableHeader="tableHeader" :tableOther="tableOther" :tableData="tableData"></TableModel>
    </div>
  </div>
</template>

<script>
import TableModel from '../components/TableModel.vue'
export default {
  name: 'TableComponentUser',
  components: { TableModel },
  data() {
    return {
      // 组件headertop的数据：
      btnInfo: {
        tips: '表格组件的使用'
      },
      tableHeader: [],
      tableOther: {
        height: 500,
        maxHeight: 700,
        emptytext: '暂无数据的提示语',
        stripe: false,
        border: false,
        size: 'medium',
        fit: true,
        showHeader: true,
        highlightCurrentRow: false,
        currentRowKey: 0,
        rowClassName: this.rowClassName,
        rowStyle: this.rowStyle,
        defaultExpandAll: this.defaultExpandAll
      },
      tableData: []
    }
  },
  created() {
    this.tableData = [
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
    ]
  },
  methods: {
    // row-class-name
    // rowClassName(data) {
    //   console.log(data.row, "王一博", data.rowIndex);
    //   let row = data.row;
    //   let index = data.rowIndex;
    //   if (row.date === "2016-05-02") {
    //     return "info-row";
    //   } else if (row.date === "2016-05-03") {
    //     return "positive-row";
    //   } else if (row.date === "2016-05-04") {
    //     return "warm-row";
    //   }
    //   return "";
    // },
    // row-style
    rowStyle(data) {
      console.log(data.row, '肖战~~~', data.rowIndex)
    },
    defaultExpandAll(data) {
      console.log(data, '肖战~`')
    }
  }
}
</script>

<style scoped>
</style>
