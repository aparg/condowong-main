import React from "react";

// css
export const inputLead =
  " block px-4 h-16  w-full placeholder-gray-500 rounded-sm focus:outline-none sm:text-sm mt-1 peer  placeholder:text-gray-500 bg-[#121212] shadow-none";
export const labelLead =
  "absolute left-0 right-0 top-6 -translate-y-3 bg-transparent ml-1 px-3 text-xs duration-100 ease-linear peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base  peer-focus:ml-4 peer-focus:bb-10 peer-focus:-translate-y-3 peer-focus:px-1  peer-focus:text-xs whitespace-nowrap ";

const Contact = () => {
  return (
    <div className=" m-24">
      <div className="title text-5xl  my-10  text-start text-white playfair">
        Contact Us
      </div>
      <div className="bg-black text-white flex flex-row gap-10 items-center justify-center ">
        {/* left part */}
        <div className="left-part w-[30%]">
          <div className="flex flex-col gap-y-6 ">
            <div className="flex flex-row bg-[#121212] py-3">
              <div className="home-icon w-1/5 text-center items-center mt-2">
                <i class="bi bi-house-fill text-2xl text-center items-center"></i>
              </div>
              <div className="address w-4/5 pr-4 ">
                <div className="title text-lg font-bold my-2 ">
                  Toronto Head Office
                </div>
                <div className="text font-extralight text-sm text-gray-400">
                  328 Hwy 7 E, Unit 20 Richmond Hill, ONL4B 3P7 Canada
                </div>
                <div className="title text-lg font-bold my-2   mt-4">
                  Hong Kong Branch Office
                </div>
                <div className="text font-extralight text-sm text-gray-400 ">
                  15/F, Soundwill Plaza II - Midtown 1-29 Tang Lung Street,
                  Causeway BayHong Kong
                </div>
              </div>
            </div>

            {/* phone  */}
            <div className="flex flex-row items-center bg-[#121212] py-3">
              <div className="phone-icon w-1/5 text-center items-center">
                <i class="bi bi-telephone-fill text-2xl text-center items-center"></i>
              </div>
              <div className="phone w-4/5">
                <div className="title text-xl  my-1">+1 905 597 0366</div>
              </div>
            </div>

            {/* email */}
            <div className="flex flex-row items-center bg-[#121212] py-3">
              <div className="email-icon w-1/5 text-center items-center">
                <i class="bi bi-envelope-fill text-2xl text-center items-center"></i>
              </div>
              <div className="email w-4/5">
                <div className="title text-xl  my-1 ">admin@condowong.ca</div>
              </div>
            </div>

            {/* whatsapp
             */}
            <div className="flex flex-row items-center bg-[#121212] py-3">
              <div className="whatsapp-icon w-1/5 text-center items-center ">
                <i class="bi bi-whatsapp text-2xl text-center items-center"></i>
              </div>
              <div className="whatsapp w-4/5">
                <div className="title text-xl  my-1 ">+1 647 296 0366</div>
              </div>
            </div>

            {/* scheldule a call button  */}
            <div className="flex flex-row items-center bg-[#CC9900] justify-center py-1  text-white">
              <div className="title text-xl  my-1 ">Schedule a Call</div>
            </div>
          </div>
        </div>

        {/* right part */}
        <div className="right-part w-[70%] ">
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
                Subject <span className="text-red-500">*</span>{" "}
              </label>
              <input
                type="text"
                id="subject"
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px #121212 inset",
                  WebkitTextFillColor: "white",
                }}
                className={`border-[1px] border-gray-800 bg-[#121212] pt-3  focus:outline-none w-full , ${inputLead}`}
              />
            </div>

            {/* message input section */}
            <div className="relative border-none ">
              <label htmlFor="message" className={labelLead}>
                Message <span className="text-red-500">*</span>{" "}
              </label>
              <textarea
                id="message"
                rows="10"
                cols={"20"}
                className={`border-[1px] border-gray-800 pt-4  w-full  block px-4 placeholder-gray-500 rounded-sm focus:outline-none sm:text-sm mt-1 peer  placeholder:text-gray-500 bg-[#121212] shadow-none `}
              />
            </div>

            {/* submit button */}
            <div className="flex flex-row items-center bg-[#CC9900] justify-center py-1  text-white">
              <div className="title text-xl  my-1 ">Send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
