import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Pragun Bajracharya | Portfolio",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {" "}
          {/* Add padding-top to account for fixed header */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
	);
}
