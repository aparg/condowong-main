"use client";
import React, { useEffect, useRef } from "react";
//ICONS
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import PreconPropertyCard from "./PreconPropertyCard";

const PreconPropertySlider = ({ numberOfCards = 6, data }) => {
  const scrollRef = useRef(null); //used to hold scroll value
  const cardRef = useRef(null); //used to hold card width value

  //business is returned as Sale of business so we need to modify it to Business

  const slideLeft = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const scrollAmount = cardWidth * 3; // Adjust the scroll amount as needed
    scrollContainer.scrollLeft -= scrollAmount;
  };

  const slideRight = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const scrollAmount = cardWidth * 3; // Adjust the scroll amount as needed
    scrollContainer.scrollLeft += scrollAmount;
  };

  return (
    <div className="relative mb-8 shadow-m">
      {/* <div className="btns flex justify-between">
        <button
          className="scroll-left absolute start-0"
          title="scroll left"
          onClick={slideLeft}
        >
          <SlArrowLeft size={16} color="black" />
        </button>
        <button
          className="scroll-right absolute end-0"
          title="scroll right"
          onClick={slideRight}
        >
          <SlArrowRight size={16} color="black" />
        </button>
      </div> */}
      {/* <div className={`row row-cols-1 py-2`} id="slider" ref={scrollRef}> */}
      {data?.map((value, index) => {
        return (
          <div className="px-2" key={index}>
            <PreconPropertyCard
              key={index}
              data={value}
              ref={cardRef}
              link={`/${value.name.replace(" ", "-")}`}
            ></PreconPropertyCard>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default PreconPropertySlider;
