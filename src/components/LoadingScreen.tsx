import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Brief branded loading animation shown while fonts and the first images settle.
 * Purely visual — it never blocks interaction for more than a moment.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-primary"
        >
          <div className="text-center">
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-gold/50 font-display text-xl font-semibold text-gold"
            >
              D
            </motion.span>
            <p className="mt-4 text-xs uppercase tracking-[0.28em] text-primary-foreground/70">
              Deepti Family Wears
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              className="mx-auto mt-4 h-px w-24 origin-left bg-gold"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
