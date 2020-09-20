<template>
  <!-- vue-slicksort -- 这是一个功能强大的可拖拽的vue.js组件。
   它可以自动滚动，锁定坐标系。支持拖拽时，流畅的动画效果。
  可以支持水平，垂直或者网格的拖拽。支持触摸。-->
  <!-- https://segmentfault.com/a/1190000013090341 -->
  <div class="root">
    <headertop :btnInfo="btnInfo" />
    <h4>vue-slicksort</h4>
    <SortableList axis="y" v-model="items" class="list">
      <SortableItem
        class="item"
        v-for="(item, index) in items"
        :index="index"
        :key="index"
        :item="item"
      />
    </SortableList>
  </div>
</template>

<script>
import { ContainerMixin, ElementMixin } from 'vue-slicksort'
const SortableList = {
  mixins: [ContainerMixin],
  template: `
    <ul class="list">
      <slot />
    </ul>
  `
}

const SortableItem = {
  mixins: [ElementMixin],
  props: ['item'],
  template: `
    <li class="list-item">{{item}}</li>
  `
}
export default {
  name: 'Move',
  components: {
    SortableItem,
    SortableList
  },
  data() {
    return {
      btnInfo: {
        tips: 'vue拖拽插件之slicksort'
      },
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8'
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
.root {
  padding: 0 20px;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex-grow: 1;
  flex-basis: 200px;
  padding: 30px;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  margin: 10px;
}
.item:hover {
  border: 1px solid #0612f8;
  cursor: pointer;
}
.root .list-item {
  list-style: none;
  height: 40px;
  line-height: 40px;
  /* 底色 */
  background-color: #edfd0d;
  /* chrome 2+, safari 4+; multiple color stops */
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0.32, #8bdb0b),
    color-stop(0.66, #edfd0d),
    color-stop(0.83, #fff)
  );
  /* chrome 10+, safari 5.1+ */
  background-image: -webkit-linear-gradient(#8bdb0b, #edfd0d, #fff);
  /* firefox; multiple color stops */
  background-image: -moz-linear-gradient(top, #8bdb0b, #edfd0d, #fff);
  /* ie 6+ */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#8bdb0b', endColorstr='#edfd0d');
  /* ie8 + */
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#8bdb0b', endColorstr='#edfd0d')";
  /* ie10 */
  background-image: -ms-linear-gradient(#8bdb0b, #edfd0d, #fff);
  /* opera 11.1 */
  background-image: -o-linear-gradient(#8bdb0b, #edfd0d, #fff);
  /* 标准写法 */
  background-image: linear-gradient(#8bdb0b, #edfd0d, #fff);
}
</style>
