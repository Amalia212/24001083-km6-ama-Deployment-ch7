// Redux action file: topRatedActions.js
import axios from "axios";
import { setTopRatedMovies } from "../reducers/ratedReducers";
// import { setTopRatedMovies } from "../reducers/topRatedSlice";

const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

export const fetchTopRatedMovies = (sortBy) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sortBy}&without_genres=99,10755&vote_count.gte=200&api_key=${API_KEY}`
    );
    dispatch(setTopRatedMovies(response.data.results));
  } catch (error) {
    console.error("Error fetching top rated movies: ", error);
  }
};
