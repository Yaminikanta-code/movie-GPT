import MovieList from "./MovieList";

function SecondaryContainer() {
  return (
    <div className="-mt-30 md:-mt-52 pl-4 md:pl-12 relative z-30 mb-20 bg-transparent ">
      <MovieList title={"Upcoming Movies"} movies={"upcoming"} />
      <MovieList title={"Now Playing"} type={"now_playing"} />
      <MovieList title={"Top Rated"} type={"top_rated"} />
      <MovieList title={"Popular"} type={"popular"} />
    </div>
  );
}
export default SecondaryContainer;
