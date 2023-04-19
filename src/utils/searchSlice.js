import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cache: (state, action) => {
      // console.log(state, action.payload);
      // console.log(Object.keys(state).length);
      Object.assign(state, action.payload);
    }
  }
  // reducers: {
  //   setVideos: (state, action) => {
  //     state.push(action.payload);
  //     console.log(state);
  //     // console.log(action.payload);
  //     // console.log(state.videos[0]);
  //     // state.videos = state.videos.push(action.payload);
  //   }
  // }
});

export const { cache } = searchSlice.actions;
export default searchSlice.reducer;
