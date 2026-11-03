# CLAUDE.md — Medizaai

Rajshahi-based healthcare platform (Bangla-first). Users can book video-call doctors, book hospital companion guides, order medicines for home delivery, and browse hospitals/diagnostics.

## Tech stack

- **Framework:** Next.js (latest stable) with App Router, TypeScript (strict)
- **Styling:** Tailwind CSS (v4, tokens in `src/app/globals.css`). **No component library** (no shadcn/ui, no MUI). Every UI piece is written in-house with Tailwind, and every page section is its own component.
- **Icons:** lucide-react
- **Forms:** react-hook-form + zod
- **Client state:** zustand (cart only; keep server state out of it)
- **Font:** Hind Siliguri via `next/font/google` (subsets: `bengali`, `latin`)
- **Package manager:** bun (use `bun` / `bunx`, never `npm` / `npx`; commit `bun.lock`, no `package-lock.json`)
- **Data (phase 1):** mock data in `src/data/`. Real backend/DB is decided later; keep data access behind functions in `src/lib/api/` so swapping is easy.

> Not decided yet (ask before adding): database/ORM, SMS OTP provider, payment gateway (bKash / Nagad / SSLCommerz), video-call provider. Do not install or wire any of these without asking.

## Commands

```bash
bun dev          # start dev server (localhost:3000)
bun run build    # production build — must pass before every PR
bun run lint     # ESLint
bunx tsc --noEmit # type check
bun add <pkg>    # add dependency (bun add -d for dev)
```

## Design source of truth


- Mobile (375px) designs do not exist yet. Build responsive mobile-first with sensible stacking, and keep desktop pixel-close to Figma.

| Page | Route | Figma node |
|---|---|---|
| Home | `/` | `1:33` |
| Doctors list | `/doctors` | `1:451` |
| Doctor profile & booking | `/doctors/[slug]` | `1:579` |
| Guides list | `/guides` | `1:728` |
| Guide profile & booking | `/guides/[slug]` | `1:886` |
| Medicines shop & cart | `/medicines`, `/cart` | `1:1012` |
| Checkout | `/checkout` | `1:1268` |
| Hospitals directory | `/hospitals` | `1:1396` |
| Booking success | `/booking/success` | `1:1591` |
| My bookings & orders | `/account/bookings` | `1:1675` |
| About | `/about` | `1:1804` |
| Contact & FAQ | `/contact` | `1:1923` |
| Privacy policy | `/privacy` | `1:2051` |
| Login & OTP | `/login` | `1:2134` |

Home sections (inside `1:33`): Top bar `1:34`, Navbar `1:37`, Hero `1:54`, Why Medizaai `1:97`, Choose your need `1:138`, Popular hospitals `1:190`, Popular doctors `1:242`, Guides `1:302`, How it works `1:350`, Try now `1:371`, FAQ `1:395`, Emergency strip `1:417`, Footer `1:420`.

## Design tokens

Colors are defined once in `globals.css` under `@theme` (names follow Figma variables). Never hardcode hex in components; use the tokens:

| Figma variable | Tailwind class suffix | Hex |
|---|---|---|
| brand/100 | `brand-100` | `#d9eeeb` |
| brand/700 | `brand-700` | `#0f766e` |
| brand/900 | `brand-900` | `#0f4f49` |
| accent | `accent` | `#f0a935` |
| accent/100 | `accent-100` | `#fdf0d5` |
| ink | `ink` | `#12201e` |
| ink/2 | `ink-2` | `#4e5f5c` |
| ink/3 | `ink-3` | `#6b7b78` |
| border | `line` | `#d8e2e0` |
| ph | `ph` | `#cadfdc` |
| surface / white | `surface` / `white` | `#ffffff` |
| (section gradient top) | `mint` | `#e8fffd` |
| (section gradient bottom) | `cream` | `#fffefb` |

Add new tokens (e.g. other brand shades) only when a Figma node needs them.

Images: components reference placeholder paths under `public/images/...` (e.g. `/images/hero/hero-bg.jpg`). The owner places the real files manually. Never generate or download images, and never use temporary Figma asset URLs at runtime.

Layout: container max width 1440px design, content area ~1200px, side padding 120px on desktop (scale down on smaller screens).

## Bangla / language rules

- Default language is Bangla. Repeated/list data (nav links, contact numbers, stats) lives in `src/lib/constants.ts` or `src/data/`. One-off section copy may stay inside its section component for now; move it to `src/messages/bn.json` when the English toggle is added.
- Display numbers (price, phone, count, time) in Bangla digits using `toBn()` from `src/lib/bn-number.ts`. Prices use `৳` and `formatPrice()`.
- Minimum body text size is 14px (`text-sm`); Bangla script gets hard to read below that. Use slightly more line-height for Bangla (`leading-relaxed`).
- Never truncate Bangla text mid-conjunct. Prefer `line-clamp` over character slicing.

## Folder structure

