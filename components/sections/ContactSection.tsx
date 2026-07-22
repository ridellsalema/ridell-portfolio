"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "ridellsalema@gmail.com",
    href: "mailto:ridellsalema@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ridellsalema",
    href: "https://linkedin.com/in/ridell-salema-21a2ba34a",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/ridellsalema",
    href: "https://github.com/ridellsalema",
    icon: Github,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-6 sm:px-12 md:pl-28 lg:pl-36 max-w-7xl mx-auto border-t border-border/80"
      aria-label="Contact Section"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-10 sm:gap-14"
      >
        {/* Header */}
        <div className="flex flex-col gap-2">
          <span className="font-sans text-xs font-light tracking-[0.2em] uppercase text-accent">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-7xl font-light text-primary tracking-tight">
            Let&apos;s Connect
          </h2>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {CONTACT_LINKS.map((link, index) => {
            const Icon = link.icon;
            const isMail = link.href.startsWith("mailto:");
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-between p-5 sm:p-6 rounded-lg bg-card border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-accent"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="p-2.5 rounded-md bg-bg border border-border text-accent group-hover:bg-accent group-hover:text-bg transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary">
                      {link.label}
                    </span>
                    <span className="font-sans text-base sm:text-lg font-medium text-primary mt-0.5">
                      {link.value}
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-5 h-5 text-secondary group-hover:text-primary transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
