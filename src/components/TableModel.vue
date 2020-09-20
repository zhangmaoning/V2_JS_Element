<template>
  <el-table ref="table" style="width: 100%;" class="tableclass" :empty-text="tableOther.emptytext">
    <!-- :height="tableOther.height"
    :max-height="tableOther.maxHeight"
    :stripe="tableOther.stripe"
    :border="tableOther.border"
    :size="tableOther.size"
    :fit="tableOther.fit"
    :show-header="tableOther.showHeader"
    :highlight-current-row="tableOther.highlightCurrentRow"
    :current-row-key="tableOther.currentRowKey"
    :row-class-name="rowClassName"
    :row-style="tableOther.rowStyle"
    :data="tableData"-->
    <!-- 
    :default-expand-all="tableOther.defaultExpandAll"
    default-expand-all-->
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ['tableHeader', 'tableOther', 'tableData'],
  data() {
    return {
      multipleSelection: []
    }
  },
  created() {},
  mounted() {
    console.log('张毛宁~~', this.tableData)
    this.getTableData()
  },
  methods: {
    // row-class-name
    rowClassName({ row, rowIndex }) {
      if (row.date === '2016-05-02') {
        console.log(row.date, '王一博', data.rowIndex)
        return 'info-row'
      } else if (row.date === '2016-05-03') {
        return 'positive-row'
      } else if (row.date === '2016-05-04') {
        return 'warm-row'
      }
      return ''
    },
    getTableData() {},
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped>
.tableclass {
  /* border: 1px solid red; */
}
.tableclass >>> .el-table info-row {
  background: #c9e5f5 !important;
}

.tableclass >>> .el-table positive-row {
  background: #e2f0e4 !important;
}

.tableclass >>> .el-table warm-row {
  background: #f9c855 !important;
}
</style>
