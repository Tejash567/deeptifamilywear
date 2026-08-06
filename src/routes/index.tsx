import { createFileRoute } from "@tanstack/react-router";

import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { Reviews } from "@/components/sections/Reviews";
import { SocialSection } from "@/components/sections/SocialSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { site } from "@/lib/site";

const title = "Deepti Family Wears | Premium Clothing Store in Jhabrera";
const description =
  "Shop premium quality men's, women's, kids' clothing and school uniforms at Deepti Family Wears in Jhabrera. Fixed prices, latest collections and trusted service.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          name: site.name,
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main Market",
            addressLocality: "Jhabrera",
            addressRegion: "Uttarakhand",
            addressCountry: "IN",
          },
          telephone: site.phoneDisplay,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: site.rating,
            bestRating: 5,
          },
          areaServed: site.serviceAreas.map((a) => ({ "@type": "Place", name: a })),
          sameAs: [site.instagram, site.facebook],
          openingHours: "Mo-Su 10:00-21:00",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <WhyChooseUs />
      <Reviews />
      <SocialSection />
      <ContactSection />
    </>
  );
}
