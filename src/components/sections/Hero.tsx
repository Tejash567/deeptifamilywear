import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";

import { HeroImage } from "@/components/images/SmartImage";
import { images } from "@/config/images";
import { site } from "@/lib/site";

/** Home hero: real storefront photo, dark overlay, headline and three CTAs. */
export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden">
      {/* Background photo + charcoal overlay so the text stays readable */}
      <div className="absolute inset-0">
        <HeroImage
          src={images.storefront.src}
          alt={images.storefront.alt}
          aspect="h-full w-full"
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-primary/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/40" />


      <div className="relative mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
            <MapPin className="h-3.5 w-3.5" /> Main Market, Jhabrera
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
            Style for Every Generation
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            Premium quality clothing for men, women and kids at honest prices — a
            fixed price family store trusted across Jhabrera and nearby towns.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={site.mapsDirections}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-primary shadow-lift transition-transform hover:scale-[1.03]"
            >
              <MapPin className="h-4 w-4" /> Visit Store
            </a>
            <a
              href={site.telHref}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary-foreground px-6 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link
              to="/collection"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-primary-foreground/40 px-6 text-sm font-semibold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
            >
              View Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust strip */}
          <dl className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Google Rating", value: `${site.rating}★` },
              { label: "Pricing", value: "Fixed Price" },
              { label: "Categories", value: "4 Sections" },
              { label: "Service", value: "Family First" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl glass-dark px-4 py-3 text-primary-foreground"
              >
                <dt className="text-[0.65rem] uppercase tracking-[0.16em] text-primary-foreground/60">
                  {item.label}
                </dt>
                <dd className="mt-1 flex items-center gap-1 font-display text-base font-semibold">
                  {item.label === "Google Rating" && (
                    <Star className="h-4 w-4 fill-gold text-gold" />
                  )}
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
