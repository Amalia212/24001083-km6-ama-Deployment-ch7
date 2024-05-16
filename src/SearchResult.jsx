import React from "react";

export default function SearchResult(props) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4 text-yellow-200">
        Search Result
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
        {props.resultSearch?.map((e) => (
          <div
            key={e?.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:bg-gray-700"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${e?.poster_path}`}
              alt={e?.title}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-white mb-2">{e?.title}</h2>
              <p className="text-gray-300 mb-2">
                Release Date: {e?.release_date}
              </p>
              <p className="text-gray-400">{e?.overview.slice(0, 150)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
