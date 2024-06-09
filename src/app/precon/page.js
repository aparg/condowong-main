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
    imageURLs: [
      "https://api.dolphy.ca/media/WhatsApp_Image_2024-03-09_at_2.21.38_PM.jpeg",
      "https://api.dolphy.ca/media/Clover_Carrington_A-011.webp",
      "https://api.dolphy.ca/media/Clover_Carrington_A-013.webp",
      "https://api.dolphy.ca/media/Clover_Carrington_B_Dark-002.webp",
      "https://api.dolphy.ca/media/Clover_Carrington_E3-006.webp",
      "https://api.dolphy.ca/media/clover_carrington_exteriors_V25.webp",
      "https://api.dolphy.ca/media/clover_carrington_exteriors_V26.webp",
    ],
  };
  return (
    <div className="sm:mx-44 mx-6">
      <PreconPage
        quote={preconData.quote}
        projectName={preconData.projectName}
        bulletpoints={preconData.bulletpoints}
        link={preconData.link}
        imageURLs={preconData.imageURLs}
      />
    </div>
  );
};

export default page;
