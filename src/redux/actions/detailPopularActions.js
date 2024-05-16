// movieActions.js
import axios from "axios";
import { setDetailData } from "../reducers/detailPopularReducers";
// import { setDetail } from "./movieSlice";

const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

export const fetchMovieDetail = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${API_KEY}`,
      { headers: { accept: "application/json" } }
    );
    dispatch(setDetailData(response.data));
  } catch (err) {
    console.log("error fetching data: ", err);
  }
};
