import React from "react";
import Image from "next/image";

function NewsCard() {
  return (
    <div className="w-80 bg-pri-IV px-6 py-8 rounded-3xl">
      <h1 className="font-bold text-xl">The Basics about Cryptocurrency</h1>
      <p className="pb-7">
        Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
        Scelerisque viverra donec diammeo.
      </p>
      <hr />
      <footer className="flex flex-row items-center space-x-3 mt-7">
        <Image
          alt="author"
          src={"/avater.svg"}
          className="rounded-full"
          width={72}
          height={10}
        />
        <div>
          <h1>Alex Turner</h1>
          <p>August 2, 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default NewsCard;
