import { ExternalLink, Quote, Star } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { reviews } from "@/data/content";
import { site } from "@/lib/site";

/** Google reviews: rating badge, review snippet cards and a link out. */
export function Reviews() {
  return (
    <section id="reviews" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Google Reviews"
          title="What local customers say"
          intro="Our reputation is built on honest pricing and dependable quality — here is a snapshot of the feedback we receive."
        />

        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-soft">
            <span className="font-display text-3xl font-semibold">
              {site.rating}
            </span>
            <span>
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < 4 ? "h-4 w-4 fill-gold text-gold" : "h-4 w-4 text-gold/40"
                    }
                  />
                ))}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Google Rating
              </span>
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.07}>
              <blockquote className="flex h-full flex-col rounded-3xl border border-border bg-secondary/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                <Quote className="h-6 w-6 text-gold" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{review.text}”
                </p>
                <footer className="mt-5 flex items-center gap-2 text-sm font-medium">
                  <span className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3 w-3 fill-gold text-gold" />
                    ))}
                  </span>
                  <cite className="not-italic">{review.name}</cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={site.reviewsLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
          >
            Read More Reviews <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
