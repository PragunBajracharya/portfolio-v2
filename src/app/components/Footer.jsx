import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-surface text-secondary py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<p>&copy; 2023 Your Name. All rights reserved.</p>
					</div>
					<div className="flex space-x-4">
						<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
							<FaLinkedin size={24} />
						</a>
						<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
							<FaGithub size={24} />
						</a>
						<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
							<FaTwitter size={24} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
