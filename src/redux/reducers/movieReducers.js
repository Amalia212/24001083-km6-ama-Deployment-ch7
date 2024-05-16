import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  movieId: null,
  sortBy: "popularity.desc", // Initial sort order
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setAllMovies: (state, action) => {
      state.movies = action.payload;
    },
    setMovieId: (state, action) => {
      state.movieId = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setAllMovies, setMovieId, setSortBy } = movieSlice.actions;

export default movieSlice.reducer;
