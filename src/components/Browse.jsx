import React from "react";
import Header from "./Header";

function Browse() {
  return (
    <div className="bg-black">
      <div className="w-full h-screen flex flex-wrap justify-center bg-white/10 backdrop-blur-lg sm:bg-transparent sm:backdrop-blur-none">
        <Header />
      </div>
    </div>
  );
}

export default Browse;
