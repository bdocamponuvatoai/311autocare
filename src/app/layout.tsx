import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { MobileBar } from "@/components/layout/MobileBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Topline } from "@/components/layout/Topline";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { isIndexable, siteUrl } from "@/config/deployment";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

import "@/styles/globals.css";

const manrope = localFont({
  src: "../assets/fonts/manrope.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-manrope",
});

const inter = localFont({
  src: "../assets/fonts/inter.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({ title: "Good care. More miles.", path: "/" }),
  // Stay out of search engines until SITE_INDEXABLE=true.
  robots: isIndexable ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior lets Next.js skip smooth scrolling on route changes.
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Topline />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileBar />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
