import AssignmentSlider from "@/components/AssignmentSlider";
import assignments from "@/constant/assignments";
import React from "react";

const page = () => {
  return <AssignmentSlider data={assignments} />;
};

export default page;
