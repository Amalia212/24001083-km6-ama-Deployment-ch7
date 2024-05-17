import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

export default function NowPlayingDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [detail, setDetail] = useState(null);

  const detailNowPlaying = async () => {
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
    detailNowPlaying();
  }, []);

  // Function to play trailer
  const playTrailer = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`
      );
      const videos = response.data.results;
      if (videos.length > 0) {
        const trailerKey = videos[0].key;
        window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank");
      } else {
        console.log("No trailer available for this series.");
      }
    } catch (err) {
      console.log("Error fetching trailer: ", err);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-between">
      {detail && (
        <div
          className="bg-cover bg-fixed bg-no-repeat bg-gray-500 bg-blend-multiply h-auto relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${detail?.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto py-20 relative z-10 flex items-center">
            <div className="w-1/2 p-4 flex justify-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`}
                alt={detail?.title}
                className="w-auto h-auto rounded-lg mb-8 shadow-lg"
              />
            </div>
            <div className="w-1/2 p-4 text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-white mb-4">
                {detail?.title}
              </h2>
              <p className="text-lg text-white mb-6">{detail?.overview}</p>
              <div className="flex justify-center lg:justify-start items-center">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center mr-4 hover:bg-blue-700"
                  onClick={() => playTrailer(detail?.id)}
                >
                  <PlayCircleIcon style={{ marginRight: "0.5rem" }} />
                  <span>Watch Trailer</span>
                </button>
                <button
                  className="px-4 py-2 bg-white text-gray-900 rounded-md font-semibold shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
                  onClick={() => navigate("/now-playing")}
                >
                  Back to Now Playing
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
