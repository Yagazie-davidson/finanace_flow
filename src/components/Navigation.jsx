import React, { useState } from "react";
import { NavigationData } from "@/data/NavigationData";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
function Navigation() {
	const [ham, setHam] = useState(true);
	const handleHam = () => {
		setHam(prevHam => !prevHam);
	};
	return (
		<main className="flex justify-between">
			<div className="flex justify-between space-x-20">
				<div className="flex items-center space-x-3">
					<Image
						alt="finance flow logo"
						src="/header/Frame.png"
						width={51}
						height={10}
					/>
					<h2 className="text-lg">FinanceFlow</h2>
				</div>

				<nav className="hidden tablet:flex items-center space-x-5">
					{NavigationData.map((item, index) => {
						const consolee = () => {
							console.log(index);
						};
						return (
							<Link key={index} href={item.href} onClick={consolee}>
								{item.display}
							</Link>
						);
					})}
				</nav>
			</div>
			<Image
				alt="menu"
				src={ham ? "/ham.svg" : "/closeham.svg"}
				height={10}
				width={20}
				onClick={handleHam}
				className="cursor-pointer block tablet:hidden "
			/>
			<Button text={"DOWNLOAD APP"} className={"hidden tablet:flex"} />
		</main>
	);
}

export default Navigation;
