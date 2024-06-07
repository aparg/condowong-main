import React from "react";
import NewsCard from "./NewsCard";

const RealEstateNews = () => {
  const cardData = [
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
  return (
    <>
      <h3 className="main-title fs-2">Real Estate News</h3>
      <div className="grid grid-cols-1 lg:mt-2 gap-y-2 md:grid-cols-4 gap-x-6">
        {cardData.map((news) => (
          <NewsCard imageSrc={news.imgSrc} title={news.title} />
        ))}
      </div>
    </>
  );
};

export default RealEstateNews;
