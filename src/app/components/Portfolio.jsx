"use client";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {
	const [isMobile, setIsMobile] = useState(false);
	const [currentSlide, setCurrentSlide] = useState(0);
	const sliderRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
		};

		handleResize(); // Set initial state
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const sliderSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
    beforeChange: (current, next) => setCurrentSlide(next),
	};

	const handleSliderChange = (e) => {
		const slideIndex = Number.parseInt(e.target.value, 10);
		sliderRef.current?.slickGoTo(slideIndex);
	};
	return (
		<section id="portfolio" className="py-5 sm:py-10 md:py-20 bg-surface">
			<div className="container mx-auto px-4">
				<h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-center text-primary">My Portfolio</h2>
				{isMobile ? (
					<div>
						<Slider ref={sliderRef} {...sliderSettings}>
							{projects.map((project, index) => (
								<div key={index} className="px-2">
									<ProjectCard {...project} />
								</div>
							))}
						</Slider>
						<div className="mt-2">
							<input type="range" min={0} max={projects.length - 1} value={currentSlide} onChange={handleSliderChange} className="slider w-full" />
						</div>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<ProjectCard key={index} {...project} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}
