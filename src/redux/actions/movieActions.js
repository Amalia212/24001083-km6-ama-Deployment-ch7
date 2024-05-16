import axios from "axios";
import { setAllMovies, setMovieId } from "../reducers/movieReducers";
// import { setAllMovies, setMovieId } from "./movieReducer";

export const getAllMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=872a56ce8dffb321ded14ae4c6f4bbeb`
    );
    dispatch(setAllMovies(response.data.results));
    // navigate();
  } catch (error) {
    console.error("Error fetching data: ", error);
    // Handle error as needed
  }
};

export const selectMovie = (id) => (dispatch) => {
  dispatch(setMovieId(id));
};
