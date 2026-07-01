# ACUBE V2

Premium business setup & corporate consultancy website for **ACUBE** (UAE) — a
luxury, cinematic digital experience built for trust and lead conversion.

## Tech stack

Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 · GSAP ·
Framer Motion · Three.js / React Three Fiber / Drei · React Hook Form + Zod ·
Lucide · pnpm. Deployed to Hostinger (Node.js + PM2 + Nginx).

## Requirements

- Node.js `>= 20` (repo pinned to Node 24 in `.nvmrc`)
- pnpm `>= 9`

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Scripts

| Script              | Description                                   |
| ------------------- | --------------------------------------------- |
| `pnpm dev`          | Start the dev server (Turbopack)              |
| `pnpm build`        | Production build                              |
| `pnpm start`        | Serve the production build                    |
| `pnpm lint`         | ESLint (next/core-web-vitals + typescript)    |
| `pnpm typecheck`    | `tsc --noEmit`                                |
| `pnpm format`       | Prettier write                                |

## Deployment

The Hostinger (Linux) production build enables the standalone server bundle:

```bash
BUILD_STANDALONE=true pnpm build
```

Standalone is gated off locally because the step symlinks `node_modules`, which
Windows blocks without admin / Developer Mode.

## Documentation

Project governance and specs live in `CLAUDE.md`, `PROJECT_RULES.md`, and
`docs/` (Project Bible, Design System, Animation System, 3D System, Section
Breakdown, Development & Management guides). Read `CLAUDE.md` first.

## Status

Milestone 01 — Project Setup: complete. See the milestone reports for progress.
