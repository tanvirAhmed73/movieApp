"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import moviePoster from "@/assets/movieposster.jpg";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const movieData = {
  id: "1",
  title: "Made in Heaven",
  description: "A thrilling movie about the adventures in the sky.",
  duration: "2h 30m",
  year: "2023",
  quality: "HD",
  rating: "8.5",
  image: moviePoster,
};

const Page = () => {
  const router = useRouter();

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
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
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <div >
      <div style={{ height: "50vh" }}>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ height: "100%" }}
        >
          <SwiperSlide>
            <Image src={moviePoster} alt="image" objectFit="fill"></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={moviePoster} alt="image" objectFit="fill"></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={moviePoster} alt="image" objectFit="fill"></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image src={moviePoster} alt="image" objectFit="fill"></Image>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* movie details */}
      <div className="mx-10">
        <div className=" mt-5 mx-auto bg-gray-800 text-white shadow-lg p-6">
          <div className="md:flex items-start space-x-4">
            <Image className="mx-auto" src={moviePoster} alt="image" width={200} height={300}></Image>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="md:text-2xl font-bold">DRAGON PRINCE YUAN</h2>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
              </div>
              <p className="text-gray-400 italic mb-4">
                Dragon Prince Yuan, Yuan Zun,
              </p>
              <p className="mb-4">
                A young man with his brush plunges into a chaotic world and
                lights up the heavens. In a world where cultivators are
                paramount, will the vermilion bird swallow the dragon, or will
                the dragon transcend beyond all else?!
              </p>
              <div className="flex flex-col space-y-1">
                <div className="text-sm">
                  <span className="font-semibold">Type:</span> ONA
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Studios:</span> Motion Magic
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Date aired:</span> May 30,
                  2024 to ?
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Status:</span> Currently
                  Airing
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Genre:</span> Action,
                  Adventure, Fantasy, Martial Arts
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Scores:</span>{" "}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Premiered:</span> Spring 2024
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Duration:</span> 20 min/ep
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Quality:</span> HD
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Views:</span> 3,454
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* user add comment */}
      <div className="bg-white mx-10 p-4 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold mb-2">Comments</h4>
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded-lg"
            rows="3"
            placeholder="Add a comment..."
          ></textarea>
          <button
            onClick={handleAddComment}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Post Comment
          </button>
        </div>
        <div>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="border-b pb-2 mb-2">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default Page;
