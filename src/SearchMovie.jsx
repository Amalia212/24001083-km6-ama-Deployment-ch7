import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const API_KEY = "5e4a160d88ab953fadaaed22916b8438";

function MovieSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = new URLSearchParams(location.search).get("query");
    if (search) {
      setSearchTerm(search);
      fetchSearchResults(search);
    }
  }, [location.search]);

  const fetchSearchResults = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`,
        { headers: { accept: "application/json " } }
      );
      console.log("response.data ", response.data);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8 mb-4">
        Search Results for "{searchTerm}"
      </h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
          className="border border-gray-300 rounded px-4 py-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {searchResults.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-64 object-cover object-center"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
              <p className="text-sm text-gray-400">
                Release Date: {movie.release_date}
              </p>
              <p className="text-sm text-gray-300 mt-2">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
