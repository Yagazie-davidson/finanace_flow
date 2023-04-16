import Image from "next/image";
import React from "react";

function Iphones() {
	return (
		<div className="grid grid-cols-1">
			<div className="relative tablet:w-full w-48">
				<Image
					src={"/iphone.svg"}
					className="-rotate-6"
					alt="iphone"
					height={10}
					width={210}
				/>
				<Image
					src={"/iphone.svg"}
					className="rotate-3 absolute inset-0 left-28 tablet:left-28 top-10"
					alt="iphone"
					height={10}
					width={210}
				/>
			</div>
		</div>
	);
}

export default Iphones;
