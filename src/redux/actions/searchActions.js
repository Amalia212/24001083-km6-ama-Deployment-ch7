// import axios from "axios";
// import { setSearchResults, setSearchTerm } from "../reducers/searchReducers";
// // import { setSearchResults } from "./reducers";

// const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

// export const fetchSearchResults = (searchTerm) => async (dispatch) => {
//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchTerm}`,
//       { headers: { accept: "application/json" } }
//     );
//     console.log("response.data ", response.data);
//     dispatch(setSearchResults(response.data.results));
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// };
