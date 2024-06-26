"use client";
import React, { useState, useEffect, useMemo } from "react";

import { Image } from "react-bootstrap";

import TimeAgo from "@/components/TimeAgo";

//CUSTOM HOOKS
import useDeviceView from "@/helpers/useDeviceView";

//CONSTANT
import Collapse from "@/components/Collapse";

//ICONS
import { priceFormatter } from "@/helpers/priceFormatter";

const PropertyPage = ({ main_data }) => {
  const [navbar, setNavbar] = useState(false);
  const { isMobileView } = useDeviceView();
  const getCommunityFeatures = () => {
    const {
      PropertyFeatures1,
      PropertyFeatures2,
      PropertyFeatures3,
      PropertyFeatures4,
      PropertyFeatures5,
      PropertyFeatures6,
    } = main_data;

    return [
      PropertyFeatures1,
      PropertyFeatures2,
      PropertyFeatures3,
      PropertyFeatures4,
      PropertyFeatures5,
      PropertyFeatures6,
    ].join(", ");
  };

  const formatNumber = (value) => {
    // Check if the value is not null or undefined
    if (value != null) {
      return Number(value).toLocaleString("en-US");
    } else {
      // Handle the case where the value is null or undefined
      return "N/A"; // or any default value or message you prefer
    }
  };

  function formatCurrency(value) {
    // Check if the value is not null or undefined
    if (value != null) {
      return Number(value).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
    } else {
      // Handle the case where the value is null or undefined
      return "N/A"; // or any default value or message you prefer
    }
  }

  const handleScrollToContactAgent = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dashedStreetName = `${main_data.Street}-${main_data.StreetName}-${main_data.StreetAbbreviation}`;

  const price = formatCurrency(main_data?.ListPrice);
  const TaxAnnualAmount = formatCurrency(main_data?.Taxes);
  const AssociationFee = formatCurrency(main_data?.AddlMonthlyFees);

  const priceDecreased = useMemo(() => {
    if (
      parseFloat(main_data.MinListPrice) === parseFloat(main_data.ListPrice) &&
      parseFloat(main_data.ListPrice) < parseFloat(main_data.MaxListPrice)
    ) {
      return true;
    }
    return false;
  }, [main_data.MaxListPrice, main_data.ListPrice, main_data.MinListPrice]);
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 870) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      });
    }
  }, []);

  return (
    <>
      <div className="screenshot col-12">
        <div
          className={`border-0  rounded-0 ${
            isMobileView ? "sm:p-4 pt-3 mt-3" : "mt-0"
          }`}
        >
          <div className="w-full">
            <div className="flex items-center w-full">
              <div className="flex flex-col w-full">
                <div className="flex flex-col items-start w-full">
                  <div className="flex flex-row items-center">
                    <h3 className="main-title fs-1 text-primary-color mt-3">
                      C{price}
                    </h3>
                    <div className="flex items-center">
                      {/* <Image
                          className="w-5 h-4 mx-1"
                          src="/price-reduced.png"
                          alt="reduced"
                        ></Image> */}
                      {/* <span className=" text-green-700 text-lg font-medium">
                          C$
                          {priceDecreased &&
                            priceFormatter(
                              parseFloat(main_data.MaxListPrice) -
                                parseFloat(main_data.ListPrice)
                            )}
                        </span> */}
                    </div>
                  </div>
                  <div className="w-full">
                    <h1 className="fs-6 cardd-subtitle text-xl text-white mt-0 font-bold">
                      {main_data.AptUnit ? `${main_data.AptUnit} - ` : ""}
                      {main_data.Street || ""} {main_data.StreetName || ""}{" "}
                      {main_data.StreetAbbreviation || ""}{" "}
                    </h1>
                    <h1 className="fs-6 cardd-subtitle text-lg text-white mt-0 font-medium">
                      {main_data.Municipality || ""}, {main_data.Province || ""}
                      , {main_data.PostalCode || ""}
                    </h1>
                    <div className="rounded-0 items-center text-white my-1 hidden sm:flex sm:justify-between sm:w-[60%]">
                      <div className="d-flex align-items-center gap-1 text-[1rem] justify-end">
                        <img
                          src="/bedrooms.svg"
                          alt="bedrooms"
                          className="w-5"
                        />{" "}
                        {main_data.Bedrooms} Bedroom
                      </div>
                      {/* <span className="text-lg mx-1 hidden sm:inline">|</span> */}
                      <div className="d-flex align-items-center gap-1 text-[1rem] justify-end">
                        <img
                          src="/bathrooms.svg"
                          alt="washrooms"
                          className="w-5"
                        />{" "}
                        {main_data.Washrooms} Bathroom
                      </div>
                      {main_data.ApproxSquareFootage && (
                        <>
                          {/* <span className="text-lg mx-1 hidden sm:inline">
                              |
                            </span> */}
                          <div className="d-flex justify-content-center align-items-center gap-1 text-[1rem] ">
                            <img
                              src="/approxArea.svg"
                              alt="garages"
                              className="w-[18px] mr-1"
                            />{" "}
                            {main_data.ApproxSquareFootage} Sq. Ft.{" "}
                          </div>
                        </>
                      )}
                      {main_data.GarageSpaces && (
                        <>
                          {/* <span className="text-lg hidden sm:inline">|</span> */}
                          <div className="d-flex justify-content-center align-items-center gap-1 text-[1rem] ">
                            <img
                              src="/garage.svg"
                              alt="garages"
                              className="w-5"
                            />{" "}
                            {Math.trunc(main_data.GarageSpaces)} Garage
                          </div>
                        </>
                      )}
                    </div>
                    {/* Mobile Version */}
                    <div className="row sm:hidden">
                      <div className="col-6 flex align-items-center gap-1 text-[1rem] justify-start">
                        <img
                          src="/bedrooms.svg"
                          alt="bedrooms"
                          className="w-5"
                        />{" "}
                        {main_data.Bedrooms} Bedroom
                      </div>
                      <span className="text-lg mx-1 hidden sm:inline">|</span>
                      <div className="col-6 flex align-items-center gap-1 text-[1rem] justify-end">
                        <img
                          src="/bathrooms.svg"
                          alt="washrooms"
                          className="w-5"
                        />{" "}
                        {main_data.Washrooms} Bathroom
                      </div>
                      {main_data.ApproxSquareFootage && (
                        <>
                          <span className="text-lg mx-1 hidden sm:inline">
                            |
                          </span>
                          <div className="col-6 flex justify-content-start align-items-center text-lg ">
                            <img
                              src="/approxArea.svg"
                              alt="garages"
                              className="w-[24px]"
                            />{" "}
                            {main_data.ApproxSquareFootage} Sq. Ft.{" "}
                          </div>
                        </>
                      )}
                      {main_data.GarageSpaces && (
                        <>
                          <span className="text-lg hidden sm:inline">|</span>
                          <div className="col-6 flex justify-content-end align-items-center text-lg ">
                            <img
                              src="/garage.svg"
                              alt="garages"
                              className="w-3"
                            />{" "}
                            {Math.trunc(main_data.GarageSpaces)} Garage
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    <p className="card-subtitle font-thin text-limit text-lg text-white leading-2">
                      MLS - #{main_data.MLS}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center flex-wrap">
            <span className="font-bold text-white my-1 text-xs">
              <TimeAgo modificationTimestamp={main_data.TimestampSql} />
            </span>
            <div className="tet-s d-flex"></div>
          </div>
          {/* <h1 className="vmain-title">
            <div className="uppercase bannerSection text-lg text-white">
              <div className="listingStatus"></div>
              FOR {main_data.SaleLease}
              tailwind style classname for bottom dashed border gray
              <span className="border-gray-500 border-dotted border-b">
                ACTIVE
              </span>
            </div>
          </h1> */}
        </div>
        {/* <div className="border-b border-[0.5px] border-gray-600 mt-2 sm:mt-0 sm:ml-4"></div> */}
        {/* Description */}
        <div
          className={`${isMobileView ? "pt-4 mt-8" : "mt-8 pt-4"} text-black`}
        >
          <div className="border-0 rounded-0 bg-black-tint p-3 sm:p-4">
            <h2 className="playfair font-extrabold text-2xl sm:text-4xl text-white">
              Description
            </h2>
            <p className="text-sm pty-description pt-2 pb-4 leading-6 text-gray-300">
              {main_data.RemarksForClients}
            </p>
            <div
              className={`row row-cols-2  row-cols-md-4 w-100 ${
                isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
              }`}
            >
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">
                  Last Check for Updates
                </p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  <TimeAgo modificationTimestamp={main_data.TimestampSql} />
                </p>
              </div>
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Property Type</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  {main_data.TypeOwn1Out}
                </p>
              </div>
            </div>
            <div
              className={`row row-cols-2  row-cols-md-4 w-100 ${
                isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
              }`}
            >
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Style </p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">{main_data.Style}</p>
              </div>
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Community</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">{main_data.Community}</p>
              </div>
            </div>
            <div
              className={`row row-cols-2  row-cols-md-4 w-100 ${
                isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
              }`}
            >
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Lot size</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 border-sm py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  {formatNumber(
                    (main_data.LotDepth * main_data.LotFront).toFixed(0)
                  )}{" "}
                  Sqft
                </p>
              </div>
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Garage spaces</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  {formatNumber(main_data.GarageSpaces)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Home Overview  */}
        <div
          className={`${isMobileView ? "pt-4 pb-4 mt-8" : "mt-8 pt-4 pb-4"}`}
        >
          <div className="p-4 rounded-0 rounded-0 border-0 bg-black-tint">
            <h2 className="playfair font-extrabold pb-3 text-2xl sm:text-4xl">
              Home Overview
            </h2>
            <div
              className={`row row-cols-2  row-cols-md-4 w-100 ${
                isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
              } bg-black-tint`}
            >
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">
                  Basement information
                </p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  {main_data?.Basement1
                    ? `${main_data?.Basement1}, ${main_data?.Basement2}`
                    : "None"}
                </p>
              </div>
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Virtual tour</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  <a href={main_data.VirtualTourURL} target="_blank">
                    Tour Now
                  </a>
                </p>
              </div>
            </div>

            <div
              className={`row row-cols-2  row-cols-md-4 w-100 ${
                isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
              }`}
            >
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Mls® #</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">{main_data.MLS}</p>
              </div>
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Building size</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  {main_data.ApproxSquareFootage}
                </p>
              </div>
            </div>

            <div
              className={`row row-cols-2  row-cols-md-4 w-100 ${
                isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
              }`}
            >
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Status</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  {main_data.Status === "A" ? "Active" : "In-Active"}
                </p>
              </div>
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">
                  Property sub type
                </p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  {/* {main_data.PropertySubType} */}
                </p>
              </div>
            </div>

            <div
              className={`row row-cols-2  row-cols-md-4 w-100 ${
                isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
              }`}
            >
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Taxes</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">{TaxAnnualAmount}</p>
              </div>
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Tax year</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">{main_data.TaxYear}</p>
              </div>
            </div>

            <div
              className={`row row-cols-2  row-cols-md-4 w-100 ${
                isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
              }`}
            >
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">
                  Maintenance fee
                </p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">{AssociationFee}</p>
              </div>
              <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                <p className="cardd-subtitle_bg-black fw-bold">Year built</p>
              </div>
              <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                <p className="cardd-subtitle_bg-black">
                  {main_data.AssessmentYear || "--"}
                </p>
              </div>
            </div>

            <div className="collapse" id="collapseExample">
              {/* Interior */}
              <h5 className="py-2 fw-bold pt-5">Interior</h5>
              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    # total bathrooms
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.Washrooms}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    # Full baths
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.Washrooms}
                  </p>
                </div>
              </div>

              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    # of above grade bedrooms
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.Bedrooms}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold"># of rooms</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {Number(main_data.Rooms) + Number(main_data.RoomsPlus)}
                  </p>
                </div>
              </div>

              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Family room available
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {Boolean(Number(main_data.FamilyRoom) > 0) ? "Yes" : "No"}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Laundry information
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.LaundryLevel}
                  </p>
                </div>
              </div>

              {/* Exterior */}
              <h5 className="py-2 fw-bold pt-5">Exterior</h5>
              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Construction materials
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.Exterior1}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Other structures
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.OtherStructures1}
                  </p>
                </div>
              </div>

              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    # garage spaces
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {formatNumber(main_data.GarageSpaces)}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    # parking spaces
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.ParkingSpaces}
                  </p>
                </div>
              </div>

              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Garage features
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.GarageType}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Has basement (y/n)
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.Basement1 ? "Yes" : "No"}
                  </p>
                </div>
              </div>

              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Has garage (y/n)
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.GarageType ? "Yes" : "No"}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">Drive</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">{main_data.Drive}</p>
                </div>
              </div>

              {/* Amenities / Utilities */}
              <h5 className="py-2 fw-bold pt-5">Amenities / Utilities</h5>
              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">Cooling</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.AirConditioning}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">Heat source</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data?.HeatSource}
                  </p>
                </div>
              </div>
              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">Heat type</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data?.HeatType}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">Sewers</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">{main_data?.Sewers}</p>
                </div>
              </div>

              {/* Location */}
              <h5 className="py-2 fw-bold pt-5">Location</h5>
              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Water source
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">{main_data.Water}</p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">Area</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">{main_data.Area}</p>
                </div>
              </div>
              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">Community</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.Community}
                  </p>
                </div>
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">
                    Community features
                  </p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {getCommunityFeatures()}
                  </p>
                </div>
              </div>
              <div
                className={`row row-cols-2  row-cols-md-4 w-100 ${
                  isMobileView ? "flex-wrap" : "flex-nowrap prp-gap"
                }`}
              >
                <div className="col-7 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pr-0">
                  <p className="cardd-subtitle_bg-black fw-bold">Directions</p>
                </div>
                <div className="col-5 col-md border-b-[0.1px] border-gray-600 py-2 py-md-3 pl-0">
                  <p className="cardd-subtitle_bg-black">
                    {main_data.DirectionsCrossStreets}
                  </p>
                </div>
              </div>
            </div>
            {/* see more */}

            <div className="pt-3">
              <Collapse> </Collapse>
            </div>
          </div>
        </div>
        {/* Extras */}
        {main_data?.Extras && (
          <div className={`${isMobileView ? "pt-4 pb-4" : "pt-4 pb-4"}`}>
            <div className="col-md-12 px-0">
              <div className="container bg-black-tint rounded-0 p-4 border-0 bg-black-tint">
                <h2 className="fw-bold text-xl sm:text-xl playfair">Extras</h2>
                <div className="flex flex-row text-lg py-1 leading-8">
                  {main_data.Extras}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={isMobileView ? `mt-8 col-12` : `mt-24 col-12`}>
        <h2 className="fw-bold pb-3 text-lg sm:text-2xl">
          <Image
            alt="walking"
            className="w-8 sm:w-10 inline mr-2"
            src="/walking.svg"
          />
          Walk Score for {main_data.Street} {main_data.StreetName}{" "}
          {main_data.StreetAbbreviation}
        </h2>

        <div className="">
          <div className="">
            <div className="walkscore-container mt-2 rounded-mine bg-white">
              <script type="text/javascript"></script>
              {/* <div id="ws-walkscore-tile" className="ham2 w-full"> */}
              <iframe
                height="500px"
                title="Walk Score"
                className="ham p-0"
                width="100%"
                src={`https://www.walkscore.com/serve-walkscore-tile.php?wsid=&amp&s=${dashedStreetName},${main_data.Municipality}&amp;o=h&amp;c=f&amp;h=500&amp;fh=0&amp;w=737`}
              ></iframe>
              {/* </div> */}
              <script
                type="text/javascript"
                src="https://www.walkscore.com/tile/show-walkscore-tile.php"
              ></script>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyPage;
