"use client";

import { motion, type Variants } from "framer-motion";
import { Layers, Users, BarChart2 } from "lucide-react";
import { about } from "@/data/content";

const iconMap = { layers: Layers, users: Users, "bar-chart": BarChart2 } as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.span
        className="block font-mono text-xs font-medium tracking-widest uppercase text-blue-accent dark:text-blue-400 mb-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        About
      </motion.span>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-navy dark:text-foreground mb-6 leading-tight">
            From contributor<br />to multiplier.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-[1.05rem]">{about.bio}</p>
        </motion.div>

        <div className="space-y-4">
          {about.philosophy.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-accent/10 dark:bg-blue-500/10 flex items-center justify-center text-blue-accent dark:text-blue-400">
                  {Icon && <Icon size={20} aria-hidden="true" />}
                </div>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
