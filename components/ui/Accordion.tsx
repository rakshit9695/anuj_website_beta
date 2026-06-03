"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItemData = { id?: string; trigger: React.ReactNode; content: React.ReactNode };

/** FAQ / grouped-list accordion with smooth height animation. */
export function Accordion({
  items,
  type = "single",
  className,
}: {
  items: AccordionItemData[];
  type?: "single" | "multiple";
  className?: string;
}) {
  const common = {
    className: cn("divide-y divide-ink-300 rounded-xl border border-ink-300 bg-surface", className),
  };
  const children = items.map((item, i) => (
    <RadixAccordion.Item key={item.id ?? i} value={item.id ?? `item-${i}`} className="px-5">
      <RadixAccordion.Header>
        <RadixAccordion.Trigger className="group flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-navy-900">
          <span>{item.trigger}</span>
          <ChevronDown
            className="h-5 w-5 shrink-0 text-brass-600 transition-transform duration-200 group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <div className="pb-4 pr-9 text-ink-700">{item.content}</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  ));

  return type === "single" ? (
    <RadixAccordion.Root type="single" collapsible {...common}>
      {children}
    </RadixAccordion.Root>
  ) : (
    <RadixAccordion.Root type="multiple" {...common}>
      {children}
    </RadixAccordion.Root>
  );
}

/** Convenience FAQ accordion taking {q,a} pairs. */
export function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <Accordion
      items={faqs.map((f) => ({
        trigger: f.q,
        content: <p>{f.a}</p>,
      }))}
    />
  );
}
