import Image from "next/image";
import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <div className="mt-14 bg-pri-IV pt-10 px-12">
      <div className="flex items-center space-x-3">
        <Image
          alt="finance flow logo"
          src="/header/Frame.png"
          width={51}
          height={10}
        />
        <h2 className="text-lg">FinanceFlow</h2>
      </div>
      <section>
        <h1>MENU</h1>
        <hr />
        <div className="tablet:flex tablet:justify-between items-center">
          <ul className="gird grid-cols-2">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>PRICING</li>
            <li>TOKEN</li>
            <li>BLOG</li>
            <li>CONTACT US</li>
          </ul>
          <div className="flex flex-col items-center bg-pri-VI mt-10 rounded-3xl p-6">
            <h1 className="text-lg">Download our Application</h1>
            <p className="my-5 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer{" "}
            </p>
            <div className="flex flex-col space-y-5 tablet:flex-row tablet:space-y-0 tablet:space-x-5">
              <Button text={"APP STORE"} />
              <Button text={"PLAY STORE"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
