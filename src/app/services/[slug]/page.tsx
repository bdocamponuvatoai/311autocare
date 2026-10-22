import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { TextLink } from "@/components/ui/TextLink";
import { requestPath } from "@/content/request";
import { getService, servicePath, services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";

// Only the known services exist; anything else is a 404 at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({ title: service.name, path: servicePath(service.id) });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const [firstLine, secondLine] = service.headline;
  const otherServices = services.filter((other) => other.id !== service.id);

  return (
    <>
      <PageHero
        before={
          <Link className="breadcrumb" href="/services/">
            ← All service enquiries
          </Link>
        }
        eyebrow={service.eyebrow}
        title={
          <>
            {firstLine}
            <br />
            {secondLine}
          </>
        }
        intro={service.description}
        action={
          <ButtonLink href={requestPath(service.id)}>
            {`Ask about ${service.shortName.toLowerCase()}`}
          </ButtonLink>
        }
      />
      <section className="service-detail container">
        <div className="detail-photo">
          <Image src={service.image} alt={service.imageAlt} />
        </div>
        <div className="detail-copy">
          <Eyebrow>MAKE THE CONVERSATION COUNT</Eyebrow>
          <h2>
            A few details
            <br />
            <em>go a long way.</em>
          </h2>
          <p>{service.body}</p>
          <h3>Helpful details to share</h3>
          <CheckList items={service.helpfulDetails} />
          <p className="detail-note">
            This is a service enquiry, not a diagnosis or confirmed booking.
            Contact the shop to confirm service availability for your vehicle.
          </p>
          <TextLink href={requestPath(service.id)}>Prepare my request</TextLink>
        </div>
      </section>
      <section className="next-services container">
        <h2>
          Another reason
          <br />
          <em>to get in touch?</em>
        </h2>
        <div>
          {otherServices.map((other) => (
            <Link key={other.id} href={servicePath(other.id)}>
              <span>{other.name}</span>
              <Icon name="up" />
            </Link>
          ))}
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
