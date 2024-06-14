import React from "react";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { fetchAllBlogPosts } from "@/api/blogs";
import dayjs from "dayjs";
import Link from "next/link";

const Blogs = async () => {
  const blogPosts = await fetchAllBlogPosts();
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
  return (
    <div className="w-full h-full  text-white mt-10 px-5 md:px-0">
      {/* {blogPosts.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-0 items-center justify-between bg-[#121212] lg:h-[600px] border-1 border-primary-color">
          <div className="textpart w-full md:w-[45%] flex flex-col items-start justify-center px-20 min-h-[216px]">
            <div className="title text-3xl  my-2 playfair">
              {blogPosts[0]?.news_title}
            </div>
            <div className="subtitle font-light text-sm">
              <div className="text-[#ff8] font-bold mb-3">
                Posted {blogPosts[0]?.date_of_upload}
              </div>
            </div>
          </div>
          <div className="imgpart w-full h-full md:w-[55%]">
            <img
              src={getThumbnailURL(blogPosts[0]?.news_link)}
              alt="Laptop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div>
          <p className="fs-2 text-center fw-bold text-secondary">
            No blog post found
          </p>
        </div>
      )} */}
      <Link href={"/"} className="d-flex justify-center">
        <img
          src="/youtube.webp"
          alt="youtube image"
          className="text-center w-12"
        />
      </Link>

      <h2
        className={` text-capitalize pt-4 fs-3 mb-2 font-extrabold text-center`}
      >
        Exclusive Toronto Real Estate News
      </h2>
      <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
        <Link
          href="/schedule"
          className="justify-between align-center bg-primary-color text-white rounded-0 py-2 px-4 font-normal hover:bg-[#B88A00] no-underline hover:no-underline"
        >
          Subscribe Now
        </Link>
      </div>

      <div className={`row gy-3 mt-10 mb-40`}>
        {blogPosts.length > 0 ? (
          <>
            {blogPosts.map((blog, index) => {
              return (
                <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={index}>
                  <BlogCard blog={blog} />
                </div>
              );
            })}
          </>
        ) : (
          <div>
            <p className="fs-2 text-center fw-bold text-secondary">
              No blog post found
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        {/* <Pagination
          pages={[1, 2, 3, 4, 5]}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        /> */}
      </div>
    </div>
  );
};

export default Blogs;
