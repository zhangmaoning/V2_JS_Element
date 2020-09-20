<template>
  <!-- vue slot插槽的使用 -->
  <div class="slotclass">
    <headertop :btnInfo="btnInfo" />
    <h4>slot 父组件</h4>
    <SlotComponents :infoData="infoData">
      匿名插槽： 没有命名的slot会显示这行字吗？？
      <!-- vue 循环数组&循环对象 -->
      <div v-for="(item,index) in arrayData" :key="index">
        <span v-for="(val, key, index) in item" :key="index" :class="key" :slot="key">{{val}}</span>
      </div>
    </SlotComponents>
    <hr />作用域插槽:
    TODO
    <SlotComponents :infoData="infoData"></SlotComponents>
    <hr />知识点小结：
    <ul>
      <li>
        1. &lt;slot&gt;&lt/slot&gt;
        标签里面不可以定义样式，不能出现class,style属性；
      </li>
      <li>
        2. &lt;slot&gt;&lt/slot&gt;
        标签里面不可以进行循环，不能出现v-for；
      </li>
    </ul>
  </div>
</template>
<script>
import SlotComponents from '../components/SlotComponents.vue'
export default {
  components: { SlotComponents },
  data() {
    return {
      // 组件headertop的数据：
      btnInfo: {
        type: 'Slot',
        tips: 'Slot插槽的使用'
      },
      infoData: {
        title: '人物列表:  欢迎大家来到王者峡谷~~ 这个里面是props传参',
        array: ['name', 'region', 'office']
      },
      arrayData: [
        {
          name: '肖战',
          region: '四川',
          office: '重庆'
        },
        {
          name: '王一博',
          region: '河南',
          office: '洛阳'
        },
        {
          name: '安其拉',
          region: '北京',
          office: '昌平'
        },
        {
          name: '庄周',
          region: '下路',
          office: '野区'
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
.slotclass {
  padding: 0 20px;
}
.name {
  color: red;
}
.region {
  color: aqua;
}
.office {
  color: blueviolet;
}
</style>
