import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const createStore = createSlice({
  name: "channel",
  initialState: {
    channelsList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelsList = action.payload;
    },
  },
});



//结构 actions creator 函数
 const { setChannels } = createStore.actions;

//异步请求部分
const fetchChannelsList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(res.data.data.channels));
  };
};
const reducer = createStore.reducer

export default reducer;
export { fetchChannelsList}

