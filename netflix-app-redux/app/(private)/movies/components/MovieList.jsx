"use client";
import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { useDraggable } from "react-use-draggable-scroll";

const MovieList = async ({ movies }) => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <div
      className="grid grid-flow-col gap-2 overflow-x-scroll"
      ref={ref}
      {...events}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
