// MoviePopular.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  selectMovie,
} from "./redux/actions/popularActions";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./Footer";

const MoviePopular = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.popular.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <div className="bg-yellow-950">
      <Navbar />
      <div className="container mx-auto text-center">
        <header className="bg-yellow-950 text-yellow-200 py-4 px-4">
          <h1 className="text-3xl font-bold text-center mt-8 mb-4">
            Popular Movies
          </h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <div
                key={movie.id}
                onClick={() => {
                  dispatch(selectMovie(movie.id));
                  navigate("/DetailPopular-Movie");
                }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:bg-gray-800 transition duration-300 hover:filter hover:grayscale hover:scale-105"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h2 className="text-lx font-semibold text-white mb-2 text-center">
                    {movie.title}
                  </h2>
                  <p className="text-sm text-gray-400 ">
                    Release Date: {movie.release_date}
                  </p>
                  <div className="flex flex-wrap space-x-1 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <div className="text-white text-center">
                      {movie.vote_average.toFixed(1)}
                      <span className="text-white">/10</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white">Loading...</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoviePopular;
