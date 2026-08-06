/**
 * Central image configuration.
 * -------------------------------------------------------------
 * Every photograph used on the website is registered here — never
 * hardcode an image path inside a component. To swap a placeholder for a
 * real shop photo, drop the new file into `public/images/` using the same
 * file name; no component changes are needed.
 *
 * Files live in `public/`, so paths are absolute URLs starting with "/".
 */

/** Shape of a single image entry: where it lives + how screen readers read it. */
export type ImageEntry = {
  /** Public URL of the file, e.g. "/images/mens.jpg". */
  src: string;
  /** Short human title, used as gallery captions. */
  title: string;
  /** Descriptive alt text (important for accessibility and SEO). */
  alt: string;
};

/** Named images used across the site (hero, showroom, category cards, logo). */
export const images = {
  /** Real photo of the shop front in Main Bazar, Jhabrera. */
  storefront: {
    src: "/images/storefront.jpg",
    title: "Store Exterior",
    alt: "Shop front of Deepti Family Wears in Main Bazar, Jhabrera, Haridwar",
  },
  /** Replace with original shop photo — currently a tasteful placeholder. */
  showroom: {
    src: "/images/showroom.jpg",
    title: "Store Interior",
    alt: "Interior of Deepti Family Wears with neatly arranged garments",
  },
  /** Real photo of the men's wear counter. */
  mens: {
    src: "/images/mens.jpg",
    title: "Men's Collection",
    alt: "Stacks of jeans, shirts and trousers in the men's wear section",
  },
  /** Real photo of the ladies' wear section. */
  womens: {
    src: "/images/womens.jpg",
    title: "Women's Collection",
    alt: "Suits, kurtis and dupattas displayed in the women's wear section",
  },
  /** Replace with original shop photo. */
  kids: {
    src: "/images/kids.jpg",
    title: "Kids Collection",
    alt: "Colourful clothing for children at Deepti Family Wears",
  },
  /** Replace with original shop photo. */
  uniforms: {
    src: "/images/uniforms.jpg",
    title: "School Uniforms",
    alt: "School uniform shirts, trousers and accessories stocked in all sizes",
  },
  /** Brand mark used for the header/footer and favicon. */
  logo: {
    src: "/images/logo.png",
    title: "Deepti Family Wears",
    alt: "Deepti Family Wears monogram logo",
  },
} as const satisfies Record<string, ImageEntry>;

/**
 * Gallery images, in display order.
 * The masonry gallery renders straight from this array, so adding a photo
 * here (plus the file in `public/images/gallery/`) is enough to show it.
 */
export const galleryImages: ImageEntry[] = [
  {
    src: "/images/gallery/gallery1.jpg",
    title: "Store Exterior",
    alt: "Deepti Family Wears shop front with its signboard in Jhabrera",
  },
  {
    // Replace with original shop photo
    src: "/images/gallery/gallery2.jpg",
    title: "Store Interior",
    alt: "Well-lit interior aisles of Deepti Family Wears",
  },
  {
    src: "/images/gallery/gallery3.jpg",
    title: "Men's Collection",
    alt: "Men's jeans and shirts stacked by size on wooden shelves",
  },
  {
    src: "/images/gallery/gallery4.jpg",
    title: "Women's Collection",
    alt: "Ladies' suits and kurtis hanging on display at the store",
  },
  {
    // Replace with original shop photo
    src: "/images/gallery/gallery5.jpg",
    title: "Kids Collection",
    alt: "Children's clothing arranged in the kids' wear section",
  },
  {
    // Replace with original shop photo
    src: "/images/gallery/gallery6.jpg",
    title: "School Uniforms",
    alt: "School uniform sets neatly stocked on the uniform shelves",
  },
];

/** Small tile grid used by the social media section. */
export const socialTiles: ImageEntry[] = [
  images.storefront,
  images.womens,
  images.mens,
  images.kids,
  images.uniforms,
  images.showroom,
];
