import PropertySlider from "@/components/PropertySlider";
import React from "react";

const page = async () => {
  const residentialData = await getFilteredRetsData({ saleLease: "Sale" });
  return <PropertySlider data={residentialData} />;
};

export default page;
