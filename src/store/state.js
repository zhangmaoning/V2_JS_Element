//核心概念1: State
//就是Vuex中的公共的状态, 我是将state看作是所有组件的data, 用于保存所有组件的公共数据.
export default {
  username: "我爱蓝色的猪",
  vuecommit:"",
  vuedispatch:"",
  actiondispatch:"",
  newList: [
    {
      keyword: "清明节全国哀悼",
      searches: 1,
      trend: "fall",
    },
    {
      keyword: "特朗普痛批3M公司",
      searches: 2,
      trend: "fall",
    },
    {
      keyword: "西昌南线山火蔓延",
      searches: 3,
      trend: "rise",
    },
  ],
  ageList: [6, 8, 4, 10, 12],
  areasList: [],
};

