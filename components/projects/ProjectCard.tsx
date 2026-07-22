"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-6 sm:gap-8"
    >
      {/* Premium Card Surface Container */}
      <div className="relative rounded-lg bg-card border border-border p-3.5 sm:p-5 lg:p-6 transition-all duration-300 ease-out-smooth hover:-translate-y-0.5 hover:shadow-card-hover hover:border-primary/20">
        
        {/* Browser Frame */}
        <div className="relative w-full overflow-hidden rounded-md border border-border bg-bg shadow-xs">
          
          {/* Browser Header Controls */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-card/50">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
              <span className="w-2 h-2 rounded-full bg-border" />
            </div>
            
            {/* Address Bar Placeholder */}
            <div className="hidden sm:flex items-center justify-center px-3 py-0.5 rounded-sm bg-bg border border-border/60 text-[10px] font-mono text-secondary w-56 max-w-full truncate">
              {project.liveUrl && !project.liveUrl.includes("example.com")
                ? project.liveUrl.replace("https://", "").replace("http://", "")
                : `${project.id}.app`}
            </div>

            <div className="w-8" />
          </div>

          {/* Screenshot Container with Zoom Animation */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/8] max-h-[240px] sm:max-h-[300px] lg:max-h-[360px] w-full overflow-hidden bg-bg">
            <Image
              src={project.screenshot}
              alt={`${project.title} Preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              loading="lazy"
              className="object-cover object-top transition-transform duration-300 ease-out-smooth group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Card Content & Action Area */}
        <div className="mt-4 sm:mt-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary tracking-tight flex items-center gap-2">
              {project.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-secondary leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Buttons: Live Website & GitHub */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Live Website Button */}
            {project.liveUrl && project.liveUrl.trim() !== "" && !project.liveUrl.includes("example.com") && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-border bg-bg text-primary text-xs font-medium tracking-wide transition-all duration-200 hover:bg-accent hover:text-bg hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
                aria-label={`Visit live website for ${project.title}`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Website</span>
                <ArrowUpRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            {/* GitHub Button */}
            {project.githubUrl && project.githubUrl.trim() !== "" && project.githubUrl !== "private repository" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md border border-border bg-bg text-secondary text-xs font-medium tracking-wide transition-all duration-200 hover:text-primary hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-accent"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.article>
  );
}
