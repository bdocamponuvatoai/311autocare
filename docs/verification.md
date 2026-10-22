# Verification

## Next.js migration — 2026-10-23

The Next.js static export (`out/`) was compared against the previous Python-generated build (`dist/`) in headless Chrome. Both builds were served locally.

- **Visual parity:** full-page screenshots of all 8 routes plus `/request/?service=brakes` at 1600, 1280, 1024, 768, 390 and 320 px (54 pairs). Page heights matched in every pair. 48 pairs were pixel-identical. On the three service detail pages at 390 and 320 px, 13 px differed in the sub-pixel anti-aliasing of one link's text, with glyph positions identical.
- **Behavioral parity:** these interactions ran identically on both builds and produced identical results:
  - mobile menu: open, Escape (focus returns to the toggle), auto-close on resize to desktop;
  - symptom finder: click, Arrow/Home/End keys with wraparound, ARIA state, request link;
  - request flow: `?service=` preset, required-field and year-pattern validation, step focus management, review rows, byte-identical `mailto:` link, clipboard text, values kept after Back.

  Screenshots of the open menu, the finder and the review step were pixel-identical.

- **Client-side navigation:** page titles, `aria-current`, `?service=` presets, `/#process` scrolling and browser Back work across routes. No 4xx responses and no console errors or hydration warnings.
- **Metadata:** title, description, robots `noindex, nofollow`, theme color, canonical URL, Open Graph tags and JSON-LD match the previous build.
- `npm run check` (TypeScript, ESLint, Prettier) passes.

## Original concept — 2026-10-22

Checked against a local preview of the original static build.

- Desktop homepage: hero image, identity, navigation, CTA layout, and typography inspected.
- Responsive views: 390 px and 320 px phone frames, plus a 768 px tablet frame. Homepage, contact, service detail, and request layouts inspected; document width matched viewport width in checked views.
- Narrow-phone hero typography adjusted to preserve the intended two-line headline.
- Mobile menu opens and closes, including Escape dismissal.
- Homepage symptom selector changes explanatory copy and directs to the correctly preselected enquiry category.
- Request flow: service choice, required-field validation, sample vehicle details, review screen, encoded email draft destination/body, copy success, and back/edit state retention verified through the browser.
- No email was sent and no phone call was placed during verification.
- JavaScript syntax checked with Node.js.
- Static output audited for internal route, asset, and fragment targets, image alternative text, unique IDs, and one primary heading per page.

The site intentionally has no live scheduling or server-side enquiry processing. Service scope, hours, prices, brand copy, and representative photography remain subject to owner review.
