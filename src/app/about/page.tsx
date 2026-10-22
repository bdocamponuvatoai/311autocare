import Image from "next/image";

import careImage from "@/assets/images/care.webp";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { addressLocality, siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({ title: "The shop", path: "/about/" });

const { address } = siteConfig;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="311 AUTO CARE LLC / THE SHOP"
        title={
          <>
            Local roads.
            <br />
            <em>Real connections.</em>
          </>
        }
        intro="311 Auto Care is an automotive repair business in Cross, South Carolina. Start a conversation with the shop on Old Parker Road."
        action={<ButtonLink href="/contact/">Get in touch</ButtonLink>}
      />
      <section className="about-intro container">
        <div className="about-photo">
          <Image
            src={careImage}
            alt="Illustrative auto care technician inspecting a component"
          />
        </div>
        <div>
          <Eyebrow>GOOD CARE STARTS WITH A CONVERSATION</Eyebrow>
          <h2>
            It’s your car.
            <br />
            <em>It’s your everyday.</em>
          </h2>
          <p className="lead">
            Every vehicle has a story. The miles to work. The people in the back
            seat. The places you still want to go.
          </p>
          <p>
            Whether you have a particular repair in mind or simply a question,
            getting in touch is the first step. Share what you know about your
            vehicle and talk through the possibilities with 311 Auto Care.
          </p>
          <div className="about-address">
            <Icon name="pin" />
            <div>
              <b>Find us on Old Parker Road.</b>
              <span>{`${address.street} · ${addressLocality}`}</span>
            </div>
          </div>
          <TextLink href="/contact/">Plan your visit</TextLink>
        </div>
      </section>
      <section className="statement">
        <div className="container">
          <Eyebrow>THE IDEA BEHIND 311</Eyebrow>
          <h2>
            Less mystery under the hood.
            <br />
            <em>More conversation about your car.</em>
          </h2>
          <p>
            A proposed direction for a local automotive brand: direct,
            approachable and focused on the people who drive.
          </p>
        </div>
      </section>
      <ProcessSection />
      <ClosingCta />
    </>
  );
}
