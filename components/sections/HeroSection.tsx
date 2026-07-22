"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 pt-16 pb-12 relative overflow-hidden select-none"
      aria-label="Landing Section"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto"
      >
        <h1 className="font-display font-thin text-[4.2rem] xs:text-[5.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] leading-[0.88] tracking-tight text-primary uppercase select-none">
          <span className="block">RIDELL</span>
          <span className="block text-accent/90">SALEMA</span>
        </h1>
      </motion.div>
    </section>
  );
}
