// TopRated.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "./redux/actions/ratedActions";
import { setSortBy } from "./redux/reducers/ratedReducers";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

const TopRated = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const topRated = useSelector((state) => state.topRated.topRatedMovies);
  const sortBy = useSelector((state) => state.topRated.sortBy);

  useEffect(() => {
    dispatch(fetchTopRatedMovies(sortBy));
  }, [dispatch, sortBy]);

  const handleSortChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <div className="bg-yellow-950">
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mt-8 mb-4 text-yellow-200">
          Top Rated Movies
        </h1>
        <div className="mb-4">
          <label htmlFor="sort" className="mr-2 font-bold text-yellow-200">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="mx-5 py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold shadow-md"
          >
            <option value="vote_average.desc">Top Rated Descending</option>
            <option value="vote_average.asc">Top Rated Ascending</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
          {topRated && topRated.length > 0 ? (
            topRated.map((movie) => (
              <div
                key={movie.id}
                onClick={() => {
                  navigate("/DetailTop-Rated", { state: { id: movie.id } });
                }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:bg-gray-800"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h2 className="text-xl text-white font-semibold mb-2">
                    {movie.title}
                  </h2>
                  <p className="text-sm text-gray-400">
                    Release Date: {movie.release_date}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">
                    {movie.overview.slice(0, 150)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white">No movies available</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopRated;
