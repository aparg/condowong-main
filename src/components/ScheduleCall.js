import Link from "next/link";
import React from "react";

const ScheduleCall = () => {
  return (
    <div className="m-24">
      <div className="title text-5xl  my-10 text-start text-white playfair">
        Schedule a Call
      </div>

      <div className="subtitle mt-10">
        <div className="text-xl text-white relative top-2">Select agent </div>
        <hr className=" bg-gray-700" />
      </div>

      <div className="main flex-col flex gap-y-6">
        <Link href="/market-news/schedule" className="no-underline">
        <div className="flex flex-row justify-between items-center bg-[#121212] text-white p-2 px-4">
          <div className="phone flex flex-col">
            <div className="title text-4xl  my-1 playfair">
              Pre-construction with Dan Wong
            </div>
            <div className="subtitle text-lg font-extralight text-gray-400">
              An unparalleled investment experience.
            </div>
          </div>

          {/* time icons with time  */}
          <div className="time-icons flex flex-row gap-5">
            <div className="time-icon">
              <i class="bi bi-clock text-2xl"></i>
            </div>
            <div className="time">30 min</div>
          </div>

          {/* cheveron icons  */}
          <div className="chevron-icon">
            <i class="bi bi-chevron-right text-3xl text-[#CC9900]"></i>
          </div>

        </div>
        </Link>
        
        <Link href="/market-news/schedule" className="no-underline">
        <div className="flex flex-row justify-between items-center bg-[#121212] text-white p-2 px-4">
          <div className="phone flex flex-col">
            <div className="title text-4xl  my-1 playfair">
              Pre-construction with Dan Wong
            </div>
            <div className="subtitle text-lg font-extralight text-gray-400">
              An unparalleled investment experience.
            </div>
          </div>

          {/* time icons with time  */}
          <div className="time-icons flex flex-row gap-5">
            <div className="time-icon">
              <i class="bi bi-clock text-2xl"></i>
            </div>
            <div className="time">30 min</div>
          </div>

          {/* cheveron icons  */}
          <div className="chevron-icon">
            <i class="bi bi-chevron-right text-3xl text-[#CC9900]"></i>
          </div>

        </div>
        </Link>

        <Link href="/market-news/schedule" className="no-underline">
        <div className="flex flex-row justify-between items-center bg-[#121212] text-white p-2 px-4">
          <div className="phone flex flex-col">
            <div className="title text-4xl  my-1 playfair">
              Pre-construction with Dan Wong
            </div>
            <div className="subtitle text-lg font-extralight text-gray-400">
              An unparalleled investment experience.
            </div>
          </div>

          {/* time icons with time  */}
          <div className="time-icons flex flex-row gap-5">
            <div className="time-icon">
              <i class="bi bi-clock text-2xl"></i>
            </div>
            <div className="time">30 min</div>
          </div>

          {/* cheveron icons  */}
          <div className="chevron-icon">
            <i class="bi bi-chevron-right text-3xl text-[#CC9900]"></i>
          </div>

        </div>
        </Link>

        <Link href="/market-news/schedule" className="no-underline">
        <div className="flex flex-row justify-between items-center bg-[#121212] text-white p-2 px-4">
          <div className="phone flex flex-col">
            <div className="title text-4xl  my-1 playfair">
              Pre-construction with Dan Wong
            </div>
            <div className="subtitle text-lg font-extralight text-gray-400">
              An unparalleled investment experience.
            </div>
          </div>

          {/* time icons with time  */}
          <div className="time-icons flex flex-row gap-5">
            <div className="time-icon">
              <i class="bi bi-clock text-2xl"></i>
            </div>
            <div className="time">30 min</div>
          </div>

          {/* cheveron icons  */}
          <div className="chevron-icon">
            <i class="bi bi-chevron-right text-3xl text-[#CC9900]"></i>
          </div>

        </div>
        </Link>


      </div>
    </div>
  );
};

export default ScheduleCall;
