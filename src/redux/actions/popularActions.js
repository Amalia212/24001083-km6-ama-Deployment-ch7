// popularActions.js
import axios from "axios";
import { setPopularMovies } from "../reducers/popularReducers";

const API_KEY = "5e4a160d88ab953fadaaed22916b8438"; // Replace with your actual API key

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&include_adult=false&api_key=${API_KEY}`,
      { headers: { accept: "application/json" } }
    );
    dispatch(setPopularMovies(response.data.results));
  } catch (error) {
    console.error("Error fetching data", error);
    // Handle error as needed
  }
};

export const selectMovie = (id) => (dispatch) => {
  dispatch(setPopularMovies(id));
  // Here you might want to dispatch an action to store the selected movie ID
  // Example: dispatch(setSelectedMovieId(id));
};

// import axios from "axios";
// import { setPopularMovies } from "../reducers/popularReducers";

// const API_KEY = "5e4a160d88ab953fadaaed22916b8438"; // Replace with your actual API key

// export const fetchPopularMovies = () => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&include_adult=false&api_key=${API_KEY}`,
//       { headers: { accept: "application/json" } }
//     );
//     dispatch(setPopularMovies(response.data.results));
//   } catch (error) {
//     console.error("Error fetching data", error);
//     // Handle error as needed
//   }
// };

// export const selectMovie = (id) => (dispatch) => {
//   dispatch(setPopularMovies(id));
// };
