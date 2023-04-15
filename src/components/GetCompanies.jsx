import React from "react";
import { companiesData } from "@/data/Companies";
import Image from "next/image";
function GetCompanies() {
	return (
		<>
			<p className="text-lg text-center">Finance flow has been featured on</p>
			<div className="flex flex-wrap gap-x-7 gap-y-4 justify-center w-full items-center tablet:space-x-20 mt-5">
				{companiesData.map((item, index) => {
					return (
						<div key={index} className="flex items-center space-x-2">
							<Image alt="company" src={item.image} height={10} width={50} />
							<p>{item.name}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default GetCompanies;
