import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ContentType =
  | "alert"
  | "blog"
  | "whitepaper"
  | "budget"
  | "survey"
  | "press"
  | "news"
  | "case-study";

export interface PostFrontmatter {
  title: string;
  slug: string;
  type: ContentType;
  category?: string;
  practice?: string;
  author?: string;
  date: string;
  excerpt: string;
  pdf?: string;
  featured?: boolean;
  sample?: boolean;
  heroImage?: string;
  tags?: string[];
  // extra fields used by specific types
  speaker?: string;
  guest?: string;
  duration?: string;
  videoId?: string;
  mode?: string;
  venue?: string;
  sector?: string;
  metric?: string;
}

export interface Post extends PostFrontmatter {
  body: string;
  readingTime: string;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

let cache: Post[] | null = null;

function loadAll(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(POSTS_DIR)) {
    cache = [];
    return cache;
  }
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const fm = data as PostFrontmatter;
    return {
      ...fm,
      slug: fm.slug ?? file.replace(/\.mdx$/, ""),
      tags: fm.tags ?? [],
      body: content,
      readingTime: readingTime(content).text,
    } as Post;
  });
  // newest first
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  cache = posts;
  return posts;
}

export function getAllPosts(): Post[] {
  return loadAll();
}

export function getPostsByType(type: ContentType): Post[] {
  return loadAll().filter((p) => p.type === type);
}

export function getPost(type: ContentType, slug: string): Post | undefined {
  return loadAll().find((p) => p.type === type && p.slug === slug);
}

export function getFeatured(limit = 3): Post[] {
  const all = loadAll();
  const featured = all.filter((p) => p.featured);
  return (featured.length ? featured : all).slice(0, limit);
}

export function getRelated(post: Post, limit = 3): Post[] {
  return loadAll()
    .filter((p) => p.slug !== post.slug)
    .map((p) => {
      let score = 0;
      if (p.practice && p.practice === post.practice) score += 2;
      if (p.category && p.category === post.category) score += 1;
      if (p.type === post.type) score += 1;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.p);
}

export function getLatest(limit = 6): Post[] {
  return loadAll().slice(0, limit);
}
