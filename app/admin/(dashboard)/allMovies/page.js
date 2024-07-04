import React from "react";
import moviePoster from "@/assets/movieposster.jpg";
import Image from "next/image";
import movieData from "@/app/utlis/getMoviesData";
import Link from "next/link";
const page = () => {
  return (
    <div className="mx-10 grid mt-10 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movieData.map((movie) => (
        <div
          key={movie.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <Image
            src={moviePoster}
            alt={movie.title}
            className="w-full h-40 object-cover object-center"
            objectFit="fill"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <p className="text-sm text-gray-600">{movie.description}</p>
            <div className="flex justify-between mt-4">
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none mr-2">
                Remove
              </button>
              <Link href={'editMovieDetails'}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none mr-2">
                  Edit
                </button>
              </Link>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
