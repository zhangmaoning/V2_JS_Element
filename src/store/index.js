import Vue from 'vue';
import Vuex from 'vuex';
import  state from './state.js';
// import * as  A from ".././wenjian.js"
// 会将 wenjian 中所有 export 导出的内容组合成一个对象A返回;
import * as getters from './getter.js';
import mutations from './mutations.js';
import  actions from './action.js';
Vue.use(Vuex);
const store = new Vuex.Store({
  getters,
  state,
  mutations,
  actions,
});
export default store;


  

