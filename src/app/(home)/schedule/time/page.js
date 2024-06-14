// import ScheduleTime from "@/components/ScheduleTime";
// import React from "react";
// import Script from "next/script";

// const page = () => {
//   return (
//     <div className="container">
//       <iframe
//         src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2LhSna-kows9owDGswklo97n2CAdV7N44-aIsBabiLrB5Obyeo75tWxv7GgKrzQuH4wkBG6E_S?gv=true"
//         width="100%"
//         height="900"
//         className="bg-black text-white mt-5 "
//         frameborder="0"
//       ></iframe>
//       <ScheduleTime />
//     </div>
//   );
// };

// export default page;
"use client";
import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Event from "@/components/CalendarEvent";

function Page() {
  const [events, setEvents] = useState([]);

  const calendarID = process.env.NEXT_PUBLIC_REACT_APP_CALENDAR_ID;
  const apiKey = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_ACCESS_TOKEN;

  console.log(calendarID, apiKey, accessToken)

  const getEvents = (calendarID, apiKey, accessToken) => {
    function initiate() {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })
        .then(
          (response) => {
            let events = response.result.items;
            setEvents(events);
          },
          function (err) {
            console.error("Error during request:", err);
            return [false, err];
          }
        );
    }
    gapi.load("client", initiate);
  };

  useEffect(() => {
    getEvents(calendarID, apiKey, accessToken);
  }, []);

  return (
    <div className="App flex flex-col justify-center py-8">
      <h1 className="mb-4 text-2xl font-bold">
        React App with Google Calendar API!
        <ul>
          {events?.map((event) => (
            <li key={event.id} className="flex justify-center">
              <Event description={event.summary} />
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default Page;
