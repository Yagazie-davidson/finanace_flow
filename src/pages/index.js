import Image from "next/image";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import GetCompanies from "@/components/GetCompanies";

export default function Home() {
	return (
		<Layout className={"grid grid-cols-1"}>
			<main className="tablet:px-20 px-6 overflow-x-hidden pt-6 w-full row-start-1 col-start-1">
				<Navigation />
				<div className="flex flex-col tablet:flex-row mt-20 items-center">
					<div>
						<div>
							<h1 className="text-4xl tablet:text-6xl">
								Buy, trade, and hold 350+ cryptocurrencies
							</h1>
							<p className="text-lg mt-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
								nulla suspendisse tortor aenean dis placerat.
							</p>
						</div>
						<div className="flex flex-col tablet:flex-row justify-center tablet:justify-start items-center space-y-5 tablet:space-y-0 tablet:space-x-8 mt-10">
							<Button text={"DOWNLOAD APP"} className={"w-full tablet:w-52"} />
							<Button
								text={"VIEW PRICING"}
								textColor={"text-pri-II"}
								background={"bg-pri-V"}
								className={"w-full tablet:w-52"}
							/>
						</div>
					</div>
					<Image
						alt="apple computer"
						src={"/computer.svg"}
						height={10}
						width={971}
						className="tablet:mr-[-17rem] mt-10 z-50"
					/>
				</div>
				<section className="mt-32">
					<GetCompanies />
				</section>
			</main>
		</Layout>
	);
}
