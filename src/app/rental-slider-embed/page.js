import { getFilteredRetsData } from "@/actions/getSalesData";
import PropertySlider from "@/components/PropertySlider";
import React from "react";

const page = async () => {
  const rentalData = await getFilteredRetsData({ saleLease: "Lease" });
  return (
    <div className="sm:mt-40 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-3">
        <h3 className="main-title font-extrabold text-[2rem] md:text-4xl text-white playfair text-center md:text-start mb-4">
          Featured Rental Properties
        </h3>
      </div>
      <PropertySlider data={rentalData} />
    </div>
  );
};

export default page;
