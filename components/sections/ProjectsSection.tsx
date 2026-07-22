"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-6 sm:px-12 md:pl-28 lg:pl-36 max-w-7xl mx-auto"
      aria-label="Featured Projects Section"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 sm:mb-14 flex flex-col gap-2"
      >
        <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-accent">
          02
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-light text-primary tracking-tight">
          Projects
        </h2>
      </motion.div>

      {/* Projects Grid Container */}
      <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
