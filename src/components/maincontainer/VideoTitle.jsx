import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-24 bg-gradient-to-r from-black/80 via-black/50 to-transparent text-white z-10">
      <h1 className="text-3xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="hidden md:block text-lg max-w-md leading-relaxed">
        {overview}
      </p>
    </div>
  );
}

export default VideoTitle;
