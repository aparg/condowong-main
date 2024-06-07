"use client";
import React from "react";

const BookingDateOption = React.forwardRef(
  ({ data, handleChange, selected, year }, ref) => {
    return (
      <div className=" h-[100px] min-w-[100px] p-2">
        <button
          className={`flex flex-col w-full h-full justify-center items-center mr-1 rounded-md cursor-pointer ${
            selected
              ? `bg-light-lime border-white border-2 text-black`
              : `bg-white border-gray-400 border-1 text-gray-800`
          }`}
          ref={ref}
          value={`${
            data.day === "Any"
              ? `any`
              : `${year}-${String(data.monthNumber).padStart(2, "0")}-${String(
                  data.day
                ).padStart(2, "0")}`
          }`}
          onClick={(e) => handleChange(e)}
          id="date"
        >
          <span className="font-normal uppercase text-sm leading-6 text-black">
            {data.dayName}
          </span>
          <span className="font-medium text-2xl leading-6 text-black">
            {data.day}{" "}
          </span>
          <span className="font-normal text-sm leading-6 text-black">
            {data.month}{" "}
          </span>
        </button>
      </div>
    );
  }
);

export default BookingDateOption;
