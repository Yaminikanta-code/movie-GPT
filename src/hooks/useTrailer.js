import { useState, useEffect } from "react";
import { tmdbApiKey } from "../utils";

const BASE_URL = "https://api.themoviedb.org/3";

const useTrailer = (movieId) => {
  const [trailerVideo, setTrailerVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(movieId);

  useEffect(() => {
    const fetchTrailer = async () => {
      setLoading(true);
      setError(null);
      //console.log("movieId", movieId);
      if (!movieId) {
        return;
      }

      try {
        const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${tmdbApiKey}&language=en-US`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Failed to fetch trailer: ${response.status}`);
        }

        const json = await response.json();
        const filterData = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json.results[0];
        setTrailerVideo(trailer);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (!trailerVideo) {
      fetchTrailer();
    }
  }, [movieId, trailerVideo]);

  return { trailerVideo, loading, error };
};

export default useTrailer;
