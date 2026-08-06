import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";

/**
 * Floating actions: WhatsApp, sticky call button and back-to-top.
 * Fixed to the bottom-right on desktop; call sits in a bottom bar on mobile.
 */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6">
        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground shadow-soft transition-transform hover:scale-105"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href={site.telHref}
          aria-label="Call the store"
          className="hidden h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 sm:grid"
        >
          <Phone className="h-5 w-5" />
        </a>

        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat on WhatsApp"
          className="grid h-13 w-13 place-items-center rounded-full bg-gold p-3.5 text-primary shadow-lift transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile sticky call / WhatsApp bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border glass p-2 sm:hidden">
        <a
          href={site.telHref}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-gold text-sm font-medium text-gold"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}
