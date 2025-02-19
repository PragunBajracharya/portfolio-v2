"use client";
import Link from "next/link";
import navItems from "../data/navItemsData";

export default function Navbar() {
	return (
		<nav className="w-full py-2 md:py-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-center">
					<div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-4">
						{navItems.map((item) => (
							<Link key={item.name} href={item.href} className="text-secondary hover:text-primary px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200">
								{item.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}
