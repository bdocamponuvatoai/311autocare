import type { Metadata } from "next";

import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: { absolute: "Page not found | 311 Auto Care" },
};

export default function NotFound() {
  return (
    <PageHero
      eyebrow="311 AUTO CARE / PAGE NOT FOUND"
      title={
        <>
          Wrong turn.
          <br />
          <em>Let’s get you back.</em>
        </>
      }
      intro="The page you were looking for isn’t here. Head back to the homepage or start a service request."
      action={<ButtonLink href="/">Back to the homepage</ButtonLink>}
    />
  );
}
