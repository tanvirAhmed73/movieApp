"use client";
import { CirclePlay, Heart } from "lucide-react";
import Image from "next/image";
import moviePoster from "@/assets/movieposster.jpg";
import { useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

const MakingSwiperCard = ({
  title,
  description,
  duration,
  year,
  quality,
  rating,
  image,
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(!clicked);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "This Movie Added To Your Favorites List",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden">
      <Image
        src={moviePoster}
        alt={"movie poster"}
        className="object-cover"
        objectFit="fill"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
        <Link href={"/movieDetails/id"}>
          <div className="flex justify-center items-center  flex-grow">
            <span className="">
              <CirclePlay size={44} />
            </span>
          </div>
          <h3 className="text-white text-center hover:text-red-600 text-xs md:text-xl font-semibold">
            {title}
          </h3>
        </Link>
        <div className="flex justify-between">
          <span className="text-white text-xs md:text-sm">{quality}</span>
          <span className="text-white text-xs md:text-sm">{year}</span>
        </div>
        {/* <p className="text-white hover:text-red-600 text-sm">{description}</p> */}
        {/* <div className="flex justify-between items-center mt-2">
          <span className="text-white text-sm">{duration}</span>
          <span className="text-white text-sm">{rating}</span>
        </div> */}
        <button
          onClick={handleClicked}
          className={`${
            clicked ? "text-red-600" : "text-white"
          } absolute top-4 right-4 `}
        >
          <Heart />
        </button>
      </div>
    </div>
  );
};

export default MakingSwiperCard;