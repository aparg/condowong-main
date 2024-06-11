import Link from "next/link";
import React from "react";

const ScheduleCall = () => {
  return (
    <div className="my-20 flex flex-col justify-center align-items-center">
      <div className="title text-5xl  mt-6 mb-8 text-primary-color text-center playfair">
        Schedule a Call
      </div>

      <div className="main flex-col flex gap-y-6 w-[100%] md:w-[70%]">
        <Link href="/schedule/time" className="no-underline">
          <div className="flex flex-row justify-between items-center bg-[#121212] text-white p-2 px-4">
            <div className="phone flex flex-col">
              <div className="title text-2xl text-primary-color  my-1 playfair">
                Pre-construction with Dan Wong
              </div>
              <div className="subtitle text-lg font-extralight text-gray-400">
                An unparalleled investment experience.
              </div>
            </div>

            {/* time icons with time  */}

            {/* cheveron icons  */}
            <div className="chevron-icon flex gap-3 align-items-center">
              <div className="time-icons flex flex-row gap-5">
                <div className="time me-2">1 Hr</div>
              </div>
              <div>
                <Link
                  href="/schedule/time/"
                  className="flex justify-between align-center bg-primary-color text-[#000] rounded-0 py-2 px-4 font-normal hover:text-black-900 hover:bg-orange-100 no-underline hover:no-underline"
                >
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-chevron-right ms-3 text-[#000]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/schedule/time" className="no-underline">
          <div className="flex flex-row justify-between items-center bg-[#121212] text-white p-2 px-4">
            <div className="phone flex flex-col">
              <div className="title text-2xl text-primary-color  my-1 playfair">
                Resale / Assignment with Michael Ho
              </div>
              <div className="subtitle text-lg font-extralight text-gray-400">
                An unparalleled investment experience.
              </div>
            </div>

            {/* cheveron icons  */}
            <div className="chevron-icon flex gap-3 align-items-center ">
              <div className="time-icons flex flex-row gap-5">
                <div className="time me-2">1 Hr</div>
              </div>
              <div>
                <Link
                  href="/schedule/time/"
                  className="flex justify-between align-center bg-primary-color text-[#000] rounded-0 py-2 px-4 font-normal hover:text-black-900 hover:bg-orange-100 no-underline hover:no-underline"
                >
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-chevron-right ms-3 text-[#000]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/schedule/time" className="no-underline">
          <div className="flex flex-row justify-between items-center bg-[#121212] text-white p-2 px-4">
            <div className="phone flex flex-col">
              <div className="title text-2xl text-primary-color  my-1 playfair">
                Rental Listing with Carl Chen
              </div>
              <div className="subtitle text-lg font-extralight text-gray-400">
                An unparalleled investment experience.
              </div>
            </div>

            {/* cheveron icons  */}
            <div className="chevron-icon flex gap-3 align-items-center">
              <div className="time-icons flex flex-row gap-5">
                <div className="time me-2">30 min</div>
              </div>
              <div>
                <Link
                  href="/schedule/time/"
                  className="flex justify-between align-center bg-primary-color text-[#000] rounded-0 py-2 px-4 font-normal hover:text-black-900 hover:bg-orange-100 no-underline hover:no-underline"
                >
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-chevron-right ms-3 text-[#000]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/schedule/time" className="no-underline">
          <div className="flex flex-row justify-between items-center bg-[#121212] text-white p-2 px-4">
            <div className="phone flex flex-col">
              <div className="title text-2xl text-primary-color  my-1 playfair">
                Rental Management with Vivian Tran
              </div>
              <div className="subtitle text-lg font-extralight text-gray-400">
                An unparalleled investment experience.
              </div>
            </div>

            {/* cheveron icons  */}
            <div className="chevron-icon flex gap-3 align-items-center">
              <div className="time-icons flex flex-row gap-5">
                <div className="time me-2">30 min</div>
              </div>
              <div>
                <Link
                  href="/schedule/time/"
                  className="flex justify-between align-center bg-primary-color text-[#000] rounded-0 py-2 px-4 font-normal hover:text-black-900 hover:bg-orange-100 no-underline hover:no-underline"
                >
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-chevron-right ms-3 text-[#000]"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ScheduleCall;
