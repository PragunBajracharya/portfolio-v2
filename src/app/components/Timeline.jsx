"use client";
import { motion } from "framer-motion";
import timelineData from "../data/timelineData";

export default function Timeline() {
	return (
		<section id="resume" className="py-5 sm:py-10 md:py-20 bg-surface">
			<div className="container mx-auto px-4">
				<h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-center text-primary">My Journey</h2>
				<div className="relative">
					{/* Central line */}
					<div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full pl-3 sm:pl-0">
					<div className="h-full w-1 bg-accent"></div>
					</div>

					{timelineData.map((item, index) => (
						<motion.div key={index} className={`mb-6 sm:mb-8 flex justify-start sm:justify-between items-center w-full ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
							<div className="hidden sm:block order-1 w-5/12"></div>
							<div className="z-20 flex items-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full">
							</div>
							<motion.div className="order-1 bg-background rounded-lg shadow-xl w-full sm:w-5/12 p-2 md:px-6 md:py-4 ml-2 sm:ml-0" whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
								<h3 className="mb-3 font-bold text-primary text-base sm:text-xl">{item.year}</h3>
								<p className="text-xs sm:text-sm leading-snug tracking-wide text-secondary">{item.event}</p>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
