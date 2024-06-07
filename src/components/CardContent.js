// import Image from "next/image";
// import React from "react";

// const CardContent = () => {
//   return (
//     <div className="flex flex-col w-full flex-wrap gap-3">
//       <div className="img">
//         <img
//           src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//           alt="Laptop"
//           className="h-[200px] w-full object-cover"
//         />
//       </div>
//       <div className="mini-title text-sm font-light uppercase">
//         Unique Living
//       </div>
//       <div className="title text-xl w-full playfair">
//         How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!
//       </div>
//       <div className="subtitle font-light text-sm text-gray-500">
//         At the very beginning of 2023, I published this video in response to
//         news headlines saying “Record Number of Condos to Flood Toronto...
//       </div>
//     </div>

//   );
// };

// export default CardContent;

import Link from "next/link";
import React from "react";

const CardContent = React.forwardRef(
  ({ imgSrc, miniTitle, title, subtitle, link }, ref) => {
    return (
      <div ref={ref}>
        <Link href={link} className="hover:no-underline decoration text-white">
          <div className="flex flex-col w-full flex-wrap gap-3">
            <div className="img">
              <img
                src={imgSrc}
                alt="Laptop"
                className="h-[200px] w-full object-cover"
              />
            </div>
            <div className="mini-title text-sm font-light uppercase ">
              {miniTitle}
            </div>
            <div className="title text-xl w-full playfair">{title}</div>
            <div className="subtitle font-light text-sm text-gray-500">
              {subtitle}
            </div>
          </div>
        </Link>
      </div>
    );
  }
);

export default CardContent;
