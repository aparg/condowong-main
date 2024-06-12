import React from "react";
import assignments from "@/constant/assignments";
import PropertyCard from "@/components/PropertyCard";
import AssignmentCard from "@/components/AssignmentCard";
import Contact from "@/components/Contact";
const page = () => {
  return (
    <>
      <div className="container-fluid mt-7">
        <h2 className="city-headline d-flex text-capitalize">
          Check out Assignments for Sale in Canada
        </h2>
        <p className="fw-light mb-5 text-gray-400 mt-2">
          Find your best assignment deals in Canada. We have a wide range of new
          assignments for sale in Canada.
        </p>
      </div>

      <div className="pt-1 sm:pt-3 row row-cols-1 row-cols-md-3 row-cols-xs-1 row-cols-sm-1 row-cols-lg-4 sm:gap-y-[40px] mx-1 sm:container-fluid gy-5">
        {assignments.map((elem) => {
          return <AssignmentCard elem={elem} />;
        })}
      </div>
    </>
  );
};

export default page;
