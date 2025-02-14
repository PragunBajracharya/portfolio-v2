import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-surface text-secondary py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p>&copy; 2025 Pragun Bajracharya. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
