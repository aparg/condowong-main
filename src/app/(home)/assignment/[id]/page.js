import React from "react";
import assignments from "@/constant/assignments";
import PreconPropertyCard from "@/components/PreconPropertyCard";
import BookShowingForm from "@/components/BookShowingForm";
import Gallery from "@/components/Gallery";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";

const page = ({ params }) => {
  console.log(params.id);
  const assignment = assignments.find(
    (obj) => obj.project === decodeURIComponent(params.id).replaceAll("-", " ")
  );
  console.log(assignment);

  const getKeyValue = (val) => {
    return val.split("-");
  };

  function removeDollarsAndCommas(str) {
    return parseFloat(str.replace(/[$,]/g, ""));
  }

  return (
    <div className="row bg-[#000] mx-20">
      <div className="col-md-8">
        <div className="my-3">
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
        <Gallery data={assignment.imgURLs} />
        <h1 className="text-[4rem] playfair">{assignment.price}</h1>
        <h1 className="playfair text-[2rem] playfair">{assignment.project}</h1>
        <div className="row row-cols-md-4 gap-y-4 my-4">
          {assignment.details.map((key, idx) => (
            <div className="flex flex-col" key={idx}>
              <div className="text-primary-color font-medium uppercase">
                {getKeyValue(key)[0]}
              </div>
              <div className="text-white font-medium playfair">
                {getKeyValue(key)[1]}
              </div>
            </div>
          ))}
        </div>
        <section className="my-20">
          <section className="my-8">
            <h1 className="playfair mb-1 text-[2rem]">Pricing Information</h1>
            <ul className="list-disc ml-4 text-white font-medium">
              {assignment.pricingInformation.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </section>
          <section className="my-20 sm:mr-20">
            <h1 className="playfair mb-4 text-[2rem] playfair">
              Buyer{"'"}s Sum of Payment
            </h1>
            <div className="flex justify-between">
              <div>Seller's Profit(AP-OP)</div>
              <div>
                $
                {removeDollarsAndCommas(assignment.price) -
                  removeDollarsAndCommas(assignment.op)}
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="mb-2">Deposit Paid to Developer by seller</div>
              <div className="mb-2">
                ${removeDollarsAndCommas(assignment.developerDeposit)}
              </div>
            </div>
            <div className="border-b-gray-400 border-2 w-full"></div>
            <div className="flex justify-between">
              <div className="my-2 font-bold">Total Payment</div>
              <div className="">
                $
                {removeDollarsAndCommas(assignment.price) -
                  removeDollarsAndCommas(assignment.op) +
                  removeDollarsAndCommas(assignment.developerDeposit)}
              </div>
            </div>
          </section>
          <section className="my-20 sm:mr-20">
            <h1 className="playfair mb-4 text-[2rem] playfair">
              Payment Structure
            </h1>
            <div className="flex justify-between my-2">
              <div className="flex flex-col">
                <div>Deposit</div>
                <div className="text-xs">Due Upon Offer Acceptance</div>
              </div>
              <div>{assignment.deposit}</div>
            </div>
            <div className="flex justify-between my-2">
              <div className="flex flex-col">
                <div>Remaining Balance</div>
                <div className="text-xs">
                  Due Upon Developer's Consent on Assignment
                </div>
              </div>
              <div>{assignment.remainingBalance}</div>
            </div>
          </section>
        </section>
      </div>
      <div className="col-md-4 mt-4">
        <BookShowingForm
          defaultmessage={`Please book a showing for this property "${assignment.project}"`}
          city=""
        ></BookShowingForm>
      </div>
      <section className="my-14">
        <Contact showAddress={false} />
      </section>
    </div>
  );
};

export default page;
