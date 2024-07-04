"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import moviePoster from "@/assets/movieposster.jpg";

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

const page = () => {
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
    <div className="container mx-auto p-4">
      <div className="relative rounded-lg shadow-lg overflow-hidden mb-4" style={{ height: '50vh' }}>
        <Image
          src={moviePoster}
          alt="movie poster"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
          <h3 className="text-white text-2xl font-semibold">{movieData.title}</h3>
          <p className="text-white text-sm">{movieData.description}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-white text-sm">{movieData.duration}</span>
            <span className="text-white text-sm">{movieData.year}</span>
            <span className="text-white text-sm">{movieData.quality}</span>
            <span className="text-white text-sm">{movieData.rating}</span>
          </div>
          <button
            onClick={handleClicked}
            className={`${clicked ? "text-red-600" : "text-white"} absolute top-4 right-4`}
          >
            <Heart />
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
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

export default page;
