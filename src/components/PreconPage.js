"use client";
import React, { useState } from "react";
import Gallery from "./Gallery";

const PreconPage = ({ projectName, quote, bulletpoints, link, imageURLs }) => {
  const [credentials, setCredentials] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return (
    <div>
      <div className="my-10">
        <h2 className="">{quote}</h2>
        <h1 className="playfair">{projectName}</h1>
        <ul className="list-disc ml-4 my-8 text-gray-500 font-medium">
          {bulletpoints.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
        <button className="bg-primary-color px-3 py-2">Schedule Now</button>
      </div>
      <iframe
        width="100%"
        height="600"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="my-10">
        <div className="text-2xl my-2">
          Get Floor Plans & Price List Delivered to your Inbox Now
        </div>
        <form>
          <div className="relative mb-3 bg-black-tint">
            <input
              type="text"
              placeholder=""
              name="name"
              id="name"
              value={credentials.name}
              onChange={(e) => handleChange(e)}
              className="fields fff w-full px-4 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100 text-black bg-black-tint"
            />
            <label
              htmlFor="name"
              className="absolute left-0 px-4 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100 bg-black-tint"
            >
              Name<span className="text-red">*</span>
            </label>
          </div>
          <div className="relative mb-3 bg-black-tint">
            <input
              type="text"
              placeholder=""
              name="email"
              id="email"
              value={credentials.email}
              onChange={(e) => handleChange(e)}
              className="fields fff w-full px-4 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100 text-black bg-black-tint"
            />
            <label
              htmlFor="email"
              className="absolute left-0 px-4 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100 bg-black-tint"
            >
              Email<span className="text-red">*</span>
            </label>
          </div>
          <button className="bg-primary-color px-3 py-2">Send</button>
          <div className="my-10">
            <Gallery data={imageURLs} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreconPage;
