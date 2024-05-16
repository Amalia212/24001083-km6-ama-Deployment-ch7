import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularMovies: [],
  // other movie-related properties
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    // other reducers for movie-related properties
  },
});

export const { setPopularMovies } = popularSlice.actions;

export default popularSlice.reducer;
