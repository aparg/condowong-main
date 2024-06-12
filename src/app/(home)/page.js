import PropertySlider from "@/components/PropertySlider";
// import Slider from "@/components/NewsSlider";
import { getFilteredRetsData } from "@/actions/getSalesData";
// import { saleLease } from "@/constant";
import getPreconProperties from "@/actions/getPreconData";
import NewsSlider from "@/components/NewsSlider";
// import NewsCard from "@/components/NewsCard";
import PreconPropertySlider from "@/components/PreconPropertySlider";
import assignments from "@/constant/assignments";
import Link from "next/link";
import AssignmentSlider from "@/components/AssignmentSlider";
import Contact from "@/components/Contact";

export default async function Home() {
  const residentialData = await getFilteredRetsData({ saleLease: "Sale" });
  const rentalData = await getFilteredRetsData({ saleLease: "Lease" });
  const preconData = [
    {
      name: "Daniels on Parliament",
      location: "365 Parliament St, Toronto, ON",
      imgSrc: "/pre-constructions/daniel-on-parliament/1.png",
    },
  ];
  return (
    <div>
      <main className="">
        <section>
          <div className="w-full h-[500px] relative">
            <video
              autoPlay
              width="100%"
              // height="200px"
              src="/home-video/home-video.mp4"
              muted
              className="object-cover max-h-[500px]"
              loop
            ></video>
            <div className="absolute w-full bottom-[2rem] flex flex-col items-center">
              <h1 className="text-5xl md:text-[4rem] font-bold text-center playfair mx-5">
                Build Wealth with Toronto Real Estate
              </h1>
              <h3 className="text-xl md:text-[2.5rem] font-bold text-center playfair text-primary-color text-shadow mt-2">
                Every Crisis is an Opportunity
              </h3>{" "}
              <Link
                href="/resale"
                className="bg-primary-color text-black px-5 py-3 hover:no-underline flex items-center mt-5 shadow-lg"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>
        <section className="mx-10">
          <div className="mt-16">
            <div className="flex justify-between mb-3">
              <h3 className="main-title font-extrabold text-4xl text-white playfair">
                Market News
              </h3>
            </div>
            <NewsSlider />
          </div>
          <div className="mt-40">
            <div className="flex flex-col md:flex-row justify-between items-center mb-3">
              <h3 className="main-title font-extrabold text-[2rem] md:text-4xl text-white playfair text-center md:text-start mb-4">
                Check out Homes For Sale from across GTA
              </h3>
              <Link
                href="/resale"
                className="bg-primary-color text-white px-5 py-3 hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>
            <PropertySlider data={residentialData} />
          </div>
          <div className="mt-40">
            <div className="flex flex-col md:flex-row justify-between items-center mb-3">
              <h3 className="main-title font-extrabold text-[2rem] md:text-4xl text-white playfair text-center md:text-start mb-4">
                Check out Leases from across GTA
              </h3>
              <Link
                href="/rental"
                className="bg-primary-color text-white px-5 py-3 hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>
            <PropertySlider data={rentalData} />
          </div>
          <div className="mt-40">
            <div className="flex flex-col md:flex-row justify-between items-center mb-3">
              <h3 className="main-title font-extrabold text-[2rem] md:text-4xl text-white playfair text-center md:text-start mb-4">
                Check out Assignments for Sale from across GTA
              </h3>
              <Link
                href="/assignment"
                className="bg-primary-color text-white px-5 py-3 hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>

            <AssignmentSlider data={assignments} />
          </div>
          <div className="mt-40 mb-14">
            <div className="flex justify-between mb-3">
              <h3 className="main-title font-extrabold text-4xl text-white mb-4">
                Upcoming and Hot Preconstruction Project
              </h3>
              {/* <Link
                href="/rental"
                className="bg-primary-color text-white px-3 hover:no-underline flex items-center"
              >
                Explore All
              </Link> */}
            </div>
            <PreconPropertySlider data={preconData} />
          </div>
        </section>
      </main>
    </div>
  );
}
