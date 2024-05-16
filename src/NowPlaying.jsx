import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setSortBy } from "./redux/reducers/movieReducers";
import { getAllMovies, selectMovie } from "./redux/actions/movieActions";
import Navbar from "./navbar";
import Footer from "./Footer";

const PlayingNow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const playings = useSelector((state) => state.movies.movies);
  const sortBy = useSelector((state) => state.movies.sortBy);
  const location = useLocation();
  const detailNow_Playing = location.state?.id;

  useEffect(() => {
    console.log(
      "Fetching movies with sortBy:",
      sortBy,
      "and id:",
      detailNow_Playing
    );
    dispatch(getAllMovies(sortBy, detailNow_Playing));
  }, [dispatch, sortBy, detailNow_Playing]);

  const handleSortChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <div className="bg-yellow-950">
      <Navbar />
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mt-8 mb-4 text-yellow-200">
          Now Playing Movies
        </h1>
        <div className="mb-4">
          <label htmlFor="sort" className="mr-2 font-bold text-yellow-200">
            Urutkan berdasarkan:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="mx-5 py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold shadow-md"
          >
            <option value="popularity.desc">Populer (Descending)</option>
            <option value="popularity.asc">Populer (Ascending)</option>
            <option value="release_date.desc">Tanggal Rilis (Terbaru)</option>
            <option value="release_date.asc">Tanggal Rilis (Terlama)</option>
            <option value="original_title.asc">Judul (A-Z)</option>
            <option value="original_title.desc">Judul (Z-A)</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
          {playings.map((playing) => (
            <div
              key={playing.id}
              onClick={() => {
                dispatch(selectMovie(playing.id));
                navigate("/DetailNow-Playing", { state: { id: playing.id } });
              }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:bg-gray-800"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${playing.poster_path}`}
                alt={playing.title}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl text-white font-semibold mb-2">
                  {playing.title}
                </h2>
                <p className="text-sm text-gray-400">
                  Release Date: {playing.release_date}
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  {playing.overview.slice(0, 150)}
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

export default PlayingNow;
