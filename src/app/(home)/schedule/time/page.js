import ScheduleTime from "@/components/ScheduleTime";
import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <div className="container">
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/vishaldhakal96/30min"
        style={{
          minWidth: "320px",
          height: "580px",
          display: "block",
          margin: "0 auto",
        }}
      ></div>
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
      <ScheduleTime />
    </div>
  );
};

export default page;
