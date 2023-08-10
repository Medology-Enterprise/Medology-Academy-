import { easeIn, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCarouselLogic } from "./useCarouselLogic";
import aliabrar from "../assets/aliabrar.png";
import taabishahmed from "../assets/taabishahmed.png";
import hamzabinmajid from "../assets/hamzabinmajid.png";
import anant from "../assets/anant.png";
const CarouselDisplay = () => {
  const { carouselProps } = useCarouselLogic();
  const people = [
    {
      name: "Ali Abrar",
      role: "Dentist",
      education: "University of Oxford",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl: aliabrar,
    },
    {
      name: "Tabish Ahmed",
      role: "Dentist",
      education: "University of Sheffield",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl: taabishahmed,
    },
    {
      name: "Hamza Bin-Majid",
      role: "Dentist",
      education: "University of Manchester",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl: hamzabinmajid,
    },
    {
      name: "Anant Dandotiya",
      role: "Dentist",
      education: "University of Bristol",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl: anant,
    },
    {
      name: "Kirat Dhillon",
      role: "Dentist",
      education: "University of Bristol",
      description:
        "Lorem ipsum dolor sit amet, elit adipiscing consectetur elit",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    // More people...
  ];
  return (
    <>
      <div className={` visible overflow-hidden w-full mt-10`}>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showArrows={true}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          stopOnHover={true}
          {...carouselProps}
          renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } sm:top-[32rem] lg:top-[28rem] left-28 bottom-10 sm:left-[15rem] lg:left-[35rem] flex justify-center items-end hover:opacity-100 cursor-pointer z-30`}
                onClick={clickHandler}
              >
                <button className="border-2 text-white text-2xl border-white rounded-full px-2 py-1 w-12 h-12">
                  ←
                </button>
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } sm:top-[32rem] lg:top-[28rem] bottom-10 sm:bottom-20 lg:bottom-20 right-28 sm:right-[15rem] lg:right-[35rem] flex justify-center items-end hover:opacity-100 cursor-pointer z-30`}
                onClick={clickHandler}
              >
                <button className="border-2 text-white text-2xl border-white rounded-full px-2 py-1 w-12 h-12">
                  →
                </button>
              </div>
            );
          }}
          className="flex overflow-hidden h-[35rem] sm:h-[35rem] lg:h-[30rem] "
        >
          {people.map((person) => (
            <div
              key={person.name}
              className="lg:w-[16rem] sm:w-[20rem] h-full rounded-2xl bg-color-box px-2 pt-2 pb-4"
            >
              <img
                className="h-[16rem] w-64 rounded-xl md:h-[14rem] md:w-[18rem] sm:h-[14rem] sm:w-72"
                src={person.imageUrl}
                alt=""
              />
              <div className="flex justify-between">
                <h3 className="mt-6 text-lg mb-2 font-semibold leading-7 tracking-tight text-white">
                  {person.name}
                </h3>
                <button className="mt-6 border-2 rounded-full border-button text-sm">
                  {person.role}
                </button>
              </div>
              <p className="flex justify-start text-sm mb-2 font-semibold leading-6 text-color-primary">
                {person.education}
              </p>
              <p className="flex justify-start text-sm leading-5 text-white">
                {person.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default CarouselDisplay;
