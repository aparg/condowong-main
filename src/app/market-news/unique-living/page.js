// import CardContent from "@/components/CardContent";
// import React from "react";

// const page = () => {
  
//   return (
//     <div className="bg-black text-white">
//       <div
//         className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8`}
//       >

//         <CardContent />
//         <CardContent />
//         <CardContent />
//         <CardContent />
//         <CardContent />
//       </div>{" "}
//     </div>
//   );
// };

// export default page;
import CardContent from "@/components/CardContent";
import React from "react";
import Link from 'next/link';

const page = () => {
  // Your dynamic content
  const cards = [
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      miniTitle: "Unique Living",
      title: "How to Assign a Condo Unit FAST - Don't Walk Away Until You Watch This!",
      subtitle: "At the very beginning of 2023, I published this video in response to news headlines saying “Record Number of Condos to Flood Toronto...",
      link: "/your-dynamic-route" // replace with your dynamic route
    },
  ];

  return (
    <div className="bg-black text-white">
      <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 md:p-8`}>
      {cards.map((card, index) => (
              <CardContent {...card} />
        ))}
      </div>
    </div>
  );
};

export default page;