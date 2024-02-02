import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";

const Movies = async () => {
  const movies = await getMovies("now_playing");
  //   console.log(movies);

  

  return (
    <>
      <HeroSection
        movieId={movies[1].id}
        title={movies[1].title}
        overview={movies[1].overview}
      />
      <div className="px-4 md:px12 mt-4">
        <MovieSection title="NOW PLAYING" type="now_playing" />
        <MovieSection title="POPULAR" type="popular" />
        <MovieSection title="TOP RATED" type="top_rated" />
        <MovieSection title="UPCOMING" type="upcoming" />
      </div>
    </>
  );
};

export default Movies;
