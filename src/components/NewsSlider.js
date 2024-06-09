"use client";
import React, { useEffect, useRef } from "react";
//ICONS
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// import BlogCard from "./BlogCard";
import BlogCard from "./BlogCard";
import { fetchAllBlogPosts } from "../../api/blogs";

const NewsSlider = ({ numberOfCards = 4 }) => {
  const scrollRef = useRef(null); //used to hold scroll value
  const cardRef = useRef(null); //used to hold card width value
  const cardData = fetchAllBlogPosts();

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
        {/* {cardData.map((card, index) => {
          return (
            <BlogCard
              key={index}
              title={card.title}
              imageSrc={card.imgSrc}
              link={card.link}
              miniTitle={card.miniTitle}
              ref={cardRef}
            />
          );
        })} */}
        {JSON.stringify(cardData)}
      </div>
    </div>
  );
};

export default NewsSlider;
