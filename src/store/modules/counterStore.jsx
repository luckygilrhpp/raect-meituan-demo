import { createSlice } from "@reduxjs/toolkit";
const counterStore = createSlice({
  name: "counter",
  //初始化state
  initialState: {
    count: 0,
  },
  //修改数据方法， 同步方法 支持直接修改
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state,action){
      state.count = action.payload
    }
  },
});


// 结构actionCreater函数
export const { increment, decrement,addToNum } = counterStore.actions; 
//获取reducer
const counterReducer = counterStore.reducer;
export default counterReducer;
