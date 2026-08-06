import { ArrowUpRight, Facebook, Instagram } from "lucide-react";

import { SmartImage } from "@/components/images/SmartImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { socialTiles } from "@/config/images";
import { site } from "@/lib/site";

/**
 * Social section.
 * Instagram's public API needs an app review, so this grid gracefully falls
 * back to curated store photos (from the central image configuration) and links
 * straight to the profile. Swap in real post screenshots any time.
 */


export function SocialSection() {
  return (
    <section id="social" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Follow Us"
          title="New arrivals, first look on social"
          intro="Follow along for fresh designs, seasonal collections and store updates before you visit."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-soft text-primary">
                  <Instagram className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold">Instagram</h3>
                  <p className="truncate text-sm text-muted-foreground">
                    @deepti_family_wear
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {socialTiles.map((tile) => (
                  <a
                    key={tile.src}
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group relative overflow-hidden rounded-2xl"
                  >
                    <SmartImage
                      src={tile.src}
                      alt={tile.alt}
                      aspect="aspect-square"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-primary/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Instagram className="h-5 w-5 text-primary-foreground" />
                    </span>
                  </a>
                ))}
              </div>


              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                View Instagram Profile <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-soft text-primary">
                <Facebook className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">Facebook</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Follow our Facebook page for new arrivals, seasonal offers and
                festive collection updates. It is also the easiest place to message
                us with a question before visiting the store.
              </p>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-gold px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary"
              >
                Follow on Facebook <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
