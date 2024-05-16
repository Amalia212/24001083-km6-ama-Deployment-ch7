import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import NowPlaying from "./NowPlaying";
import DetailNowPlaying from "/src/DetailNowPlaying.jsx";
import TrendingMovie from "./TrendingMovie";
import DetailTrendingMovie from "./DetailTrendingMovie";
import PopularMovie from "./PopularMovie";
import DetailPopularMovie from "./DetailPopularMovie";
import TopRated from "./TopRated";
import Login from "./Login";
import Register from "./register";
import GoogleLogin from "./GoogleLogin";
import WelcomeMessage from "./profil";
import MovieSearch from "./SearchMovie";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Route() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search-movie",
      element: <MovieSearch />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/profil",
      element: <WelcomeMessage />,
    },
    {
      path: "/now-playing",
      element: <NowPlaying />,
    },
    {
      path: "/DetailNow-Playing",
      element: <DetailNowPlaying />,
    },
    {
      path: "/trending-movie",
      element: <TrendingMovie />,
    },
    {
      path: "/DetailTrending-Movie",
      element: <DetailTrendingMovie />,
    },
    {
      path: "/popular-movie",
      element: <PopularMovie />,
    },
    {
      path: "/DetailPopular-Movie",
      element: <DetailPopularMovie />,
    },
    {
      path: "/top-rated",
      element: <TopRated />,
    },
    {
      path: "/GoogleLogin",
      element: <GoogleLogin />,
    },
  ]);
  return (
    <GoogleOAuthProvider clientId="418401514974-jb23d77jtvj8bg2jl31povog173514rj.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}
