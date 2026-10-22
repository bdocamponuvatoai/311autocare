import Link from "next/link";
import type { ComponentProps } from "react";

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & { href: string };

/**
 * Uses client-side navigation for internal paths and a plain anchor for
 * everything else (tel:, mailto:, external URLs).
 */
export function SmartLink({ href, ...props }: SmartLinkProps) {
  if (href.startsWith("/")) return <Link href={href} {...props} />;
  return <a href={href} {...props} />;
}
