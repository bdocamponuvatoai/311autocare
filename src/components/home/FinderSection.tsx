import { Eyebrow } from "@/components/ui/Eyebrow";

import { NoticeFinder } from "./NoticeFinder";

export function FinderSection() {
  return (
    <section className="finder-section container">
      <div className="section-heading">
        <div>
          <Eyebrow>YOU DON’T HAVE TO KNOW THE PART NAME</Eyebrow>
          <h2>
            Start with
            <br />
            <em>what you notice.</em>
          </h2>
        </div>
        <p>
          Choose what brought you here.
          <br />
          We’ll help you put it into words.
        </p>
      </div>
      <NoticeFinder />
    </section>
  );
}
