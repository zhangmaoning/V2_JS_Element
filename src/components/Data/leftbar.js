// 导出常量
export const mainnav = [{
    title: "vue",
    index: "1",
    icon: "iconDesert-1",
    svg: '#iconDesert-1',
  },
  {
    title: "element",
    index: "2",
    icon: 'iconDesert-2',
    svg: '#iconDesert-2'
  },
  {
    title: "js或者jq",
    index: "3",
    icon: 'iconDesert-3',
    svg: '#iconDesert-3',
  },
  {
    title: "css",
    index: "4",
    icon: 'iconDesert-4',
    svg: '#iconDesert-4',
  },
]
export const detailnav = [{
    index: '1-1',
    path: '/Vuex',
    title: 'Vuex',
    adress: "Vuex的使用",
    detail: '是一个专为 Vue.js 应用程序开发的状态管理模式。理解为数据管理仓库。'
  }, {
    index: '1-2',
    path: '/Slot',
    title: 'Vue-Slot',
    adress: "Slot插槽的使用",
    detail: '父组件与子组件的通讯方式，可以将父组件定义的模块显示在子组件中。'
  },

  {
    index: '1-3',
    path: '/MoveSlicksort',
    title: 'Slicksort',
    adress: "vue拖拽插件之slicksort",
    detail: 'Vue拖拽插件之slicksort'
  },
  {
    index: '1-4',
    path: '/MoveAwednd',
    title: 'Awednd',
    adress: "vue拖拽插件之Awednd",
    detail: 'Vue拖拽插件之Awednd'
  },
  {
    index: '1-5',
    path: '/LifeCycle',
    title: 'Vue生命周期',
    adress: "vue生命周期",
    detail: '每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。'
  },
  {
    index: '2-1',
    path: '/FormComponentUser',
    adress: "表单组件的使用",
    title: '表单组件的使用',
    detail: ''
  },
  {
    index: '2-2',
    path: '/TableComponentUser',
    title: '表格组件的使用',

    adress: "表格组件的使用",
    detail: ''
  },
  {
    index: '3-1',
    path: '/DataArray',
    title: '常用的数组循环',
    detail: ''
  },
  {
    index: '3-2',
    path: '/MockDemo',
    title: 'Mock.js数据模拟器',
    adress: "Mock.js数据模拟器",
    detail: ''
  },
  {
    index: '3-3',
    path: '/FileUpload',
    title: '文件上传',
    adress: "文件上传",
    detail: ''
  },
  {
    index: '3-4',
    path: '/DayJs',
    title: 'DayJs',
    adress: "日期时间处理神器",
    detail: ''
  },
  {
    index: '4-1',
    path: '/CSS3Demo',
    title: '立体旋转图片 ',
    adress: "立体旋转图片盒css3",
    detail: ''
  },

  {
    index: '4-2',
    path: '/CssFlexLayout',
    title: 'CssFlex布局',
    adress: "CssFlex布局",
    detail: ''
  },
  {
    index: '4-3',
    path: '/CssMediaQuery',
    title: 'Css媒体查询',
    adress: "媒体查询",
    detail: ''
  },
  {
    index: '',
    path: '',
    title: 'TodoList',
    adress: "监听路由的变化：",
    detail: ''
  },
]
export const leftBarItem = (index) => {
  return detailnav.find(v => v.index == index)
}
