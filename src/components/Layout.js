import React from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

function Layout({ children }) {
	return (
		<div
			className={`${dmSans.className} bg-pri-III text-pri-II h-screen tablet:px-20 px-6 overflow-x-hidden`}
		>
			{children}
		</div>
	);
}

export default Layout;
