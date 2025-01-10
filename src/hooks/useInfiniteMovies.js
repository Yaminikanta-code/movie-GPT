import { useState, useEffect } from "react";
import useMovie from "./useMovie";

const useInfiniteMovies = (
  type = "upcoming",
  region = "US",
  language = "en-US",
  year = "2023",
  with_genres = ""
) => {
  const [page, setPage] = useState(1); // Track the current page
  const [allMovies, setAllMovies] = useState([]); // Store all movies
  const [hasMore, setHasMore] = useState(true); // Track if more movies are available
  const [isFetching, setIsFetching] = useState(false); // Prevent duplicate fetches

  // Fetch movies for the current page
  const { movies, loading, error } = useMovie(
    type,
    page,
    region,
    language,
    year,
    with_genres
  );

  // Update allMovies and hasMore when new movies are fetched
  useEffect(() => {
    if (movies && movies.length > 0) {
      setAllMovies((prevMovies) => [...prevMovies, ...movies]);
    } else if (movies && movies.length === 0 && page > 1) {
      setHasMore(false); // No more movies only after multiple pages
    }
    setIsFetching(false); // Reset fetching flag
  }, [movies, page]);

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        hasMore &&
        !isFetching &&
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200
      ) {
        setIsFetching(true); // Prevent multiple fetches
        setPage((prevPage) => prevPage + 1); // Increment page
        console.log("page", page);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, isFetching]);

  return { allMovies, loading, error, hasMore };
};

export default useInfiniteMovies;
