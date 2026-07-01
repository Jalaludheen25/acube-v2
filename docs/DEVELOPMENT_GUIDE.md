# ============================================================
#
# ACUBE V2
#
# DEVELOPMENT GUIDE
#
# Version 2.0
#
# ============================================================

# PURPOSE

This document defines how ACUBE V2 must be developed.

It standardizes

• Architecture

• Code Style

• Components

• Performance

• SEO

• Accessibility

• Deployment

• Git Workflow

Everything must follow this guide.

------------------------------------------------------------

# TECH STACK

Framework

Next.js 15 (App Router)

Language

TypeScript

Styling

Tailwind CSS v4

Animation

GSAP

Framer Motion

3D

Three.js

React Three Fiber

Drei

Forms

React Hook Form

Validation

Zod

Icons

Lucide React

Deployment

Hostinger

Package Manager

pnpm

------------------------------------------------------------

# PROJECT STRUCTURE

The structure below reflects the implemented architecture as of Milestone 04.
Folders marked (M05+) exist with .gitkeep placeholders and are populated in the noted milestone.

```
acube-v2/
├── CLAUDE.md                    # AI operating brief (highest priority)
├── PROJECT_RULES.md             # Decisions & change log
├── MASTER_PROMPTS.md            # Prompt library
├── package.json · pnpm-lock.yaml · pnpm-workspace.yaml
├── next.config.ts · tsconfig.json · postcss.config.mjs
├── eslint.config.mjs · .prettierrc · .editorconfig
├── .gitignore · .gitattributes · .nvmrc · .npmrc · .env.example
├── docs/                        # All specification documents
├── assets/                      # Client brand assets (source files, not served)
│   ├── logo/                    # Acube logo.png (source)
│   ├── business-cards/          # acb.jpeg (contact data source)
│   ├── office/                  # (awaiting client supply)
│   ├── services/                # (awaiting client supply)
│   └── certificates/            # (awaiting client supply)
├── public/
│   ├── brand/                   # acube-logo.png (served by next/image)
│   └── models/ textures/ hdr/ og/ favicons/   (M05+)
└── src/
    ├── app/
    │   ├── layout.tsx            # Root: fonts, metadata, Providers, Navbar, skip-link
    │   ├── page.tsx              # Home composition root (sections added M05–M16)
    │   ├── globals.css           # @theme static tokens + @utility glass/container/section
    │   ├── loading.tsx · error.tsx · not-found.tsx
    │   └── api/ services/ industries/ packages/ contact/   (route shells, M07+)
    ├── components/
    │   ├── ui/                   # Logo (shared) · Button, Card, etc. (M05+)
    │   └── navigation/           # Navbar, DesktopNav, MobileNav, MobileMenu,
    │                             # NavLink, NavCta, navMotion.ts
    ├── features/                 # hero/ services/ contact/ faq/ testimonials/
    │                             # timeline/ consultation/   (M05+)
    ├── hooks/                    # useMounted, useMediaQuery, usePrefersReducedMotion,
    │                             # useScrollLock, useScrollState, useActiveSection
    ├── lib/                      # cn(), typography presets, layout helpers
    ├── providers/                # Providers.tsx — Framer LazyMotion + MotionConfig
    ├── constants/                # design.ts (token mirror), site.ts, contact.ts,
    │                             # navigation.ts · services/faq/packages/etc. (M07+)
    ├── types/                    # Typed contracts: Service, Contact, Nav, FAQ, Package,
    │                             # Testimonial, Industry, ProcessStep, SeoMeta, Site
    ├── utils/                    # telHref, whatsappHref, mailtoHref
    ├── animations/               # GSAP + Framer shared config (M05+)
    └── styles/ data/ services/   # (M05+)
```

------------------------------------------------------------

# APP ROUTER

Route shells exist; page content is added in their respective milestones.

```
app/
├── layout.tsx          # Root layout — implemented (M01–M04)
├── page.tsx            # Home — composition root (sections M05–M16)
├── loading.tsx         # Accessible baseline loader (M05 adds branded Entry Experience)
├── error.tsx           # Root error boundary
├── not-found.tsx       # 404
├── services/           # (M08)
├── industries/         # (M10)
├── packages/           # (M12)
├── contact/            # (M15)
└── api/
    ├── contact/        # (M15)
    ├── newsletter/     # (M16)
    └── consultation/   # (M15)
```

------------------------------------------------------------

# COMPONENT STRUCTURE

```

components/

ui/

layout/

sections/

cards/

buttons/

forms/

icons/

navigation/

footer/

3d/

```

------------------------------------------------------------

# UI COMPONENTS

Reusable only

Button

Input

Textarea

Badge

Card

Accordion

Modal

Drawer

Tooltip

Tabs

Container

Grid

Section

Skeleton

Spinner

------------------------------------------------------------

# FEATURE STRUCTURE

```

features/

consultation/

contact/

services/

faq/

testimonials/

hero/

timeline/

```

Each feature contains

components

hooks

types

utils

------------------------------------------------------------

# NAMING

Good

HeroSection.tsx

ServiceCard.tsx

BusinessTimeline.tsx

AnimatedButton.tsx

Bad

Hero2.tsx

FinalHero.tsx

CardNew.tsx

------------------------------------------------------------

# TYPESCRIPT

Strict Mode

Enabled

Never

use any

Always

Type Props

Type API

