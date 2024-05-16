import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  detailPost: null,
};

const postsSlicer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setDetailPost: (state, action) => {
      state.detailPost = action.payload;
    },
  },
});

export const { setPosts, setDetailPost } = postsSlicer.actions;

export default postsSlicer.reducer;
