"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import { Brand } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { mainNav, siteConfig, type NavKey } from "@/config/site";

const DESKTOP_QUERY = "(min-width: 701px)";

function activeNavKey(pathname: string): NavKey | undefined {
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
}

function NavLinks({ active }: { active?: NavKey }) {
  return mainNav.map(({ key, label, href }) => (
    <Link
      key={key}
      href={href}
      aria-current={key === active ? "page" : undefined}
    >
      {label}
    </Link>
  ));
}

export function SiteHeader() {
  const pathname = usePathname();
  const active = activeNavKey(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  // Remember which page the menu was opened on, so it closes itself after
  // any navigation (including browser back/forward).
  const [openOnPath, setOpenOnPath] = useState<string | null>(null);
  const isOpen = openOnPath === pathname;
  const closeOnLinkClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a")) setOpenOnPath(null);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenOnPath(null);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenOnPath(null);
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLinks active={active} />
        </nav>
        <div className="nav-actions">
          <a className="nav-phone" href={siteConfig.phone.href}>
            <Icon name="phone" />
            <span>{siteConfig.phone.display}</span>
          </a>
          <ButtonLink variant="small">Request service</ButtonLink>
          <button
            ref={toggleRef}
            className="menu-toggle"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setOpenOnPath(isOpen ? null : pathname)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* Every link inside the mobile menu closes it, mirroring a page load. */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!isOpen}
        onClick={closeOnLinkClick}
      >
        <NavLinks active={active} />
        <ButtonLink>Request service</ButtonLink>
        <a className="mobile-phone" href={siteConfig.phone.href}>
          {siteConfig.phone.display}
        </a>
      </nav>
    </header>
  );
}
