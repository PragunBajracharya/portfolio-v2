"use client"
import ProjectCard from "./ProjectCard"
import projects from "../data/projectsData"

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-primary">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

