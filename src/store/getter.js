//核心概念2: Getters
//看做是所有组件的computed属性, 也就是计算属性.
//也可以将getter理解为store的计算属性, getters的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
export const getUserName = state=>{
    return state.username;
};
export const countAge = state => {
  let resultAgeList = state.ageList.map(age => {
    return age + 10;
  });
  return resultAgeList;
};

