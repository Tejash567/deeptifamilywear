import {
  Gem,
  HeartHandshake,
  IndianRupee,
  LayoutGrid,
  MapPin,
  Sparkles,
  Tag,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { reasons } from "@/data/content";

/** Icon lookup so content stays data-driven. */
const icons = {
  Gem,
  IndianRupee,
  Tag,
  LayoutGrid,
  Sparkles,
  Users,
  HeartHandshake,
  MapPin,
} as const;

/** "Why Choose Us" — eight icon cards on the light grey band. */
export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Reasons families keep coming back"
          intro="Clear prices, dependable quality and service that treats every customer like a neighbour."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = icons[reason.icon];
            return (
              <Reveal key={reason.title} delay={(i % 4) * 0.06}>
                <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-soft text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
