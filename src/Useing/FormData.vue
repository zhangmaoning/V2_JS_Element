<template>
  <div>
    <headertop :btnInfo="btnInfo" />
    <h4>form_model使用(竖型)</h4>
    <el-container>
      <el-main>
        <FromModel
          class="formclass"
          ref="form"
          :formInfo="formInfo"
          @handleDetermine="handleDetermine"
          @handleCancel="handleCancel"
        ></FromModel>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import FromModel from '../components/FormComponents.vue'
export default {
  name: 'FormComponentUser',
  components: { FromModel },
  data() {
    return {
      btnInfo: {
        tips: '表单组件的使用'
      },
      formInfo: {
        type: 'FormComponentUser',
        detail: {
          input: [
            {
              ord: 1,
              type: 'input',
              label: '活动名称',
              disabled: false,
              cb: 'name',
              value: '',
              prop: true,
              rules: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                {
                  min: 3,
                  max: 5,
                  message: '长度在 3 到 5 个字符',
                  trigger: 'blur'
                }
              ],
              placeholder: '请输入活动名称',
              clearable: true
            }
          ],
          select: [
            {
              ord: 2,
              type: 'select',
              label: '活动区域',
              disabled: false,
              cb: 'region',
              value: '',
              prop: true,
              rules: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
              ],
              placeholder: '请选择活动区域',
              options: [
                { label: '区域一', value: 'shanghai' },
                { label: '区域二', value: 'beijing' }
              ],
              clearable: true
            }
          ],
          date: [
            {
              ord: 3,
              type: 'date',
              label: '生产日期',
              disabled: false,
              cb: 'productDate',
              value: '',
              prop: true,
              rules: [
                { required: true, message: '请选择生产日期', trigger: 'change' }
              ],
              placeholder: '选择日期'
            }
          ],
          dateRange: [
            {
              ord: 4,
              type: 'dateRange',
              label: '',
              disabled: false,
              cb: '',
              value: '',
              prop: '',
              rules: [],
              options: []
            }
          ],
          switch: [
            {
              ord: 5,
              type: 'switch',
              label: '即时配送',
              disabled: false,
              cb: 'delivery',
              value: ''
            }
          ],
          checkbox: [
            {
              ord: 6,
              type: 'checkbox',
              label: '活动性质',
              disabled: '',
              cb: 'type',
              value: '',
              prop: true,
              rules: [
                {
                  type: 'array',
                  required: true,
                  message: '请至少选择一个活动性质',
                  trigger: 'change'
                }
              ],
              options: [
                { label: '美食/餐厅线上活动', disabled: false },
                { label: '地推活动', disabled: false },
                { label: '线下主题活动', disabled: true },
                { label: '单纯品牌曝光', disabled: false }
              ]
            }
          ],
          radio: [
            {
              ord: 7,
              type: 'radio',
              label: '特殊资源',
              disabled: '',
              cb: 'resource',
              value: '',
              prop: true,
              rules: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
              ],
              options: [
                { label: '线上品牌商赞助', disabled: false },
                { label: '线下场地免费', disabled: false }
              ]
            }
          ],
          textarea: [
            {
              ord: 8,
              type: 'textarea',
              label: '活动形式',
              disabled: '',
              cb: 'desc',
              value: '',
              prop: '',
              rules: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
              ],
              options: []
            }
          ],
          uploadbutton: [
            {
              ord: 9,
              type: 'uploadbutton',
              label: '',
              disabled: '',
              cb: '',
              value: '',
              prop: '',
              rules: [],
              options: []
            }
          ]
        }
      }
    }
  },
  created() {},
  mounted() {
    this.$refs.form.handleParentInfo(this.formInfo)
  },
  methods: {
    // 确定
    handleDetermine() {},
    // 取消
    handleCancel() {}
  }
}
</script>

<style scoped>
.formclass {
  width: 50%;
  padding: 20px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}
.formclass::-webkit-scrollbar {
  background-color: #fff;
}
.formclass:hover::-webkit-scrollbar {
  cursor: pointer;
  width: 7px;
  height: 7px;
  border-radius: 4px;
  background-color: '#fofofo';
}
.formclass:hover::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 4px;
}
.formclass:hover::-webkit-scrollbar-button,
.formclass:hover::-webkit-scrollbar-track,
.formclass:hover::-webkit-scrollbar-track-piece,
.formclass:hover::-webkit-scrollbar-corner,
.formclass:hover::-webkit-scrollbar-resizer {
  display: none;
}
</style>
