import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { useMovie } from "../../hooks";

function MovieList({ title, type, with_genres }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const { movies } = useMovie(type);

  const handleClick = (direction) => {
    setIsMoved(true);
    const currentPosition = listRef.current.scrollLeft;
    const scrollAmount = 230;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.scrollTo({
        left: currentPosition - scrollAmount,
        behavior: "smooth",
      });
    }
    if (direction === "right" && slideNumber < movies.length - 1) {
      setSlideNumber(slideNumber + 1);
      listRef.current.scrollTo({
        left: currentPosition + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col w-full mt-20 relative">
      <span className="text-3xl font-semibold mb-2 text-white py-4">
        {title}
      </span>
      <div className="relative">
        <button
          className={`absolute top-1/2 -translate-y-1/2 left-2 z-10 cursor-pointer text-white bg-gray-800 rounded-full p-2 transition-transform ${
            !isMoved ? "hidden" : "block"
          }`}
          onClick={() => handleClick("left")}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <div
          className="flex overflow-x-scroll no-scrollbar w-full"
          ref={listRef}
        >
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 cursor-pointer text-white bg-gray-800 rounded-full p-2 transition-transform"
          onClick={() => handleClick("right")}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default MovieList;
