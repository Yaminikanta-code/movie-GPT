import { useTrailer } from "../../hooks";

function VideoBackground({ movieId }) {
  const trailerVideo = useTrailer(movieId);

  return (
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
      <iframe
        className="w-full h-full object-cover pointer-events-none transform scale-105 "
        src="https://www.youtube.com/embed/-cT495xKvvs?&autoplay=1&mute=1&controls=0&loop=1&playlist=-cT495xKvvs&showinfo=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
