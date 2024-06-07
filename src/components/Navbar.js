import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#000] px-12">
      <div className="w-full flex justify-between items-center bg-[#000] h-20">
        <div className="w-40">
          <img src="/logo/logo1.webp" className="w-full"></img>
        </div>
        <div className="bg-black">
          <div className="text-primary-color flex flex-row w-auto justify-end items-center">
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color">
                Home
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/market-news" className="hover:text-primary-color">
                Market News
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color">
                Pre-Construction
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color">
                Resale/Assignment
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color">
                Rental
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color">
                Contact
              </Link>
            </div>
            <button className="bg-primary-color text-[#000] rounded-md py-2 px-4 font-normal hover:bg-[#fff]">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
