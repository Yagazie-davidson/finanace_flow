import Image from "next/image";
import React from "react";
import Button from "./Button";

function Footer() {
  const navigationLinks = [
    { display: "home", url: "#" },
    { display: "about", url: "#" },
    { display: "pricing", url: "#" },
    { display: "token", url: "#" },
    { display: "blog", url: "#" },
    { display: "contact us", url: "#" },
  ];
  return (
    <div className="mt-14 bg-pri-IV pt-10 px-5">
      <div className="flex items-center justify-center space-x-3">
        <Image
          alt="finance flow logo"
          src="/header/Frame.png"
          width={51}
          height={10}
        />
        <h2 className="text-lg">FinanceFlow</h2>
      </div>
      <section className="mb-10">
        <h1 className="font-bold text-lg my-4">MENU</h1>
        <hr />
        <div className="tablet:flex tablet:justify-between items-center mt-7">
          <ul className="grid grid-cols-2 gap-4">
            {/* Avoid code repetition by using the map method */}
            {navigationLinks.map((item, index) => {
              return (
                <li key={index} className="text-sm font-medium">
                  <a href={item.url}>{item.display.toUpperCase()}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col items-center bg-pri-VI mt-10 rounded-3xl p-6">
            <h1 className="text-lg">Download our Application</h1>
            <p className="my-5 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer{" "}
            </p>
            <div className="flex flex-col space-y-5 tablet:flex-row tablet:space-y-0 tablet:space-x-5">
              <Button
                text={"APP STORE"}
                image
                imgAlt={"app-store-icon"}
                imgHeight={10}
                imgWidth={25}
                imgSrc={"/appstore.svg"}
                className={"space-x-3 w-64"}
              />
              <Button
                text={"PLAY STORE"}
                image
                imgAlt={"app-store-icon"}
                imgHeight={10}
                imgWidth={25}
                imgSrc={"/playstore.svg"}
                className={"space-x-3"}
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <p className="text-center py-10">All rights reserved</p>
    </div>
  );
}

export default Footer;
