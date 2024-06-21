import React from "react";

const page = () => {
  const preconData = [
    {
      name: "Daniels on Parliament",
      location: "365 Parliament St, Toronto, ON",
      imgSrc: "/pre-constructions/daniel-on-parliament/1.png",
    },
  ];
  return <PreconPropertySlider data={preconData} />;
};

export default page;
