import React from "react";
import { companiesData } from "@/data/Companies";
import Image from "next/image";
function GetCompanies() {
	return (
		<>
			<p className="text-lg text-center">Finance flow has been featured on</p>
			<div className="tablet:flex tablet:justify-center tablet:items-center tablet:space-x-20 mt-5">
				{companiesData.map(item => {
					return (
						<div className="flex items-center space-x-2">
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