```
medizaai/
├── CLAUDE.md
├── .env.example
├── next.config.ts
├── public/
│   ├── images/                # hero, doctors, hospitals, guides, medicines
│   └── icons/
└── src/
    ├── app/
    │   ├── layout.tsx         # root: font, metadata, <html lang="bn">
    │   ├── globals.css        # Tailwind + design tokens
    │   ├── not-found.tsx
    │   ├── (site)/            # pages with Top bar + Navbar + Footer
    │   │   ├── layout.tsx
    │   │   ├── page.tsx                      # Home
    │   │   ├── doctors/
    │   │   │   ├── page.tsx                  # list + filters
    │   │   │   └── [slug]/page.tsx           # profile + booking
    │   │   ├── guides/
    │   │   │   ├── page.tsx
    │   │   │   └── [slug]/page.tsx
    │   │   ├── medicines/page.tsx
    │   │   ├── cart/page.tsx
    │   │   ├── checkout/page.tsx
    │   │   ├── hospitals/page.tsx
    │   │   ├── booking/success/page.tsx
    │   │   ├── account/bookings/page.tsx
    │   │   ├── about/page.tsx
    │   │   ├── contact/page.tsx
    │   │   └── privacy/page.tsx
    │   ├── (auth)/            # split-screen layout, no navbar/footer
    │   │   ├── layout.tsx
    │   │   └── login/page.tsx
    │   └── api/               # route handlers (OTP, bookings, orders) — later
    ├── components/
    │   ├── ui/                # (optional) own tiny primitives, only when reused 3+ times
    │   ├── layout/            # top-bar, navbar, footer, emergency-strip
    │   ├── home/              # hero, why-medizaai, choose-need, how-it-works, faq...
    │   ├── doctors/           # doctor-card, doctor-filters, booking-panel
    │   ├── guides/            # guide-card, guide-booking-panel
    │   ├── medicines/         # medicine-card, cart-summary
    │   ├── hospitals/         # hospital-card, hospital-filters
    │   ├── booking/           # booking-summary, success-card
    │   └── shared/            # container, section-heading, rating, price-tag, otp-input
    ├── lib/
    │   ├── utils.ts           # cn() helper (clsx + tailwind-merge)
    │   ├── bn-number.ts       # toBn(), formatPrice()
    │   ├── constants.ts       # nav links, contact numbers, emergency number
    │   ├── validations/       # zod schemas (login, booking, checkout)
    │   └── api/               # data access functions (mock now, real later)
    ├── data/                  # mock data: doctors.ts, guides.ts, medicines.ts, hospitals.ts, faqs.ts
    ├── hooks/                 # use-debounce, use-media-query ...
    ├── store/
    │   └── cart-store.ts      # zustand cart
    ├── types/                 # doctor.ts, guide.ts, medicine.ts, hospital.ts, booking.ts
    └── messages/
        └── bn.json
```

## Conventions

- **Server Components by default.** Add `"use client"` only for interactivity (forms, carousels, cart, accordions, filters).
- Files: `kebab-case.tsx`. Components: `PascalCase` named exports (pages and layouts use default exports as Next requires).
- One component per file. Page-specific components go in their feature folder, reusable ones in `components/shared`.
- Use `@/` import alias (e.g. `@/components/ui/button`). No deep relative paths.
- Use `next/image` for all images with width/height or `fill` + `sizes`. Use `next/link` for navigation.
- Dynamic routes use `slug`, never raw numeric IDs in the URL.
- Define types in `src/types/` and reuse; no `any`. Validate all form input with zod.
- Accessibility: semantic HTML, labels on inputs, visible focus states, alt text (Bangla), color contrast at least WCAG AA (check text over the hero image).
- Add `loading.tsx` and `error.tsx` for routes that fetch data.
- Keep `generateMetadata` on doctor/guide/hospital detail pages (Bangla titles/descriptions).

## Known design issues to handle while building

These came from the design review, so apply the fix in code instead of copying the flaw:

1. Hero image shows a surgery scene, which conflicts with the "easy, friendly" message. Use a placeholder friendly image and make it easy to swap (`public/images/hero-*.jpg`).
2. Hero stats and the search bar need stronger contrast; use a darker gradient overlay.
3. The search "service" selector must visibly look like a dropdown (chevron).
4. Card sub-text must not go below 14px.
5. Doctor cards should have room for rating and verification (BMDC) badges even if data is mocked at first.
6. "Choose your need" (top) and "Try now" (bottom) on Home overlap; share one data source so they stay consistent.
7. Carousels need visible, larger arrow controls on desktop.

## Build order

1. Setup, tokens, font, `bn-number` helper
2. Layout: top bar, navbar, footer, emergency strip
3. Home page (section by section)
4. Doctors list → doctor profile & booking
5. Guides list → guide profile & booking
6. Medicines shop → cart → checkout → success
7. Hospitals, My bookings, About, Contact & FAQ, Privacy
8. Login & OTP (UI first, provider later)
9. Responsive pass (mobile/tablet), accessibility pass, SEO metadata
10. Backend integration (DB, OTP, payments, video call) — only after approval

## Working rules for Claude

- Before building a page, fetch its Figma node and screenshot; then build. Keep changes scoped to the page/feature asked for.
- Mock data first. Do not add new dependencies without saying why.
- After changes, run `bun run lint` and `bunx tsc --noEmit`; fix issues before finishing.
- Never commit `.env*` files with secrets. Update `.env.example` when adding a variable.
- If a requirement is unclear (especially backend, payment, medical rules), ask instead of guessing. This is a healthcare product: do not invent medical claims, prices, or doctor credentials in real-looking copy; mark mock content clearly.