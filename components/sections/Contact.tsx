"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { contact, siteConfig } from "@/data/content";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy dark:bg-navy/60">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.span
          className="block font-mono text-xs font-medium tracking-widest uppercase text-blue-300 mb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Contact
        </motion.span>
        <motion.h2
          className="font-heading text-4xl md:text-5xl text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
        >
          Let&apos;s build something<br />worth building.
        </motion.h2>
        <motion.p
          className="text-blue-200 text-[1.05rem] max-w-lg mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          {contact.heading}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-navy px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Mail size={16} aria-hidden="true" />{contact.email}
          </a>
          <a
            href={contact.linkedin} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <LinkedinIcon size={16} />LinkedIn
          </a>
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/60">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Built with Next.js · Tailwind CSS · Vercel</span>
      </div>
    </section>
  );
}
