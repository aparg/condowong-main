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
    <div className="rounded-md overflow-hidden relative" ref={ref}>
      <Link
        href={`/market-news/${blog.slug}`}
        passHref
        className="h-[340px] visited:text-black rounded-md border-0"
      >
        <div className="image-container h-[180px] position-relative rounded-t-md overflow-hidden">
          <img
            loading="lazy"
            className="card-img-top object-cover w-full h-full rounded-t-md"
            src={imageUrl}
            alt={blog.news_title.slice(0, 10)}
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
        <div class="card-body flex flex-col h-40 bg-white pt-3">
          <h3 class="card-title text-lg line-clamp-3">{blog.news_title}</h3>
          <div className="text-primary-color bottom-0 mb-2 absolute">
            Posted on {dayjs(blog?.date_of_upload).format("MMMM DD, YYYY")}
          </div>
        </div>
      </Link>
    </div>
  );
});

export default BlogCard;
