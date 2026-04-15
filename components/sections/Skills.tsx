"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs font-medium tracking-widest uppercase text-blue-accent dark:text-blue-400 mb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Skills
        </motion.span>
        <motion.h2
          className="font-heading text-4xl md:text-5xl text-navy dark:text-foreground mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          The stack behind<br />the systems.
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <h3 className="font-mono text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full border border-border bg-card text-foreground hover:border-blue-accent dark:hover:border-blue-400 hover:text-blue-accent dark:hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
