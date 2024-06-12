"use client";
import Link from "next/link";
import Contact from "./Contact";
import { useState } from "react";
import ContactFormSubmit from "./ContactFormSubmit";

// import PreconSchema from "@/components/PreconSchema";
// import ContactForm from "@/components/ContactForm";

// export const metadata = {
//   keywords:
//     "Empire Canals, Empire Communities, Empire, Pre-Construction, Towns, Townhouses, Townhomes, Detached, Detached Homes, Welland Canals, Welland Canals Homes, Empire Canals in Welland, Master-Planned Community, Coming Soon, Towns and Detached, Townhomes and Detached Homes, Coming to Dain City, Towns and Detached Coming Soon, Towns Coming Soon, Townhomes Coming Soon, Townhouses Coming Soon, Detached Coming Soon, Detached Homes Coming Soon, Detached Houses Coming Soon, Coming Soon to Welland, Coming to Welland, Coming Soon to Dain City, Towns for Sale, Detached Homes for Sale, Townhomes for Sale, Homes for Sale, Welland Towns, Welland Homes, Welland Real Estate, Ontario Towns, Ontario Homes, GTA Homes, GTA Towns, Register Here, Register Now",
//   title: "Empire Canals - NEW PHASE NOW SELLING FROM $589,990",
//   description:
//     "New Towns & Detached In Welland From $589,990. Family-friendly streetscapes, on-site schools, community amenities and scenic trails, creeks and parks",
//   icons: {
//     icon: "/favicon.ico",
//   },
//   openGraph: {
//     images: "/rendering1.jpeg",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//     },
//   },
//   category: "real estate",
// };

