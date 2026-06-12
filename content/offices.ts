import type { Office } from "./types";

/**
 * Office list — all addresses, phones, emails and partners are PLACEHOLDERS
 * (CLIENT_TODO.md). Mumbai is HQ and always rendered first. Coordinates are
 * approximate city-centre points for map markers only.
 */
export const offices: Office[] = [
  {
    city: "Mumbai",
    isHQ: true,
    address:
      "1703, Rajshree 11 East, Behind Ganesh Temple, Pant Nagar, Ghatkopar (East), Mumbai 400 075",
    phone: "+91 96194 56656",
    email: "office@anujdesaiassociates.com",
    partnerInCharge: "CA Anuj Desai",
    lat: 19.0863,
    lng: 72.9081,
  },
  {
    // Full address withheld at the client's request; area only for now.
    city: "Ahmedabad",
    address: "Navrangpura, Ahmedabad",
    phone: "+91 96194 56656",
    email: "office@anujdesaiassociates.com",
    partnerInCharge: "CA Anuj Desai",
    lat: 23.0364,
    lng: 72.5609,
  },
  {
    city: "Surat",
    address: "B-411, Yash Plaza, Near Poddar Arcade, Gitanjali, Surat, Gujarat 395006",
    phone: "+91 96194 56656",
    email: "office@anujdesaiassociates.com",
    partnerInCharge: "CA Anuj Desai",
    lat: 21.1872,
    lng: 72.8047,
  },
];

export const hqOffice = offices.find((o) => o.isHQ)!;
