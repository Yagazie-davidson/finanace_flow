import Image from "next/image";
import React from "react";

function PortfolioCard({ image, title, description }) {
	return (
		<div className="max-w-xs bg-pri-IV px-7 py-10 rounded-3xl flex flex-col space-y-2">
			<Image src={image} alt="icon" height={10} width={42} />
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}

export default PortfolioCard;
