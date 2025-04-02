import React, { useEffect, useState } from "react";


import news from "../assets/websiteThumbnail/news-agregate-project.png"
import shopingA from "../assets/websiteThumbnail/shopingA.png"
import shopingU from "../assets/websiteThumbnail/shopingU.png"



import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {



	const Data = [
		{
			title: "News Aggregator",
			description: "I developed a News Aggregator application that fetches and displays news from three external public APIs. Users can filter news by source, category, and date range, and search articles by keywords. The app features a responsive UI with a header and footer for seamless navigation. Built with Vite, TypeScript, Tailwind CSS, and Redux, it ensures fast performance and maintainability. Axios is used for efficient API calls, and Redux manages global state. This project enhances the user experience by providing an intuitive way to explore and filter news articles.",
			thumbnailImage:news ,
			category: "FullStack",
			clintLink: "https://github.com/Sudha-S-Naik/Innoscripta-casestudy",
			LiveLInk: "https://news-aggregator-beta-lemon.vercel.app/"

		},
		
	]



	const [activeButton, setActiveButton] = useState("all Product")


	const filteredData = Data.filter(item => {
		if (activeButton === "all Product") return true;
		if (activeButton === "FrontEnd") return item.category === "FrontEnd";
		if (activeButton === "Full Stack") return item.category === "FullStack";
		return false;
	});

	

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="Projects" className="bg-transparent py-10 ">
			<div className="sticky -top-0 z-[999] py-5  bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10 ">

					Latest projects
				</h1>


				<div className="flex flex-wrap bg-black justify-center gap-5">
					<button onClick={() => setActiveButton("all Product")} className={` ${(activeButton == "all Product") ? "bg-[#89b02d] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#89b02d] hover:text-black btn-outline  hover:border-none text-[#89b02d]`}> All Projects</button>
					{/* <button onClick={() => setActiveButton("FrontEnd")} className={` ${(activeButton == "FrontEnd") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Frontend Projects</button> */}
					<button onClick={() => setActiveButton("Full Stack")} className={` ${(activeButton == "Full Stack") ? "bg-[#89b02d] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#89b02d] hover:text-black btn-outline  hover:border-none text-[#89b02d]`}> Full Stack Projects</button>


				</div>
			</div>



			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">

				{
					filteredData?.map((item, inx) => (
						<div className={`${inx % 2 == 0 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row justify-center h-full lg:gap-5`} key={inx}>
							<div className="lg:w-[700px]">
								<img src={item?.thumbnailImage} alt={item?.title} />
							</div>

							<div className="lg:w-[450px] h-full">
								<div className="min-h-[240px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
									<h1 className="text-2xl">{item?.title}</h1>
									<p className="text-md mt-5">{item?.description}</p>
								</div>
								<div className="flex justify-between">
									<Link to={item?.clintLink} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#89b02d]">
										<FaGithub /> Client side
									</Link>

									{/* Conditionally render the Server side button */}
									{item?.serverLink && (
										<Link to={item?.serverLink} className="btn hover:bg-[#89b02d] flex-1 rounded-none text-black bg-[#89b02d]">
											<FaGithub /> Server side
										</Link>
									)}

									<Link to={item?.LiveLInk} className="btn hover:bg-[#89b02d] flex-1 rounded-none  text-black bg-[#89b02d]">
										<FaExternalLinkAlt /> Visit website
									</Link>
								</div>
							</div>
						</div>
					))
				}

			</div>





		</div>
	);
};

export default Projects;