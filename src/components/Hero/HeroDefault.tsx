"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../Navbar";
import Image from "next/image";

const RegularHero = () => {
  const carouselData = [
    {
      backgroundImage: "/assets/hero/mnd09.jpg",
      withAttribute: {
        title: "A Moment That Blooms",
        description:
          "As the snow of white Christmas falling down, we made our first promise to stay with each other, creating a new love story that lasts forever...",
      },
    },
    {
      backgroundImage: "/assets/hero/mal01.jpg",
      withAttribute: {
        title: "Preserve Your Moments",
        description:
          "The only real treasure is in your head. Memories are better than diamonds and nobody can steal them from you",
      },
    },
    {
      backgroundImage: "/assets/hero/mnd10.jpg",
      withAttribute: {
        title: "A Moment That Shine",
        description:
          "Memory is a way of holding onto the things you love, the things you are, the things you never want to lose. Remembering is an act of resurrection, each repetition a vital layer of mourning, each one a healing layer",
      },
    },
  ];

  return (
    <>
      <Navbar theme="dark" selected="home" />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation
      >
        {carouselData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={data.backgroundImage}
                layout="fill"
                alt="tokisaki-bg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center">
                {data.withAttribute ? (
                  <div className="text-center">
                    <h2 className="text-6xl mb-4 uppercase tracking-widest text-white">
                      {data.withAttribute.title}
                    </h2>
                    <p className="text-lg mb-4 max-w-2xl mx-auto text-white italic">
                      {data.withAttribute.description}
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Learn More
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RegularHero;
