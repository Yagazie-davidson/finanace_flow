import React from "react";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Footer from "./Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function Layout({ children, className }) {
  return (
    <div
      className={`${dmSans.className} bg-pri-III text-pri-II h-fit ${className}`}
    >
      <Image
        alt="vector"
        src="/vector-I.svg"
        height={10}
        width={500}
        className="row-start-1 col-start-1"
      />
      <Image
        alt="vector"
        src="/shadow.svg"
        height={10}
        width={500}
        className="absolute top-80 tablet:top-40 right-0"
      />

      {children}
      <Footer />
    </div>
  );
}

export default Layout;
