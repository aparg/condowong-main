import PreconPropertySlider from "@/components/PreconPropertySlider";
import React from "react";

const page = () => {
  const preconData = [
    {
      name: "Daniels on Parliament",
      location: "365 Parliament St, Toronto, ON",
      imgSrc: "/pre-constructions/daniel-on-parliament/1.png",
    },
  ];
  return (
    <div className="sm:pt-40 pt-24 bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center mb-3">
        <h3 className="main-title font-extrabold text-[2rem] md:text-4xl text-white playfair text-center md:text-start mb-4">
          Featured Rental Properties
        </h3>
      </div>
      <PreconPropertySlider data={preconData} />
    </div>
  );
};

export default page;
