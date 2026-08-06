import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { collections } from "@/data/content";

/**
 * Featured collection — alternating image/text rows for each collection theme.
 * Images are placeholders and can be swapped for real store photography.
 */
export function FeaturedCollection() {
  return (
    <section id="collection" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Collection"
          title="Curated for every occasion"
          intro="From daily essentials to festive dressing — a large variety refreshed with the latest designs."
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {collections.map((item, i) => (
            <Reveal key={item.title}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="group relative overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={item.image}
                    alt={`${item.title} at Deepti Family Wears, Jhabrera`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </figure>

                <div className="max-w-lg">
                  <p className="eyebrow">
                    {String(i + 1).padStart(2, "0")} — Collection
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                    {item.title}
                  </h3>
                  <div className="gold-rule mt-4" />
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Available in store across sizes for men, women and children —
                    visit us to see the full range and current arrivals.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
