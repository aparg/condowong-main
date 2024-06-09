import React from "react";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { fetchAllBlogPosts } from "@/api/blogs";

const Blogs = async () => {
  const blogPosts = await fetchAllBlogPosts();
  return (
    <div className="w-full h-full  text-white mt-10">
      <div className="flex flex-col md:flex-row gap-0 items-center justify-between bg-[#121212] lg:h-[600px]">
        <div className="textpart w-full md:w-[45%] flex flex-col items-start justify-center px-20 min-h-[216px]">
          <div className="mini-title text-sm font-light uppercase text-white">
            Unique Living
          </div>
          <div className="title text-3xl  my-2 playfair">
            How to Assign a Condo Unit FAST - Don&apos;t Walk Away Until You
            Watch This!
          </div>
          <div className="subtitle font-light text-sm">
            At the very beginning of 2023, I published this video in response to
            news headlines saying “Record Number of Condos to Flood Toronto...
          </div>
        </div>
        <div className="imgpart w-full h-full md:w-[55%]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className={`row`}>
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
