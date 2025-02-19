import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-surface text-secondary py-4 md:py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-xs sm:text-base">
						<p>&copy; 2025 Pragun Bajracharya. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
