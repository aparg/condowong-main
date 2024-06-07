import PropertySlider from "@/components/PropertySlider";
import Slider from "@/components/NewsSlider";
import { getFilteredRetsData, getSalesData } from "../../actions/getSalesData";
import { saleLease } from "@/constant";
import getPreconProperties from "../../actions/getPreconData";
import NewsSlider from "@/components/NewsSlider";
import NewsCard from "@/components/NewsCard";
import PreconPropertySlider from "@/components/PreconPropertySlider";
import Link from "next/link";

export default async function Home() {
  const residentialData = await getFilteredRetsData({ saleLease: "Sale" });
  const rentalData = await getFilteredRetsData({ saleLease: "Lease" });
  const preconData = await getPreconProperties();
  return (
    <div>
      <main className="">
        <section>
          <div className="w-full h-[500px]">
            <video
              autoPlay
              width="100%"
              // height="200px"
              src="/home-video/home-video.mp4"
              muted
              className="object-cover max-h-[500px]"
              loop
            ></video>
          </div>
        </section>
        <section className="mx-10">
          <div className="mt-16">
            <div className="flex justify-between">
              <h3 className="main-title font-extrabold text-4xl text-white playfair">
                Market News
              </h3>
            </div>
            <NewsSlider />
            {/* <Slider>
              {cardData?.map((card, index) => {
                return (
                  <NewsCard
                    title={card.title}
                    imageSrc={card.imgSrc}
                    ref={cardRef}
                  />
                );
              })}
            </Slider> */}
          </div>
          <div className="mt-16">
            <div className="flex justify-between">
              <h3 className="main-title font-extrabold text-4xl text-white playfair">
                Top Resale Homes
              </h3>
              <Link
                href="/resale"
                className="bg-primary-color text-white font-bold px-3 rounded-md hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>
            <PropertySlider data={residentialData} />
          </div>
          <div className="mt-16">
            <div className="flex justify-between">
              <h3 className="main-title font-extrabold text-4xl text-white">
                Top Rental Homes
              </h3>
              <Link
                href="/rental"
                className="bg-primary-color text-white font-bold px-3 rounded-md hover:no-underline flex items-center"
              >
                Explore All
              </Link>
            </div>
            <PropertySlider data={rentalData} />
          </div>
          <div className="mt-16">
            <h3 className="main-title font-extrabold text-4xl text-white">
              Top Preconstructions
            </h3>
            <PreconPropertySlider data={preconData} />
          </div>
        </section>
      </main>
    </div>
  );
}
