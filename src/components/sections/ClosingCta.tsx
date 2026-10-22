import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export function ClosingCta() {
  return (
    <section className="closing">
      <div className="container closing-grid">
        <div>
          <Eyebrow>YOUR NEXT MILE STARTS HERE</Eyebrow>
          <h2>
            Let’s get you
            <br />
            <em>moving.</em>
          </h2>
        </div>
        <div>
          <p>
            Tell us about your vehicle.
            <br />
            We’ll take the conversation from there.
          </p>
          <ButtonLink variant="dark">Start a service request</ButtonLink>
          <a href={siteConfig.phone.href} className="closing-phone">
            {`Or call ${siteConfig.phone.display} `}
            <Icon name="up" />
          </a>
        </div>
        <div className="closing-stripes" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </div>
    </section>
  );
}
