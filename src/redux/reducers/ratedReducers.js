// Redux slice file: topRatedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topRatedMovies: [],
  sortBy: "vote_average.desc",
};

const topRatedSlice = createSlice({
  name: "topRated",
  initialState,
  reducers: {
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setTopRatedMovies, setSortBy } = topRatedSlice.actions;

export default topRatedSlice.reducer;
