# 311 Auto Care LLC

A responsive, eight-page automotive website concept for 311 Auto Care LLC in Cross, South Carolina. The design pairs charcoal, warm white, and orange with a custom typographic 311 identity and five original AI-generated automotive images.

Built with **Next.js 16 (App Router)**, **React 19** and **TypeScript**, exported as a fully static site.

## Getting started

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev        # http://localhost:3000
```

| Script            | What it does                                                  |
| ----------------- | ------------------------------------------------------------- |
| `npm run dev`     | Development server with hot reload                            |
| `npm run build`   | Static production export to `out/`                            |
| `npm run preview` | Serves `out/` locally to check the production build           |
| `npm run check`   | Type-check, lint and formatting check (run before committing) |
| `npm run format`  | Formats the codebase with Prettier                            |

## Project structure

```
src/
├── app/                    Routes (App Router). Each page.tsx is a Server Component.
│   ├── layout.tsx          <html>, fonts, global metadata, header/footer chrome
│   ├── page.tsx            /
│   ├── services/           /services/ and /services/[slug]/ (statically generated)
│   ├── about/  contact/  request/
│   ├── not-found.tsx       404 page
│   ├── robots.ts           robots.txt (blocks crawlers until SITE_INDEXABLE=true)
│   ├── sitemap.ts          sitemap.xml
│   └── icon.svg            Favicon (file convention)
├── components/
│   ├── layout/             Topline, SiteHeader (client: mobile menu), SiteFooter, MobileBar
│   ├── sections/           Sections shared across pages: PageHero, ProcessSection, FaqSection, ClosingCta
│   ├── home/               Homepage sections; NoticeFinder is a client component
│   ├── services/           ServiceCard, ServiceRow
│   ├── request/            RequestForm (client), PresetRequestForm, RequestAside
│   ├── seo/                LocalBusinessJsonLd (schema.org structured data)
│   └── ui/                 Primitives: Icon, ButtonLink, TextLink, SmartLink, Eyebrow, Brand, CheckList
├── config/
│   ├── site.ts             Business details (phone, email, address, map link) and main navigation
│   └── deployment.ts       Site URL and indexing flag from environment variables (server only)
├── content/                Typed page copy: services, FAQ, finder notices, request topics
├── lib/                    Framework-free helpers: metadata builder, request summary/mailto builder
├── styles/                 Global CSS, split into tokens, base, components, sections and pages
└── assets/                 Images (WebP) and variable fonts, imported so they get hashed URLs
scripts/
└── fix-export-segments.mjs Post-build fix for a Next.js static-export bug on Windows
```

### Conventions

- **Content lives in data, not markup.** Change business details in `src/config/site.ts` and copy for services, the FAQ and the finder in `src/content/`. Every page, the metadata and the structured data read from these files.
- **Server Components by default.** Only three components ship JavaScript: the header (mobile menu), the homepage symptom finder and the request form.
- **Styles are plain global CSS**, imported once in `src/styles/globals.css`. Partials are imported in a fixed order that keeps the original cascade, so keep new rules in the matching partial and don't reorder the imports.
- Internal links go through `next/link` via `SmartLink`, `ButtonLink` and `TextLink`. `tel:`, `mailto:` and external URLs render as plain anchors.

### Continuous integration

`.github/workflows/ci.yml` runs `npm ci`, `npm run check` and `npm run build` on every push to `main` and on every pull request. Dependabot opens weekly dependency update PRs.

## Pages

| Route                    | Purpose                                                 |
| ------------------------ | ------------------------------------------------------- |
| `/`                      | Homepage and service discovery                          |
| `/services/`             | Service enquiry directory                               |
| `/services/diagnostics/` | Diagnostics and driveability enquiry                    |
| `/services/brakes/`      | Brakes and stopping enquiry                             |
| `/services/maintenance/` | Maintenance enquiry                                     |
| `/about/`                | Local shop introduction                                 |
| `/contact/`              | Phone, email, address, directions                       |
| `/request/`              | Service selection, vehicle details, review, email draft |

The request route accepts `?service=diagnostics`, `brakes`, `maintenance`, or `other` to preselect a category.

## Configuration

Set these in your hosting provider, or copy `.env.example` to `.env.local` for local builds. Both are read at build time.

| Variable         | Default                                                     | Purpose                                                                                      |
| ---------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `SITE_URL`       | Vercel production domain, otherwise `http://localhost:3000` | Canonical URLs, Open Graph tags, structured data, robots.txt and sitemap.xml                 |
| `SITE_INDEXABLE` | `false`                                                     | `true` allows indexing. While `false`, pages are `noindex` and robots.txt disallows crawling |

The build fails if `SITE_INDEXABLE=true` is set without a public `SITE_URL`, so a launch can never ship localhost canonical URLs.

## Business details

- 311 Auto Care LLC
- 629 Old Parker Rd, Cross, SC 29436, United States
- (843) 925-6700
- 311autocarellc@gmail.com

Only the primary business email is published. Details come from the supplied project brief. No opening hours, certifications, reviews, years of operation, warranties, or pricing have been invented.

## Request behavior

The website validates required fields and prepares a reviewable `mailto:` email draft addressed to the business. The visitor must open and send it using their email app. A copy-text option is also available, with a selectable-text fallback if clipboard access is unavailable. The website does not submit, store, or transmit form entries to a server. No appointment or price is confirmed online. There is no booking backend, analytics, or third-party tracking code.

## Before launch

Copy directs visitors to confirm services, hours, pricing, and availability with the business. Before going public, confirm the service categories with the owner, set `SITE_URL` and `SITE_INDEXABLE=true`, and connect any desired production enquiry system with appropriate privacy controls.

## Hosting

`npm run build` writes a static site to `out/` (`output: "export"` with `trailingSlash: true`, so every route is a `…/index.html`). Deploy that folder to any static host that serves directory index files (Netlify, Cloudflare Pages, S3 + CloudFront, Nginx), or import the repository into Vercel, which detects the settings automatically.

Launch checklist:

1. Owner approves services and copy (see Before launch).
2. Set `SITE_URL` to the production domain and `SITE_INDEXABLE=true`.
3. Run `npm run check` and `npm run build`.
4. Deploy `out/`.
