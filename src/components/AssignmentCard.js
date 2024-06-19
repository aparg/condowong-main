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
            <div className="flex-1 px-3 sm:px-5 py-3 bg-white">
              <div className="flex flex-row justify-between bg-white">
                <div className=" truncate text-ellipsis bg-white">
                  <span className="text-black font-medium text-lg bva">
                    {elem.unitNumber} - {elem.project}
                  </span>
                </div>
              </div>
              <h2 className="text-black d-flex align-items-center justify-content-between">
                <span className="flex flex-row items-center font-bold text-black text-lg">
                  {elem.price}
                </span>
              </h2>
              <div className="border-b-neutral-300 bg-white py-2 border-b-[1px]"></div>
              <div className="bg-white text-black font-bold truncate text-ellipsis text-xs mt-2 flex justify-between">
                <img src="/logo/logo1.webp" className="w-14"></img>
                <div className="bg-white ml-2 text-black">
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
