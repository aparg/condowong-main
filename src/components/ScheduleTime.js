"use client";
import { useEffect } from "react";
import Link from "next/link";
import React from "react";
import { Datepicker } from "flowbite-react";

const ScheduleTime = () => {
  return (
    <div className="mb-24">
      <div className="title text-5xl  my-10 text-start text-white playfair">
        Schedule a Call
      </div>

      <Link href="/market-news/schedule" className="no-underline">
        <div className="back text-white">
          {/* back icons with text  */}
          <div className="back-icon flex flex-row items-center gap-2">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.2929466,3.99983983 L13.0000534,4.70694661 L7.7015668,10.0028398 L13,15.293 L12.2928932,16.0001068 L6.2895668,10.0061485 L6.2925668,10.0028398 L6.29036026,10 L12.2929466,3.99983983 Z"
              ></path>
            </svg>
            <div className="back-text ">Back</div>
          </div>
        </div>
      </Link>

      {/* main part start from here  */}
      <div className="flex flex-row gap-20 my-8 text-white">
        {/* left part calender */}

        <div className="left-part w-[70%]">
          <div className=" flex justify-between items-center">
            <div className="title font-medium text-2xl ">
              Select a Date & Time
            </div>
            <div className="subtitle text-sm  flex flex-row font-extralight items-center gap-3">
              Timezone: Eastern Daylight Saving Time (EDT)
              <i class="bi bi-chevron-down text-lg "></i>
            </div>
          </div>
          <hr className="bg-gray-400 relative bottom-2" />
          {/* data picker */}
          <div className="d-flex justify-between">
            <Datepicker
              inline
              theme={{
                root: {
                  base: "relative",
                },
                popup: {
                  root: {
                    base: "absolute top-10 z-50 block pt-2",
                    inline: "relative top-0 z-auto",
                    inner: "inline-block  p-4 shadow-lg dark:bg-gray-700",
                  },
                  header: {
                    base: "",
                    title:
                      "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
                    selectors: {
                      base: "mb-2 flex justify-between",
                      button: {
                        base: " bg-white px-5 mx-2 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                        prev: "",
                        next: "",
                        view: "",
                      },
                    },
                  },
                  view: {
                    base: "p-1",
                  },
                  footer: {
                    base: "mt-2 flex space-x-2",
                    button: {
                      base: "w-full  px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
                      today:
                        "bg-primary-color text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-primary-color",
                      clear:
                        "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
                    },
                  },
                },
                views: {
                  days: {
                    header: {
                      base: "mb-1 grid grid-cols-7",
                      title:
                        "h-6 text-center text-sm font-medium leading-6 text-gray-100 dark:text-gray-400",
                    },
                    items: {
                      base: "grid w-64 grid-cols-7",
                      item: {
                        base: "block flex-1 cursor-pointer  border-0 text-center text-sm font-semibold leading-9 text-gray-100 hover:bg-gray-100 dark:text-gray-900 dark:hover:bg-orange-400 ",
                        selected:
                          "bg-primary-color text-white hover:bg-primary-color",
                        disabled: "text-gray-500",
                      },
                    },
                  },
                  months: {
                    items: {
                      base: "grid w-64 grid-cols-4",
                      item: {
                        base: "block flex-1 cursor-pointer  border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                        selected:
                          "bg-primary-color text-white hover:bg-primary-color",
                        disabled: "text-gray-500",
                      },
                    },
                  },
                  years: {
                    items: {
                      base: "grid w-64 grid-cols-4",
                      item: {
                        base: "block flex-1 cursor-pointer  border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                        selected:
                          "bg-primary-color text-white hover:bg-primary-color",
                        disabled: "text-gray-500",
                      },
                    },
                  },
                  decades: {
                    items: {
                      base: "grid w-64 grid-cols-4",
                      item: {
                        base: "block flex-1 cursor-pointer  border-0 text-center text-sm font-semibold leading-9  text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                        selected:
                          "bg-primary-color text-white hover:bg-primary-color",
                        disabled: "text-gray-500",
                      },
                    },
                  },
                },
              }}
            />
            <div>
              {/* Create time slots with border-orange-400 as border and have time slots from morning to evening */}
              <div className="time-slot border border-orange-400 p-2 m-2">
                9:00 AM
              </div>
              <div className="time-slot border border-orange-400 p-2 m-2">
                10:00 AM
              </div>
              <div className="time-slot border border-orange-400 p-2 m-2">
                11:00 AM
              </div>
              <div className="time-slot border border-orange-400 p-2 m-2">
                12:00 PM
              </div>
              <div className="time-slot border border-orange-400 p-2 m-2">
                1:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* right part form */}
        <div className="right-part w-[30%]">Service Details</div>
      </div>
    </div>
  );
};

export default ScheduleTime;
