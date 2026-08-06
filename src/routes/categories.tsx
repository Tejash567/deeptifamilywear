import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

const title = "Shop Categories | Men's, Women's, Kids' & School Uniforms";
const description =
  "Explore our four sections at Deepti Family Wears, Jhabrera: men's wear, women's wear, kids' wear and complete school uniform sets at fixed, honest prices.";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/categories" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Shop Categories"
        title="Four sections, stocked for the whole family"
        intro="Each section is kept full across sizes and seasons — visit the store to see the complete range and the latest arrivals."
      />
      <CategoryGrid heading={false} />
      <WhyChooseUs />
    </>
  );
}
