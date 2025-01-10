import { useTrailer } from "../../hooks";

function VideoBackground({ movieId }) {
  const { trailerVideo } = useTrailer(movieId);

  // Get the YouTube video ID dynamically
  const videoId = trailerVideo?.key || "-cT495xKvvs"; // Default ID if trailerVideo is undefined

  return (
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
      <iframe
        className="w-full h-full object-cover pointer-events-none transform scale-105"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
