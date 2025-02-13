"use client"
import { motion } from "framer-motion"

export default function Banner() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-background text-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, I'm Your Name</h1>
        <p className="text-xl md:text-2xl mb-8 text-secondary">
          A passionate web developer creating amazing digital experiences
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-surface text-primary px-6 py-3 rounded-full font-semibold border border-accent hover:bg-accent transition-colors"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  )
}

