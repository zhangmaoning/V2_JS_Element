<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
    unique-opened
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div v-for="(item,index) in mainnav" :key="index">
      <el-submenu :index="item.index">
        <template slot="title">
          <i v-if="isactiveli!=index" class="iconfont" :class="item.icon"></i>
          <svg v-else class="icon iconfont" aria-hidden="true">
            <use :xlink:href="item.svg" />
          </svg>
          <span>{{item.title}}</span>
        </template>
        <div v-for="(val,i) in filternav(item.index)" :key="i">
          <el-menu-item :index="val.index">
            <!-- <i class="el-icon-partly-cloudy"></i> -->
            <span>{{val.title}}</span>
          </el-menu-item>
        </div>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
import { mainnav, detailnav, leftBarItem } from './Data/leftbar.js'
export default {
  data() {
    return { isactiveli: -1 }
  },
  computed: {
    mainnav() {
      return mainnav
    }
  },
  created() {},
  methods: {
    filternav(index) {
      return detailnav.filter(v => v.index.split('-')[0] == index)
    },
    enterLi(index) {},
    handleOpen(key, keyPath) {
      this.isactiveli = key - 1
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      let result = leftBarItem(key)
      if (result.path == '/CSS3Demo') {
        this.$comfun.watermark('硝烟四起 为战而来')
      } else {
      console.log(1111, key, keyPath)
        this.$comfun.watermark(' ')
      }
      this.$router.push({
        path: result.path
      })
      this.$store.commit(this.$types.HEADER_INFO, result.adress)
    }
  }
}
</script>

<style scoped>
</style>
