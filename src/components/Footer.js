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
      <footer className="bg-black mt-40 w-screen">
        <div className="w-full flex flex-col">
          <div className="relative overflow-hidden bg-primary-color w-full ">
            <div className="relative px-8 py-12 md:p-16 xl:p-24 flex flex-col justify-center">
              <div className="max-w-3xl mx-auto">
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
              <div className="col-span-2 sm:col-span-1 lg:pl-12 max-w-[80%]">
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

              <div className="col-span-2 sm:col-span-1">
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

              <div className="col-span-2 sm:col-span-1">
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
              <div className="col-span-2 md:col-span-3 lg:col-span-1">
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
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
