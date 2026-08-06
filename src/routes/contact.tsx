import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { site } from "@/lib/site";

const title = "Contact & Directions | Deepti Family Wears, Jhabrera";
const description =
  "Find Deepti Family Wears in Main Market, Jhabrera. Call or WhatsApp us, check business hours and get directions to the store.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: site.name,
          telephone: site.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main Market",
            addressLocality: "Jhabrera",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 10:00-21:00",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come visit us in Main Market, Jhabrera"
        intro="Call, message on WhatsApp or simply drop in — we are happy to help you find exactly what you need."
      />
      <ContactSection />
      <SocialSection />
    </>
  );
}
