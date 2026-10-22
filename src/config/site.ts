/**
 * Business details and site-wide settings. Every phone number, address and
 * link rendered by the site comes from here. Deployment settings that depend
 * on environment variables live in `./deployment.ts`.
 */
export const siteConfig = {
  name: "311 Auto Care",
  legalName: "311 Auto Care LLC",
  description:
    "311 Auto Care LLC in Cross, South Carolina. Call (843) 925-6700 to discuss your vehicle or prepare a service request.",
  themeColor: "#151918",
  phone: {
    display: "(843) 925-6700",
    href: "tel:+18439256700",
    e164: "+18439256700",
  },
  email: "311autocarellc@gmail.com",
  address: {
    street: "629 Old Parker Rd",
    city: "Cross",
    region: "SC",
    regionName: "South Carolina",
    postalCode: "29436",
    country: "US",
    countryName: "United States",
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=629+Old+Parker+Rd%2C+Cross%2C+SC+29436",
} as const;

export type NavKey = "services" | "about" | "process" | "contact";

export const mainNav: ReadonlyArray<{
  key: NavKey;
  label: string;
  href: string;
}> = [
  { key: "services", label: "Services", href: "/services/" },
  { key: "about", label: "The shop", href: "/about/" },
  { key: "process", label: "How it works", href: "/#process" },
  { key: "contact", label: "Visit & contact", href: "/contact/" },
];

/** "Cross, SC 29436" */
export const addressLocality = `${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`;
