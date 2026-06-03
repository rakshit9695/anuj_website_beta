"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export type TabItem = { value: string; label: string; content: React.ReactNode };

/** Styled tabs for practice sub-sections and calculator regime toggles. */
export function Tabs({
  items,
  defaultValue,
  className,
  listClassName,
}: {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
  listClassName?: string;
}) {
  return (
    <RadixTabs.Root defaultValue={defaultValue ?? items[0]?.value} className={className}>
      <RadixTabs.List
        className={cn("flex flex-wrap gap-1 border-b border-ink-300", listClassName)}
      >
        {items.map((it) => (
          <RadixTabs.Trigger
            key={it.value}
            value={it.value}
            className="-mb-px border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-ink-500 transition-colors hover:text-navy-900 data-[state=active]:border-brass-500 data-[state=active]:text-navy-900"
          >
            {it.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {items.map((it) => (
        <RadixTabs.Content key={it.value} value={it.value} className="pt-6 focus-visible:outline-none">
          {it.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
}
