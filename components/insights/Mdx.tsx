import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

const components = {
  a: ({ href = "", ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
    href.startsWith("/") ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ),
};

/** Renders MDX body content with the editorial prose styling. */
export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose-ada">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
