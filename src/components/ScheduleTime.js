"use client";
import { useState } from "react";
import React from "react";
import { Datepicker } from "flowbite-react";
import { inputLead, labelLead } from "./Contact";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { gapi } from "gapi-script";
import { useSearchParams } from "next/navigation";
import { scheduleData } from "@/constant/data";
import { generateTimeSlots } from "@/helpers/generateTimeSlots";
import { sendEmail } from "@/actions/resend";
import getArrayFromObj from "@/helpers/getArrayFromObj";
import getEmail from "@/helpers/getEmail";

const ScheduleTime = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [nextButton, setNextButton] = useState(false);
  const Router = useRouter();
  const searchParams = useSearchParams();
  const dataId = searchParams.get("id");
  const recepient = searchParams.get("recepient");

  const scheduleItem = scheduleData.find(
    (item) => item.id === parseInt(dataId)
  );

  if (!scheduleItem) {
    return <div>Schedule item not found.</div>;
  }

  const timeSlots = generateTimeSlots("10:00", scheduleItem.duration); // assuming start time is 9:00 AM

  // const [formValues, setFormValues] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleInputChange = (event) => {
  //   setFormValues({
  //     ...formValues,
  //     [event.target.id]: event.target.value,
  //   });
  // };

  // console.log(formValues, "formValues");

  // const handleTimeChange = (event) => {
  //   setSelectedTime(event.target.value);
  // };

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    selectedDate: null,
    selectedTime: "",
  });

  const calendarID = scheduleItem.calendarId;
  const apiKey = scheduleItem.apiKey;
  let accessToken = scheduleItem.accessToken;

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    setFormValues({
      ...formValues,
      selectedTime: event.target.value,
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormValues({
      ...formValues,
      selectedDate: date,
    });
  };

  // const handleSubmit = () => {
  //   alert(
  //     `Full Name: ${formValues.fullName}\nEmail: ${formValues.email}\nPhone: ${
  //       formValues.phone
  //     }\nMessage: ${formValues.message}\nDate: ${
  //       formValues.selectedDate &&
  //       formValues.selectedDate.toLocaleDateString("en-US", {
  //         weekday: "long",
  //         month: "long",
  //         day: "numeric",
  //       })
  //     }\nTime: ${formValues.selectedTime}`
  //   );
  // };

  // const addEvent = (event) => {
  //   function initiate() {
  //     gapi.client
  //       .request({
  //         path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
  //         method: "POST",
  //         body: event,
  //         headers: {
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       })
  //       .then(
  //         (response) => {
  //           return [true, response];
  //         },
  //         function (err) {
  //           console.log(err);
  //           return [false, err];
  //         }
  //       );
  //   }
  //   gapi.load("client", initiate);
  // };

  // const addEvent = (event) => {
  //   function initiate() {
  //     if (typeof window !== "undefined") {
  //       gapi.client
  //         .request({
  //           path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
  //           method: "POST",
  //           body: event,
  //           headers: {
  //             "Content-type": "application/json",
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         })
  //         .then(
  //           (response) => {
  //             return [true, response];
  //           },
  //           function (err) {
  //             console.log(err);
  //             return [false, err];
  //           }
  //         );
  //     }
  //   }
  //   if (typeof window !== "undefined") {
  //     gapi.load("client", initiate);
  //   }
  // };

  const refreshAccessToken = () => {
    return gapi.auth2
      .getAuthInstance()
      .currentUser.get()
      .reloadAuthResponse()
      .then((authResponse) => {
        accessToken = authResponse.access_token;
        return accessToken;
      });
  };

  const addEvent = (event) => {
    const makeRequest = (token) => {
      gapi.client
        .request({
          path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          method: "POST",
          body: event,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            console.log("Event added:", response);
          },
          async (err) => {
            if (err.status === 401) {
              // Unauthorized error
              const newToken = await refreshAccessToken();
              console.log(newToken, "new token");
              makeRequest(newToken);
            } else {
              console.error("Error adding event:", err);
            }
          }
        );
    };

    if (typeof window !== "undefined") {
      gapi.load("client", () => makeRequest(accessToken));
    }
  };

  function toLocalISOString(date) {
    var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? "+" : "-",
      pad = function (num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? "0" : "") + norm;
      };
    return (
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate()) +
      "T" +
      pad(date.getHours()) +
      ":" +
      pad(date.getMinutes()) +
      ":" +
      pad(date.getSeconds()) +
      dif +
      pad(tzo / 60) +
      ":" +
      pad(tzo % 60)
    );
  }

  // const handleSubmit = () => {
  //   if (!formValues.selectedDate || !formValues.selectedTime) {
  //     alert("Please select both date and time.");
  //     // event.
  //   }
  //   // Parse the time
  //   const timeParts = formValues.selectedTime.split(/[: ]/);

  //   // Create a new Date object from selectedDate
  //   const dateTime = new Date(formValues.selectedDate);

  //   // Set the hours and minutes from selectedTime
  //   dateTime.setHours((timeParts[0] % 12) + (timeParts[2] === "PM" ? 12 : 0));
  //   dateTime.setMinutes(timeParts[1]);
  //   var event = {
  //     summary: "Meeting Name",
  //     location: "",
  //     start: {
  //       dateTime: dateTime,
  //       timeZone: "Asia/Kathmandu",
  //     },
  //     end: {
  //       dateTime: toLocalISOString(new Date(dateTime.getTime() +  parseInt(scheduleItem.duration) * 60000)),
  //       timeZone: "Asia/Kathmandu",
  //     },
  //     recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  //     attendees: [],
  //     reminders: {
  //       useDefault: false,
  //       overrides: [
  //         { method: "email", minutes: 24 * 60 },
  //         { method: "popup", minutes: 10 },
  //       ],
  //     },
  //   };
  //   addEvent(event);
  // };

  const handleSubmit = () => {
    if (!formValues.selectedDate || !formValues.selectedTime) {
      alert("Please select both date and time.");
      return;
    }

    const timeParts = formValues.selectedTime.split(/[: ]/);
    const dateTime = new Date(formValues.selectedDate);
    dateTime.setHours((timeParts[0] % 12) + (timeParts[2] === "PM" ? 12 : 0));
    dateTime.setMinutes(timeParts[1]);

    const event = {
      summary: "Meeting Name",
      location: "",
      start: {
        dateTime: dateTime,
        timeZone: "Asia/Kathmandu",
      },
      end: {
        dateTime: toLocalISOString(
          new Date(dateTime.getTime() + parseInt(scheduleItem.duration) * 60000)
        ),
        timeZone: "Asia/Kathmandu",
      },
      recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
      attendees: [],
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };
    sendEmail({ content: getArrayFromObj(content), page: getEmail(recepient) });
    // addEvent(event);
  };

  return (
    <div className="mb-24">
      <div className="title text-5xl  my-10 text-start text-white playfair">
        Schedule a Call
      </div>

      <div className="back text-white">
        {/* back icons with text  */}
        <div className="back-icon flex flex-row items-center gap-2">
          <Link
            href="/schedule"
            className="flex flex-row items-center gap-2 text-lg  font-light hover:text-gray-100 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          >
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
            Back
          </Link>
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                  />
                </div>

                {/* subject input section  */}
                <div className="relative border-none">
                  <label htmlFor="subject" className={labelLead}>
                    Phone <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="number"
                    id="phone"
                    style={{
                      WebkitBoxShadow: "0 0 0px 1000px #121212 inset",
                      WebkitTextFillColor: "white",
                    }}
                    className={`border-[1px] border-gray-800 bg-[#121212] pt-3  focus:outline-none w-full   , ${inputLead}`}
                    onChange={handleInputChange}
                  />
                </div>

                {/* message input section */}
                <div className="relative border-none ">
                  <label htmlFor="message" className={labelLead}>
                    Topic To Discuss <span className="text-red-500">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    id="message"
                    rows="2"
                    className={`border-[1px] border-gray-800 pt-6  w-full  block px-4 placeholder-gray-500 rounded-sm focus:outline-none sm:text-sm mt-1 peer  placeholder:text-gray-500 bg-[#121212] shadow-none `}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* data picker */}
              <div className="d-flex justify-between">
                <Datepicker
                  onSelectedDateChanged={handleDateChange}
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
                            "hidden bg-primary-color text-white dark:bg-cyan-600 ",
                          clear:
                            "hidden border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
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
                            base: "block flex-1 cursor-pointer font-light border-0 text-center text-lg leading-9 text-gray-100 hover:bg-gray-900 dark:text-white dark:hover:bg-gray-600",
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
                <div className=" min-w-52">
                  {/* here in first div i want to put dynamic date that i come from the DatePicker that's it */}
                  <div className="time-slot py-2 m-2">
                    {selectedDate &&
                      selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}
                  </div>

                  <ul
                    id="timetable"
                    className="grid w-full grid-cols-2 gap-1 mt-5 "
                  >
                    {timeSlots.map((timeSlot, index) => (
                      <li key={index}>
                        <input
                          type="radio"
                          id={`time-${index}`}
                          value={timeSlot}
                          className="hidden peer "
                          name="timetable"
                          onChange={handleTimeChange}
                        />
                        <label
                          htmlFor={`time-${index}`}
                          className="time-slot border px-8 p-3 m-1 cursor-pointer hover:text-[#CC9900] hover:border-[#CC9900] peer-checked:text-[#CC9900] peer-checked:border-[#CC9900] w-36"
                        >
                          {timeSlot}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>

        {/* right part form */}
        <div className="right-part flex flex-col w-[35%]">
          <div className="title text-2xl playfair font-medium">
            {scheduleItem.title}
          </div>
          <div className="duration text-lg font-light">
            {scheduleItem.duration} minutes phone call
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
                onClick={() => {
                  handleSubmit();
                  Router.push("/schedule/questions");
                }}
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
                onClick={() => {
                  handleSubmit();
                  setNextButton(true);
                }}
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
