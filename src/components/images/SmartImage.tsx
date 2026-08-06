import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * SmartImage — the single low-level image primitive for the whole site.
 *
 * Note on Next.js: this project runs on TanStack Start (React + Vite), so
 * `next/image` is not available. SmartImage gives us the same benefits with
 * plain HTML: lazy loading, a fixed aspect ratio (no layout shift), a loading
 * skeleton and required alt text.
 *
 * The exported wrappers below (HeroImage, CategoryImage, GalleryImage) simply
 * preset sensible options, so components stay short and readable.
 */
export type SmartImageProps = {
  src: string;
  alt: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[4/5]". */
  aspect?: string;
  /** Extra classes for the outer wrapper. */
  className?: string;
  /** Extra classes for the <img> itself. */
  imageClassName?: string;
  /** Zoom the photo slightly when the parent card is hovered. */
  hoverZoom?: boolean;
  /** Load immediately instead of lazily — use only for the hero (LCP) image. */
  priority?: boolean;
};

export function SmartImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
  imageClassName,
  hoverZoom = true,
  priority = false,
}: SmartImageProps) {
  // Tracks whether the file has finished downloading, so we can fade it in
  // over the skeleton instead of popping it onto the screen.
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted", aspect, className)}>
      {/* Loading skeleton — sits behind the image and disappears once loaded. */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
      )}

      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-all duration-[900ms] ease-out",
          loaded ? "opacity-100" : "opacity-0",
          hoverZoom && "group-hover:scale-[1.06]",
          imageClassName,
        )}
      />
    </div>
  );
}

/** Full-bleed hero photograph — loads eagerly because it is the first paint. */
export function HeroImage(props: Omit<SmartImageProps, "priority" | "hoverZoom">) {
  return <SmartImage {...props} priority hoverZoom={false} />;
}

/** Portrait image used on the four category cards. */
export function CategoryImage(props: SmartImageProps) {
  return <SmartImage aspect="aspect-[4/5]" {...props} />;
}

/** Gallery tile — aspect ratio varies to create the masonry rhythm. */
export function GalleryImage(props: SmartImageProps) {
  return <SmartImage {...props} />;
}
