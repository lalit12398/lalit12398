"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { blog } from "@/data/content";

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 max-w-6xl mx-auto px-6">
      <motion.span
        className="block font-mono text-xs font-medium tracking-widest uppercase text-blue-accent dark:text-blue-400 mb-4"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      >
        Blog & Writing
      </motion.span>
      <motion.h2
        className="font-heading text-4xl md:text-5xl text-navy dark:text-foreground mb-14"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}
      >
        Thinking out loud.
      </motion.h2>
      <div className="space-y-4 max-w-2xl">
        {blog.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`p-6 rounded-xl border transition-shadow ${
              post.status === "draft"
                ? "border-dashed border-border bg-muted/20 dark:bg-muted/10"
                : "border-border bg-card hover:shadow-sm"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <FileText
                  size={18}
                  className={`mt-0.5 shrink-0 ${post.status === "draft" ? "text-muted-foreground/40" : "text-blue-accent dark:text-blue-400"}`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className={`font-heading text-lg leading-snug mb-1 ${post.status === "draft" ? "text-muted-foreground" : "text-navy dark:text-foreground"}`}>
                    {post.title}
                  </h3>
                  {post.published && <p className="text-xs text-muted-foreground mb-2">{post.published}</p>}
                  {post.excerpt && <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>}
                  {post.status === "draft" && <span className="text-xs text-muted-foreground/60 italic">Draft — coming soon</span>}
                </div>
              </div>
              {post.link && (
                <a href={post.link} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`Read ${post.title}`}>
                  <ArrowRight size={18} />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
