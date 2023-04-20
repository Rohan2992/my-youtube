import { createSlice } from "@reduxjs/toolkit";

const searchSuggestions = createSlice({
  name: "searchSuggestions",
  initialState: {
    videos: []
  },
  reducers: {
    setVideos: (state, action) => {
      state.videos = action.payload;
    }
  }
});

export const { setVideos } = searchSuggestions.actions;
export default searchSuggestions.reducer;
