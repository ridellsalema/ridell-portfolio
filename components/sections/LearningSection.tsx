"use client";

import { motion } from "framer-motion";

const LEARNING_ITEMS = [
  "Cybersecurity",
  "System Design",
  "AI Engineering",
  "Cloud Infrastructure",
];

export default function LearningSection() {
  return (
    <section className="py-20 sm:py-32 px-6 sm:px-12 md:pl-28 lg:pl-36 max-w-7xl mx-auto border-t border-border/60">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-start justify-between gap-12"
      >
        <div className="flex flex-col gap-2 md:w-1/3">

          <h2 className="font-display text-3xl sm:text-4xl font-light text-primary tracking-tight">
            Currently Learning
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-2/3">
          {LEARNING_ITEMS.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 p-5 rounded-lg bg-card/60 border border-border/80"
            >
              <span className="font-mono text-xs font-semibold text-secondary">
                0{index + 1}
              </span>
              <p className="font-sans text-lg font-medium text-primary tracking-tight">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
