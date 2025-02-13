"use client";
import { motion } from "framer-motion";
import skills from "../data/skillsData";

export default function Skills() {
	return (
		<section id="skills" className="py-12 bg-background">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">Technologies I Specialize In</h2>
				<div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
					{skills.map((skill, index) => (
						<motion.div key={skill.name} className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }}>
							<div className="bg-surface rounded-full p-2 md:p-3 mb-2">
								<skill.icon className="text-2xl md:text-3xl text-accent" />
							</div>
							<span className="text-secondary text-xs md:text-sm text-center w-16 md:w-20">{skill.name}</span>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
