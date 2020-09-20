<template>
  <!-- 表单组件封装 -->
  <div>
    <el-form
      label-position="left"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <div v-for="(item,index) in formDetialInfo" :key="index">
        <!-- 输入框 -->
        <el-form-item
          v-if="item.type=='input'"
          :label="item.label"
          :prop="item.prop?item.cb:''"
          :rules="item.rules"
        >
          <el-input
            v-model="ruleForm[item.cb]"
            :disabled="item.disabled"
            :clearable="item.clearable"
            :placeholder="item.placeholder"
          ></el-input>
        </el-form-item>
        <!-- 下拉框 -->
        <el-form-item
          v-if="item.type=='select'"
          :label="item.label"
          :prop="item.prop?item.cb:''"
          :rules="item.rules"
        >
          <el-select
            v-model="ruleForm[item.cb]"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            :clearable="item.clearable"
          >
            <el-option
              v-for="(val,index) in item.options"
              :key="index+'_select'"
              :label="val.label"
              :value="val.value"
              :disabled="val.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 单个日期选择 -->
        <el-form-item
          v-if="item.type=='date'"
          :label="item.label"
          :prop="item.prop?item.cb:''"
          :rules="item.rules"
        >
          <el-date-picker
            type="date"
            v-model="ruleForm[item.cb]"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            :clearable="item.clearable"
            format="yyyy - MM - dd"
          ></el-date-picker>
        </el-form-item>
        <!-- 日期选择的范围 -->
        <!-- <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>-->
        <!-- switch开关 -->
        <el-form-item
          v-if="item.type=='switch'"
          :label="item.label"
          :prop="item.prop?item.cb:''"
          :rules="item.rules"
        >
          <el-switch v-model="ruleForm[item.cb]" :disabled="item.disabled"></el-switch>
        </el-form-item>
        <!-- 多选 -->
        <el-form-item
          v-if="item.type=='checkbox'"
          :label="item.label"
          :prop="item.prop?item.cb:''"
          :rules="item.rules"
        >
          <el-checkbox-group v-model="ruleForm[item.cb]">
            <el-checkbox
              v-for="(val,index) in item.options"
              :key="index+'_checkbox'"
              :label="val.label"
              :disabled="val.disabled"
              :name="item.cb"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <!-- 单选 -->
        <el-form-item
          v-if="item.type=='radio'"
          :label="item.label"
          :prop="item.prop?item.cb:''"
          :rules="item.rules"
        >
          <el-radio-group v-model="ruleForm[item.cb]">
            <el-radio v-for="(val,index) in item.options" :key="index+'_radio'" :label="val.label"></el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 文件上传 -->
        <!-- 文本框 -->
        <el-form-item
          v-if="item.type=='radio'"
          :label="item.label"
          :prop="item.prop?item.cb:''"
          :rules="item.rules"
        >
          <el-input type="textarea" v-model="ruleForm[item.cb]"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  prop: ['formInfo'],
  data() {
    return {
      formDetialInfo: [],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [],
        region: [],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [],
        resource: [],
        desc: []
      }
    }
  },
  methods: {
    // 处理父组件的数据
    handleParentInfo(data) {
      let temparr = []
      Object.getOwnPropertyNames(data.detail).forEach(key => {
        temparr.push(...data.detail[key])
      })
      this.getRightOrder(temparr)
    },
    // 排序
    getRightOrder(dataArry) {
      let temparr = []
      this.formDetialInfo = []
      dataArry.forEach((item, index) => {
        temparr.push(item.ord)
      })
      temparr.sort((a, b) => {
        return a - b
      })
      temparr.forEach((item, index) => {
        this.formDetialInfo.push(dataArry.find(o => o.ord == item))
      })
      console.log(this.formDetialInfo, '王一博111')
    },
    // 确定
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$$emit('handleDetermine', this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 取消
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
</script>

<style scoped>
</style>
