// "use client"

import { Bold, Italic, Link } from "lucide";
import React from "react";

const InputComments = () => {
  return (
    <div className="bg-[#121212] rounded-md w-full my-10">
      {/* avatar section  */}
      <div className="flex flex-row items-center gap-4 p-4">
        <div className="avatar">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            className="h-12 w-12 rounded-full"
            alt="avatar"
          />
        </div>
        <div className="name text-xl text-white">Ronald Richard</div>
      </div>

      {/* input section */}
      <input
        type="text"
        className="w-full px-3 py-2 text-gray-400 font-extralight bg-[#121212] focus:outline-none placeholder:text-sm pl-4 h-12 rounded-md"
        placeholder="Write a comment..."
      />

      {/* button section */}
      <div className="flex justify-between p-4">
        <div className="iconssection flex flex-row gap-2">
          <div className="font-bold text-xl">B</div>
          <pre className="font-light text-xl">I</pre>
          <div className="font-light text-xl">Link</div>
        </div>
        <button className="px-4 py-3 bg-blue-500 font-bold rounded-md text-white" >
          Comment
        </button>
      </div>
    </div>
  );
};

export default InputComments;
