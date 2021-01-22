<template>
  <el-table
    ref="multipleTable"
    style="width: 100%;"
    class="tableclass"
    :empty-text="tableOther.emptytext"
    :data="tableData"
    :row-class-name="rowClassName"
    :row-style="rowStyle"
  >
    <!-- :current-row-key="currentRowKey" -->
    <!-- :highlight-current-row="highlightCurrentRow" -->
    <!-- :show-header="showHeader" -->
    <!-- :height="tableOther.height"
    :max-height="tableOther.maxHeight"
    :stripe="tableOther.stripe"
    :border="tableOther.border"
    :size="tableOther.size"
    :fit="tableOther.fit"
    -->
    <!-- 
    :default-expand-all="tableOther.defaultExpandAll"
    default-expand-all-->
    <el-table-column type="selection" width="55" v-if="tableOther.ischeckbox"></el-table-column>
    <div v-for="(item,index) in tableHeader" :key="index">
      <el-table-column v-if="item.isIcon" :label="item.title" width="120">
        <template>
          <span v-for="(val,i) in item.positation" :key="i">
            <i :class="val.icon"></i>
            <span>{{val.tips}}</span>
          </span>
        </template>
      </el-table-column>
    </div>
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
    showHeader() {},
    currentRowKey() {},
    highlightCurrentRow() {},
    rowStyle() {},
    // row-class-name
    rowClassName({ row, rowIndex }) {
      if (row.date === '2016-05-02') {
        console.log(row.date, '王一博')
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
