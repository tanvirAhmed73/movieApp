"use client";
import { CircleUserRound, Heart, Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {

  return (
    <div className="btm-nav z-40">
      {/* home button */}
      <Link
        className={` hover:bg-blue-200 hover:text-blue-600 bg-opacity-50 bg-gray-200 backdrop-filter backdrop-blur-lg border-r-2 border-gray-500`}
        href={"/home"}
      >
        <button>
          <Home />
        </button>
      </Link>

      {/* favourite button */}
      <Link
        className={`hover:bg-red-200 hover:text-red-600 bg-opacity-50 bg-gray-200 backdrop-filter backdrop-blur-lg border-r-2 border-gray-500`}
        href={"/your-favorites-movies"}
      >
        <button>
          <Heart />
        </button>
      </Link>

      {/* admin button */}
      <Link
        className={`hover:bg-blue-200 hover:text-blue-600 bg-opacity-50 bg-gray-200 backdrop-filter backdrop-blur-lg  border-gray-500`}
        href={"/admin"}
      >
        <button>
          <CircleUserRound />
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
