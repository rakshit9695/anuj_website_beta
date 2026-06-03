import type { Office } from "./types";

/**
 * Office list — all addresses, phones, emails and partners are PLACEHOLDERS
 * (CLIENT_TODO.md). Mumbai is HQ and always rendered first. Coordinates are
 * approximate city-centre points for map markers only.
 */
export const offices: Office[] = [
  { city: "Mumbai", isHQ: true, address: "[CLIENT TO PROVIDE — Mumbai HQ address]", phone: "+91 00000 00000", email: "mumbai@anujdesaiassociates.com", partnerInCharge: "[Partner — TBC]", lat: 19.076, lng: 72.8777 },
  { city: "Delhi NCR", address: "[CLIENT TO PROVIDE — Delhi NCR address]", partnerInCharge: "[Partner — TBC]", lat: 28.6139, lng: 77.209 },
  { city: "Bengaluru", address: "[CLIENT TO PROVIDE — Bengaluru address]", partnerInCharge: "[Partner — TBC]", lat: 12.9716, lng: 77.5946 },
  { city: "Chennai", address: "[CLIENT TO PROVIDE — Chennai address]", lat: 13.0827, lng: 80.2707 },
  { city: "Hyderabad", address: "[CLIENT TO PROVIDE — Hyderabad address]", lat: 17.385, lng: 78.4867 },
  { city: "Pune", address: "[CLIENT TO PROVIDE — Pune address]", lat: 18.5204, lng: 73.8567 },
  { city: "Kolkata", address: "[CLIENT TO PROVIDE — Kolkata address]", lat: 22.5726, lng: 88.3639 },
  { city: "Ahmedabad", address: "[CLIENT TO PROVIDE — Ahmedabad address]", lat: 23.0225, lng: 72.5714 },
  { city: "Indore", address: "[CLIENT TO PROVIDE — Indore address]", lat: 22.7196, lng: 75.8577 },
  { city: "Kochi", address: "[CLIENT TO PROVIDE — Kochi address]", lat: 9.9312, lng: 76.2673 },
  { city: "Nagpur", address: "[CLIENT TO PROVIDE — Nagpur address]", lat: 21.1458, lng: 79.0882 },
  { city: "Ludhiana", address: "[CLIENT TO PROVIDE — Ludhiana address]", lat: 30.901, lng: 75.8573 },
];

export const hqOffice = offices.find((o) => o.isHQ)!;
