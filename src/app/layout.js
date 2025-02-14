import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
	weight: ["400"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Pragun Bajracharya | Portfolio",
	description: "Hi, I'm Pragun Bajracharya, a full-stack web developer building fast, secure, and user-friendly web applications.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={spaceMono.className}>
				<Header />
				<main className="pt-16">
					{/* Add padding-top to account for fixed header */}
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
