import Image from "next/image";
import MovieCard from "./components/MovieCard/MovieCard";
import RecomendedMovies from "./components/RecomendedMovies/RecomendedMovies";

export default function Home() {
  return (
    <>
      <MovieCard></MovieCard>
      <RecomendedMovies></RecomendedMovies>
    </>
  );
}
