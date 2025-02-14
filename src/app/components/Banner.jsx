"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import ParticleBackground from "./ParticleBackground";

export default function Banner() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start animated-gradient text-primary overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        {/* Add any additional background elements here if needed */}
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 px-4 sm:px-6 lg:px-8 max-w-4xl"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hello, I'm{" "}
          <ReactTyped
            strings={["Pragun Bajracharya", "a Web Developer"]}
            typeSpeed={80}
            backSpeed={50}
            loop
            className="text-accent"
          />
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl mb-8 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Full-stack web developer building fast, secure, and user-friendly web application.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
          <Link
            href="#portfolio"
            className="inline-block bg-accent text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary hover:text-background transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>
      <ParticleBackground />
    </section>
  )
}

