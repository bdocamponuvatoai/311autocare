import type { ReactNode } from "react";

import { Icon, type IconName } from "./Icon";
import { SmartLink } from "./SmartLink";

type TextLinkProps = {
  children: ReactNode;
  href: string;
  icon?: IconName;
};

export function TextLink({ children, href, icon = "arrow" }: TextLinkProps) {
  return (
    <SmartLink className="text-link" href={href}>
      {children}
      <Icon name={icon} />
    </SmartLink>
  );
}
