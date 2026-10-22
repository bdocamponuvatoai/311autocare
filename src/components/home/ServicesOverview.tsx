import { ServiceCard } from "@/components/services/ServiceCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { services } from "@/content/services";

export function ServicesOverview() {
  return (
    <section id="services" className="services-section container">
      <div className="section-heading">
        <div>
          <Eyebrow>01 / WHAT BRINGS YOU IN?</Eyebrow>
          <h2>
            Your vehicle.
            <br />
            <em>Let’s take care of it.</em>
          </h2>
        </div>
        <div className="section-intro">
          <p>
            Something sounds different. A light comes on. Or it’s simply time to
            give your car some attention.
          </p>
          <TextLink href="/services/">Find your starting point</TextLink>
        </div>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <p className="section-note">
        Proposed service categories. Contact the shop to confirm work for your
        vehicle.
      </p>
    </section>
  );
}
