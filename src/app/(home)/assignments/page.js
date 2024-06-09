import React from "react";
import assignments from "@/constant/assignments";
import PropertyCard from "@/components/PropertyCard";
import AssignmentCard from "@/components/AssignmentCard";
const page = () => {
  return (
    <div className="pt-1 sm:pt-3 row row-cols-1 row-cols-md-3 row-cols-xs-1 row-cols-sm-1 row-cols-lg-4 sm:gap-y-[40px] container-fluid">
      {assignments.map((elem) => {
        return <AssignmentCard elem={elem} />;
      })}
    </div>
  );
};

export default page;
