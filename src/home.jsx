import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import {
  fetchPopularMovies,
  fetchTopRated,
  fetchTrendingMovies,
  fetchNowPlaying,
  fetchUpcomingMovies,
  searchMovies,
} from "./redux/actions/homeActions";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./Footer";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import SearchResult from "./SearchResult";

const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

export default function Home() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const {
    movies,
    rated,
    trending,
    upcoming,
    playings,
    // resultSearch,
    // query,
    // setQuery,
  } = useSelector((state) => state.home);
  console.log("movies", movies);
  const sliderNowPlaying = useRef(null);
  const sliderPopularMovies = useRef(null);
  const sliderTopRated = useRef(null);
  const sliderTrendingMovie = useRef(null);
  const sliderUpcoming = useRef(null);
  // const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRated());
    dispatch(fetchTrendingMovies());
    dispatch(fetchNowPlaying());
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);
  console.log("fetchPopularMovies", fetchPopularMovies);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const searchMovies = async () => {
    console.log("search movie di enter");
    try {
      if (query.trim().length === 0) return alert("Mohon inputkan movie");
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false`, // <-- diganti pake usestate
        { header: { accept: "application/json" } }
      );
      console.log("response data ", response.data);
      setResultSearch(response.data.results);
    } catch (err) {
      console.log("error fetching data: ", err);
    }
  };

  return (
    <div className="bg-yellow-950">
      <Navbar query={query} setQuery={setQuery} searchMovies={searchMovies} />
      {query?.length === 0 ? (
        <div>
          <Header />
          <div>
            <h1 className="text-2xl font-bold text-red-100 ml-12 text-center">
              Selamat Datang
            </h1>
          </div>
          <div className="slider-container px-16">
            <h2 className="text-2xl text-yellow-200 font-black my-4">
              Now Playing
            </h2>
            <Slider
              className="rounded-md overflow-hidden"
              {...settings}
              ref={sliderNowPlaying}
            >
              {playings?.map((e) => (
                <div key={e?.id} className="px-2">
                  {/* console.log('key', key) */}
                  <div className="flex justify-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                      alt={e?.title}
                      className="rounded-md hover:border-[10px] border-gray-400 transition-all duration-150 ease-in"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <Link
              to="/now-playing"
              className="text-white mt-4 flex justify-end"
            >
              <ArrowRightEndOnRectangleIcon width={30} height={30} />
            </Link>
            <h2 className="text-2xl text-yellow-200 font-black my-4">
              Popular Movies
            </h2>
            <Slider
              {...settings}
              ref={sliderPopularMovies}
              className="rounded-md overflow-hidden"
            >
              {movies?.map((e) => (
                <div key={e?.id} className="px-2">
                  <div className="flex justify-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                      alt={e?.title}
                      className="rounded-md hover:border-[10px] border-gray-400 transition-all duration-150 ease-in"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <Link
              to="/popular-movie"
              className="text-white mt-4 flex justify-end"
            >
              <ArrowRightEndOnRectangleIcon width={30} height={30} />
            </Link>
            <h2 className="text-2xl text-yellow-200 font-black mb-4 mt-5">
              Top Rated
            </h2>
            <Slider
              {...settings}
              ref={sliderTopRated}
              className="rounded-md overflow-hidden"
            >
              {rated?.map((e) => (
                <div key={e?.id} className="px-2">
                  <div className="flex justify-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                      alt={e?.title}
                      className="rounded-md hover:border-[10px] border-gray-400 transition-all duration-150 ease-in"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <Link to="/top-rated" className="text-white mt-4 flex justify-end">
              <ArrowRightEndOnRectangleIcon width={30} height={30} />
            </Link>

            <h2 className="text-2xl text-yellow-200 font-black my-4 mt-5">
              Trending Movies
            </h2>
            <Slider
              {...settings}
              ref={sliderTrendingMovie}
              className="rounded-md overflow-hidden"
            >
              {trending?.map((e) => (
                <div key={e?.id} className="px-2">
                  <div className="flex justify-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                      alt={e?.title}
                      className="rounded-md hover:border-[10px] border-gray-400 transition-all duration-150 ease-in"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <Link
              to="/trending-movie"
              className="text-white mt-4 flex justify-end"
            >
              <ArrowRightEndOnRectangleIcon width={30} height={30} />
            </Link>

            <h2 className="text-2xl text-yellow-200 font-black my-4 mt-5">
              Upcoming Movies
            </h2>
            <Slider
              {...settings}
              ref={sliderUpcoming}
              className="rounded-md overflow-hidden"
            >
              {upcoming?.map((e) => (
                <div key={e?.id} className="px-2">
                  <div className="flex justify-center">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                      alt={e?.title}
                      className="rounded-md hover:border-[10px] border-gray-400 transition-all duration-150 ease-in"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <Link
              to="/upcoming-movie"
              className="text-white mt-4 flex justify-end"
            >
              <ArrowRightEndOnRectangleIcon width={30} height={30} />
            </Link>
          </div>
        </div>
      ) : (
        <SearchResult resultSearch={resultSearch} />
      )}
      <Footer />
    </div>
  );
}
