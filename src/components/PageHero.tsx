import type { ReactNode } from "react";

import { motion } from "framer-motion";

/** Compact page header used on inner pages (below the sticky navigation). */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-secondary/60 pb-16 pt-32 lg:pb-20 lg:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-4 sm:px-6"
      >
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        <div className="gold-rule mt-5" />
        {intro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </motion.div>
    </section>
  );
}
