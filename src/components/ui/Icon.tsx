import type { ReactNode } from "react";

const paths = {
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
  up: <path d="M6 18 18 6M6 6h12v12" />,
  phone: <path d="m8 3 3 5-3 2a17 17 0 0 0 6 6l2-3 5 3-1 4C10 23 1 12 4 3Z" />,
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  bolt: <path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />,
  gear: (
    <>
      <path d="M9 3h6l1 4 4 2v6l-4 2-1 4H9l-1-4-4-2V9l4-2 1-4Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  wheel: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="m5 6 5 4m9-4-5 4m-2 5v6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

/** Decorative line icon; always hidden from assistive technology. */
export function Icon({ name = "arrow" }: { name?: IconName }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
