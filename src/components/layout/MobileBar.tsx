import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

/** Sticky call/request bar shown on small screens. */
export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={siteConfig.phone.href}>
        <Icon name="phone" />
        Call the shop
      </a>
      <ButtonLink variant="small">Request service</ButtonLink>
    </div>
  );
}
