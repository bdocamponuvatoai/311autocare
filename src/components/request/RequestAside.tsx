import Image from "next/image";

import diagnosticsSmallImage from "@/assets/images/diagnostics-small.webp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { addressLocality, siteConfig } from "@/config/site";

const { address, phone, legalName } = siteConfig;

export function RequestAside() {
  return (
    <aside className="request-aside">
      <Image
        src={diagnosticsSmallImage}
        alt="Illustrative automotive diagnostic work"
      />
      <div>
        <Eyebrow>PREFER A REAL CONVERSATION?</Eyebrow>
        <h3>
          We’re a phone
          <br />
          call away.
        </h3>
        <a href={phone.href}>
          {`${phone.display} `}
          <Icon name="up" />
        </a>
        <p>
          {legalName}
          <br />
          {address.street}
          <br />
          {addressLocality}
        </p>
        <small>Call ahead to confirm shop hours.</small>
      </div>
    </aside>
  );
}
