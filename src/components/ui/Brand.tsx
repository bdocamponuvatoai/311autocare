import Link from "next/link";

/** Typographic "311 / AUTO CARE" logo linking home. */
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="311 Auto Care home">
      <span className="brand-number">
        311
        <span className="brand-slash" />
      </span>
      <span className="brand-words">
        AUTO CARE
        <small>CROSS, SOUTH CAROLINA</small>
      </span>
    </Link>
  );
}
