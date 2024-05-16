// movieSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  rated: [],
  trending: [],
  upcoming: [],
  playings: [],
  query: "",
  resultSearch: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setRated: (state, action) => {
      state.rated = action.payload;
    },
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
    setUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    setPlayings: (state, action) => {
      state.playings = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResultSearch: (state, action) => {
      state.resultSearch = action.payload;
    },
  },
});

export const {
  setMovies,
  setRated,
  setTrending,
  setUpcoming,
  setPlayings,
  setQuery,
  setResultSearch,
} = movieSlice.actions;

export default movieSlice.reducer;
