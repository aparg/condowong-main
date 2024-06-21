import PropertySlider from "@/components/PropertySlider";
import React from "react";

const page = async () => {
  const rentalData = await getFilteredRetsData({ saleLease: "Lease" });
  return <PropertySlider data={rentalData} />;
};

export default page;
