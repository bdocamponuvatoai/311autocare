import { siteUrl } from "@/config/deployment";
import { siteConfig } from "@/config/site";

const { legalName, phone, email, address } = siteConfig;

const schema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: legalName,
  telephone: phone.e164,
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  },
  url: `${siteUrl}/`,
};

/** schema.org structured data describing the business. */
export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escape "<" so the payload can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
