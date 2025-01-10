import React from "react";
import { useParams } from "react-router-dom";
import { useInfiniteMovies } from "../hooks";
import { Shimmer } from "../components";

const MoviesList = ({
  region = "US",
  language = "en-US",
  year = "2023",
  with_genres = "",
}) => {
  const { type } = useParams(); // Get 'type' from URL parameters
  const { allMovies, loading, error, hasMore } = useInfiniteMovies(
    type || "upcoming", // Fallback to "upcoming" if type is undefined
    region,
    language,
    year,
    with_genres
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl text-white font-bold mb-4 mt-10 capitalize">
        {type?.replace("_", " ") || "Upcoming"} Movies
      </h1>
      {loading && allMovies.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {allMovies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 p-4 rounded shadow">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded mb-2"
              />
              <h2 className="text-lg font-semibold text-white">
                {movie.title}
              </h2>
            </div>
          ))}
        </div>
      )}
      {loading && allMovies.length > 0 && (
        <p className="text-center mt-4">Loading more...</p>
      )}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      {!hasMore && (
        <p className="text-center mt-4 text-white">
          No more movies to display.
        </p>
      )}
    </div>
  );
};

export default MoviesList;
