import PreconPage from "@/components/PreconPage";
import React from "react";

const page = () => {
  const preconData = {
    quote: "The 10 Year Wait is Finally Over!",
    projectName: "Tridel Returns to Yonge & Finch 6080 Yonge, North York",
    bulletpoints: [
      "1 Bedroom - From $679,000",
      "1 + Den - From $775,000",
      "2 Bedroom - From $885,000",
      "3 Bedroom - From $1,535,000",
    ],
    link: "https://www.youtube.com/embed/KEHnEM_cWes?si=4zZeRJzsZKtLX-sK",
  };
  return (
    <div className="mx-44">
      <PreconPage
        quote={preconData.quote}
        projectName={preconData.projectName}
        bulletpoints={preconData.bulletpoints}
        link={preconData.link}
      />
    </div>
  );
};

export default page;
