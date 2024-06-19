"use client";

import { useEffect, useState } from "react";
import ContactFormSubmit from "./ContactFormSubmit";
import React from "react";
import BookingDate from "./BookingDate";
// import { fetchHostEmail } from "@/actions/fetchHostEmail";
import { usePathname } from "next/navigation";
// import { Checkbox } from "@nextui-org/react";
import Checkbox from "./Checkbox";
import Link from "next/link";
import { sendEmail } from "@/actions/resend";
import getArrayFromObj from "@/helpers/getArrayFromObj";

export default function BookShowingForm(props) {
  const pathname = usePathname();
  const [submitbtn, setSubmitbtn] = useState("Book now");
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    message: props.defaultmessage,
    "project name": props.proj_name,
    city: props.city,
    realtor: "",
    domainEmail: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // ContactFormSubmit(credentials, setSubmitbtn, setCredentials);
    sendEmail({ content: getArrayFromObj(credentials), page: props.proj_name });
  };

  const getSchedulePage = () => {
    if (pathname.includes("/resale")) {
      return "/schedule/time";
    }
    if (pathname.includes("/rental")) {
      return "/schedule/time";
    }
    return "/schedule/time";
  };

  const getEmail = async () => {
    const hostname = new URL(document.referrer).hostname;
    const email = await fetchHostEmail(hostname);
    setCredentials({
      ...credentials,
      domainEmail: email,
    });
  };
  useEffect(() => {
    if (pathname.includes("/embedded-site")) {
      getEmail();
    }
  }, []);
  return (
    <div
      className="fixed-title pe-0 top-30 sticky pl-4 mt-24 sm:mt-0 "
      id="contact"
    >
      <div className="p-5 pb-0 box-shadow-custom rounded-mine bordt border-[#e8e9ea] flex-col items-center">
        <h5 className="font-extrabold text-center linem fs-3 mb-0  text-white">
          Book a Showing!
        </h5>
        <p className="text-center pt-0 cardd-subtitle_bg-black text-[1.1rem] text-white">
          {/* with a {credentials.city}{" "}
          <span className="fw-bold pr-1">Buyer's</span>
          agent */}
          Check out this home
        </p>

        {/* <div className="my-4"></div> */}
        <form
          method="POST"
          className="mb-3 mt-10 flex flex-col items-center"
          onSubmit={(e) => handleFormSubmit(e)}
          id="contactForm"
        >
          <div className="me-0 row-cols-12 g-1 me-0">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder=""
                name="name"
                id="name"
                value={credentials.name}
                onChange={(e) => handleChange(e)}
                className="fields fff w-full px-4 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100 text-black"
              />
              <label
                htmlFor="name"
                className="absolute left-0 px-4 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
              >
                Name
              </label>
            </div>
            <div className="relative mb-3">
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder=""
                value={credentials.phone}
                onChange={(e) => handleChange(e)}
                required={true}
                className="fields fff w-full px-4 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100 text-black"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 px-4 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
              >
                Phone
              </label>
            </div>
            {/* <BookingDate handleChange={handleChange} /> */}
            {/* <div className="row me-0 row-cols-1 g-0">
              <div className="col">
                <div className="relative mb-3">
                  <input
                    type="email"
                    aria-describedby="emailHelp"
                    placeholder=""
                    name="email"
                    id="email"
                    value={credentials.email}
                    onChange={(e) => handleChange(e)}
                    className="fields fff w-full px-4 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 px-4 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
                  >
                    Your Email
                  </label>
                </div>
              </div>
            </div> */}
            <div className="me-0 g-0">
              <div className="mb-3">
                <textarea
                  id="message"
                  name="message"
                  className="fields fff text-gray-500"
                  rows="2"
                  cols="40"
                  value={credentials.message}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>
            </div>
            {/* <div className="row me-0">
              <div className="mb-2">
                <p className="showing-info leading-snug">
                  We'll call you within the next business hour to match you with
                  an agent from the Houseful™ agent network. By submitting this
                  information, I acknowledge I have read and agree to the{" "}
                  <a href="#">Terms of use,</a> including its Privacy section.
                </p>
              </div>
            </div> */}
          </div>

          <div></div>

          <div className="me-0">
            <div className="mb-3 flex items-start">
              {/* <Checkbox
                defaultSelected
                color="success"
                size="lg"
                radius="sm"
                className="d-flex"
                style={{ alignItems: "flex-start !important" }}
              ></Checkbox> */}
              <p className="showing-info showing-info__cb leading-tight text-center text-gray-500">
                I would like to receive marketing and promotional messages by
                telephone, text message, and email from Condowong, including
                information and updates about properties of interest and the
                services and features of Houseful and our selected partners. I
                may withdraw my consent at any time. Message and data rates may
                apply. Consent is not required to receive real estate services.
              </p>
            </div>
          </div>
          <input
            type="submit"
            value={submitbtn}
            className="btn bg-primary-color text-white btn-md w-75 mb-3 rounded-0 text-lg fw-bold"
            id="subbtn"
          />
          <div className="border-b border-gray-300 my-4 w-full"></div>
          <div className="pb-4 pt-2 flex flex-col justify-center items-center">
            <span className="text-md block">Not a good time?</span>
            <Link
              href={getSchedulePage()}
              className="text-primary-color font-bold text-lg block"
            >
              Schedule a call
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
