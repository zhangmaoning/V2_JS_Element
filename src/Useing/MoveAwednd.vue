<template>
  <!-- vue-dragging -- 一款可任意拖动排序的vue插件。
支持桌面和移动端，拖拽过渡动画美观。支
  持vue1和vue2版本。非常实用。-->

  <div class="color-list">
    TODO
    <h4>vue-dragging awe-dnd</h4>
    <div
      v-for="color in colors"
      :style="{color:color.text,fontSize:fs}"
      v-dragging="{ item: color, list: colors, group: 'color' }"
      :key="color.text"
      class="color-item"
    >
      <span>{{ color.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Move2',
  data() {
    return {
      fs: '30px',
      colors: [
        {
          text: 'Aquamarine'
        },
        {
          text: 'Hotpink'
        },
        {
          text: 'Gold'
        },
        {
          text: 'Crimson'
        },
        {
          text: 'Blueviolet'
        },
        {
          text: 'Lightblue'
        },
        {
          text: 'Cornflowerblue'
        },
        {
          text: 'Skyblue'
        },
        {
          text: 'Burlywood'
        }
      ]
    }
  },
  created() {},
  mounted() {
    this.$dragging.$on('dragged', ({ value }) => {
      // console.log(value.item)
      // console.log(value.list)
      // console.log(value.otherData)
    })
    this.$dragging.$on('dragend', () => {})
  },
  methods: {}
}
</script>

<style scoped>
.color-list {
  padding: 0 20px;
}
.color-item {
  display: flex;
  flex-wrap: wrap;
}
.color-item span {
  flex-basis: 200px;
  padding: 30px;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  margin: 10px;
}
</style>
