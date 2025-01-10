import React from "react";
import { Header, Footer, MainContainer } from "../components";
import { useMovie } from "../hooks";
import { SecondaryContainer } from "../components";

function Browse() {
  const { movies } = useMovie();
  //console.log("okay", movies[0]?.id);
  //console.log(movies[0]?.original_title);
  return (
    <div>
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
