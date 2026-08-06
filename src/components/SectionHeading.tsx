import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";

/** Section wrapper with an eyebrow label, heading and optional intro text. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </Heading>
      <div
        className={
          align === "center" ? "gold-rule mx-auto mt-5" : "gold-rule mt-5"
        }
      />
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
