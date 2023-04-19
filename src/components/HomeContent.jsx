import React from "react";
import Iphones from "./Iphones";
import Image from "next/image";

function HomeContent() {
	return (
		<>
			<div className="flex flex-col tablet:flex-row justify-between items-center tablet:mx-14">
				<Iphones />
				<div>
					<h2 className="text-3xl tablet:text-4xl font-bold mb-5 max-w-[475px] mt-14 tablet:mr-0">
						Earn daily rewards on your idle tokens
					</h2>
					<p className="text-lg mb-8 max-w-[470px] font-normal">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
						nulla suspendisse tortor aene.
					</p>
					<div className="flex flex-col space-y-6 text-lg">
						<div className="flex space-x-10 items-center">
							<Image alt="icon" src={"/stock.svg"} width={46} height={10} />
							<p>Lowest fees in market </p>
						</div>
						<div className="flex space-x-10 items-center">
							<Image alt="icon" src={"/lighting.svg"} width={46} height={10} />
							<p>Fast and secure transactions</p>
						</div>
						<div className="flex space-x-10 items-center">
							<Image alt="icon" src={"/lock.svg"} width={46} height={10} />
							<p>256-bit secure encryption</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeContent;
