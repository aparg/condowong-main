"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";

const Footer = () => {
  const [centered, setCentered] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return <></>;
  }
  useEffect(() => {
    if (pathname.includes("/listings")) {
      setCentered(true);
    }
  }, []);

  return (
    <>
      <footer className="bg-black-tint w-[100dvw] pb-20 flex flex-col items-center">
        <div className="row text-primary-color justify-content-around items-start w-[80%] mt-20">
          <div className="col-12  mb-6 order-1">
            <img
              src="/logo/logo1.webp"
              className="w-[173px]"
              alt="condowong-logo"
            ></img>
          </div>
          <div className="col-12 col-md-4 flex flex-col items-start order-2">
            <div className="flex flex-col sm:mt-0 mt-5">
              <span className="my-1 text-primary-color">
                328 Hwy 7 E, Unit 20 Richmmond Hill, ON L4B 3P7
              </span>
              <span className="my-1 text-primary-color">
                admin@condowong.ca
              </span>
              <span className="my-1 text-primary-color">905.882.6882</span>
            </div>
          </div>
          <div className="col-12 col-md-5 flex flex-col sm:items-center items-start mt-8 sm:mt-0 order-4 sm:order-3">
            <div className="mb-1 text-primary-color">
              CondoWong Real Estate Inc., Brokerage © 2024. All Rights Reserved.
            </div>
            <div className="h-7"></div>
            <div className="my-1 text-primary-color">
              Website designed by{" "}
              <Link href="sixdesign.ca" target="_blank">
                <strong className="text-primary-color">SixDesign</strong>
              </Link>
            </div>
          </div>
          <div className="flex flex-row col-12 col-md-2 mt-8 sm:mt-1 order-3 sm:order-4">
            <Link target="_blank" href="https://www.facebook.com/condowong">
              <img
                className="w-3 mx-3"
                src="/footer-icons/facebook.svg"
                alt="facebook"
              ></img>
            </Link>

            <Link target="_blank" href="https://www.instagram.com/condowong">
              <img
                className="w-4 mx-3"
                src="/footer-icons/instagram.svg"
                alt="instagram"
              ></img>
            </Link>

            <Link
              target="_blank"
              href="https://www.youtube.com/c/CondoWongRealEstateIncBrokerage/"
            >
              <img
                className="w-4 mx-3"
                src="/footer-icons/youtube.svg"
                alt="youtube"
              ></img>
            </Link>
          </div>
          <img></img>
          <div></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
