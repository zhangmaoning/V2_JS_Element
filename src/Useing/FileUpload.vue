<template>
  <div>
    <hr />
    <div class="file_upload">
      <el-button type="primary" id="boxfile" icon="el-icon-upload" @click="uploadFile">文件上传</el-button>
    </div>
    <hr />
    <div class="pic_upload">
      <el-button
        type="primary"
        id="boxpic"
        icon="el-icon-picture-outline"
        @click="uploadFile"
      >图片上传预览</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileUpload',
  data() {
    return {}
  },
  created() {},
  methods: {
    uploadFile() {
      console.log('文件上传')
      var el = $(
        '<input type="file" id="file" class="filepath" onchange="changepic(this)" accept="image/jpg,image/jpeg,image/png,image/PNG">'
      )
      $('#boxfile').append(el) //两种添加方法
    }
  }
}
</script>

<style scoped>
.file_upload,
.pic_upload {
  height: 50vh;
}
</style>
