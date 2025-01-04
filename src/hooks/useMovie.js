import { useState, useEffect } from "react";
import { tmdbApiKey } from "../utils";

const BASE_URL = "https://api.themoviedb.org/3";

const useMovie = (
  type = "now_playing", // Type of movie list (e.g., now_playing, popular)
  page = "1",
  region = "US",
  language = "en-US",
  year = "2023",
  with_genres = ""
) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        // Include the API key in the query string
        const url = `${BASE_URL}/movie/${type}?api_key=${tmdbApiKey}&page=${page}&region=${region}&language=${language}&year=${year}&with_genres=${with_genres}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.status}`);
        }

        const json = await response.json();
        //console.log(json?.results);
        setMovies(json?.results);
      } catch (err) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useMovie;
