import { easeIn, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useCarouselLogic } from "./useCarouselLogic";

const CarouselDisplay = () => {
  const { people, carouselProps } = useCarouselLogic();
  const [visibility, setVisibility] = useState("visible");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: "-100vh" }}
        animate={isVisible ? { x: 0 } : {}}
        transition={{ ease: easeIn }}
        // ref={props.entryRef}
        className={` ${visibility} ml-[40rem] overflow-hidden w-full mt-10`}
      >
        <motion.div
          initial={{ x: "-200vh" }}
          animate={isVisible ? { x: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex"
        ></motion.div>
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
                } top-[25rem] bottom-20 left-[35rem] flex justify-center items-end hover:opacity-100 cursor-pointer z-30`}
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
                } top-[25rem] bottom-20 right-[35rem] flex justify-center items-end hover:opacity-100 cursor-pointer z-30`}
                onClick={clickHandler}
              >
                <button className="border-2 text-white text-2xl border-white rounded-full px-2 py-1 w-12 h-12">
                  →
                </button>
              </div>
            );
          }}
          className="flex overflow-hidden mb-20"
        >
          {people.map((person) => (
            <div
              key={person.name}
              className="w-[16rem] rounded-2xl bg-color-box px-2 pt-2 pb-4"
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
      </motion.div>
    </>
  );
};
export default CarouselDisplay;
