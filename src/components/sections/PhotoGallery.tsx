import { GalleryImage } from "@/components/images/SmartImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryImages } from "@/config/images";

/**
 * Masonry photo gallery.
 * Built with CSS columns and driven entirely by `galleryImages` in the central
 * image configuration — add an entry there and it appears here automatically.
 */
export function PhotoGallery() {
  /** Rotating aspect ratios give the grid its staggered, magazine-like rhythm. */
  const aspectRatios = ["aspect-[4/5]", "aspect-square", "aspect-[4/3]"];

  return (
    <section id="gallery" className="bg-secondary/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Photo Gallery"
          title="A look inside the store"
          intro="Neatly arranged sections, clear displays and space to browse comfortably with the family."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={(index % 3) * 0.06}>
              <figure className="group relative overflow-hidden rounded-3xl shadow-soft">
                <GalleryImage
                  src={image.src}
                  alt={image.alt}
                  aspect={aspectRatios[index % aspectRatios.length] ?? "aspect-square"}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/75 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-5 translate-y-2 font-display text-sm font-medium text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {image.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
