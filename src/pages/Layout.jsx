import React from "react";
import { Header, Footer } from "../components";
import { useMovie } from "../hooks";

import { Outlet } from "react-router-dom";

function Browse() {
  const { movies } = useMovie();
  //console.log("okay", movies[0]?.id);
  //console.log(movies[0]?.original_title);
  return (
    <div className="bg-gray-950">
      <div className="absolute flex w-full z-20">
        <Header />
      </div>
      <Outlet />

      <Footer />
    </div>
  );
}

export default Browse;
