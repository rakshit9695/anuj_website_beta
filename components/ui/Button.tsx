import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-navy-900 text-paper hover:bg-navy-800",
        brass: "bg-brass-500 font-semibold text-paper hover:bg-brass-600",
        secondary:
          "border border-navy-900 bg-transparent text-navy-900 hover:bg-navy-50",
        ghost:
          "bg-transparent text-navy-700 underline-offset-4 hover:text-navy-900 hover:underline decoration-brass-400",
        "outline-light":
          "border border-paper/50 bg-transparent text-paper hover:bg-white/10",
      },
      size: {
        sm: "h-9 px-3.5 text-sm",
        md: "h-11 px-5 text-[0.95rem]",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CommonProps = VariantProps<typeof buttonVariants> & { className?: string };

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    CommonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonProps {
  href: string;
}

/** Link styled as a button. Uses next/link for internal hrefs. */
export function ButtonLink({
  className,
  variant,
  size,
  href,
  children,
  ...props
}: ButtonLinkProps) {
  const cls = cn(buttonVariants({ variant, size }), className);
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (external) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...(props as Record<string, unknown>)}>
      {children}
    </Link>
  );
}

export { buttonVariants };
