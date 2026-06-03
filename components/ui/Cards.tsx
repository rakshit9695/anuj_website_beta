import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { Icon, IconTile } from "@/components/ui/Icon";
import { Placeholder } from "@/components/ui/Placeholder";
import { CategoryTag, TypeBadge, QualificationChips } from "@/components/ui/Badge";

/** Service card — icon tile, title, tagline, explore link, brass top-border on hover. */
export function ServiceCard({
  href,
  icon,
  title,
  tagline,
}: {
  href: string;
  icon: string;
  title: string;
  tagline: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-xl border border-ink-300 bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card-hover focus-visible:-translate-y-1"
    >
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-t-xl bg-brass-500 transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      <IconTile name={icon} />
      <h3 className="mt-4 font-display text-xl text-navy-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-700">{tagline}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy-700">
        Explore
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}

/** Compact industry card — denser grid. */
export function IndustryCard({
  href,
  icon,
  title,
}: {
  href: string;
  icon: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-ink-300 bg-surface px-4 py-3.5 transition-all hover:border-brass-400 hover:shadow-sm"
    >
      <span className="text-brass-600">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="text-sm font-medium text-navy-900">{title}</span>
      <ArrowRight className="ml-auto h-4 w-4 text-ink-300 transition-all group-hover:translate-x-0.5 group-hover:text-brass-500" aria-hidden />
    </Link>
  );
}

/** Insight / article card — thumbnail, category, title, meta, excerpt. */
export function InsightCard({
  href,
  title,
  category,
  type,
  author,
  date,
  excerpt,
}: {
  href: string;
  title: string;
  category?: string;
  type?: string;
  author?: string;
  date?: string;
  excerpt?: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-ink-300 bg-surface transition-all hover:-translate-y-1 hover:shadow-card-hover">
      <Link href={href} className="block">
        <Placeholder ratio="16/9" label={category ? undefined : "Insight"} rounded={false} />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          {category && <CategoryTag categoryKey={category} />}
          {type && <TypeBadge label={type} />}
        </div>
        <h3 className="mt-3 font-display text-lg leading-snug text-navy-900">
          <Link href={href} className="hover:text-navy-700">
            {title}
          </Link>
        </h3>
        {excerpt && <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-700">{excerpt}</p>}
        <p className="mt-4 text-xs text-ink-500">
          {author && <span>{author}</span>}
          {author && date && <span> · </span>}
          {date && <span>{formatDate(date)}</span>}
        </p>
      </div>
    </article>
  );
}

/** Stat card — big tabular number + brass accent + label. */
export function StatCard({
  value,
  label,
  onDark = false,
}: {
  value: string;
  label: string;
  onDark?: boolean;
}) {
  return (
    <div className="text-center">
      <p className={cn("font-display text-4xl tabular-nums md:text-5xl", onDark ? "text-paper" : "text-navy-900")}>
        {value}
      </p>
      <div className="mx-auto mt-2 h-0.5 w-8 bg-brass-500" />
      <p className={cn("mt-2 text-sm", onDark ? "text-[#C2CEDD]" : "text-ink-500")}>{label}</p>
    </div>
  );
}

/** Case-study card — anonymised outcome metric + sector + context. */
export function CaseStudyCard({
  metric,
  sector,
  context,
  href,
}: {
  metric: string;
  sector: string;
  context: string;
  href?: string;
}) {
  const body = (
    <>
      <p className="font-display text-2xl text-navy-900">{metric}</p>
      <span className="mt-3 inline-flex items-center rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-medium text-navy-700">
        {sector}
      </span>
      <p className="mt-3 text-sm text-ink-700">{context}</p>
      <p className="mt-3 text-[0.7rem] uppercase tracking-wide text-ink-500">Illustrative · anonymised</p>
    </>
  );
  const cls =
    "flex flex-col rounded-xl border border-ink-300 bg-surface p-6 shadow-sm transition-all hover:shadow-card";
  return href ? (
    <Link href={href} className={cn(cls, "hover:-translate-y-1")}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}

/** Person card — headshot placeholder, name, role, qualification chips. */
export function PersonCard({
  href,
  name,
  role,
  qualifications,
}: {
  href?: string;
  name: string;
  role: string;
  qualifications: string[];
}) {
  const inner = (
    <>
      <Placeholder ratio="1/1" label="Headshot" tone="light" />
      <h3 className="mt-4 font-display text-lg text-navy-900">{name}</h3>
      <p className="text-sm text-ink-500">{role}</p>
      <div className="mt-2">
        <QualificationChips chips={qualifications} />
      </div>
    </>
  );
  const cls = "block rounded-xl border border-ink-300 bg-surface p-4 transition-all";
  return href ? (
    <Link href={href} className={cn(cls, "hover:-translate-y-1 hover:shadow-card")}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
