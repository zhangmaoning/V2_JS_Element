// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/index.css";
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
import App from "./App.vue";
// 引入公共方法
import comFun from '@/assets/js/common.js';
Vue.prototype.$comfun=comFun;
import validate from '@/assets/js/validate.js';
Vue.prototype.$vva=validate;
// 拖拽插件
import VueDND from "awe-dnd";
Vue.use(VueDND);
// mock数据
import "../src/assets/mock/mock.js";
import "../src/assets/mock/data.js";
import axios from "axios";
Vue.prototype.$api = axios;
// vuex的使用
import store from "./store/index.js";
import * as types from "./store/constant.js";
Vue.prototype.$types = types;
// vue封装的公共组件
import TableModel from "@/components/TableModel";
import Header from "@/components/Header";
Vue.component("tablemodel", TableModel);
Vue.component("headertop", Header);

// event-bus:处理组件之间的数据传递
// import { eventBus } from './event-bus.js'
// var EventBus = new Vue();
// Object.defineProperties(Vue.prototype, {
//   $bus: {
//     get: function() {
//       return EventBus;
//     }
//   }
// });
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
