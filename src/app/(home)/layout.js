import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import Contact from "@/components/Contact";

export default async function RootLayout({ children }) {
  return (
    <>
      <main className="montserrat bg-[#000] montserrat">
        <NextTopLoader
          color="#fff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #cd922b,0 0 5px #cd922b"
        />

        <Navbar />
        {children}
        <section className="my-14 mt-48 sm:mt-8">
          <Contact showAddress={false} />
        </section>
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></Script>
      </main>
    </>
  );
}
