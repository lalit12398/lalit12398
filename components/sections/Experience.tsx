"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.span
        className="block font-mono text-xs font-medium tracking-widest uppercase text-blue-accent dark:text-blue-400 mb-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      >
        Experience
      </motion.span>
      <motion.h2
        className="font-heading text-4xl md:text-5xl text-navy dark:text-foreground mb-16"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
      >
        9 years of building<br />things that scale.
      </motion.h2>

      <div className="relative">
        <div className="absolute left-0 md:left-[11px] top-2 bottom-0 w-px bg-border" aria-hidden="true" />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative pl-8 md:pl-10"
            >
              <span className="absolute left-[-4px] md:left-[4px] top-[6px] w-[18px] h-[18px] rounded-full border-2 border-blue-accent bg-background" aria-hidden="true" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-heading text-xl text-navy dark:text-foreground">{job.company}</h3>
                  <p className="text-sm font-medium text-blue-accent dark:text-blue-400 mt-0.5">{job.role}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground shrink-0">
                  <span className="flex items-center gap-1"><Calendar size={12} aria-hidden="true" />{job.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} aria-hidden="true" />{job.location}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {job.highlights.map((point) => (
                  <li key={point} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-blue-accent dark:text-blue-400 mt-1.5 shrink-0">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor" aria-hidden="true"><circle cx="3" cy="3" r="3" /></svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
