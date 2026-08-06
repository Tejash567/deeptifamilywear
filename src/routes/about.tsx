import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake, MapPin, ShieldCheck, Tag } from "lucide-react";

import { SmartImage } from "@/components/images/SmartImage";
import { images } from "@/config/images";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { site } from "@/lib/site";

const title = "About Our Store | Deepti Family Wears, Jhabrera";
const description =
  "Deepti Family Wears is a trusted family clothing store in Main Market, Jhabrera — premium quality, fixed prices and friendly service for men, women and kids.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: ShieldCheck,
    title: "Quality we can vouch for",
    text: "Every piece on our shelves is chosen for fabric, finish and fit — clothing that keeps looking good after many washes.",
  },
  {
    icon: Tag,
    title: "A fixed price shop",
    text: "One clear price for every customer. No bargaining, no pressure — just straightforward, honest pricing.",
  },
  {
    icon: Handshake,
    title: "Service that stays patient",
    text: "Our team helps you compare, check sizes and decide calmly, whether you are buying one shirt or a full uniform set.",
  },
  {
    icon: MapPin,
    title: "Part of the community",
    text: `We serve families from ${site.serviceAreas.slice(0, 4).join(", ")} and nearby villages, and we value every returning customer.`,
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A family clothing store built on trust"
        intro="Deepti Family Wears is a neighbourhood store in Main Market, Jhabrera, where families come for dependable clothing at prices they can rely on."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <figure className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={heroImage}
                alt="Clothing neatly arranged inside Deepti Family Wears"
                loading="lazy"
                width={1920}
                height={1088}
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-xl">
              <p className="eyebrow">Who We Are</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Clothing for every generation of the family
              </h2>
              <div className="gold-rule mt-5" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Deepti Family Wears began with a simple idea: a family should be
                  able to walk into one shop and find good clothing for everyone —
                  men, women and children — without worrying about inflated prices or
                  uncertain quality.
                </p>
                <p>
                  That idea still shapes how we run the store. We keep our men's,
                  women's, kids' wear and school uniform sections well stocked across
                  sizes, add new designs as fashion changes, and price everything
                  clearly so there is nothing to negotiate.
                </p>
                <p>
                  Most of our customers come back — and bring their families with
                  them. That trust is the part of our work we care about most, and it
                  is why we would rather be known for honest dealing and helpful
                  service than for anything flashy.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/categories"
                  className="inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Browse Categories
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
                >
                  Visit the Store
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.07}>
                <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-soft text-primary">
                    <pillar.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
    </>
  );
}
