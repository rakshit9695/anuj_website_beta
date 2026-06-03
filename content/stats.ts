import type { Stat } from "./types";

/**
 * Animated counter values are PLACEHOLDERS the client must confirm
 * (CLIENT_TODO.md). Kept deliberately round and neutral.
 */
export const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 1500, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Countries" },
  { value: 120, suffix: "+", label: "Professionals" },
  { value: 500, suffix: "+", label: "Engagements Delivered" },
];
