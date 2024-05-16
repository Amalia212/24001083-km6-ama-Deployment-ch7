// trendingActions.js
import axios from "axios";
import { setMovies } from "../reducers/trendingReducers";
// import { setMovies } from "../reducers/trendingSlice";

const API_KEY = "acf7d069f0cf491ee86bd7170bf8a259";

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
    dispatch(setMovies(response.data.results));
  } catch (error) {
    console.error("Error fetching data: ", error);
    // Handle error as needed
  }
};
