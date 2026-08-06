import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { Reviews } from "@/components/sections/Reviews";

const title = "Photo Gallery | Deepti Family Wears Store in Jhabrera";
const description =
  "See our store exterior, interior, product displays and seasonal collections at Deepti Family Wears, Main Market, Jhabrera.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo Gallery"
        title="Inside Deepti Family Wears"
        intro="A calm, tidy showroom where families can browse comfortably and take their time choosing."
      />
      <PhotoGallery />
      <Reviews />
    </>
  );
}
