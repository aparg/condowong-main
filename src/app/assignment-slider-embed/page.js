import AssignmentSlider from "@/components/AssignmentSlider";
import assignments from "@/constant/assignments";
import React from "react";

const page = () => {
  return (
    <div className="w-full sm:pt-40 pt-24 bg-black">
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-3">
        <h3 className="main-title font-extrabold text-[2rem] md:text-4xl text-white playfair text-center md:text-start mb-4">
          Featured Rental Properties
        </h3>
      </div>
      <AssignmentSlider data={assignments} />
    </div>
  );
};

export default page;
