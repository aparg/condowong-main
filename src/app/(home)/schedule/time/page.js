import ScheduleTime from "@/components/ScheduleTime";
import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <div className="container">
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2LhSna-kows9owDGswklo97n2CAdV7N44-aIsBabiLrB5Obyeo75tWxv7GgKrzQuH4wkBG6E_S?gv=true"
        width="100%"
        height="900"
        className="bg-black text-white mt-5 "
        frameborder="0"
      ></iframe>
      <ScheduleTime />
    </div>
  );
};

export default page;
