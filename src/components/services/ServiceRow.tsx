import Image from "next/image";
import Link from "next/link";

import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { servicePath, type Service } from "@/content/services";

/** Service entry in the /services/ directory. */
export function ServiceRow({ service }: { service: Service }) {
  const href = servicePath(service.id);
  return (
    <article className="service-row">
      <Link className="service-row-image" href={href}>
        <Image src={service.image} alt={service.imageAlt} />
        <span>{`${service.number} / VEHICLE CARE`}</span>
      </Link>
      <div>
        <Eyebrow>{service.eyebrow}</Eyebrow>
        <h2>{service.name}</h2>
        <p>{service.description}</p>
        <CheckList items={service.topics} />
        <TextLink href={href}>Explore this enquiry</TextLink>
      </div>
    </article>
  );
}
