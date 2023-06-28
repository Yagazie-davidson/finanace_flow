import Image from "next/image";
import React from "react";

function Button({
  text,
  background,
  textColor,
  className,
  image,
  imgAlt,
  imgWidth,
  imgHeight,
  imgSrc,
}) {
  return (
    <button
      className={`${background || "bg-pri-I"} ${
        textColor || "text-pri-II"
      } rounded-3xl py-4 px-8 flex justify-center align-center text-base ${className}`}
    >
      {" "}
      {image && (
        <Image alt={imgAlt} width={imgWidth} height={imgHeight} src={imgSrc} />
      )}
      <div>{text || "Click me"}</div>
    </button>
  );
}

export default Button;
