import catKids from "@/assets/cat-kids.jpg";
import catMen from "@/assets/cat-men.jpg";
import catUniforms from "@/assets/cat-uniforms.jpg";
import catWomen from "@/assets/cat-women.jpg";
import heroImage from "@/assets/hero-showroom.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/** Gallery items — placeholder photography with descriptive captions. */
const shots = [
  { src: heroImage, caption: "Store Interior" },
  { src: catWomen, caption: "Product Displays" },
  { src: catUniforms, caption: "School Uniform Shelves" },
  { src: catMen, caption: "Men's Section" },
  { src: catKids, caption: "Kids Collection" },
  { src: heroImage, caption: "Store Exterior" },
  { src: catWomen, caption: "Seasonal Collections" },
  { src: catMen, caption: "Customers Shopping" },
];

/** Masonry photo gallery built with CSS columns. */
export function PhotoGallery() {
  return (
    <section id="gallery" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="A look inside the store"
          intro="Neatly arranged sections, clear displays and space to browse comfortably with the family."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {shots.map((shot, i) => (
            <Reveal key={`${shot.caption}-${i}`} delay={(i % 3) * 0.06}>
              <figure className="group relative overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={shot.src}
                  alt={`${shot.caption} — Deepti Family Wears, Jhabrera`}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06] ${
                    i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-5 translate-y-2 font-display text-sm font-medium text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {shot.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
