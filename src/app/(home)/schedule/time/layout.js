/* import MarketNewsNavbar from "../../components/market-news-navbar"; */

export const metadata = {
    title: "Pre-Construction with Dan Wong - Condowong",
    description: "Toronto Real Estate Market News",
  };
  
  export default function Layout({ children }) {
    return (
      <div className=" bg-[#000]">
        {/* <MarketNewsNavbar /> */}
        <div className="mx-1 md:mx-16">{children}</div>
      </div>
    );
  }
  

  