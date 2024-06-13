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
      <footer className="bg-[#222222] mt-40 w-[100dvw] py-20 flex justify-center">
        {/* <div className="w-full flex flex-col">
          <div className="relative overflow-hidden bg-primary-bg w-full ">
            <div className="relative px-8 py-12 md:p-16 xl:p-24 flex flex-col justify-center">
              <div className="max-w-3xl mx-auto">
                <div className="w-40 bg-black-tint p-3 mx-auto mb-4">
                  <Link href="/">
                    <img src="/logo/logo1.webp" className="w-full"></img>
                  </Link>
                </div>
                <h2 className="text-3xl text-center font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl playfair text-shadow">
                  Find a home that suits your lifestyle.
                </h2>
              </div>
              <Link
                href="/schedule"
                className="flex justify-center hover:no-underline"
              >
                <button className="bg-white py-2 px-4 self-center mt-3 text-primary-color hover:no-underline shadow-xl">
                  Schedule Call Now
                </button>
              </Link>
            </div>
          </div>
          <div
            className={`container-fluid pb-5 bg-black-tint ${
              centered && "max-w-[80%]"
            }`}
          >
            <div className="grid grid-cols-2 gap-x-4 md:gap-x-10 mt-12 sm:grid-cols-3 lg:grid-cols-4 sm:mt-16 lg:mt-20 gap-y-6 justify-content-center justify-content-md-start">
              <div className="col-span-1 sm:col-span-1 lg:pl-12 max-w-[80%]">
                <p className="text-md font-bold tracking-widest text-black-600 uppercase">
                  Company
                </p>

                <ul className="space-y-5 flex flex-col justify-start align-start">
                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      About{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Features{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Works{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Career{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <p className="text-md font-bold tracking-widest text-black-600 uppercase">
                  Help
                </p>

                <ul className="space-y-5">
                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Customer Support{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Delivery{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 sm:col-span-1">
                <p className="text-md font-bold tracking-widest text-black-600 uppercase">
                  Company
                </p>

                <ul className=" space-y-5">
                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Free eBooks{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Development{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      How to - Blog{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      YouTube Playlist{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1 md:col-span-3 lg:col-span-1">
                <p className="text-md font-bold tracking-widest text-black-600 uppercase"></p>

                <ul className=" flex flex-col justify-start">
                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex border-t border-gray-200 py-4 text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Contact Support{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      647-527-4970{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      title=""
                      className="inline-flex py-4 text-sm font-normal transition-all duration-200 hover:no-underline hover:text-primary-color"
                    >
                      {" "}
                      Help Centre{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-12 bg-black">
            <p className="text-sm font-normal text-white text-center">
              © Copyright 2023, All Rights Reserved by CondoWong
            </p>

            <p className="text-sm text-white text-center mb-3 mt-4 pt-2 font-normal">
              Website designed by{" "}
              <Link
                href="https://sixdesign.ca"
                target="_blank"
                className="font-extrabold inline"
              >
                SixDesign
              </Link>
            </p>
          </div>
        </div> */}
        <div className="row text-white justify-content-around items-start w-[80%]">
          <div className="col-12  mb-6">
            <img
              src="/logo/logo1.webp"
              className="w-[173px]"
              alt="condowong-logo"
            ></img>
          </div>
          <div className="col-12 col-md-4 flex flex-col items-start">
            <div className="flex flex-col sm:mt-0 mt-5">
              <span className="my-1">
                328 Hwy 7 E, Unit 20 Richmmond Hill, ON L4B 3P7
              </span>
              <span className="my-1">admin@condowong.ca</span>
              <span className="my-1">905.882.6882</span>
            </div>
          </div>
          <div className="col-12 col-md-5 flex flex-col sm:items-center items-start mt-8 sm:mt-0">
            <div className="mb-1">
              &copy; Copyright 2023, All Rights Reserved by CondoWong
            </div>
            <div className="h-7"></div>
            <div className="my-1">
              Website designed by{" "}
              <Link href="sixdesign.ca">
                <strong>SixDesign</strong>
              </Link>
            </div>
          </div>
          <div className="flex flex-row col-12 col-md-2 mt-8 sm:mt-1">
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
