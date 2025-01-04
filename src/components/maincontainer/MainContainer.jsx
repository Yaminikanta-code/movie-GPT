import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useMovie } from "../../hooks";

function MainContainer() {
  const { movies, loading } = useMovie();

  if (!movies) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-full aspect-video bg-black">
      <VideoBackground movieId={mainMovie?.id} />
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
    </div>
  );
}

export default MainContainer;
