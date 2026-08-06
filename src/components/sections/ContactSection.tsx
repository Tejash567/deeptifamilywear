import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

/** Contact section: details, action buttons and a Google Maps embed. */
export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Visit Us"
          title="We would love to see you in store"
          intro="Come browse the full collection, check the fabric in person and let our team help you find the right fit."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold-soft text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold">
                      Store Address
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {site.addressFull}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold-soft text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold">
                      Phone / WhatsApp
                    </h3>
                    <a
                      href={site.telHref}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gold-soft text-primary">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold">
                      Business Hours
                    </h3>
                    {site.hours.map((h) => (
                      <p key={h.days} className="mt-1 text-sm text-muted-foreground">
                        {h.days}: {h.time}
                      </p>
                    ))}
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.telHref}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-gold px-5 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={site.mapsDirections}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
                >
                  <Navigation className="h-4 w-4" /> Directions
                </a>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                Serving customers from {site.serviceAreas.join(", ")} and surrounding
                areas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Map showing Deepti Family Wears in Main Market, Jhabrera"
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[380px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
