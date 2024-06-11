import Link from "next/link";
import React from "react";

const AssignmentCard = React.forwardRef(({ elem, small = false }, ref) => {
  // const handleImageError = (e) => {
  //   e.target.onerror = null;
  //   e.target.src = `/noimage.webp`;
  // };
  return (
    <section className="text-black" ref={ref}>
      {}
      <Link
        href={`/assignment/${elem.project.replaceAll(" ", "-")}`}
        className="text-black hover:no-underline w-full"
      >
        <div className="lg:px-0 h-full">
          <div className="flex flex-col overflow-hidden transition-all duration-200 transform bg-white group p-0 hover:shadow-lg hover:-translate-y-1 relative">
            <div
              className={`${small ? "h-44" : "h-80"} overflow-hidden relative`}
            >
              <div className="h-80 relative">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={`${elem.imgSrc}`}
                  alt="property image"
                  // onError={handleImageError}
                />
              </div>
            </div>
            <div className="flex-1 px-3 sm:px-5 py-3 bg-black-tint">
              <div className="flex flex-row justify-between bg-black-tint">
                <div className=" truncate text-ellipsis bg-black-tint">
                  <span className="text-white font-medium text-lg bva">
                    {elem.project}
                  </span>
                </div>
              </div>
              <h2 className="text-black d-flex align-items-center justify-content-between">
                <span className="flex flex-row items-center font-bold text-white text-lg">
                  {elem.price}
                </span>
              </h2>
              <div className="border-b-neutral-700 bg-black-tint py-2 border-b-2"></div>
              <div className="bg-black-tint text-white font-bold truncate text-ellipsis text-xs mt-2 flex justify-between">
                <img src="/logo/logo1.webp" className="w-14"></img>
                <div className="bg-black-tint ml-2">
                  CONDOWONG REAL ESTATE INC.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
});

export default AssignmentCard;
