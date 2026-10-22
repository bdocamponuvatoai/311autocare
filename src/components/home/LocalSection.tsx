import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { addressLocality, siteConfig } from "@/config/site";

const { address, phone, email, mapUrl } = siteConfig;

export function LocalSection() {
  return (
    <section className="local-section">
      <div className="container local-grid">
        <div>
          <Eyebrow>CROSS, SOUTH CAROLINA</Eyebrow>
          <h2>
            Close to home.
            <br />
            <em>Ready for a conversation.</em>
          </h2>
          <address>
            {address.street}
            <br />
            {addressLocality}
          </address>
          <div className="local-actions">
            <ButtonLink href={mapUrl} variant="dark" icon="up">
              Get directions
            </ButtonLink>
            <TextLink href="/contact/">Visit & contact</TextLink>
          </div>
          <p className="hours-note">
            Call ahead to confirm hours and availability.
          </p>
        </div>
        <div className="local-contact">
          <span className="local-sc">
            {address.region}
            <span>{address.postalCode}</span>
          </span>
          <p>LET’S TALK ABOUT YOUR VEHICLE</p>
          <a href={phone.href}>
            {`${phone.display} `}
            <Icon name="up" />
          </a>
          <a className="local-email" href={`mailto:${email}`}>
            {email}
          </a>
          <div className="local-line">
            <span>311 AUTO CARE LLC</span>
            <span>CROSS / SOUTH CAROLINA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
