import React from "react";

//LIB
import Link from "next/link";
import dayjs from "dayjs";

const BlogCard = ({ blog }) => {
  return (
    <div className="card border-0  bg-black-tint   my-3 my-md-0 blog-container shadow-lg position-relative">
      {/* Wrap the card in the Link component */}
      <Link href={`/market-news/${blog.slug}`} passHref className="h-100">
        <div className="image-container w-100 position-relative">
          <img
            loading="lazy"
            className="card-img-top"
            src={"https://wong.condomonk.ca" + blog.news_thumbnail}
            alt={blog.news_title.slice(0, 10)}
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
        <div className="card-body d-flex flex-column text-white">
          <h3 className="card-title fs-4 font-weight-bold text-white title-container mb-4 playfair">
            {blog.news_title}
          </h3>

          <div className="text-[#ff8] position-absolute bottom-0 mb-3">
            Posted {dayjs(blog?.date_of_upload).format("MMMM DD, YYYY")}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
