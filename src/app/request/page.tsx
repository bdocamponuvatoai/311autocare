import { Suspense } from "react";

import { PresetRequestForm } from "@/components/request/PresetRequestForm";
import { RequestAside } from "@/components/request/RequestAside";
import { RequestForm } from "@/components/request/RequestForm";
import { PageHero } from "@/components/sections/PageHero";
import { TextLink } from "@/components/ui/TextLink";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Request service",
  path: "/request/",
});

export default function RequestPage() {
  return (
    <>
      <PageHero
        className="request-hero"
        eyebrow="311 AUTO CARE / START A CONVERSATION"
        title={
          <>
            Tell us about
            <br />
            <em>your ride.</em>
          </>
        }
        intro="Prepare a service enquiry in a few simple steps. Review it here, then choose to open a draft in your email app."
        action={
          <TextLink href={siteConfig.phone.href} icon="phone">
            {`Prefer to call? ${siteConfig.phone.display}`}
          </TextLink>
        }
      />
      <section className="request-layout container">
        <div>
          {/* The form is prerendered without a preset, then picks up ?service= in the browser. */}
          <Suspense fallback={<RequestForm />}>
            <PresetRequestForm />
          </Suspense>
        </div>
        <RequestAside />
      </section>
    </>
  );
}
