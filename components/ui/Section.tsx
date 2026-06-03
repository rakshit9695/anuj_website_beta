import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "alt" | "navy" | "surface";

const toneClass: Record<Tone, string> = {
  paper: "bg-paper text-ink-900",
  alt: "bg-surface-alt text-ink-900",
  surface: "bg-surface text-ink-900",
  navy: "bg-navy-900 text-paper",
};

/** Section wrapper providing the standard vertical rhythm + tone band. */
export function Section({
  tone = "paper",
  className,
  containerClassName,
  bleed = false,
  children,
  id,
}: {
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  bleed?: boolean;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-12 md:py-20", toneClass[tone], className)}>
      <div className={cn(bleed ? "container-bleed" : "container", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  noRule = false,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  noRule?: boolean;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        noRule && "no-rule",
        onDark && "text-brass-400",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Reusable eyebrow + heading + optional lede block. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const Tag = as;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow onDark={onDark} className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      )}
      <Tag
        className={cn(
          "mt-3 font-display",
          as === "h1" ? "text-h1" : "text-h2",
          onDark ? "text-paper" : "text-navy-900",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-4 text-body-lg",
            align === "center" && "mx-auto",
            onDark ? "text-[#C2CEDD]" : "text-ink-700",
            "max-w-lede",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
