import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { CategoryImage } from "@/components/images/SmartImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { categories } from "@/data/content";


/** Four premium category cards: image, short description, explore button. */
export function CategoryGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section id="categories" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {heading && (
          <SectionHeading
            eyebrow="Shop Categories"
            title="Everything the family needs, under one roof"
            intro="Four carefully stocked sections, each kept full across sizes, seasons and budgets."
          />
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 0.08}>
              <article
                id={category.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative">
                  <CategoryImage src={category.image.src} alt={category.image.alt} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <h3 className="absolute bottom-4 left-5 font-display text-xl font-semibold text-primary-foreground">
                    {category.title}
                  </h3>
                </div>


                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                  <Link
                    to="/collection"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-gold"
                  >
                    Explore
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
