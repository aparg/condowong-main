"use client";
import React, { useEffect, useRef, useState } from "react";
//ICONS
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
// import BlogCard from "./BlogCard";
import BlogCard from "./BlogCard";
import { fetchAllBlogPosts } from "@/api/blogs";
import NewsCard from "./NewsCard";
import useDeviceView from "@/helpers/useDeviceView";

const NewsSlider = ({ numberOfCards = 4 }) => {
  const [cardData, setCardData] = useState();
  const scrollRef = useRef(null); //used to hold scroll value
  const cardRef = useRef(null); //used to hold card width value
  const { isMobileView } = useDeviceView();

  useEffect(() => {
    fetchAllBlogPosts().then((cardData) => setCardData(cardData));
  }, []);

  const slideLeft = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    let scrollAmount;
    if (!isMobileView) {
      scrollAmount = cardWidth * 3;
    } else {
      scrollAmount = cardWidth * 1;
    } // Adjust the scroll amount as needed
    scrollContainer.scrollLeft -= scrollAmount;
  };

  const slideRight = () => {
    const scrollContainer = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    let scrollAmount;
    if (!isMobileView) {
      scrollAmount = cardWidth * 3;
    } else {
      scrollAmount = cardWidth * 1;
    }
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
        className={`row row-cols-lg-${numberOfCards} row-cols-md-5 row-cols-1 py-2`}
        id="slider"
        ref={scrollRef}
      >
        {cardData?.map((card, index) => {
          return (
            <div ref={cardRef}>
              <BlogCard
                blog={card}
                // miniTitle={card.miniTitle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsSlider;
