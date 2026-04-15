"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { impact } from "@/data/content";

function useCountUp(target: number, duration = 1600, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, 1600, isInView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="text-center p-6 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow"
    >
      <p className="font-heading text-4xl md:text-5xl text-navy dark:text-blue-400 mb-2" aria-label={`${value}${suffix}`}>
        {count}<span className="text-blue-accent dark:text-blue-400">{suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground leading-snug">{label}</p>
    </motion.div>
  );
}

export function Impact() {
  return (
    <section id="impact" className="py-24 md:py-32 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.span
          className="block font-mono text-xs font-medium tracking-widest uppercase text-blue-accent dark:text-blue-400 mb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Impact
        </motion.span>
        <motion.h2
          className="font-heading text-4xl md:text-5xl text-navy dark:text-foreground mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          Numbers that matter.
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {impact.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
