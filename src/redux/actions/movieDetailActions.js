// // movieDetailActions.js
// import axios from "axios";
// import { setMovieDetail } from "../reducers/movieDetailReducers";

// const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

// export const getDetailMovie = (movieId, navigate) => async (dispatch) => {
//   // Menghapus navigate dari argumen
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
//       { headers: { accept: "application/json" } }
//     );
//     dispatch(setMovieDetail(response.data.results));
//     // navigate("/now-playing"); // Pindahkan navigasi ke komponen yang memanggil fungsi ini
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//     // Handle error as needed
//   }
// };
