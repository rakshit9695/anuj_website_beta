"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Placeholder } from "@/components/ui/Placeholder";

/** Click-to-load YouTube facade — no heavy iframe until the user opts in. */
export function YouTubeFacade({ id, title }: { id?: string; title: string }) {
  const [play, setPlay] = useState(false);

  if (play && id) {
    return (
      <div className="aspect-video overflow-hidden rounded-xl">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlay(true)}
      className="group relative block w-full overflow-hidden rounded-xl"
      aria-label={`Play video: ${title}`}
    >
      <Placeholder ratio="16/9" label="Video" rounded={false} />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brass-500 text-paper transition-transform group-hover:scale-110">
          <Play className="h-7 w-7 translate-x-0.5" aria-hidden />
        </span>
      </span>
    </button>
  );
}
