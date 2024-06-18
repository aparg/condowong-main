import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Toronto Real Estate | CondoWong Real Estate Inc., Brokerage ",
  description:
    "CondoWong is a Toronto-based real estate agency that specializes in pre-construction, resale, and rental properties.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <section className="my-14">
          <Contact showAddress={false} />
        </section> */}
      </body>
    </html>
  );
}
