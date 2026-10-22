import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { servicePath, type Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link className="service-card" href={servicePath(service.id)}>
      <div className="service-card-media">
        <Image src={service.image} alt={service.imageAlt} />
        <span className="service-index">{`${service.number} / VEHICLE CARE`}</span>
        <span className="circle-arrow">
          <Icon name="up" />
        </span>
      </div>
      <div className="service-card-copy">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <span className="card-link">
          Explore this enquiry <Icon />
        </span>
      </div>
    </Link>
  );
}
