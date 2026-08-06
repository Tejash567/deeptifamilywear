/** Static content for categories, collections, reasons and reviews. */

import { images, type ImageEntry } from "@/config/images";

export type Category = {
  slug: string;
  title: string;
  description: string;
  /** Image entry from the central image configuration. */
  image: ImageEntry;
  keywords: string[];
};

export const categories: Category[] = [
  {
    slug: "mens-wear",
    title: "Men's Wear",
    description:
      "Shirts, trousers, kurtas, t-shirts and jeans — everyday comfort and occasion-ready pieces in a wide range of sizes.",
    image: images.mens,
    keywords: ["men", "shirt", "trouser", "kurta", "jeans", "formal", "casual"],
  },
  {
    slug: "womens-wear",
    title: "Women's Wear",
    description:
      "Suits, sarees, kurtis, dupattas and daily wear in fresh designs, soft fabrics and colours chosen for every season.",
    image: images.womens,
    keywords: ["women", "saree", "suit", "kurti", "ethnic", "festive"],
  },
  {
    slug: "kids-wear",
    title: "Kids' Wear",
    description:
      "Cheerful, comfortable clothing for babies, toddlers and school-going children — playful prints and durable stitching.",
    image: images.kids,
    keywords: ["kids", "children", "baby", "frock", "boys", "girls"],
  },
  {
    slug: "school-uniforms",
    title: "School Uniforms",
    description:
      "Complete uniform sets — shirts, trousers, pinafores, skirts, belts, ties and socks — neatly stocked in all sizes.",
    image: images.uniforms,
    keywords: ["school", "uniform", "shirt", "tie", "belt", "socks", "students"],
  },
];

export type Collection = {
  title: string;
  description: string;
  image: ImageEntry;
};


/** Featured collections — photography is reused from the image configuration. */
export const collections: Collection[] = [
  {
    title: "Casual Wear",
    description: "Relaxed everyday pieces that stay comfortable all day long.",
    image: images.mens,
  },
  {
    title: "Festive Collection",
    description: "Rich colours and elegant detailing for weddings and festivals.",
    image: images.womens,
  },
  {
    title: "Formal Wear",
    description: "Sharp, well-finished formals for office, interviews and events.",
    image: images.showroom,
  },
  {
    title: "Daily Essentials",
    description: "Basics the whole family reaches for — simple, sturdy, honest value.",
    image: images.storefront,
  },
  {
    title: "Kids Collection",
    description: "Bright, soft and easy-to-wash outfits for growing children.",
    image: images.kids,
  },
  {
    title: "School Uniforms",
    description: "Complete, correctly sized uniform sets ready before the term begins.",
    image: images.uniforms,
  },
];


export const reasons = [
  {
    icon: "Gem",
    title: "Premium Quality",
    text: "Fabrics and stitching we are happy to stand behind, checked before it reaches the shelf.",
  },
  {
    icon: "IndianRupee",
    title: "Reasonable Prices",
    text: "Honest pricing on every piece, so quality clothing stays within a family's budget.",
  },
  {
    icon: "Tag",
    title: "Fixed Price Shop",
    text: "One clear price for everyone. No bargaining, no confusion, no guesswork.",
  },
  {
    icon: "LayoutGrid",
    title: "Wide Variety",
    text: "Men's, women's, kids' wear and school uniforms together under one roof.",
  },
  {
    icon: "Sparkles",
    title: "Latest Fashion",
    text: "New designs added regularly so you always find something fresh in store.",
  },
  {
    icon: "Users",
    title: "Trusted by Families",
    text: "A local shop families return to, and recommend to their neighbours.",
  },
  {
    icon: "HeartHandshake",
    title: "Friendly Service",
    text: "Patient, helpful staff who take the time to find the right fit and size.",
  },
  {
    icon: "MapPin",
    title: "Convenient Location",
    text: "Right in Main Market, Jhabrera — easy to reach with simple parking nearby.",
  },
] as const;

/** Review snippets shown as customer feedback cards. */
export const reviews = [
  {
    name: "Local shopper",
    text: "Good quality clothes and the price is fixed, so there is no bargaining needed. Staff helped us find the right size.",
  },
  {
    name: "Parent, Jhabrera",
    text: "We buy school uniforms here every year. Everything is available in one place and the fabric lasts the full session.",
  },
  {
    name: "Family customer",
    text: "Nice variety for men, women and kids. The shop is neat and the people are very polite.",
  },
  {
    name: "Visitor from Roorkee",
    text: "Worth the short drive. Latest designs at reasonable prices and honest dealing.",
  },
];
