"use client";
import React, { useEffect, useRef } from "react";
//ICONS
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import NewsCard from "./NewsCard";

const Slider = ({ numberOfCards = 4, city }) => {
  const scrollRef = useRef(null); //used to hold scroll value
  const cardRef = useRef(null); //used to hold card width value
  const cardData = [
    {
      imgSrc: "/news.jpg",
      title: "News Title",
    },
    {
      imgSrc: "/news.jpg",
      title: "News Title adsfjasd fasldfans lalsdkfsdalf asdf",
    },
    {
      imgSrc: "/news.jpg",
      title: "News Title",
    },
    {
      imgSrc: "/news.jpg",
      title: "News Title",
    },
    {
      imgSrc: "/news.jpg",
      title: "News Title",
    },
    {
      imgSrc: "/news.jpg",
      title: "News Title",
    },
    {
      imgSrc: "/news.jpg",
      title: "News Title",
    },
    {
      imgSrc: "/news.jpg",
      title: "News Title",
    },
  ];
  //business is returned as Sale of business so we need to modify it to Business
  const modifyType = (type) => {
    if (type == "Sale Of Business") return "business";
    if (type == "Commercial/Retail") return "retail";
    return type;
  };

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
    <div className="relative">
      <div className="btns flex justify-between">
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
      </div>
      <div
        className={`row row-cols-lg-${numberOfCards} row-cols-md-3 row-cols-1 gap-x-4 py-2`}
        id="slider"
        ref={scrollRef}
      >
        {children}
      </div>
    </div>
  );
};
export default Slider;
