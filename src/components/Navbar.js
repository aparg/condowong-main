"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = ({}) => {
  const [hidden, setHidden] = useState(true);
  const [hideCallBtn, setHideCallBtn] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    //remove call btn in homepage
    if (pathname.endsWith("/")) {
      console.log("has /");
      setHideCallBtn(true);
    } else {
      setHideCallBtn(false);
    }
  }, [pathname]);
  return (
    <div className="z-[999] relative">
      <nav className="bg-[#000] sm:px-12 px-4 top-0 z-[999] sticky overflow-hiddden">
        <div className="justify-between items-center bg-[#000] h-20 hidden sm:flex">
          <div className="w-40">
            <Link href="/">
              <img src="/logo/logo1.webp" className="w-full"></img>
            </Link>
          </div>
          <div className="bg-[#000]">
            <div className="text-primary-color flex flex-row w-auto justify-end items-center">
              <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
                <Link
                  href="/"
                  className="text-primary-color hover:text-primary-color hover:no-underline	hover:border-b-primary-color hover:border-b-2"
                >
                  Home
                </Link>
              </div>
              <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
                <Link
                  href="/market-news"
                  className="text-primary-color hover:text-primary-color hover:no-underline	hover:border-b-primary-color hover:border-b-2"
                >
                  Market News
                </Link>
              </div>
              <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
                <Link
                  href="/pre-construction/daniels-on-parliament"
                  className="text-primary-color hover:text-primary-color hover:no-underline	hover:border-b-primary-color hover:border-b-2"
                >
                  Pre-Construction
                </Link>
              </div>
              <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
                <Link
                  href="/assignment"
                  className="text-primary-color hover:text-primary-color hover:no-underline	hover:border-b-primary-color hover:border-b-2 "
                >
                  Assignment
                </Link>
              </div>
              <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
                <Link
                  href="/resale"
                  className="text-primary-color hover:text-primary-color hover:no-underline	hover:border-b-primary-color hover:border-b-2"
                >
                  Resale
                </Link>
              </div>
              <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
                <Link
                  href="/rental"
                  className="text-primary-color hover:text-primary-color hover:no-underline	hover:border-b-primary-color hover:border-b-2"
                >
                  Rental
                </Link>
              </div>
              <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
                <Link
                  href="/contact"
                  className="text-primary-color hover:text-primary-color hover:no-underline	hover:border-b-primary-color hover:border-b-2"
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-[#000] text-primary-color">
                <Link
                  href="/schedule"
                  className={`justify-between align-center bg-primary-color text-white rounded-0 py-2 px-4 font-normal hover:bg-[#B88A00] no-underline hover:no-underline ${
                    hideCallBtn ? "hidden" : "flex "
                  }`}
                >
                  Schedule Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-between sm:hidden py-2 mx-2">
        <div className="w-36">
          <Link href="/">
            <img src="/logo/logo1.webp" className="w-full"></img>
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex p-2 text-black transition-all duration-200 rounded-md items-center"
          onClick={() => setHidden(!hidden)}
        >
          {/* <svg
            className="block w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            />
          </svg> */}
          <img
            src="/hamburger.svg"
            alt="toggle-nav"
            className="h-[24px] w-[24px]"
          />
          <svg
            className="hidden w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Navbar */}
      <div className="h-[100vh] z-999 fixed top-0">
        <nav
          className={`z-[999] py-4 bg-[#000] shadow-md w-[100vw] flex justify-center h-[100dvh] ${
            hidden
              ? "transform translate-x-[500%] duration-300 hidden"
              : "transform translate-x-[0%] duration-300 sticky top-0"
          } lg:hidden`}
        >
          <div className="flow-root w-full">
            <div className="flex flex-col items-center px-6 my-2 w-full">
              <div className="flex w-full justify-end h-10">
                <img
                  src="/cross.svg"
                  onClick={() => setHidden(true)}
                  className="h-[24px] w-[24px]"
                ></img>
              </div>
              <Link
                href="/"
                title=""
                className={`text-base font-normal text-xl transition-all duration-200 py-2 text-white hover:text-primary-color mt-6`}
                onClick={() => setHidden(true)}
              >
                {" "}
                Home
              </Link>
              <Link
                href={`/market-news`}
                title=""
                className={`text-base font-normal text-xl transition-all duration-200 py-2 text-white hover:text-primary-color `}
                onClick={() => setHidden(true)}
              >
                {" "}
                Market News
              </Link>
              <Link
                href="/pre-construction/daniels-on-parliament"
                title=""
                className={`inline-flex py-2 text-base font-normal text-xl transition-all duration-200 text-white hover:text-primary-color `}
                onClick={() => setHidden(true)}
              >
                Pre-constructions
              </Link>
              <Link
                href="/rental"
                title=""
                className={`inline-flex py-2 text-base font-normal text-xl transition-all duration-200 text-white hover:text-primary-color `}
                onClick={() => setHidden(true)}
              >
                Rental
              </Link>
              <Link
                href="/assignments"
                title=""
                className={`inline-flex py-2 text-base font-normal text-xl transition-all duration-200 text-white hover:text-primary-color `}
                onClick={() => setHidden(true)}
              >
                Assignments
              </Link>
              <Link
                href="/resale"
                title=""
                className={`inline-flex py-2 text-base font-normal text-xl transition-all duration-200 text-white hover:text-primary-color `}
                onClick={() => setHidden(true)}
              >
                Resale
              </Link>
              <Link
                href="/contact"
                title=""
                className={`inline-flex py-2 text-base font-normal text-xl transition-all duration-200 text-white hover:text-primary-color `}
                onClick={() => setHidden(true)}
              >
                Contact
              </Link>
              <Link
                href="/schedule"
                title=""
                className={`inline-flex py-2 text-base font-normal text-xl transition-all duration-200 text-white hover:text-primary-color `}
                onClick={() => setHidden(true)}
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
