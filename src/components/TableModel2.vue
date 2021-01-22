<template>
  <!-- 表格 公共组件   包含表格上面的搜索栏 表头 操作栏 都是自定义的 -->
  <div>
    <div class="search-box">
      <slot name="searchBox"></slot>
    </div>
    <el-table
      class="public-table"
      v-loading="loading"
      :data="tableData"
      :max-height="tableHeight? tableHeight: height"
      @selection-change="handleSelectionChange"
    >
      <el-table-column align="center" v-if="isShowSelect" fixed="left" type="selection" width="55"></el-table-column>
      <el-table-column align="center" v-if="isShowOperate" label="操作" :width="operateWidth">
        <template slot-scope="scope">
          <slot name="operateBox" :row="scope.row"></slot>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        v-for="obj in tableConfiguration"
        :prop="obj.prop"
        :key="obj.key"
        :label="obj.label"
        :width="obj.width"
      >
        <template slot-scope="scope">
          <slot name="specialItem" :row="scope.row" :column="obj.prop">{{scope.row[obj.prop]}}</slot>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页栏 -->
    <el-pagination
      v-if="pagination"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-sizes="[5,10,20,30]"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      :current-page="pagination.page"
      @size-change="handleSizeChange"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'tableContainer',
  props: {
    // 表头配置
    tableConfiguration: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 是否显示操作
    isShowOperate: {
      type: Boolean,
      default: true
    },
    // 列表数据
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    // 表格数据
    pagination: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 操作栏宽度
    operateWidth: {
      type: Number,
      default: 100
    },
    // 是否显示多选框
    isShowSelect: {
      type: Boolean,
      default: false
    },
    // 表格高度
    tableHeight: {
      type: Number,
     default: 0
    },
    // laoding
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      height: 0
    }
  },
  created() {
    const screenHeight = document.body.clientHeight
    this.height = screenHeight - 200
    window.onresize = () => {
      this.height = screenHeight - 200
    }
  },
  methods: {
    currentChange(val) {
      console.log(val, '改变当前页码')
      this.$emit('pagination', {
        page: val,
        pageSize: this.pagination.pageSize
      })
    },
    handleSizeChange(val) {
      console.log(val, '改变当前容量')
      this.$emit('pagination', {
        page: 1,
        pageSize: val
      })
    },
    handleSelectionChange(val) {
      console.log('表格选中的数据')
      this.$emit('handleSelectionChange', val)
    }
  }
}
</script>

<style scoped>
</style>
