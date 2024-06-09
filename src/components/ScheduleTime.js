"use client";
import { useState } from "react";
import React from "react";
import { Datepicker } from "flowbite-react";
import { inputLead, labelLead } from "./Contact";
import { useRouter } from "next/navigation";

const ScheduleTime = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [nextButton, setNextButton] = useState(false);
  const Router = useRouter();


  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="mb-24">
      <div className="title text-5xl  my-10 text-start text-white playfair">
        Schedule a Call
      </div>

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
          <div
            className="flex flex-row items-center gap-2 text-lg  font-light hover:text-gray-700 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={() => setNextButton(false)}
          >
            <div>Back</div>
          </div>
        </div>
      </div>

      {/* main part start from here  */}
      <div className="flex flex-row gap-20 my-8 text-white">
        {/* left part calendar */}

        <div className="left-part w-[65%]">
          {nextButton ? (
            <div className="flex text-2xl flex-row font-light justify-between items-center">
              Client Details
            </div>
          ) : (
            <div className=" flex justify-between items-center">
              <div className="title font-light text-2xl ">
                Select a Date & Time
              </div>
              <div className="subtitle text-sm  flex flex-row font-extralight items-center gap-3">
                Timezone: Eastern Daylight Saving Time (EDT)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </div>
          )}
          <hr className="bg-gray-400 relative bottom-2 my-3" />

          {nextButton ? (
            <>
              <div className="textpart mb-2">
                Already have an account?{" "}
                <a href="http://">
                  <span className="text-[#cc9900] ">Login</span>{" "}
                </a>
                faster booking.
              </div>
              <div className="flex flex-col gap-y-6">
                {/* full name input section */}

                <div className="relative border-none">
                  <label htmlFor="fullName" className={labelLead}>
                    Full Name <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    style={{
                      WebkitBoxShadow: "0 0 0px 1000px #121212 inset",
                      WebkitTextFillColor: "white",
                    }}
                    className={`border-[1px] border-gray-800 pt-3  focus:outline-none w-full , ${inputLead}`}
                  />
                </div>

                {/* email input section */}
                <div className="relative border-none">
                  <label htmlFor="email" className={labelLead}>
                    Email <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="email"
                    id="email"
                    style={{
                      WebkitBoxShadow: "0 0 0px 1000px #121212 inset",
                      WebkitTextFillColor: "white",
                    }}
                    className={`border-[1px] border-gray-800 pt-3  focus:outline-none w-full , ${inputLead}`}
                  />
                </div>

                {/* subject input section  */}
                <div className="relative border-none">
                  <label htmlFor="subject" className={labelLead}>
                    Phone <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    style={{
                      WebkitBoxShadow: "0 0 0px 1000px #121212 inset",
                      WebkitTextFillColor: "white",
                    }}
                    className={`border-[1px] border-gray-800 bg-[#121212] pt-3  focus:outline-none w-full   , ${inputLead}`}
                  />
                </div>

                {/* message input section */}
                <div className="relative border-none ">
                  <label htmlFor="message" className={labelLead}>
                    Topic To Discuss <span className="text-red-500">*</span>{" "}
                  </label>
                  <textarea
                    id="message"
                    rows="2"
                    className={`border-[1px] border-gray-800 pt-6  w-full  block px-4 placeholder-gray-500 rounded-sm focus:outline-none sm:text-sm mt-1 peer  placeholder:text-gray-500 bg-[#121212] shadow-none `}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* data picker */}
              <div className="d-flex justify-between">
                <Datepicker
                  onSelectedDateChanged={setSelectedDate}
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
                            base: " px-5 mx-2 py-2.5 text-lg font-semibold text-white focus:outline-none ",
                            prev: "",
                            next: "",
                            view: "",
                          },
                        },
                      },
                      view: {
                        base: "px-4",
                      },
                      footer: {
                        base: "mt-2 flex space-x-2",
                        button: {
                          base: "w-full  px-5 py-2 text-center text-sm font-medium ",
                          today:
                            "bg-primary-color text-white dark:bg-cyan-600 ",
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
                            "h-6 text-center text-lg font-medium leading-6 text-gray-100 dark:text-gray-400",
                        },
                        items: {
                          base: "grid w-96 grid-cols-7",
                          item: {
                            base: "block flex-1 cursor-pointer font-light border-0 text-center text-lg leading-9 text-gray-100  ",
                            selected:
                              "bg-primary-color rounded-full  text-white hover:bg-primary-color",
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
                <div className=" min-w-44">
                  {/* here in first div i want to put dynamic date that i come from the DatePicker that's it */}
                  <div className="time-slot py-2 m-2">
                    {selectedDate &&
                      selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                  </div>
                  {/* <div className="time-slot border  p-2 px-10 m-2">9:00 AM</div>
              <div className="time-slot border px-10 p-2 m-2">10:00 AM</div>
              <div className="time-slot border px-10 p-2 m-2">11:00 AM</div>
              <div className="time-slot border px-10 p-2 m-2">12:00 PM</div>
              <div className="time-slot border px-10 p-2 m-2">1:00 PM</div>
              <div className="time-slot border px-10 p-2 m-2">1:00 PM</div> */}

                  <ul id="timetable" class="grid w-full grid-cols-1 gap-2 mt-5">
                    <li>
                      <input
                        type="radio"
                        id="10-am"
                        value="10:00 AM"
                        class="hidden peer"
                        name="timetable"
                        onChange={handleTimeChange}
                      />
                      <label
                        for="10-am"
                        class="time-slot border px-10 p-2 m-1 cursor-pointer"
                      >
                        10:00 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="10-30-am"
                        value="10:30 AM"
                        class="hidden peer"
                        name="timetable"
                        onChange={handleTimeChange}
                      />
                      <label
                        for="10-30-am"
                        class="time-slot border px-10 p-2 m-1 cursor-pointer"
                      >
                        10:30 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="11-am"
                        value="11:00 AM"
                        class="hidden peer"
                        name="timetable"
                        onChange={handleTimeChange}
                      />
                      <label
                        for="11-am"
                        class="time-slot border px-10 p-2 m-1 cursor-pointer"
                      >
                        11:00 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="11-30-am"
                        value="11:30 AM"
                        class="hidden peer"
                        name="timetable"
                        onChange={handleTimeChange}
                      />
                      <label
                        for="11-30-am"
                        class="time-slot border px-10 p-2 m-1 cursor-pointer"
                      >
                        11:30 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="12-am"
                        value="12:00 AM"
                        class="hidden peer"
                        name="timetable"
                        onChange={handleTimeChange}
                      />
                      <label
                        for="12-am"
                        class="time-slot border px-10 p-2 m-1 cursor-pointer"
                      >
                        12:00 AM
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        {/* right part form */}
        <div className="right-part flex flex-col w-[35%]">
          <div className="title text-2xl playfair font-medium">
            Resale / Assignment with Michael Ho
          </div>
          <div className="duration text-lg font-light">
            30 minutes phone call
          </div>
          <div className="time font-light text-lg">
            {" "}
            {selectedDate &&
              selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}{" "}
            at {selectedTime}
          </div>

          <hr className=" text-white bg-white  my-4" />

          {/*  next button */}
          {nextButton ? (
            <>
              <button
                className="no-underline"
                onClick={() => Router.push("/schedule/questions")}
              >
                <div className="flex flex-row items-center bg-[#CC9900] mt-1  justify-center py-1  text-white">
                  <div className="title text-xl  my-1">Book Now</div>
                </div>
              </button>
            </>
          ) : (
            <>
              <button
                className="no-underline"
                onClick={() => setNextButton(true)}
              >
                <div className="flex flex-row items-center bg-[#CC9900] mt-1  justify-center py-1  text-white">
                  <div className="title text-xl  my-1">Next</div>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleTime;
