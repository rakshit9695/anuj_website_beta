import type { AlertCategory } from "./types";

/** Alert/insight categories (03 §8). `color` maps to a tailwind cat-* utility. */
export const alertCategories: AlertCategory[] = [
  { key: "direct", label: "Direct Tax", color: "direct" },
  { key: "indirect", label: "Indirect Tax", color: "indirect" },
  { key: "regulatory", label: "Regulatory", color: "regulatory" },
  { key: "litigation", label: "Litigation", color: "litigation" },
  { key: "giftcity", label: "GIFT City", color: "giftcity" },
  { key: "budget", label: "Budget", color: "budget" },
  { key: "trade", label: "Trade", color: "trade" },
];

export const alertCategoryByKey = (key: string) =>
  alertCategories.find((c) => c.key === key);

/** Tailwind classes per category for tags/badges. */
export const categoryTagClass: Record<string, string> = {
  direct: "bg-cat-direct/10 text-cat-direct",
  indirect: "bg-cat-indirect/10 text-cat-indirect",
  regulatory: "bg-cat-regulatory/10 text-cat-regulatory",
  litigation: "bg-cat-litigation/10 text-cat-litigation",
  giftcity: "bg-cat-giftcity/10 text-cat-giftcity",
  budget: "bg-cat-budget/15 text-brass-600",
  trade: "bg-cat-trade/15 text-cat-trade",
};

export const categoryDotClass: Record<string, string> = {
  direct: "bg-cat-direct",
  indirect: "bg-cat-indirect",
  regulatory: "bg-cat-regulatory",
  litigation: "bg-cat-litigation",
  giftcity: "bg-cat-giftcity",
  budget: "bg-cat-budget",
  trade: "bg-cat-trade",
};

/** Regulatory bulletin streams (08 §5). */
export const bulletinStreams = [
  "RBI/SEBI",
  "GST",
  "Income Tax",
  "FEMA",
  "IBC",
  "Labour",
] as const;
