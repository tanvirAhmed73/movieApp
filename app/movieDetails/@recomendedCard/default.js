'use client'
import SharedTittle from "@/app/ui/SharedTittle";
import movieData from "@/app/utlis/getMoviesData";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import MakingSwiperCard from "@/app/ui/MakingSwiperCard";

const defaultCardPage = async () => {
  return (
    <div className="mb-32 ">
      <SharedTittle title={"Recommended movies..."}></SharedTittle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movieData.map((movie, index) => (
          <SwiperSlide key={index}><MakingSwiperCard  {...movie} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
    
  );
};

export default defaultCardPage;
