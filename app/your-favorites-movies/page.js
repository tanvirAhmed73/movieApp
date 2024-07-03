import Image from "next/image";
import moviePoster from "@/assets/movieposster.jpg";
import movieData from "../utlis/getFavoritesItems";
const page = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {movieData.map((movie, index) => (
        <div
          key={index}
          className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300 mx-auto"
        >
          <div className="relative">
            <Image
              className="w-full h-48 object-cover rounded-t-lg"
              src={moviePoster}
              alt={movie.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
              <h3 className="text-white text-xl font-semibold">
                {movie.title}
              </h3>
              <p className="text-white text-sm">{movie.description}</p>
            </div>
          </div>
          <div className="px-6 py-4">
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
              Remove from Your List
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
