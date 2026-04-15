"use client";

import { motion } from "framer-motion";
import { Building2, CheckSquare, Zap, BookOpen, PenLine, FlaskConical } from "lucide-react";
import { contributions } from "@/data/content";

const iconMap = {
  building: Building2, "check-square": CheckSquare, zap: Zap,
  "book-open": BookOpen, "pen-line": PenLine, "flask-conical": FlaskConical,
} as const;

export function Contribution() {
  return (
    <section id="contributions" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.span
        className="block font-mono text-xs font-medium tracking-widest uppercase text-blue-accent dark:text-blue-400 mb-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      >
        Architecture & Org Contribution
      </motion.span>
      <motion.h2
        className="font-heading text-4xl md:text-5xl text-navy dark:text-foreground mb-6"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
      >
        Impact beyond<br />the project.
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-[1.05rem] max-w-xl mb-14"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
      >
        Work that shapes how entire business units build, ship, and grow.
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {contributions.map((card, i) => {
          const Icon = iconMap[card.icon as keyof typeof iconMap];
          return (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center text-amber mb-4">
                {Icon && <Icon size={20} aria-hidden="true" />}
              </div>
              <h3 className="font-heading text-lg text-navy dark:text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
