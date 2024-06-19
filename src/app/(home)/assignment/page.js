"use client";
import React from "react";
import assignments from "@/constant/assignments";
import PropertyCard from "@/components/PropertyCard";
import AssignmentCard from "@/components/AssignmentCard";
import Contact from "@/components/Contact";
import useDeviceView from "@/helpers/useDeviceView";
const page = () => {
  const isMobileView = useDeviceView();
  return (
    <>
      <div className="container-fluid mt-7">
        <h2
          className={`fs-3 font-bold d-flex text-capitalize mb-4 ${
            isMobileView ? "pt-3" : "pt-4"
          }`}
        >
          Featured Assignment Properties
        </h2>
        {/* <p className="fw-light mb-5 text-gray-400 mt-2">
          Find your best assignment deals in Canada. We have a wide range of new
          assignments for sale in Canada.
        </p> */}
      </div>

      <div className="pt-1 sm:pt-3 row row-cols-1 row-cols-md-3 row-cols-xs-1 row-cols-sm-1 row-cols-lg-4 sm:gap-y-[40px] mx-1 sm:px-[3rem] gy-5 mb-20">
        {assignments.map((elem) => {
          return (
            <div className="px-1">
              <AssignmentCard elem={elem} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
