"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavSection {
  id: string;
  number: string;
  label: string;
}

const SECTIONS: NavSection[] = [
  { id: "overview", number: "", label: "Overview" },
  { id: "projects", number: "", label: "Projects" },
  { id: "experience", number: "", label: "Experience" },
];

export default function NavPills() {
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed left-4 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5"
      aria-label="Main Navigation"
    >
      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1"
            aria-label={`Scroll to ${section.label} section`}
            aria-current={isActive ? "page" : undefined}
          >
            {/* Pill Container */}
            <div
              className={`relative flex items-center justify-center transition-all duration-300 rounded-full border ${isActive
                ? "bg-accent border-accent text-bg w-10 h-10 shadow-sm"
                : "bg-card/80 backdrop-blur-sm border-border text-secondary hover:text-primary hover:border-primary/40 w-9 h-9"
                }`}
            >
              <span className="font-sans text-xs font-semibold tracking-wider">
                {section.number}
              </span>
            </div>

            {/* Hover / Active Label tooltip */}
            <span
              className={`absolute left-14 px-3 py-1 text-xs font-medium rounded-md whitespace-nowrap pointer-events-none transition-all duration-200 border border-border bg-card text-primary shadow-sm ${isActive
                ? "opacity-100 translate-x-0 font-semibold"
                : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
