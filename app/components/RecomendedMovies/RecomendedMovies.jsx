import MakingMovieCard from "@/app/ui/MakingMovieCard";
import SharedTittle from "@/app/ui/SharedTittle";
import movies from "@/app/utlis/getMoviesData";
const RecomendedMovies = () => {
  return (
    <div className="p-8">
      <SharedTittle title={"Recommended movies"}></SharedTittle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <MakingMovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default RecomendedMovies;
