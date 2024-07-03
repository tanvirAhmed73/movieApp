"use client";
import { Gauge, Home, Layers2, LayoutList, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SideBar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">DASHBOARD</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal gap-10">
              {/* Navbar menu content here */}
              <li>
                <Link href={"allMovies"}>All Movies</Link>
              </li>
              <li>
                <Link href={"addMovie"}>Add Movie</Link>
              </li>
              <li>
                <Link href={"allUsers"}>Users</Link>
              </li>
              <li>
                <Link href={"allComments"}>All Comments</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 gap-5 p-4">
          {/* Sidebar content here */}
          <li>
            <Link href={"allMovies"}>All Movies</Link>
          </li>
          <li>
            <Link href={"addMovie"}>Add Movie</Link>
          </li>
          <li>
            <Link href={"allUsers"}>Users</Link>
          </li>
          <li>
            <Link href={"allComments"}>All Comments</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
