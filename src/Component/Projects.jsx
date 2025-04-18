import React, { useEffect, useState } from "react";
import news from "../assets/websiteThumbnail/news-agregate-project.png";
import letseat from "../assets/template/lets-eat.png";
import milestone1 from "../assets/template/milestone1.png";
import milestone2 from "../assets/template/milestone2.png";
import milestone3 from "../assets/template/milestone3.png"; 
import milestone4 from "../assets/template/milestone4.png"; 
import milestone5 from "../assets/template/milestone5.png"; 
import milestone6 from "../assets/template/milestone6.png"; 
import milestone7 from "../assets/template/milestone7.png"; 
import milestone8 from "../assets/template/milestone8.png"; 
import milestone9 from "../assets/template/milestone9.png"; 
import foodninja from "../assets/template/foodninja.png";
import contextsure from "../assets/template/context-sure.png";
import mytyles from "../assets/template/mytyles.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Projects = () => {
	const Data = [
		{
			title: "News Aggregator",
			description:
				"I developed a News Aggregator application that fetches and displays news from three external public APIs. Users can filter news by source, category, and date range, and search articles by keywords. The app features a responsive UI with a header and footer for seamless navigation. Built with Vite, TypeScript, Tailwind CSS, and Redux, it ensures fast performance and maintainability. Axios is used for efficient API calls, and Redux manages global state. This project enhances the user experience by providing an intuitive way to explore and filter news articles.",
			thumbnailImage: news,
			category: "all Product",
			clintLink: "https://github.com/Sudha-S-Naik/Innoscripta-casestudy",
			LiveLInk: "https://news-aggregator-beta-lemon.vercel.app/",
		},
		{
			title: "Lets Eat",
			description: "A vibrant and modern restaurant-themed UX/UI template designed for food delivery or dine-in businesses. 'Let's Eat' features a clean layout, engaging visuals, and easy navigation to explore menus or place orders. Built with HTML5, CSS3, JavaScript, Bootstrap this template ensures responsiveness and aesthetic appeal across all devices.  This template emphasizes strong visual hierarchy and a mouth-watering user experience to help restaurants showcase their best dishes.",
			thumbnailImage: letseat,
			category: "UI Template",
		},
		{
			title: "Soft UI Dashboard",
			description: "A sleek, responsive admin dashboard template featuring soft gradients and smooth visuals. Designed for analytics and admin interfaces, it includes interactive charts, cards, and widget-based layouts. Technologies include HTML5, CSS3, JavaScript, and Tailwind CSS, optimized for performance, modularity, and cross-browser support.  The layout is ideal for developers building SaaS dashboards, CRMs, or admin panels. Its smooth user interactions and scalable component structure make it both developer- and user-friendly.",
			thumbnailImage: [milestone1, milestone2, milestone3 ,milestone4, milestone5,milestone6, milestone7,milestone8, milestone9],
			category: "UI Template",
		},
		{
			title: "Food Ninja",
			description: "Food Ninja is a stylish food ordering UI concept with a playful yet modern design. Perfect for showcasing restaurant offerings, the layout emphasizes food imagery, user-friendly filtering, and mobile-first interaction. Built using HTML, CSS, JavaScript, and Tailwind CSS to ensure a fully responsive and engaging experience.  The template highlights simplicity and speed in browsing and ordering, creating a fast-lane path from food discovery to checkout. Ideal for mobile-first restaurant startups and food tech prototypes.",
			thumbnailImage: foodninja,
			category: "UI Template",
		},
		{
			title: "Context Sure",
			description: "A minimalist UX template designed for SaaS or tech startups. 'Context Sure' provides a clean layout for presenting product features, customer testimonials, and pricing plans. Technologies used include HTML5, CSS3, JavaScript, and Tailwind CSS. It focuses on accessibility, responsiveness, and a polished user journey.  The layout is ideal for onboarding flows and landing pages. It’s designed to build trust and deliver information in a clear, focused, and professional way.",
			thumbnailImage: contextsure,
			category: "UI Template",
		},
		{
			title: "Mytyles",
			description: "An e-commerce UI template tailored for a tile or interior design store. 'Mytyles' highlights product grids, filtering options, and detailed product pages. Created with HTML5, CSS3, JavaScript, and Tailwind CSS, it’s built to provide a seamless shopping experience with a clean, modern aesthetic.  With a focus on product visibility and ease of navigation, it's ideal for showcasing large inventories. The layout supports both visual storytelling and strong call-to-actions for conversions.",
			thumbnailImage: mytyles,
			category: "UI Template",
		},
	];
	
	
	const [activeButton, setActiveButton] = useState("all Product");

	const filteredData = Data.filter((item) => {
		if (activeButton === "all Product") return true;
		if (activeButton === "FrontEnd") return item.category === "FrontEnd";
		if (activeButton === "UI Template") return item.category === "UI Template";
		return false;
	});

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="Projects" className="bg-transparent py-10">
			<div className="sticky -top-0 z-[999] py-5 bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10">Latest projects</h1>

				<div className="flex flex-wrap bg-black justify-center gap-5">
					<button
						onClick={() => setActiveButton("all Product")}
						className={`${
							activeButton == "all Product" ? "bg-[#89b02d] text-black" : ""
						} btn lg:px-8 rounded-md hover:bg-[#89b02d] hover:text-black btn-outline hover:border-none text-[#89b02d]`}
					>
						All Projects
					</button>
					{/* Uncomment if needed
					<button
						onClick={() => setActiveButton("FrontEnd")}
						className={`${
							activeButton == "FrontEnd" ? "bg-[#89b02d] text-black" : ""
						} btn lg:px-8 rounded-md hover:bg-[#89b02d] hover:text-black btn-outline hover:border-none text-[#89b02d]`}
					>
						Frontend Projects
					</button> */}
					<button
						onClick={() => setActiveButton("UI Template")}
						className={`${
							activeButton == "UI Template" ? "bg-[#89b02d] text-black" : ""
						} btn lg:px-8 rounded-md hover:bg-[#89b02d] hover:text-black btn-outline hover:border-none text-[#89b02d]`}
					>
						UI Templates
					</button>
				</div>
			</div>

			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">
				{filteredData?.map((item, inx) => (
					<div
						className={`${
							inx % 2 == 0 ? "lg:flex-row-reverse" : ""
						} flex flex-col lg:flex-row justify-center h-full lg:gap-5`}
						key={inx}
					>
						<div className="lg:w-[700px]">
							{Array.isArray(item.thumbnailImage) ? (
								<Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg">
									{item.thumbnailImage.map((img, index) => (
										<SwiperSlide key={index}>
											<img src={img} alt={`Slide ${index + 1}`} className="w-full rounded-xl" />
										</SwiperSlide>
									))}
								</Swiper>
							) : (
								<img src={item.thumbnailImage} alt={item?.title} className="rounded-xl" />
							)}
						</div>

						<div className="lg:w-[450px] h-full">
							<div className="min-h-[240px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
								<h1 className="text-2xl">{item?.title}</h1>
								<p className="text-md mt-5">{item?.description}</p>
							</div>
							{item.title === "News Aggregator" && (
								<div className="flex justify-between mt-4">
									<Link
										to={item?.clintLink}
										className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#89b02d]"
									>
										<FaGithub /> Client side
									</Link>

									{item?.serverLink && (
										<Link
											to={item?.serverLink}
											className="btn hover:bg-[#89b02d] flex-1 rounded-none text-black bg-[#89b02d]"
										>
											<FaGithub /> Server side
										</Link>
									)}

									<Link
										to={item?.LiveLInk}
										className="btn hover:bg-[#89b02d] flex-1 rounded-none text-black bg-[#89b02d]"
									>
										<FaExternalLinkAlt /> Visit website
									</Link>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
