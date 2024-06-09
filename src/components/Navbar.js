import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black-tint px-12 sticky top-0 z-[999999]">
      <div className="w-full flex justify-between items-center bg-black-tint h-20">
        <div className="w-40">
          <Link href="/">
            <img src="/logo/logo1.webp" className="w-full"></img>
          </Link>
        </div>
        <div className="bg-black-tint">
          <div className="text-primary-color flex flex-row w-auto justify-end items-center">
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-black-tint text-[#fff]">
              <Link
                href="/"
                className="hover:text-primary-color hover:no-underline	hover:border-b-orange-400 hover:border-b-2"
              >
                Home
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-black-tint text-[#fff]">
              <Link
                href="/market-news"
                className="hover:text-primary-color hover:no-underline	hover:border-b-orange-400 hover:border-b-2"
              >
                Market News
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-black-tint text-[#fff]">
              <Link
                href="/pre-construction"
                className="hover:text-primary-color hover:no-underline	hover:border-b-orange-400 hover:border-b-2 text-white"
              >
                Pre construction
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-black-tint text-[#fff]">
              <Link
                href="/assignment"
                className="hover:text-primary-color hover:no-underline	hover:border-b-orange-400 hover:border-b-2 text-white"
              >
                Assignment
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-black-tint text-[#fff]">
              <Link
                href="/resale"
                className="hover:text-primary-color hover:no-underline	hover:border-b-orange-400 hover:border-b-2"
              >
                Resale
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-black-tint text-[#fff]">
              <Link
                href="/rental"
                className="hover:text-primary-color hover:no-underline	hover:border-b-orange-400 hover:border-b-2"
              >
                Rental
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-black-tint text-[#fff]">
              <Link
                href="/contact"
                className="hover:text-primary-color hover:no-underline	hover:border-b-orange-400 hover:border-b-2 text-white"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-sm bg-black-tint text-[#fff]">
              <Link
                href="/schedule"
                className="flex justify-between align-center bg-primary-color text-[#000] rounded-0 py-2 px-4 font-normal hover:text-black-900 hover:bg-orange-100 no-underline hover:no-underline"
              >
                Schedule Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
