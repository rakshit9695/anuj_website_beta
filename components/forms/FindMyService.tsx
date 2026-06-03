"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { practiceBySlug } from "@/content/practices";
import { cn } from "@/lib/utils";

type Q = { q: string; options: { label: string; value: string }[] };

const questions: Q[] = [
  {
    q: "What best describes you?",
    options: [
      { label: "A startup or founder", value: "startup" },
      { label: "An established company", value: "company" },
      { label: "A fund or investor", value: "fund" },
      { label: "An individual / family", value: "individual" },
    ],
  },
  {
    q: "What do you most need help with?",
    options: [
      { label: "Tax & compliance", value: "tax" },
      { label: "Audit & assurance", value: "audit" },
      { label: "Raising or structuring capital", value: "capital" },
      { label: "Cross-border / international", value: "global" },
    ],
  },
  {
    q: "What stage are you at?",
    options: [
      { label: "Just starting / setting up", value: "setup" },
      { label: "Growing", value: "growth" },
      { label: "Transaction or fundraise", value: "deal" },
      { label: "Mature / ongoing", value: "mature" },
    ],
  },
];

function recommend(a: string[]): string {
  const [who, need, stage] = a;
  if (who === "fund") return "aif-funds";
  if (need === "global") return "fema-rbi";
  if (need === "audit") return "audit-assurance";
  if (need === "capital") return stage === "deal" ? "ma-valuation" : "startup-vc-pe";
  if (who === "startup") return "startup-vc-pe";
  if (who === "individual") return "family-office-wealth";
  if (need === "tax") return "direct-tax";
  return "consulting-cfo";
}

export function FindMyService() {
  const [answers, setAnswers] = useState<string[]>([]);
  const step = answers.length;
  const done = step >= questions.length;
  const rec = done ? practiceBySlug(recommend(answers)) : undefined;

  if (done && rec) {
    return (
      <div className="rounded-xl border border-brass-400/60 bg-brass-100/40 p-8 text-center">
        <p className="eyebrow no-rule justify-center">Recommended for you</p>
        <h3 className="mt-3 font-display text-2xl text-navy-900">{rec.title}</h3>
        <p className="mx-auto mt-2 max-w-md text-ink-700">{rec.tagline}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href={`/services/${rec.slug}`} variant="brass">
            Explore {rec.title} <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href={`/contact?intent=consultation&service=${rec.slug}`} variant="secondary">Book a consultation</ButtonLink>
        </div>
        <button onClick={() => setAnswers([])} className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-navy-900">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Start over
        </button>
      </div>
    );
  }

  const current = questions[step];
  return (
    <div className="rounded-xl border border-ink-300 bg-surface p-8">
      <p className="text-sm text-ink-500">Question {step + 1} of {questions.length}</p>
      <h3 className="mt-2 font-display text-xl text-navy-900">{current.q}</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {current.options.map((o) => (
          <button
            key={o.value}
            onClick={() => setAnswers((a) => [...a, o.value])}
            className={cn("rounded-xl border border-ink-300 bg-paper px-4 py-3 text-left text-sm font-medium text-navy-900 transition-all hover:border-brass-400 hover:shadow-sm")}
          >
            {o.label}
          </button>
        ))}
      </div>
      {step > 0 && (
        <Button variant="ghost" size="sm" className="mt-4" onClick={() => setAnswers((a) => a.slice(0, -1))}>← Back</Button>
      )}
    </div>
  );
}
