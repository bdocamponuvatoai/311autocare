import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { addressLocality, siteConfig } from "@/config/site";
import { formatStep } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Visit & contact",
  path: "/contact/",
});

const { address, phone, email, mapUrl, legalName } = siteConfig;

const checklist = [
  {
    title: "Know your vehicle.",
    text: "Have the year, make, model and approximate mileage handy.",
  },
  {
    title: "Share what changed.",
    text: "A sound, a warning light, a recent repair, or a maintenance question.",
  },
  {
    title: "Confirm your visit.",
    text: "Discuss timing and availability directly before making the trip.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="311 AUTO CARE / VISIT & CONTACT"
        title={
          <>
            Your next stop.
            <br />
            <em>Let’s talk.</em>
          </>
        }
        intro="Have a question about your vehicle? Reach the shop directly to discuss the work and confirm a good time to visit."
        action={<ButtonLink>Prepare a request</ButtonLink>}
      />
      <section className="contact-layout container">
        <div className="contact-main">
          <Eyebrow>CALL THE SHOP</Eyebrow>
          <a className="contact-number" href={phone.href}>
            {phone.display}
            <Icon name="up" />
          </a>
          <p>Call to confirm current hours, services and availability.</p>
          <a className="contact-email" href={`mailto:${email}`}>
            <Icon name="mail" />
            {email}
            <Icon name="up" />
          </a>
          <div className="contact-address">
            <div>
              <h2>{`Find ${legalName}`}</h2>
              <address>
                {address.street}
                <br />
                {addressLocality}
                <br />
                {address.countryName}
              </address>
            </div>
            <div>
              <h2>Before heading over</h2>
              <p>
                Contact the shop first to discuss your vehicle and arrange your
                visit. An online enquiry is not a confirmed appointment.
              </p>
            </div>
          </div>
          <ButtonLink href={mapUrl} variant="dark" icon="up">
            Open directions in Maps
          </ButtonLink>
        </div>
        <aside className="contact-card">
          <span className="huge-311">
            311<span>/</span>
          </span>
          <p className="eyebrow">AUTO CARE / CROSS, SC</p>
          <h2>
            A real place.
            <br />A direct line.
          </h2>
          <div className="address-ticket">
            <span>YOUR DESTINATION</span>
            <strong>{address.street.toUpperCase()}</strong>
            <small>
              {`${address.city}, ${address.regionName} ${address.postalCode}`.toUpperCase()}
            </small>
          </div>
        </aside>
      </section>
      <section className="visit-checklist container">
        <h2>Before we talk.</h2>
        <div>
          {checklist.map((item, index) => (
            <article key={item.title}>
              <span>{formatStep(index)}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <FaqSection />
    </>
  );
}
