import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import "../src/App.css";

export default function Header() {
  const API_KEY = "5e4a160d88ab953fadaaed22916b8438";
  const elementRef = useRef();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        console.log("response data ", response.data);
        setMovies(response.data.results);
        console.log("reponse.data.results", response.data.results);
      } catch (err) {
        console.log("error fetching data: ", err);
      }
    };
    fetchMovies();
  }, []);

  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovie((prevMovie) => (prevMovie + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  const sliderRight = () => {
    elementRef.current.slickNext();
  };

  const sliderLeft = () => {
    elementRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carousel relative">
      {/* <Slider {...settings}> */}
      {movies.map((movie, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentMovie ? "show" : ""} `}
          // className = "bg-cover bg-fixed bg-no-repeat bg-gray-500 bg-blend-multiply h-auto relative"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, // corrected URL construction
          }}
        >
          {/* Blur layer */}
          {/* <div className="overlay absolute top-0 left-0 w-full h-full opacity-50 backdrop-filter backdrop-blur-md"> */}
          {/* Content */}
          <div className="overlay flex flex-col items-center justify-center">
            <div className="text-container bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg p-4">
              <h1 className="text-5xl font-bold whitespace-normal max-w-sm mb-3 text-white bg-white">
                {movie.name}
              </h1>
              <h1 className="text-6xl lg:text-4xl font-semibold mb-3 max-w-md text-white">
                "{movie.title}"
              </h1>
              <p className="text-white text-sm md:text-base max-w-md">
                <span style={{ fontStyle: "italic" }}>
                  {movie.overview.slice(0, 200)}...
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
      {/* </Slider> */}
      <div className="absolute w-full h-[310px] flex justify-between items-center">
        <div className="md:hidden text-white mx-8 cursor-pointer">
          <ArrowLeftCircleIcon width={50} height={50} onClick={sliderLeft} />
        </div>
        <div className="md:hidden text-white mx-8 cursor-pointer">
          <ArrowRightCircleIcon width={50} height={50} onClick={sliderRight} />
        </div>
      </div>
    </div>
  );
}
