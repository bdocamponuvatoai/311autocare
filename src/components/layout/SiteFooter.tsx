import Link from "next/link";

import { Brand } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";
import { addressLocality, siteConfig } from "@/config/site";
import { requestPath } from "@/content/request";

const { address, phone, email, mapUrl, legalName } = siteConfig;

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              Good care. More miles.
              <br />
              Auto repair in Cross, South Carolina.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/services/">Service enquiries</Link>
            <Link href="/about/">The shop</Link>
            <Link href="/#process">How it works</Link>
            <Link href={requestPath()}>Request service</Link>
          </div>
          <div>
            <h3>Find us</h3>
            <a href={mapUrl} target="_blank" rel="noopener">
              {address.street}
              <br />
              {`${addressLocality} `}
              <Icon name="up" />
            </a>
            <p>
              Call ahead to confirm shop hours
              <br />
              and appointment availability.
            </p>
          </div>
          <div>
            <h3>Let’s talk about your car</h3>
            <a href={phone.href} className="footer-phone">
              {phone.display}
            </a>
            <a href={`mailto:${email}`}>{email}</a>
            <Link href="/contact/">
              Contact the shop <Icon name="up" />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{`© ${new Date().getFullYear()} ${legalName}`}</span>
          <span>{`CROSS, ${address.region} · ${address.postalCode}`}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
