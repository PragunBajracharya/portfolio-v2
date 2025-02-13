"use client";
import { motion } from "framer-motion";
import timelineData from "../data/timelineData";

export default function Timeline() {
	return (
		<section id="resume" className="py-20 bg-surface">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-10 text-center text-primary">My Journey</h2>
				<div className="relative">
					{/* Central line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>

					{timelineData.map((item, index) => (
						<motion.div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
							<div className="order-1 w-5/12"></div>
							<div className="z-20 flex items-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full">
							</div>
							<motion.div className="order-1 bg-background rounded-lg shadow-xl w-5/12 px-6 py-4" whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
								<h3 className="mb-3 font-bold text-primary text-xl">{item.year}</h3>
								<p className="text-sm leading-snug tracking-wide text-secondary">{item.event}</p>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
