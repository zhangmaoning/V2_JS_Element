<template>
  <!-- table_model使用 -->
  <div>
    <div class="content">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="tableModel1" name="first">
          <TableModel :tableHeader="tableHeader" :tableOther="tableOther" :tableData="tableData"></TableModel>
        </el-tab-pane>
        <el-tab-pane label="tableModel2" name="second">
          <h1>table_model2使用</h1>

          <TableModel2
            :tableData="tableData2"
            :isShowSelect="true"
            :loading="loading"
            :tableConfiguration="tableConfiguration"
            :pagination="pagination"
            @pagination="changePagination"
            @handleSelectionChange="handleSelectionChange"
          >
            <template slot="operateBox" slot-scope="scope">
              <span
                v-for="(item,index) in iconsArry"
                :key="index"
                style="font-size:20px;color: #409eff;"
              >
                <i :class="item.icon"></i>
              </span>
            </template>
          </TableModel2>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import TableModel from '../components/TableModel.vue'
import TableModel2 from '../components/TableModel2.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'TableComponentUser',
  components: { TableModel, TableModel2 },
  data() {
    return {
      activeName: 'second',
      tableHeader: [],
      tableOther: {
        height: 500,
        maxHeight: 700,
        emptytext: '暂无数据的提示语',
        ischeckbox: false,
        stripe: false,
        border: true,
        size: 'medium',
        fit: true,
        showHeader: true,
        highlightCurrentRow: false,
        currentRowKey: 0,
        rowClassName: this.rowClassName,
        rowStyle: this.rowStyle,
        defaultExpandAll: this.defaultExpandAll
      },
      tableData: [],
      // 表格2
      tableData2: [
        {
          departId: '2016-05-03',
          departName: '王小虎',
          opLevel: '上海市普陀区金沙江路 1518 弄',
          centerName: '上海市普陀区金沙江路 1518 弄',
          departCode: '上海市普陀区金沙江路 1518 弄',
          desc: '上海市普陀区金沙江路 1518 弄'
        },
        {
          departId: '2016-05-02',
          departName: '王小虎',
          opLevel: '上海市普陀区金沙江路 1518 弄',
          centerName: '上海市普陀区金沙江路 1518 弄',
          departCode: '上海市普陀区金沙江路 1518 弄',
          desc: '上海市普陀区金沙江路 1518 弄'
        },
        {
          departId: '2016-05-04',
          departName: '王小虎',
          opLevel: '上海市普陀区金沙江路 1518 弄',
          centerName: '上海市普陀区金沙江路 1518 弄',
          departCode: '上海市普陀区金沙江路 1518 弄',
          desc: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      tableConfiguration: [
        { label: '部门ID', prop: 'departId' },
        { label: '部门名称', prop: 'departName' },
        { label: '优先级', prop: 'opLevel' },
        { label: '所属中心', prop: 'centerName' },
        { label: '组织机构代码', prop: 'departCode' },
        { label: '描述', prop: 'desc' }
      ],
      tableParams: {
        departInfo: ''
      },
      iconsArry: [
        { icon: 'el-icon-edit', tips: '' },
        { icon: 'el-icon-share', tips: '' },
        { icon: 'el-icon-delete', tips: '' }
      ],
      pagination: {
        pageSize: 10,
        total: 20,
        page: 1
      },
      seletedData: [],
      loading: false
    }
  },
  created() {
    this.tableHeader = [
      {
        title: '操作',
        isIcon: true,
        postation: [
          { icon: 'el-icon-edit', tips: '编辑' },
          { icon: 'el-icon-delete', tips: '删除' },
          { icon: 'el-icon-share', tips: '分享' }
        ]
      }
    ]

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
    handleClick(tab, event) {
      console.log(tab, event)
    },
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
    },
    // 表格2
    // 页码改变
    changePagination() {},
    // 表格选中的数据
    handleSelectionChange() {}
  }
}
</script>

<style scoped>
</style>