Type Hooks

Type Forms

------------------------------------------------------------

# IMPORT ORDER

React

↓

Next

↓

Third Party

↓

Components

↓

Hooks

↓

Services

↓

Types

↓

Utils

↓

Styles

------------------------------------------------------------

# IMPLEMENTED TOKEN ARCHITECTURE

The design system is CSS-first (Milestone 03). The rule is:

Single source of truth
→ @theme static block in src/app/globals.css

Typed JS mirror (var references + documented raw bridge)
→ src/constants/design.ts

Utility helpers
→ src/lib/typography.ts (semantic class presets)
→ src/lib/layout.ts (container, grid, glass variants)

Class composition
→ src/lib/cn.ts — cn() = clsx + tailwind-merge

Raw values mirrored in design.ts (JS cannot use var() for these):
→ motion durations & easing curves (GSAP/Framer)
→ breakpoints (matchMedia)
→ z-index (numeric logic)
→ opacity (numeric logic)
→ themeColorHex (meta tag)

Never hardcode a color, spacing, radius, shadow, or timing value in a component.
Always use a token utility or cn() with a token class.

------------------------------------------------------------

# PROVIDERS PATTERN

src/providers/Providers.tsx wraps the app in:

LazyMotion (features loaded on demand, strict mode for m.* discipline)

MotionConfig reducedMotion="user" (WCAG 2.3.3 for all Framer animations)

Server children pass through unchanged (no server cost).
GSAP and Three.js are NOT initialized in Providers.
GSAP is set up per-component in the features that use it (M05+).

------------------------------------------------------------

# SERVER COMPONENTS

Default

Everything

Client Components

Only

Animations

Forms

Mouse Events

Three.js

Browser APIs

------------------------------------------------------------

# DATA

Never hardcode

Services

FAQ

Packages

Contact

Navigation

Store inside

constants/

------------------------------------------------------------

# API

app/api/

contact/

newsletter/

consultation/

Every API

Validation

↓

Response

↓

Error Handling

------------------------------------------------------------

# FORMS

React Hook Form

↓

Zod

↓

API

↓

Email

↓

Success

Never use uncontrolled forms.

------------------------------------------------------------

# EMAIL

Use SMTP

Environment Variables

Never expose credentials.

------------------------------------------------------------

# SEO

Every page exports

Metadata

Title

Description

Keywords

OpenGraph

Twitter

Canonical

JSON-LD

------------------------------------------------------------

# IMAGE

Always

next/image

Lazy

Responsive

WebP

AVIF

Never use <img>

------------------------------------------------------------

# VIDEO

Lazy Load

Compressed

WebM

MP4

Muted

Loop

Inline

------------------------------------------------------------

# THREE.JS

Only

Hero

Small Highlights

Never entire website.

------------------------------------------------------------

# GSAP

Use

Hero Timeline

Scroll Story

Pinned Sections

Timeline

Never animate every element.

------------------------------------------------------------

# FRAMER MOTION

Cards

Buttons

Forms

Hover

Page Micro Animation

------------------------------------------------------------

# PERFORMANCE

Target

Lighthouse

95+

LCP

<2.5

CLS

<0.1

INP

<200ms

------------------------------------------------------------

# OPTIMIZATION

Dynamic Import

Lazy Load

Tree Shaking

Code Splitting

Image Compression

Model Compression

Font Optimization

------------------------------------------------------------

# ACCESSIBILITY

WCAG AA

Keyboard

Labels

ARIA

Semantic HTML

Reduced Motion

------------------------------------------------------------

# ENVIRONMENT VARIABLES

.env.local

SMTP

Analytics

Maps

API Keys

Never commit.

------------------------------------------------------------

# HOSTINGER DEPLOYMENT

Build

pnpm build

Start

pnpm start

Server

Node.js

Process Manager

PM2

Reverse Proxy

Nginx

SSL

Let's Encrypt

------------------------------------------------------------

# PM2

Process Name

acube

Auto Restart

Enabled

Logs

Enabled

------------------------------------------------------------

# DEPLOYMENT WORKFLOW

Local

↓

GitHub

↓

Hostinger

↓

git pull

↓

pnpm install

↓

pnpm build

↓

pm2 restart acube

------------------------------------------------------------

# GIT

Branch

main

feature/*

fix/*

hotfix/*

Never develop directly on production.

------------------------------------------------------------

# COMMIT FORMAT

feat:

fix:

refactor:

perf:

docs:

style:

------------------------------------------------------------

# TESTING

Desktop

Tablet

Mobile

Safari

Chrome

Edge

Firefox

Android

iPhone

------------------------------------------------------------

# PRE-LAUNCH CHECKLIST

✓ Build Success

✓ Type Check

✓ ESLint

✓ Lighthouse

✓ Responsive

✓ SEO

✓ Forms

✓ Analytics

✓ SSL

✓ Robots.txt

✓ Sitemap

------------------------------------------------------------

# CODE REVIEW

Every PR must verify

Architecture

↓

Performance

↓

Accessibility

↓

SEO

↓

Animations

↓

Code Quality

↓

Reusability

------------------------------------------------------------

# GOLDEN RULES

Never duplicate code.

Never hardcode repeated values.

Never ignore accessibility.

Never sacrifice performance for visuals.

Always think about maintainability.

Always build reusable systems.

------------------------------------------------------------

END OF DOCUMENT
