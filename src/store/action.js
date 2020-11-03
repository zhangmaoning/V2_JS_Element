//核心概念4: Actions
//actions 类似于 mutations,但有以下几点不同:
//-actions提交的是mutations而不是直接变更状态；
//-actions中可以包含异步操作, mutations中绝对不允许出现异步;
//-actions中的回调函数的第一个参数是context, 是一个与store实例具有相同属性和方法的对象
// 可以在commit的时候异步，也可以在组件内dispatch的时候异步；
import * as types from "./constant.js";
const actions = {
  [types.GET_VUEDISPATCH](context, data) {
      context.commit(types.GET_VUEDISPATCH, data);
  },
  [types.GET_CONSTANT]({commit}, data) {
    setTimeout(() => {
      commit(types.GET_CONSTANT, "常量数据1");
    }, 5000);
  }
};
export default actions;
