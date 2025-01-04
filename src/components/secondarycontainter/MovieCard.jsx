import React from "react";
import { IMG_CDN_URL } from "../../utils";

function MovieCard({ movie }) {
  return (
    <div className="w-40 sm:w-48 lg:w-56 flex-shrink-0 rounded-lg bg-gray-900 text-white shadow-lg mx-2 hover:scale-105 transform transition-transform duration-300">
      <div className="relative">
        <img
          src={IMG_CDN_URL + movie?.poster_path}
          alt={movie?.original_title || "Movie Poster"}
          className="w-full h-60 object-contain bg-gray-800 rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-yellow-400 text-xs font-bold px-2 py-1 rounded">
          <i className="fas fa-star mr-1" />
          {movie?.vote_average}
        </div>
      </div>
      <div className="p-3 flex flex-col items-start">
        <h3
          className="text-sm font-semibold mb-2 truncate w-full"
          title={movie?.original_title}
        >
          {movie?.original_title}
        </h3>
        <p className="text-xs text-gray-400">
          Release Year:{" "}
          <span className="font-medium">
            {movie?.release_date?.slice(0, 4) || "N/A"}
          </span>
        </p>
        <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1 rounded text-sm transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
