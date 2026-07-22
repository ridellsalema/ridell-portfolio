"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  graduation?: string;
  focus?: string[];
  services?: string[];
  link?: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "africa-university",
    title: "Africa University",
    subtitle: "Software Engineering Student",
    period: "2024 — Present",
    graduation: "Expected Graduation: 2028",
  },
  {
    id: "elevate-value-partners",
    title: "Elevate Value Partners",
    subtitle: "Startup",
    focus: ["Cybersecurity", "AI", "Data", "Internal Systems"],
    link: "https://elevatevaluepartners.co.zw",
  },
  {
    id: "freelance-developer",
    title: "Freelance Web Developer",
    subtitle: "Solo-practitioner",
    services: [
      "Custom software solutions",
      "Internal systems",
      "Business websites",
      "Digital catalogues",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 px-6 sm:px-12 md:pl-28 lg:pl-36 max-w-7xl mx-auto"
      aria-label="Experience & Background Section"
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
          03
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-light text-primary tracking-tight">
          Experience
        </h2>
      </motion.div>

      {/* Grid of 3 Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {EXPERIENCES.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-lg bg-card border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">
                  {item.title}
                </h3>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md text-secondary hover:text-accent hover:bg-bg border border-transparent hover:border-border transition-all"
                    aria-label={`Visit ${item.title} website`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Subtitle */}
              <p className="font-sans text-xs font-semibold tracking-wider uppercase text-accent mb-6">
                {item.subtitle}
              </p>

              {/* Details for Education */}
              {item.period && (
                <div className="flex flex-col gap-2 font-sans text-sm text-secondary border-t border-border/80 pt-6">
                  <p className="font-medium text-primary">{item.period}</p>
                  <p className="text-secondary">{item.graduation}</p>
                </div>
              )}

              {/* Details for Focus Area */}
              {item.focus && (
                <div className="border-t border-border/80 pt-6">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
                    Focus Areas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.focus.map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 rounded-md bg-bg border border-border text-xs font-medium text-primary"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Details for Services */}
              {item.services && (
                <div className="border-t border-border/80 pt-6">
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
                    Services Delivered
                  </p>
                  <ul className="flex flex-col gap-2 font-sans text-sm text-secondary">
                    {item.services.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-sm bg-accent" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
