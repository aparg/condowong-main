"use client";
import React, { useEffect, useState } from "react";

//LIB
import Link from "next/link";
import dayjs from "dayjs";

const BlogCard = React.forwardRef(({ blog }, ref) => {
  const [imageUrl, setImageUrl] = useState("");
  const getThumbnailURL = (videoURL) => {
    // Regular expression to extract the video ID from the URL
    const videoIdRegex =
      /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    const match = videoURL.match(videoIdRegex);

    if (match && match[1].length === 11) {
      const videoId = match[1];
      // Construct the thumbnail URL using the video ID
      const thumbnailURL = `https://img.youtube.com/vi/${videoId}/0.jpg`;
      return thumbnailURL;
    } else {
      console.error("Invalid YouTube video URL");
      return null;
    }
  };
  useEffect(() => {
    setImageUrl(getThumbnailURL(blog.news_link));
  });
  return (
    <div
      className="card  border-0  bg-black-tint my-3 my-md-0 blog-container shadow-lg position-relative"
      ref={ref}
    >
      {/* Wrap the card in the Link component */}
      <Link href={`/market-news/${blog.slug}`} passHref className="h-100">
        <div className="image-container w-100 position-relative">
          <img
            loading="lazy"
            className="card-img-top"
            src={imageUrl}
            alt={blog.news_title.slice(0, 10)}
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
        <div className="card-body d-flex flex-column text-white">
          <h3 className="card-title fs-4 font-weight-bold text-white title-container mb-4 playfair text-wrap">
            {blog.news_title}
          </h3>

          <div className="text-[#ff8] position-absolute bottom-0 mb-3">
            Posted {dayjs(blog?.date_of_upload).format("MMMM DD, YYYY")}
          </div>
        </div>
      </Link>
    </div>
  );
});

export default BlogCard;
