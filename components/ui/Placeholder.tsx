import { cn } from "@/lib/utils";

type PlaceholderProps = {
  /** What this stands in for, e.g. "Mumbai skyline", "Partner headshot". */
  label?: string;
  /** Aspect ratio token. */
  ratio?: "16/9" | "4/3" | "1/1" | "3/4" | "21/9" | "auto";
  className?: string;
  /** Tone of the geometric pattern. */
  tone?: "navy" | "light" | "brass";
  rounded?: boolean;
};

const ratioClass: Record<NonNullable<PlaceholderProps["ratio"]>, string> = {
  "16/9": "aspect-video",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
  auto: "",
};

/**
 * Tasteful navy/brass geometric placeholder — never a broken image or grey
 * "image" box. Every not-yet-supplied asset routes through this. The firm
 * replaces it with <Image> once real assets exist (see CLIENT_TODO.md).
 */
export function Placeholder({
  label,
  ratio = "16/9",
  className,
  tone = "navy",
  rounded = true,
}: PlaceholderProps) {
  const toneStyles: Record<NonNullable<PlaceholderProps["tone"]>, string> = {
    navy: "bg-navy-900 text-paper/70",
    light: "bg-navy-50 text-navy-700/70",
    brass: "bg-brass-100 text-brass-600",
  };

  return (
    <div
      role="img"
      aria-label={label ? `Placeholder image: ${label}` : "Placeholder image"}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        ratioClass[ratio],
        toneStyles[tone],
        rounded && "rounded-xl",
        className,
      )}
    >
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 400 300"
      >
        <defs>
          <pattern
            id="ada-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0V40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#ada-grid)" />
        <circle cx="320" cy="80" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M-20 260 L140 120 L240 200 L420 60" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.6" />
        <rect x="40" y="180" width="36" height="90" fill="currentColor" opacity="0.18" />
        <rect x="86" y="150" width="36" height="120" fill="currentColor" opacity="0.22" />
        <rect x="132" y="200" width="36" height="70" fill="currentColor" opacity="0.18" />
      </svg>
      {label && (
        <span className="relative z-10 max-w-[80%] text-center text-xs font-medium uppercase tracking-[0.12em]">
          {label}
        </span>
      )}
    </div>
  );
}
