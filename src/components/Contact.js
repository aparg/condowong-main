import React from "react";

// css
export const inputLead =
  " block px-4 h-16 pt-5  w-full placeholder-gray-500 rounded-sm focus:outline-none sm:text-sm mt-1 peer  placeholder:text-gray-500 bg-[#121212] shadow-none";
export const labelLead =
  "absolute left-0 right-0 top-6 -translate-y-3 bg-transparent ml-1 px-3 text-xs duration-100 ease-linear peer-placeholder-shown:text-gray-500 peer-placeholder-shown:-translate-y-3 peer-placeholder-shown:text-base  peer-focus:ml-4 peer-focus:bb-10 peer-focus:-translate-y-3 peer-focus:px-1  peer-focus:text-xs whitespace-nowrap ";

const Contact = () => {
  return (
    <div className="mx-24">
      <div className="title text-5xl  my-10  text-center text-white playfair">
        Contact CondoWong Now
      </div>
      <div className="bg-black text-white flex flex-row gap-10 items-start justify-center p-3">
        {/* left part */}
        <div className="left-part w-[30%]">
          <div className="flex flex-col gap-y-6 ">
            <div className="flex flex-row bg-[#121212] py-4">
              <div className="home-icon w-1/5 text-center items-center mt-2 pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-house-door-fill text-2xl text-center items-center"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
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
            <div className="flex flex-row items-center bg-[#121212] py-4">
              <div className="phone-icon w-1/5 text-center items-center pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
              </div>
              <div className="phone w-4/5">
                <div className="title text-gl  my-1">+1 905 597 0366</div>
              </div>
            </div>

            {/* email */}
            <div className="flex flex-row items-center bg-[#121212] py-4">
              <div className="email-icon w-1/5 text-center items-center pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div className="email w-4/5">
                <div className="title text-lg  my-1 ">info@condowong.ca</div>
              </div>
            </div>

            {/* whatsapp
             */}
            <div className="flex flex-row items-center bg-[#121212] py-4">
              <div className="whatsapp-icon w-1/5 text-center items-center pl-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                </svg>
              </div>
              <div className="whatsapp w-4/5">
                <div className="title text-lg  my-1 ">+1 647 296 0366</div>
              </div>
            </div>

            {/* scheldule a call button  */}
            <div className="flex flex-row items-center border-[#CC9900] mt-1 border-2 justify-center py-1  text-white">
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
                Phone <span className="text-red-500">*</span>{" "}
              </label>
              <input
                type="text"
                id="subject"
                style={{
                  WebkitBoxShadow: "0 0 0px 1000px #121212 inset !important",
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
              <div className="title text-xl  my-1 ">Send Message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
