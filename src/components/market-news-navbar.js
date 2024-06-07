import Link from 'next/link'
import React from 'react'

const MarketNewsNavbar = () => {
  return (
    <div className='flex justify-center bg-black py-4'>
      <div className="w-full flex justify-between items-center px-10">
          <div className="text-primary-color flex flex-row w-auto justify-end items-center">
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/market-news/unique-living" className="hover:text-primary-color text-sm font-light">
                Unique Living
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color text-sm font-light">
              Luxury Insights
              </Link>
            </div>

            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color text-sm font-light">
              Luxury Insights
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color text-sm font-light">
              The Insiders
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color text-sm font-light">
              Agent Outlook
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color text-sm font-light">
              Unique Living
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color text-sm font-light">
              Luxury Insights
              </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color text-sm font-light">
              The Insiders
            </Link>
            </div>
            <div className="flex items-center h-full justify-center px-6 py-1 font-normal text-lg bg-black text-[#fff]">
              <Link href="/" className="hover:text-primary-color text-sm font-light">
              Agent Outlook
            </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MarketNewsNavbar
