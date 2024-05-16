import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

export default function TrendingMovieDetail() {
  const navigate = useNavigate();
  let location = useLocation();
  const [detail, setDetail] = useState([]);
  const detailTrendingMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${location.state.id}?language=en-US&api_key=${API_KEY}`
      );
      setDetail(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    console.log("location ", location);
    detailTrendingMovie();
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen">
      {detail && (
        <div className="bg-cover bg-fixed bg-no-repeat bg-gray-500 bg-blend-multiply h-auto">
          <div className="flex justify-center container mx-auto py-20 gap-10 items-center backdrop-blur-sm">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`}
              alt={detail?.title}
              className="w-auto h-auto rounded-lg"
            />
            <div className="text-white font-sans bg-gray-600/75 rounded-xl shadow-lg p-10">
              <div className="p-4">
                <h2 className="text-3xl font-semibold mb-2">{detail?.title}</h2>
                <p className="text-lg mb-4 border-b-2 pb-4">
                  {detail?.overview}
                </p>
                <p className="text-lg mb-2">
                  Release Date: {detail?.release_date}
                </p>
                <p className="text-lg mb-2">
                  Vote Average: {parseFloat(detail?.vote_average).toFixed(1)}/10
                </p>
                <p className="text-lg mb-2">Popularity: {detail?.popularity}</p>
                <p className="text-lg mb-2">Votes: {detail?.vote_count}</p>
                <button
                  className="px-4 py-2 font-sans bg-white border border-solid border-gray-400 text-black rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
                  onClick={() => {
                    navigate("/trending-movie");
                  }}
                >
                  <span className="align-middle font-semibold">
                    Back to Now Playing
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
