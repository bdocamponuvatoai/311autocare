import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceRow } from "@/components/services/ServiceRow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TextLink } from "@/components/ui/TextLink";
import { requestPath } from "@/content/request";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Service enquiries",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="311 AUTO CARE / SERVICE ENQUIRIES"
        title={
          <>
            Let’s start with
            <br />
            <em>your vehicle.</em>
          </>
        }
        intro="From a maintenance question to something that doesn’t feel right. Explore a starting point, then tell the shop what you need."
        action={<ButtonLink>Request service</ButtonLink>}
      />
      <section className="service-directory container">
        {services.map((service) => (
          <ServiceRow key={service.id} service={service} />
        ))}
      </section>
      <div className="container service-scope-note">
        <p>
          <b>Something else on your mind?</b> Describe it in your request or
          call the shop. The categories on this concept site are proposed;
          service scope, vehicle coverage and availability must be confirmed
          with 311 Auto Care.
        </p>
        <TextLink href={requestPath("other")}>
          I’m not sure what I need
        </TextLink>
      </div>
      <ClosingCta />
    </>
  );
}
