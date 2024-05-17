import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FilmIcon } from "@heroicons/react/24/solid";
import {
  HomeIcon,
  FireIcon,
  TicketIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Navbar({
  query,
  setQuery,
  searchMovies,
  userData,
  setUserData,
}) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Update isLoggedIn status based on token
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // If token exists, set isLoggedIn to true

    if (userData && userData.name) {
      setIsLoggedIn(true);
    }
  }, [userData]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      setUserData(null);
      setIsLoggedIn(false);
      navigate("/login"); // Redirect to login page after logout
    }
  };

  return (
    <div className="navbar bg-base-100 px-4 py-2 flex flex-wrap items-center justify-between bg-yellow-800 w-full">
      <div className="flex items-center text-white">
        <div className="flex items-center mr-4">
          <FilmIcon width={50} height={50} />
          <span className="ml-2 text-3xl">MovieStar</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-end text-white">
        <ul className="menu menu-horizontal px-1 flex justify-end">
          {isLoggedIn ? (
            <>
              <li className="hover:text-yellow-400 flex items-center">
                <HomeIcon width={30} height={30} />
                <Link to="/" className="ml-2">
                  Home
                </Link>
              </li>
              <li className="ml-5 hover:text-yellow-400 flex items-center">
                <TicketIcon width={30} height={30} />
                <Link to="/now-playing" className="ml-2">
                  Now Playing
                </Link>
              </li>
              {/* <li className="ml-5 hover:text-yellow-400 flex items-center">
                <FireIcon width={30} height={30} />
                <Link to="/trending-movie" className="mr-4">
                  Trending Movie
                </Link>
              </li> */}
              <li className="text-white text-md hover:text-yellow-400">
                <Link to="/profil" className="mr-4 flex items-center">
                  <UserCircleIcon width={30} height={30} />
                </Link>
              </li>
              <li className="ml-5 hover:text-yellow-400 flex items-center">
                <button onClick={toggleSearch} className="focus:outline-none">
                  <MagnifyingGlassCircleIcon width={30} height={30} />
                </button>
                {isSearchVisible && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      searchMovies();
                    }}
                  >
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      type="text"
                      placeholder="Search Movie"
                      className="border border-gray-600 rounded-md px-2 py-1 text-black"
                    />
                  </form>
                )}
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white text-md hover:text-yellow-400 mt-1 mr-4 ml-7 "
                >
                  LOGOUT
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-yellow-400 flex items-center mr-7">
                <HomeIcon width={30} height={30} />
                <Link to="/" className="ml-2">
                  HOME
                </Link>
              </li>
              <li className="text-white text-md hover:text-yellow-400">
                <Link to="/register" className="mr-4 flex items-center">
                  <UserCircleIcon width={30} height={30} />
                  <span className="ml-2">REGISTER</span>
                </Link>
              </li>
              <li>
                <Link
                  className="text-white text-md hover:text-yellow-400 mt-1 mr-4 ml-5 flex item-between"
                  to="/login"
                >
                  LOGIN
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
