"use client";

import { motion } from "framer-motion";

export default function SummarySection() {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 md:pl-28 lg:pl-36 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-8 sm:gap-12"
      >
        {/* Pillar tags */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-xs sm:text-sm font-medium tracking-wider uppercase text-secondary">
          <span>Software Engineering Student</span>
          <span className="text-border">/</span>
          <span>Backend Engineering</span>
          <span className="text-border">/</span>
          <span>Cybersecurity</span>
          <span className="text-border">/</span>
          <span className="text-accent font-semibold">Africa University</span>
        </div>

        {/* Single Sentence Mission Statement */}
        <h2 className="font-sans font-light text-2xl sm:text-4xl md:text-5xl leading-[1.3] text-primary tracking-tight max-w-4xl">
          Building{" "}
          <span className="text-accent font-medium">secure internal systems</span>,{" "}
          <span className="text-accent font-medium">automated systems</span>, and{" "}
          <span className="text-accent font-medium">digital products</span> solving
          real business problems.
        </h2>
      </motion.div>
    </section>
  );
}
