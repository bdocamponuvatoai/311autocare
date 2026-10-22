import type { ReactNode } from "react";

import { requestPath } from "@/content/request";

import { Icon, type IconName } from "./Icon";
import { SmartLink } from "./SmartLink";

type ButtonLinkProps = {
  children: ReactNode;
  href?: string;
  variant?: "small" | "dark";
  icon?: IconName;
};

/** Orange call-to-action link. Defaults to the service request page. */
export function ButtonLink({
  children,
  href = requestPath(),
  variant,
  icon = "arrow",
}: ButtonLinkProps) {
  return (
    <SmartLink className={variant ? `button ${variant}` : "button"} href={href}>
      {children}
      <Icon name={icon} />
    </SmartLink>
  );
}
