
import { motion } from "framer-motion"
import Image from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa"


export default function ProjectCard({ title, description, imageUrl, technologies, link }) {
  return (
    <motion.div
      className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          layout="fill"
          className="transition-transform duration-300 transform hover:scale-105 object-cover"
        />
      </div>
      <div className="p-2 sm:p-4 md:p-6">
        <h3 className="text-base sm:text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-secondary mb-4 text-xs sm:text-sm">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary mb-2">Technologies used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-accent text-primary px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm inline-flex items-center text-accent hover:text-primary transition-colors duration-300"
        >
          View Project <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
    </motion.div>
  )
}

