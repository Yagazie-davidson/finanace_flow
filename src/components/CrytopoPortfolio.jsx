import React from "react";
import PortfolioCard from "./PortfolioCard";
import Image from "next/image";
import Button from "./Button";

function CrytopoPortfolio() {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-2xl tablet:text-4xl text-center font-medium tablet:font-bold">
				Build your crypto portfolio
			</h1>
			<p className="text-center mt-2 text-lg font-normal">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
				suspendisse tortor aene.
			</p>
			<section className="grid grid-rows-3 place-items-center tablet:flex justify-center items-center space-x-7 space-y-4 mt-5">
				<div className="flex flex-col space-y-5 tablet:space-y-18">
					<PortfolioCard
						image={"/portfolio/send-icon.svg"}
						title={"Send & Receive"}
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
						}
					/>
					<PortfolioCard
						image={"/portfolio/wallet-icon.svg"}
						title={"100% Secure Wallet"}
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
						}
					/>
				</div>
				<div className="bg-pri-I max-w-md rounded-3xl flex flex-col items-center justify-center px-7 py-10">
					<h2 className="text-left">iOS & Android App</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet,
						morbi non at sed neque.
					</p>
					<Image
						src={"/portfolio/iphones.svg"}
						height={10}
						width={300}
						alt="iphone"
						className="mt-5"
					/>
				</div>
				<div className="flex flex-col space-y-5 tablet:space-y-18">
					<PortfolioCard
						image={"/portfolio/trading-icon.svg"}
						title={"Trading Charts"}
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
						}
					/>
					<PortfolioCard
						image={"/portfolio/real-time-icon.svg"}
						title={"Real Time Trading"}
						description={
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene."
						}
					/>
				</div>
			</section>
			<Button text={"DOWNLOAD APP"} className={"mt-5"} />
		</div>
	);
}

export default CrytopoPortfolio;
