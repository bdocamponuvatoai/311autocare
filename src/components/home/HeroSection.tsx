import Image from "next/image";

import heroImage from "@/assets/images/hero.webp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-backdrop">
        {/* LCP image: load eagerly with high priority. */}
        <Image
          src={heroImage}
          alt="Illustrative technician working on a pickup in an independent automotive workshop"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="container hero-content">
        <div>
          <Eyebrow>311 AUTO CARE / CROSS, SOUTH CAROLINA</Eyebrow>
          <h1>
            Good care.
            <br />
            <em>More miles.</em>
          </h1>
          <p>
            For the daily drive. For the road ahead.
            <br />
            Auto repair starts with a conversation
            <br className="desktop-break" /> right here in Cross, South
            Carolina.
          </p>
          <div className="hero-actions">
            <ButtonLink>Let’s talk about your car</ButtonLink>
            <TextLink href="/services/">Explore services</TextLink>
          </div>
        </div>
        <div className="hero-bottom">
          <span>YOUR LOCAL CONNECTION FOR AUTO REPAIR</span>
          <a href={siteConfig.phone.href}>
            <Icon name="phone" />
            {siteConfig.phone.display}
          </a>
          <a
            href="#services"
            className="scroll-down"
            aria-label="Explore vehicle care"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  );
}
