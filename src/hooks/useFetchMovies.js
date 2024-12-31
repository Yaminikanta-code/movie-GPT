import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils";

const useFetchMovies = (type, movieId = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    let url = "";

    // Determine API endpoint based on type
    switch (type) {
      case "trailer":
        if (!movieId) {
          setError("Movie ID is required for fetching trailer videos.");
          setLoading(false);
          return;
        }
        url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
        break;
      case "nowPlaying":
        url = "https://api.themoviedb.org/3/movie/now_playing?page=1";
        break;
      case "popular":
        url = "https://api.themoviedb.org/3/movie/popular?page=1";
        break;
      default:
        setError("Invalid type provided to useFetchMovies.");
        setLoading(false);
        return;
    }

    try {
      const response = await fetch(url, API_OPTIONS);
      const json = await response.json();

      if (type === "trailer") {
        const filteredData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        setData(filteredData.length ? filteredData[0] : json.results[0]);
      } else {
        setData(json.results);
      }
    } catch (err) {
      setError("Failed to fetch movies: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type, movieId]);

  return { data, error, loading };
};

export default useFetchMovies;
