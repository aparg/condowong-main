
import React from "react";
import Image from "next/image";
import CardContent from "../../components/CardContent";
import getNewsData from "../../../actions/getNewsData";
import Pagination from "@/components/Pagination";
import Link from "next/link";

const page = async () => {
  // // const rentalData = await getNewsData({ saleLease: "Lease" });
  // const [currentPage, setCurrentPage] = useState(1); // Add a state for the current page

  // const handlePageChange = (page) => {
  //   setCurrentPage(page); // Update the current page when a page button is clicked
  // };


  const cards = [
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
  ];

  return (
    <div className="w-full h-full  text-white">
      <div
        className="flex flex-col md:flex-row gap-0 items-center justify-between bg-[#121212] lg:h-[600px]"
      >
        <div className="textpart w-full md:w-[45%] flex flex-col items-start justify-center px-20 min-h-[216px]">
          <div className="mini-title text-sm font-light uppercase text-white">
            Unique Living
          </div>
          <div className="title text-3xl  my-2 playfair">
            How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch
            This!
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

      <div
        className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8`}
      >
       {cards.map((card, index) => (
              <CardContent {...card} />
        ))}
      </div>

      <div className="flex justify-center items-center">
        {/* <Pagination pages={[1, 2, 3, 4, 5]} currentPage={currentPage} onPageChange={handlePageChange} /> */}
      </div>
    </div>
  );
};

export default page;
