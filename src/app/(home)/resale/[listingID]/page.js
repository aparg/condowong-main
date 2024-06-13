import React from "react";
import dynamic from "next/dynamic";
import Gallery from "@/components/Gallery";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { resenditial } from "@/api/routes";
import { generateURL } from "@/helpers/generateURL";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFIrstLetter";
import BookShowingForm from "@/components/BookShowingForm";
// import MortgageCalculator from "@/components/reso/MortgageCalculator";
import { getSalesData } from "@/actions/getSalesData";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

// import AdditionalListing from "@/components/AdditionalListing";
import PropertyPage from "@/components/PropertyPage";
import BookingDate from "@/components/BookingDate";
import FAQ from "@/components/FAQ";
import MortgageCalculator from "@/components/MortgageCalculator";
import { Image } from "react-bootstrap";
import PropertySlider from "@/components/PropertySlider";
// import { Button } from "@nextui-org/react";
import { generateImageURLs } from "@/helpers/generateImageURLs";
import Contact from "@/components/Contact";

const INITIAL_OFFSET = 0;
const INITIAL_LIMIT = 10;

const fetchData = async (listingID) => {
  const options = {
    method: "GET",
  };
  const urlToFetchMLSDetail = resenditial.properties.replace(
    "$query",
    `?$select=MLS='${listingID}'`
  );

  const resMLSDetail = await fetch(urlToFetchMLSDetail, options);
  const data = await resMLSDetail.json();
  return data.results[0];
};

const page = async ({ params }) => {
  const city = params.city;
  const formattedSlug = capitalizeFirstLetter(city);
  const parts = params.listingID.split("-");
  const lastPart = parts[parts.length - 1];
  const listingID = lastPart;
  const main_data = await fetchData(listingID); //always a single object inside the array
  const newSalesData = await getSalesData(
    INITIAL_OFFSET,
    INITIAL_LIMIT,
    formattedSlug,
    main_data?.TypeOwnSrch
  );

  const imageURLs = generateImageURLs(
    listingID,
    parseInt(main_data.PhotoCount)
  );

  // const address = `${main_data?.Street} ${main_data?.StreetName} ${main_data?.StreetAbbreviation}`;
  const address = [
    main_data?.Street,
    main_data?.StreetName,
    main_data?.StreetAbbreviation,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className="flex justify-center ">
      <div className="sm:max-w-[90%] w-full">
        {/* <div className="fixed w-100 bottom-0 sm:bottom-5 sm:hidden px-3 pb-4 pt-2 z-[999] bg-white border-top">
          <Link
            href="#contact"
            className="btn btn-md w-full bg-primary-green shadow-2xl text-white shadow-md rounded-pill"
          >
            Book a showing
          </Link>
        </div> */}
        {/* <div className="fixed w-100 bottom-0 flex justify-center items-center sm:bottom-5 sm:hidden px-3 py-4 z-[999] bg-white border-top shadow-lg w-screen">
          <div
            className={`min-w-[50px] inline-flex items-center justify-center bg-[#3a88ef]/[0.08] hover:bg-[#3a88ef]/[0.2] rounded-md leading-7 py-[6px] px-[15px] text-md mx-1`}
          >
            <Image className="pr-1 w-5" src="/mailOutline.svg" alt="Email" />
            Email
          </div>
          <div
            className={`min-w-[70px] inline-flex items-center justify-center bg-[#ffedea]/[0.5] hover:bg-[#ffdad4]/[0.8] rounded-md leading-7 py-[6px] px-[15px] text-md mx-1`}
          >
            <Image className="pr-1 w-5" src="/phone.svg" alt="Phone" />
            Phone
          </div>
          <div
            className={`min-w-[70px] inline-flex items-center justify-center bg-[#43bb3f]/[0.1] hover:bg-[#43bb3f]/[0.2] rounded-md leading-7 py-[6px] px-[15px] text-md mx-1`}
          >
            <Image className="pr-1 w-5" src="/whatsapp.svg" alt="whatsapp" />
            Whatsapp
          </div>
        </div> */}
        <div className="container-fluid pt-md-3 pt-0">
          <div className="mb-2">
            <Breadcrumb
              homeElement={"Home"}
              separator={
                <span>
                  {" "}
                  <svg
                    className="svg minearr"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z"
                      fill={"#869099"}
                    ></path>
                  </svg>{" "}
                </span>
              }
              activeClasses="text-dark "
              containerClasses="d-flex align-items-center p-0 m-0 pt-4 breadcrumb"
              listClasses="mx-1"
              capitalizeLinks
            />
          </div>
          {/* <div className="pt-1">
          <Gallery data={imageURLs} />
        </div> */}

          <section className="padding-top w-full text-sm flex flex-col items-center justify-center gy-2">
            <div className="col-12 px-0">
              <Gallery data={imageURLs} />
            </div>
            <div className="sm:max-w-[90%] w-full flex justify-center pt-4">
              <div className="row justify-center sm:justify-between w-full gx-0">
                <div className={`col-sm-12 col-md-8 `}>
                  <PropertyPage {...{ main_data }} />
                  {/* <BookingDate bannerImage={imageURLs[0]} /> */}
                  <div className="z-20 relative mt-8 sm:mt-24">
                    <h2 className="font-extrabold pb-3 text-lg sm:text-4xl">
                      Map View
                    </h2>
                    <Map main_data={main_data} />
                  </div>
                  <div className="mt-8 sm:mt-24">
                    <MortgageCalculator price={main_data.ListPrice} />
                  </div>
                </div>

                <div
                  className="col-sm-12 col-md-4 ps-md-2 pt-5 pt-md-0"
                  id="contact"
                >
                  <BookShowingForm
                    defaultmessage={`Please book a showing for this property "${address}"`}
                    city={main_data.Municipality}
                  ></BookShowingForm>
                </div>
                <div className="mt-24 col-sm-12">
                  <FAQ main_data={main_data} />
                </div>
                {formattedSlug && (
                  <section className="additonal__listing w-full mx-auto mt-24 col-12">
                    <PropertySlider data={newSalesData}></PropertySlider>
                  </section>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
