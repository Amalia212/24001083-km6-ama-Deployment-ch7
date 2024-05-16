// MovieTrending.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingMovies } from "./redux/actions/trendingActions";
import { setSelectedYear } from "./redux/reducers/trendingReducers";
// import { fetchTrendingMovies, setSelectedYear } from "./redux/actions/trendingActions";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

const MovieTrending = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.trending.movies);
  const selectedYear = useSelector((state) => state.trending.selectedYear);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  const handleYearChange = (event) => {
    dispatch(setSelectedYear(event.target.value));
  };

  const filteredMovies = movies.filter((movie) => {
    if (selectedYear === "all") {
      return true;
    } else if (selectedYear) {
      const movieYear = new Date(movie.release_date).getFullYear();
      return movieYear.toString() === selectedYear;
    }
    return true;
  });

  return (
    <div className="bg-yellow-950">
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold my-4 text-yellow-200">
          Trending Movies
        </h1>
        <label htmlFor="sort" className="mr-2 font-bold text-yellow-200">
          Urutkan berdasarkan:
        </label>
        <select
          onChange={handleYearChange}
          className="mx-5 py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold shadow-md"
        >
          <option disabled selected>
            Tahun Rilis
          </option>
          <option value="all">All</option>
          <option value="1989">1989</option>
          <option value="2021">2021</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => {
                navigate("/DetailTrending-Movie", { state: { id: movie.id } });
              }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:bg-gray-800"
            >
              <img
                className="w-full h-64 object-cover object-center"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {movie.title}
                </h2>
                <p className="text-sm text-gray-400">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  {movie.overview.slice(0, 150)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MovieTrending;
