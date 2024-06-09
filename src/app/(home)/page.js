import PropertySlider from "@/components/PropertySlider";
import Slider from "@/components/NewsSlider";
import {
  getFilteredRetsData,
  getSalesData,
} from "../../../actions/getSalesData";
import { saleLease } from "@/constant";
import getPreconProperties from "../../../actions/getPreconData";
import NewsSlider from "@/components/NewsSlider";
import NewsCard from "@/components/NewsCard";
import PreconPropertySlider from "@/components/PreconPropertySlider";
import assignments from "@/constant/assignments";
import Link from "next/link";
import AssignmentSlider from "@/components/AssignmentSlider";

export default async function Home() {
  const residentialData = await getFilteredRetsData({ saleLease: "Sale" });
  const rentalData = await getFilteredRetsData({ saleLease: "Lease" });
  const preconData = await getPreconProperties();
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
            <div className="absolute w-full bottom-[15rem] flex flex-col items-center">
              <h1 className="text-[4rem] font-bold text-center playfair">
                Build Wealth with Toronto Real Estate
              </h1>
              <h3 className="text-[2.5rem] font-bold  playfair">
                <i>Every Crisis is an Opportunity</i>
              </h3>{" "}
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
            <div className="flex justify-between mb-3">
              <h3 className="main-title font-extrabold text-4xl text-white playfair">
                Top Resale Homes
              </h3>
              <Link
                href="/resale"
                className="bg-primary-color text-white px-3 hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>
            <PropertySlider data={residentialData} />
          </div>
          <div className="mt-40">
            <div className="flex justify-between mb-3">
              <h3 className="main-title font-extrabold text-4xl text-white">
                Top Rental Homes
              </h3>
              <Link
                href="/rental"
                className="bg-primary-color text-white px-3 hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>
            <PropertySlider data={rentalData} />
          </div>
          <div className="mt-40">
            <div className="flex justify-between mb-3">
              <h3 className="main-title font-extrabold text-4xl text-white">
                Top Assignments
              </h3>
              <Link
                href="/assignment"
                className="bg-primary-color text-white px-3 hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>
            <AssignmentSlider data={assignments} />
          </div>
          <div className="mt-40">
            <div className="flex justify-between mb-3">
              <h3 className="main-title font-extrabold text-4xl text-white">
                Top Preconstructions
              </h3>
              <Link
                href="/rental"
                className="bg-primary-color text-white px-3 hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>
            <PreconPropertySlider data={preconData} />
          </div>
        </section>
      </main>
    </div>
  );
}
