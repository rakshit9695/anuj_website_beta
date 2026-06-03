import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { practices, allServicePaths } from "@/content/practices";
import { industries } from "@/content/industries";
import { calculators } from "@/content/calculators";
import { rateCharts } from "@/content/rates/registry";
import { corridors, desks } from "@/content/global";
import { team } from "@/content/team";
import { openings } from "@/content/careers";
import { getAllPosts } from "@/lib/content";
import {
  aboutNav, insightsNav, knowledgeBankNav, globalNav, careersNav,
} from "@/content/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPaths = [
    "", "/about", "/services", "/industries", "/global", "/insights",
    "/knowledge-bank", "/media", "/careers", "/contact", "/sitemap",
    "/legal/privacy", "/legal/terms", "/legal/cookie-policy", "/legal/disclaimer",
    "/media/news", "/media/press-releases", "/media/videos",
    "/insights/budget", "/insights/budget/2026-27",
    ...aboutNav.map((n) => n.href),
    ...insightsNav.map((n) => n.href),
    ...knowledgeBankNav.map((n) => n.href),
    ...globalNav.map((n) => n.href),
    ...careersNav.map((n) => n.href),
  ];

  const dynamic = [
    ...practices.map((p) => `/services/${p.slug}`),
    ...allServicePaths().map((s) => `/services/${s.practice}/${s.service}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...calculators.map((c) => `/knowledge-bank/calculators/${c.slug}`),
    ...rateCharts.map((r) => `/knowledge-bank/rates/${r.slug}`),
    ...corridors.map((c) => `/global/${c.slug}`),
    ...desks.map((d) => `/global/desks/${d.slug}`),
    ...team.filter((t) => t.leadership).map((t) => `/about/team/${t.slug}`),
    ...openings.map((o) => `/careers/openings/${o.slug}`),
    ...getAllPosts().map((p) => {
      if (p.type === "blog") return `/insights/blog/${p.slug}`;
      if (p.type === "alert") return `/insights/alerts/${p.slug}`;
      if (p.type === "case-study") return `/insights/case-studies/${p.slug}`;
      if (p.type === "press") return `/media/press-releases/${p.slug}`;
      return null;
    }).filter(Boolean) as string[],
  ];

  const all = Array.from(new Set([...staticPaths, ...dynamic]));
  return all.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
