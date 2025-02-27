"use client"
import { motion } from "framer-motion"
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-5 sm:py-10 md:py-20 bg-background">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-10 text-center text-primary">Get in Touch</h2>
        <motion.div
          className="max-w-md mx-auto bg-surface rounded-lg shadow-md p-4 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-6 text-center text-secondary text-xs sm:text-base">
            Feel free to reach out to me for any inquiries or opportunities!
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:pragunbaj99@gmail.com" className="text-accent hover:text-primary transition-colors">
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pragun-bajracharya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/PragunBajracharya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

