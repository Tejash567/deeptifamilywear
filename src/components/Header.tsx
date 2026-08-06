import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Phone, Search, Sun, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { categories } from "@/data/content";
import { useTheme } from "@/hooks/use-theme";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Sticky site header: brand, nav, category search, theme toggle, call CTA. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { isDark, toggle } = useTheme();

  // Add a frosted background + shadow once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Simple client-side category search (title + keywords).
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return categories.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.keywords.some((k) => k.includes(q)),
    );
  }, [query]);

  return (
    <header
      className={cn(
        "glass fixed inset-x-0 top-0 z-50 transition-shadow duration-300",
        scrolled && "shadow-soft",
      )}
    >

      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-display text-base font-semibold text-primary-foreground">
            D
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold leading-tight sm:text-lg">
              Deepti Family Wears
            </span>
            <span className="hidden text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
              Main Market, Jhabrera
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-foreground after:scale-x-100" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Category search */}
          <div className="relative hidden md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories"
              aria-label="Search clothing categories"
              className="h-10 w-44 rounded-full border border-border bg-secondary/70 pl-9 pr-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:w-56 focus:border-gold"
            />
            <AnimatePresence>
              {query.trim() && (
                <motion.ul
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-border bg-popover p-2 shadow-lift"
                >
                  {results.length === 0 && (
                    <li className="px-3 py-2 text-sm text-muted-foreground">
                      No category found
                    </li>
                  )}
                  {results.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/categories"
                        hash={c.slug}
                        onClick={() => setQuery("")}
                        className="block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-secondary"
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href={site.telHref}
            className="hidden h-10 shrink-0 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-gold" }}
                  className="border-b border-border/60 py-3 font-display text-base last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={site.telHref}
                className="mt-3 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> {site.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
