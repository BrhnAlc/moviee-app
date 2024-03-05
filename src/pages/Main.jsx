import React from "react";
import { MovieContext } from './../context/MovieContext';
import { useContext } from "react";
import MovieCard from "../components/MovieCard";


const Main = () => {
  const {movies} = useContext(MovieContext)
  console.log(movies);
  return (
  <>
  <div className="flex justify-center flex-wrap">
  {movies.map((movie)=><MovieCard key={movie.id} {...movie}/>)}
  </div>
</>
);
};

export default Main;
