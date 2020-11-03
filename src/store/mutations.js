//核心概念3: Mutations
//mutations:回调函数,用来操作state中的数据，是它的methods,该函数名官方规定叫type,
//  第一个参数是state, 第二参数是payload, 也就是自定义的参数.
import * as types from "./constant.js";
const matutaions = {
  [types.SET_USERNAME]:(state,payload)=>{
		state.username=payload;
	},
	[types.GET_CONSTANT]:(state,payload)=>{
		state.constant=payload;
	},
	[types.GET_VUECOMMIT]:(state,payload)=>{
		state.vuecommit=payload;
	},
	[types.GET_VUEDISPATCH]:(state,payload)=>{
		state.vuedispatch=payload;
	},
};
export default matutaions;
