// movieActions.js

import axios from "axios";
import {
  setMovies,
  setRated,
  setTrending,
  setUpcoming,
  setPlayings,
  setResultSearch,
} from "../reducers/homeReducers";
// import {
//   setMovies,
//   setRated,
//   setTrending,
//   setUpcoming,
//   setPlayings,
//   setResultSearch,
// } from "../reducers/movieSlice";

const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    dispatch(setMovies(response.data.results));
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
};

export const fetchTopRated = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${API_KEY}`
    );
    dispatch(setRated(response.data.results));
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const fetchTrendingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day",
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    dispatch(setTrending(response.data.results));
  } catch (err) {
    console.log("error fetching data: ", err);
  }
};

export const fetchNowPlaying = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch(setPlayings(response.data.results));
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    );
    dispatch(setUpcoming(response.data.results));
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const searchMovies = (query) => async (dispatch) => {
  try {
    if (query.trim().length === 0) return alert("Mohon inputkan movie");
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false`
    );
    dispatch(setResultSearch(response.data.results));
  } catch (err) {
    console.log("error fetching data: ", err);
  }
};
