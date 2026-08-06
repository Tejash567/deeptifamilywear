import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

import { categories } from "@/data/content";
import { navLinks, site } from "@/lib/site";

/** Site footer: quick links, categories, address, hours and social profiles. */
export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <div className="gold-rule mt-3" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A trusted family clothing store in {site.city} — premium quality men's,
            women's and kids' wear plus school uniforms, at fixed, honest prices.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={site.mapsPlace}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Google Maps"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-gold hover:text-gold"
            >
              <MapPin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Categories">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest">
            Categories
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/categories"
                  hash={c.slug}
                  className="transition-colors hover:text-gold"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest">
            Visit Us
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.addressFull}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={site.telHref} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {site.name}, {site.addressLine}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
