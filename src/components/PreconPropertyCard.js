import Link from "next/link";
import React from "react";

const PreconPropertyCard = React.forwardRef(
  ({ data, link, small = false }, ref) => {
    const handleImageError = (e) => {
      e.target.onerror = null;
      e.target.src = `/noimage.webp`;
    };
    return (
      <section className="text-white px-1" ref={ref}>
        <Link
          href="/precon"
          className="text-white hover:no-underline w-full block bg-black-tint h-[30rem]"
        >
          <div className="lg:px-0 h-full">
            <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white group p-0 relative">
              <div
                className={`${
                  small ? "h-44" : "h-80"
                } bg-black-tint overflow-hidden relative`}
              >
                <div className="h-80 relative">
                  <img
                    className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                    src={`${data?.image[0].image}`}
                    alt="property image"
                    onError={handleImageError}
                  />
                </div>
              </div>
              <div className="bg-black-tint flex-1 sm:px-5 py-3">
                <h3 className="text-white d-flex align-items-center justify-content-between">
                  <span className="flex flex-row items-center font-bold  text-[1.2rem] text-wrap">
                    {data.project_address}
                  </span>
                </h3>
                <div className="flex flex-row justify-between">
                  <div className="bg-black-tint truncate text-ellipsis">
                    <span className="text-white font-medium text-md bva text-wrap">
                      {data.project_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    );
  }
);

export default PreconPropertyCard;
