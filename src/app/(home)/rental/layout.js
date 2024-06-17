
export const metadata = {
    title: "Rental | Condowong - Toronto Real Estate",
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