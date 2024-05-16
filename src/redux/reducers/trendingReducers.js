// trendingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  selectedYear: "all",
};

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSelectedYear: (state, action) => {
      state.selectedYear = action.payload;
    },
  },
});

export const { setMovies, setSelectedYear } = trendingSlice.actions;

export default trendingSlice.reducer;
