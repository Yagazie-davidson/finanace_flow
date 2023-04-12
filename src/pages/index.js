import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";

export default function Home() {
	return (
		<Layout>
			<main className="">
				Lofi music is the best <Navigation />
			</main>
		</Layout>
	);
}
