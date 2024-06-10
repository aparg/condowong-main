import Link from "next/link";
import React from "react";

const PreconPropertyCard = React.forwardRef(
  ({ data, link, small = false }, ref) => {
    const handleImageError = (e) => {
      e.target.onerror = null;
      e.target.src = `/noimage.webp`;
    };
    return (
      <Link href="/pre-construction/daniels-on-parliament">
        <div className="b-patt">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 d-flex align-items-between bg-white">
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
                  src="https://www.youtube.com/embed/DAKjOGJe1vQ?si=9fVCUoj-EqtySK1m"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="h-full"
                ></iframe>
              </div>
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
                          <p>OVER 39 YEARS</p>
                        </li>
                        {/* <li className="col d-flex gap-2 justify-content-start align-items-center">
                        <img className="w-6" src="/location-black.svg"></img>
                        <p>DANIELS HAS ROOTS IN REGENT PARK</p>
                      </li> */}
                        <li className="col d-flex gap-2 justify-content-start align-items-center">
                          <img className="w-6" src="/money-black.svg"></img>
                          <p>AFFORDABLE HOUSING OPPORTUNITIES</p>
                        </li>
                        <li className="col d-flex gap-2 justify-content-start align-items-center">
                          <img
                            className="w-6"
                            src="/agriculture-black.svg"
                          ></img>
                          <p>URBAN AGRICULTURE</p>
                        </li>
                        <li className="col d-flex gap-2 justify-content-start align-items-center">
                          <img className="w-6" src="/location-black.svg"></img>
                          <p>IN VIBRANT DOWNTOWN EAST</p>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <div className="d-flex flex-column flex-md-row mt-5 gap-4 align-items-md-center justify-content-start">
                    <Link
                      className="btn btn-lg btn-register shadow"
                      href="/pre-construction/daniels-on-parliament"
                    >
                      Learn More
                      <img
                        src="/arrow-right.svg"
                        alt="right arrow"
                        className="img-fluid rarr inline"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
);

export default PreconPropertyCard;
