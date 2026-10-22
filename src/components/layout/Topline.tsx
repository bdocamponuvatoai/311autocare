import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export function Topline() {
  return (
    <div className="topline">
      <div className="container">
        <span>
          <i />
          AUTO REPAIR, RIGHT HERE IN CROSS, SC
        </span>
        <a href={siteConfig.mapUrl} target="_blank" rel="noopener">
          {`${siteConfig.address.street} `}
          <Icon name="up" />
        </a>
      </div>
    </div>
  );
}