const PreconPage = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    ContactFormSubmit(credentials, setSubmitbtn, setCredentials);
  };
  return (
    <main className="px-4 md:px-12">
      <div className="b-patt py-md-5 mb-14">
        <div className="shadow-m">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-between bg-white  my-14 mx-0">
            <div className="col p-6">
              <div className="position-relative">
                <div className="text-start"></div>
                <section>
                  <img src="https://danielshomes.ca/wp-content/uploads/2022/04/Daniels-on-Parliament-South-Tower-Logo.jpg" />
                  {/* <h1 className="text-4xl text-[#316cb4] font-bold leading-[1.2em]">
                    DANIELS ON PARLIAMENT
                  </h1> */}
                  <h2 className="page-subtitle">
                    Located where Regent Park meets Cabbagetown
                  </h2>
                </section>
                <section className="mt-5">
                  <div className="d-flex justify-content-start">
                    <ul className="row row-cols-1 row-cols-md-2 col-12 g-4 justify-content-start iconn text-black">
                      {/* <li className="col d-flex gap-2 justify-content-center">
                        <img src=" PreconPage"></im>
                        <p>Townhomes &amp; Detached</p>
                      </li> */}
                      <li className="col d-flex gap-2 justify-content-start align-items-center">
                        <img className="w-6" src="/clock-black.svg"></img>
                        <p>Over 39 Years Building Expertise</p>
                      </li>
                      {/* <li className="col d-flex gap-2 justify-content-start align-items-center">
                        <img className="w-6" src="/location-black.svg"></img>
                        <p>DANIELS HAS ROOTS IN REGENT PARK</p>
                      </li> */}
                      <li className="col d-flex gap-2 justify-content-start align-items-center">
                        <img className="w-6" src="/money-black.svg"></img>
                        <p>Innovation in Master-Planning</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start align-items-center">
                        <img className="w-6" src="/agriculture-black.svg"></img>
                        <p>Urban Agriculture</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start align-items-center">
                        <img className="w-6" src="/location-black.svg"></img>
                        <p>In Vibrant Downtown East</p>
                      </li>
                    </ul>
                  </div>
                </section>
                <div className="d-flex flex-column flex-md-row mt-5 gap-4 align-items-md-center justify-content-start">
                  <Link
                    className="btn btn-lg btn-register shadow"
                    href="#contact"
                  >
                    Register Now
                    <img
                      src="/arrow-right.svg"
                      alt="right arrow"
                      className="img-fluid rarr inline"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col px-0">
              {/* <video
                src="/empire_canals_desktop.mp4"
                type="video/mp4"
                autoPlay={true}
                loop={true}
                playsInline={true}
                muted={true}
                className="img-fluid hero-video"
              ></video> */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/DAKjOGJe1vQ?autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                className="h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <section className="container" id="renderings">
        <div>
          <div className="container pt-3 " id="gallery">
            <div className="my-md-5 my-3"></div>
            <div className="pt-md-5 pt-5">
              <h2 className="fw-bold fs-1 pb-3  ps-3 ps-md-0 d-flex justify-content-center brand-color">
                Daniels on Parliament : Models and Renderings
              </h2>
            </div>
            <div className="rounded-3">
              <div className="d-flex justify-content-between pb-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center g-4">
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/pre-constructions/daniel-on-parliament/1.png"
                        alt="Empire Wyndfield Rendering 1"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/pre-constructions/daniel-on-parliament/2.png"
                        alt="Empire Wyndfield Rendering 2"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div href="#" className="afte">
                      <img
                        loading="lazy"
                        src="/pre-constructions/daniel-on-parliament/3.png"
                        alt="Empire Wyndfield Rendering 3"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/pre-constructions/daniel-on-parliament/4.png"
                        alt="Empire Wyndfield Rendering 4"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/pre-constructions/daniel-on-parliament/5.png"
                        alt="Empire Wyndfield Rendering 5"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="afte">
                      <img
                        loading="lazy"
                        src="/pre-constructions/daniel-on-parliament/6.png"
                        alt="Empire Wyndfield  Rendering 6"
                        className="img-fluid imghei"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-14">
        <h2 className="fw-bold fs-1 mb-0 text-center justify-content-center text-primary-color">
          Get Floor Plans and Pricing
        </h2>
        <form
          method="POST"
          className="mb-3 mt-10 flex flex-col items-center"
          onSubmit={(e) => handleFormSubmit(e)}
          id="contactForm"
        >
          <div className="me-0 row me-0">
            <div className="relative bg-black-tint col-6 mb-3">
              <input
                type="text"
                placeholder=""
                name="firstName"
                id="firstName"
                value={credentials.firstName}
                onChange={(e) => handleChange(e)}
                className="fields fff w-full px-4 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100 text-black"
              />
              <label
                htmlFor="firstName"
                className="absolute left-0 px-7 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
              >
                First Name
              </label>
            </div>
            <div className="relative bg-black-tint mb-3 col-6">
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder=""
                value={credentials.lastName}
                onChange={(e) => handleChange(e)}
                required={true}
                className="fields fff w-full px-4 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100 text-black"
              />
              <label
                htmlFor="lastName"
                className="absolute left-0 px-7 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
              >
                Last Name
              </label>
            </div>
            <div className="relative mb-3 col-12">
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                value={credentials.email}
                onChange={(e) => handleChange(e)}
                required={true}
                className="fields fff w-full px-4 pb-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 peer placeholder:translate-y-1/2 placeholder:scale-100 text-black"
              />
              <label
                htmlFor="email"
                className="absolute left-0 px-7 text-gray-500 transition-all duration-300 peer-focus:-translate-y-[0.75] peer-focus:scale-30 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:scale-100"
              >
                Email
              </label>
            </div>
          </div>
          <input
            type="submit"
            value={"Send Now!"}
            className="btn bg-primary-color text-white btn-md mb-3 rounded-0 text-lg fw-bold"
            id="subbtn"
          />
        </form>
      </section>
      <section id="location" className="my-14">
        <div className="container pt-md-5 pt-5" id="location">
          <div className="pt-md-5 pt-5"></div>
          <div className="py-5">
            <h2 className="fw-bold fs-1 mb-0 text-center justify-content-center brand-color">
              Daniels on Parliament
            </h2>
            <span className="small-text text-center d-flex justify-content-center custom-underline pb-3">
              635 Canal Bank St, Welland, ON L0S 1K0, Canada
            </span>
            <div>
              <div className="bg-white p-1   rounded-mine d-flex justify-content-center ">
                <iframe
                  loading="lazy"
                  width="100%"
                  height="370"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.it/maps?q=365%20Parliament%20St,%20Toronto,%20ON&amp;output=embed"
                  data-rocket-lazyload="fitvidscompatible"
                  data-lazy-src="https://maps.google.it/maps?q=365%20Parliament%20St,%20Toronto,%20ON&amp;output=embed"
                  data-ll-status="loaded"
                  class="entered lazyloaded"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5"></div>
      <section className="my-14 d-flex flex-column align-items-center">
        <h2 className="fw-bold fs-1 text-center justify-content-center brand-color mb-2">
          Brochure
        </h2>
        <iframe
          src="/brochure.pdf"
          width="100%"
          height="600px"
          typeof="application/pdf"
          loading="lazy"
          title="PDF-file"
        ></iframe>
      </section>
      {/* <section id="contact">
        <div className="pt-5" id="Contact">
          <div className="pt-5 mt-5">
            <div className="row mx-0 mb-4">
              <h6 className="text-center fs-1 fw-bold pt-3 register ">
                {" "}
                Register today!
              </h6>
              <div className="registertext px-4 d-flex justify-content-center align-items-center  text-center">
                <p>
                  Register today to get the updated information such as floor
                  <br className="d-none d-md-inline" /> plan, pricing &amp;
                  availability of Empire Canals
                </p>
              </div>
            </div>
            <ContactForm></ContactForm>
          </div>
        </div>
      </section> */}
      {/* <div className="py-5"></div>
      <div className="py-5"></div>
      <img
        src="/footer-seperator.svg"
        alt="footer seperator for rmpire canals page"
        className="img-fluid footsep"
      /> */}
      {/* <footer className="footerr  pb-5 mb-4">
        <div className="container ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-1 justify-content-between ">
            <div className="col-md-5 my-3 fotwidth center-sm px-4 px-md-0">
              <p className=" ">
                <img
                  src="empire-canal-logo.png"
                  className="img-fluid navbar-brand"
                  alt="Empire canal logo in footer"
                />
              </p>
              <span className=" justifyy">
                We do not represent the builder. All renderings, incentives,
                pricing are subject to terms &amp; conditions and may change at
                anytime without notice – see sales representatives for more
                details. not intended to solicit those under contract with
                another brokerage. All inquiries will go to Salima Nazir, real
                estate agent at HOMELIFE GALAXY REAL ESTATE LTD. in TORONTO,
                Ontario.{" "}
              </span>
              <div className="list pt-md-5 pt-3 d-md-block d-none">
                <p className="">
                  Website designed by{" "}
                  <a
                    href="https://www.sixdesign.ca/"
                    target="_blank"
                    className="text-dark text-decoration-none"
                  >
                    <strong>SixDesign.</strong>{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-1 "></div>
            <div className="col-md-4 mt-md-4 py-md-5 py-5 center-sm px-4 px-md-5 ">
              <div>
                <h5 className="text-dark fw-bold mt-3 mb-3">About</h5>
                <div className="list d-block ">
                  <p className="mybot pb-md-0 pb-0">
                    Builder : Empire Communities
                  </p>
                  <p className="mybot pb-md-0 pb-0">
                    Location : 635 Canal Bank St, Welland, ON L0S 1K0, Canada
                  </p>

                  <p className="mybot pb-md-0 pb-0">
                    House Type : Detached &amp; Towns
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 mt-md-5 pt-md-5 mt-sm-0 pt-4 center-sm d-flex justify-content-start justify-content-md-center px-4 text-center">
              <img
                src="/empire-logo.png"
                className="img-fluid footer-logo"
                alt="Empire Communities Logo which is a developer of empire canals project"
              />
            </div>
          </div>

          <div className="list mt-5 pt-5 d-md-none d-block center-sm px-2">
            <p className="">
              Website designed by{" "}
              <a
                href="https://www.sixdesign.ca/"
                target="_blank"
                className="text-dark text-decoration-none"
              >
                <strong>SixDesign.</strong>{" "}
              </a>
            </p>
          </div>
        </div>
      </footer> */}
    </main>
  );
};

export default PreconPage;
