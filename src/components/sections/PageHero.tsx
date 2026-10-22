import type { ReactNode } from "react";

import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  /** Call to action shown beside the intro. */
  action: ReactNode;
  /** Rendered above the eyebrow, e.g. a breadcrumb link. */
  before?: ReactNode;
  className?: string;
};

/** Heading block at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  intro,
  action,
  before,
  className,
}: PageHeroProps) {
  return (
    <section
      className={
        className ? `page-hero container ${className}` : "page-hero container"
      }
    >
      {before}
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      <div className="page-hero-bottom">
        <p>{intro}</p>
        {action}
      </div>
    </section>
  );
}
