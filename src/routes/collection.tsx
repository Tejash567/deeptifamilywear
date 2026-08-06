import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { SocialSection } from "@/components/sections/SocialSection";

const title = "Featured Collection | Deepti Family Wears, Jhabrera";
const description =
  "Casual wear, festive collection, formals, daily essentials, kids collection and school uniforms — see the featured ranges at Deepti Family Wears in Jhabrera.";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/collection" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured Collection"
        title="Ranges we are showcasing right now"
        intro="A large variety with the latest designs — priced honestly and available in store across sizes."
      />
      <FeaturedCollection />
      <SocialSection />
    </>
  );
}
