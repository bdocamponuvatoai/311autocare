import Image from "next/image";

import careImage from "@/assets/images/care.webp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { formatStep } from "@/lib/format";

const points = [
  {
    title: "A real place. A direct conversation.",
    text: "Connect with 311 Auto Care on Old Parker Road, right here in Cross.",
  },
  {
    title: "Start with what you know.",
    text: "You don’t need technical terms. Tell us what feels different and what you need from your vehicle.",
  },
];

export function CareSection() {
  return (
    <section className="care-section">
      <div className="container care-grid">
        <div className="care-photo">
          <Image
            src={careImage}
            alt="Illustrative technician examining an automotive component"
          />
          <div className="care-image-label">
            <span className="mini-brand">
              311<span>/</span>
            </span>
            <span>
              CARE IN THE DETAILS.
              <br />
              CONCEPT PHOTOGRAPHY
            </span>
          </div>
        </div>
        <div className="care-copy">
          <Eyebrow>02 / MORE THAN A WAY TO GET THERE</Eyebrow>
          <h2>
            Life happens
            <br />
            <em>between the miles.</em>
          </h2>
          <p>
            The early shift. The school run. The drive home.
            <br />
            Your vehicle is part of your everyday. Finding help for it should
            feel straightforward.
          </p>
          {points.map((point, index) => (
            <div className="care-point" key={point.title}>
              <span>{formatStep(index)}</span>
              <div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </div>
          ))}
          <TextLink href="/about/">Get to know 311</TextLink>
        </div>
      </div>
    </section>
  );
}
