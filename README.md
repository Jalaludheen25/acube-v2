# ACUBE V2

Premium business setup & corporate consultancy website for **ACUBE** (UAE) — a
luxury, cinematic digital experience built for trust and lead conversion.

---

## Project Status

| Phase | Milestone | Status |
|---|---|---|
| **Phase 0 — Foundation** | M01 — Project Setup | ✅ Complete |
| | M02 — Core Architecture | ✅ Complete |
| | M03 — Design System | ✅ Complete |
| | M04 — Premium Navigation | ✅ Complete |
| **Phase 1 — Experience** | M05 — Entry Experience | 🔜 Next |
| | M06 — Hero Experience | Pending |
| | M07 — Business Story | Pending |
| | M08 — Services Experience | Pending |
| | M09 — Business Journey | Pending |
| | M10 — Industries | Pending |
| | M11 — Why ACUBE | Pending |
| | M12 — Packages | Pending |
| | M13 — Testimonials | Pending |
| | M14 — FAQ | Pending |
| | M15 — Contact Experience | Pending |
| | M16 — Footer | Pending |
| **Phase 2 — Launch** | M17 — SEO | Pending |
| | M18 — Animation Optimization | Pending |
| | M19 — Performance Optimization | Pending |
| | M20 — Quality Assurance | Pending |
| | M21 — Production Deployment | Pending |
| | M22 — Launch & Client Handover | Pending |

---

## Tech Stack

Next.js 15 (App Router) · TypeScript 5 (strict) · Tailwind CSS v4 (`@theme static`, CSS-first) ·
GSAP · Framer Motion (LazyMotion, strict) · Three.js / React Three Fiber / Drei ·
React Hook Form + Zod · Lucide React · pnpm 11.
Deployed to Hostinger VPS (Node.js 24 + PM2 + Nginx).

---

## Requirements

- Node.js `>= 24` (pinned to Node 24 in `.nvmrc`)
- pnpm `>= 9`

---

## Getting Started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

---

## Scripts

| Script              | Description                                   |
| ------------------- | --------------------------------------------- |
| `pnpm dev`          | Dev server (Turbopack)                        |
| `pnpm build`        | Production build                              |
| `pnpm start`        | Serve the production build                    |
| `pnpm lint`         | ESLint (next/core-web-vitals + typescript)    |
| `pnpm typecheck`    | `tsc --noEmit`                                |
| `pnpm format`       | Prettier write                                |
| `pnpm format:check` | Prettier check (CI)                           |

---

## Project Structure

```
acube-v2/
├── CLAUDE.md                  # AI operating brief (highest priority)
├── PROJECT_RULES.md           # Project decisions & change log
├── MASTER_PROMPTS.md          # Production prompt library
├── docs/                      # PROJECT_BIBLE, DESIGN_SYSTEM, ANIMATION_SYSTEM,
│                              # 3D_SYSTEM, SECTION_BREAKDOWN, DEVELOPMENT_GUIDE,
│                              # MANAGEMENT_GUIDE
├── assets/                    # Client brand assets (logo, business-cards, office, services)
├── public/
│   ├── brand/                 # acube-logo.png (served by next/image)
│   └── models/ textures/ hdr/ og/ favicons/
└── src/
    ├── app/                   # Next.js App Router (layout, page, routes, api/)
    ├── components/
    │   ├── ui/                # Shared primitives — Logo (+ Button, Card… from M05+)
    │   └── navigation/        # Navbar, DesktopNav, MobileMenu, NavLink, NavCta
    ├── features/              # hero/ services/ contact/ faq/ testimonials/
    │                          # timeline/ consultation/
    ├── hooks/                 # useMounted, useMediaQuery, usePrefersReducedMotion,
    │                          # useScrollLock, useScrollState, useActiveSection
    ├── lib/                   # cn(), typography presets, layout helpers
    ├── providers/             # Framer Motion LazyMotion + MotionConfig
    ├── constants/             # design tokens (typed mirror), site, contact, navigation
    ├── types/                 # TypeScript contracts for all data shapes
    ├── utils/                 # Pure helpers (telHref, whatsappHref, mailtoHref)
    └── animations/            # GSAP + Framer shared config (populated from M05 onwards)
```

---

## Architecture Highlights

| Principle | Implementation |
|---|---|
| **CSS-first tokens** | `@theme static` in `globals.css` is the single source of truth. `src/constants/design.ts` is the typed JS mirror (var refs + documented raw bridge for motion/breakpoints/z-index). |
| **RSC-first** | Server Components by default; `"use client"` only for browser APIs, animations, Three.js, and forms. |
| **Framer Motion** | Navigation + component interactions. `LazyMotion` (strict) + `MotionConfig reducedMotion="user"`. |
| **GSAP** | Reserved for cinematic storytelling — Hero timeline, ScrollTrigger, pinned sections (M05+). |
| **Glass design language** | `@utility glass`, `glass-floating`, `glass-interactive` shared across nav, cards, modals, footer. |
| **Data-driven** | All text, navigation, contact info, and CTAs originate from `src/constants/`. No hardcoded content in components. |
| **No fake data** | `contact.whatsapp: null` until verified. `description`/`keywords: null` until client-approved. Stats/testimonials deferred until client-supplied. |

---

## Deployment

The Hostinger (Linux) production build enables the standalone server bundle:

```bash
BUILD_STANDALONE=true pnpm build
```

`output: "standalone"` is gated behind `BUILD_STANDALONE=true` because the step
creates symlinks that Windows blocks without admin / Developer Mode.

**Server deploy workflow (Hostinger VPS):**

```bash
git pull
pnpm install
BUILD_STANDALONE=true pnpm build
pm2 restart acube
```

Dependencies: `sharp` (next/image optimizer) and `unrs-resolver` (ESLint native) are
approved for post-install scripts via `pnpm-workspace.yaml` `allowBuilds`.

---

## Documentation

Read in this order:

1. `CLAUDE.md` — AI operating brief (highest priority, governs all decisions)
2. `PROJECT_RULES.md` — project-specific decisions & change log
3. `docs/PROJECT_BIBLE.md` — business goals, brand, UX philosophy
4. `docs/DESIGN_SYSTEM.md` — color, typography, spacing, glass, motion tokens
5. `docs/ANIMATION_SYSTEM.md` — motion philosophy, GSAP vs Framer split, sequences
6. `docs/3D_SYSTEM.md` — Three.js / R3F strategy, Hero scene spec
7. `docs/SECTION_BREAKDOWN.md` — every page section defined
8. `docs/DEVELOPMENT_GUIDE.md` — coding standards, architecture, patterns
9. `docs/MANAGEMENT_GUIDE.md` — milestone plan, QA, deployment, maintenance
