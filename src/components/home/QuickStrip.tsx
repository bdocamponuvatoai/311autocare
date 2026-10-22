import Link from "next/link";

import { Icon, type IconName } from "@/components/ui/Icon";
import { servicePath, services } from "@/content/services";
import { formatStep } from "@/lib/format";

const links: ReadonlyArray<{ label: string; href: string; icon: IconName }> = [
  ...services.map((service) => ({
    label: service.shortName,
    href: servicePath(service.id),
    icon: service.icon,
  })),
  { label: "Visit the shop", href: "/contact/", icon: "pin" },
];

/** Numbered shortcut row below the homepage hero. */
export function QuickStrip() {
  return (
    <div className="quick-strip container">
      {links.map((link, index) => (
        <Link key={link.href} href={link.href}>
          <span>{formatStep(index)}</span>
          <Icon name={link.icon} />
          {`${link.label} `}
          <Icon name="up" />
        </Link>
      ))}
    </div>
  );
}
