# ============================================================
#
# ACUBE V2
#
# PROJECT RULES
#
# Version 2.0
#
# ============================================================

# PURPOSE

This document contains all project-specific decisions.

Unlike CLAUDE.md, this file can evolve during development.

Every important decision must be documented here.

------------------------------------------------------------

# PROJECT INFORMATION

Project

ACUBE V2

Industry

Business Setup

Business Consultancy

Location

Dubai

United Arab Emirates

Framework

Next.js 15

Language

TypeScript

Deployment

Hostinger

Repository

GitHub

IDE

VS Code

AI

Claude Code

------------------------------------------------------------

# PROJECT GOAL

Build one of the most premium Business Setup websites in UAE.

The website should

Generate Leads

↓

Build Trust

↓

Create Brand Authority

↓

Differentiate ACUBE

------------------------------------------------------------

# DESIGN GOAL

Website Style

Luxury

Modern

Minimal

Interactive

Professional

Architectural

Dark Theme

Never

Corporate Template

Bootstrap

WordPress Style

------------------------------------------------------------

# PRIMARY COLORS

Primary Background

#050505

Secondary Background

#111111

Surface

#16181D

Primary Text

#FFFFFF

Secondary Text

#B4BAC3

Logo Red

#E53935

Logo Green

#2E7D32

Accent Gold

#D4AF37

Maximum Gold Usage

5%

------------------------------------------------------------

# TYPOGRAPHY

Heading

Space Grotesk

Body

Inter

Mono

JetBrains Mono

------------------------------------------------------------

# BUTTON STYLE

Rounded

18px

Glass

Hover Lift

Glow

Premium

------------------------------------------------------------

# CARD STYLE

Glass Surface

28px Radius

Soft Shadow

Light Reflection

Hover Animation

------------------------------------------------------------

# ICON STYLE

Lucide React

Outline

Minimal

Professional

------------------------------------------------------------

# HERO

Heavy Animation

Enabled

3D

Enabled

Interactive

Enabled

Video

Optional

Mouse Interaction

Enabled

------------------------------------------------------------

# 3D OBJECTS

ACUBE Cube

Dubai Skyline

Business Network

Documents

Visa

Office Building

Business Graph

------------------------------------------------------------

# WEBSITE FLOW

Loader

↓

Hero

↓

Trust

↓

Business Story

↓

Why UAE

↓

Services

↓

Business Journey

↓

Industries

↓

Why ACUBE

↓

Packages

↓

Testimonials

↓

FAQ

↓

Consultation

↓

Contact

↓

Footer

------------------------------------------------------------

# PRIMARY CTA

Book Free Consultation

------------------------------------------------------------

# SECONDARY CTA

WhatsApp

------------------------------------------------------------

# CONTACT DETAILS

Store inside

src/constants/contact.ts

Never hardcode.

Include

Office

Phones

Email

WhatsApp

Business Hours

Google Maps

------------------------------------------------------------

# SERVICES

Store inside

src/constants/services.ts

Every service

id

title

slug

description

icon

seo

------------------------------------------------------------

# FAQ

Store inside

src/constants/faq.ts

------------------------------------------------------------

# PACKAGE DATA

Store inside

src/constants/packages.ts

------------------------------------------------------------

# NAVIGATION

Store inside

src/constants/navigation.ts

------------------------------------------------------------

# ASSETS

All client source assets belong inside assets/ (NOT inside public/).
Only web-ready assets served by next/image go into public/.

Current asset structure (as supplied by client):

assets/
├── logo/             Acube logo.png · Acube logo.jpeg (source)
├── business-cards/   acb.jpeg (front — contact data) · acbb.jpeg (back — services list)
├── office/           (awaiting client supply)
├── services/         (awaiting client supply)
└── certificates/     (awaiting client supply)

Public (served):

public/
└── brand/            acube-logo.png (copied from assets/logo — do not modify)

Awaiting from client (needed before their milestone):
• Office photography (M15 Contact, M16 Footer)
• Staff portraits (M13 Testimonials)
• Trade license / certificates (M15 Contact)
• Service imagery (M08)
• Social media profile URLs (M16 Footer)
• WhatsApp number (contact.ts whatsapp field — currently null)
• Business hours (contact.ts businessHours field — currently null)
• Google Maps URL (contact.ts googleMapsUrl field — currently null)

Asset priority:

1 Original Client Files
↓
2 AI Enhanced Versions
↓
3 Generated Assets

Never replace client branding.

------------------------------------------------------------

# IMAGES

Use

next/image

Formats

AVIF

↓

WebP

↓

JPEG

Never

PNG

Unless transparency required.

------------------------------------------------------------

# VIDEOS

Hero

Maximum

6MB

Background

Maximum

3MB

Formats

MP4

WebM

------------------------------------------------------------

# MODELS

Format

GLB

Maximum

700KB

Hero Total

3MB

------------------------------------------------------------

# FOLDER STRUCTURE

src/

app/

components/

features/

hooks/

animations/

constants/

providers/

services/

types/

utils/

------------------------------------------------------------

# COMPONENT RULES

Reusable

Typed

Accessible

Responsive

Independent

Maximum

250 lines

------------------------------------------------------------

# PERFORMANCE

Desktop

60 FPS

Tablet

55 FPS

Mobile

45 FPS

Lighthouse

95+

------------------------------------------------------------

# ACCESSIBILITY

WCAG AA

Keyboard

Semantic HTML

Reduced Motion

------------------------------------------------------------

# SEO

Business Schema

FAQ Schema

Local SEO

OpenGraph

Twitter Card

Canonical

Sitemap

Robots

------------------------------------------------------------

# HOSTINGER

Node.js

PM2

GitHub

SSL

Nginx

------------------------------------------------------------

# GIT

main

feature/*

fix/*

Never commit directly to production.

------------------------------------------------------------

# CLIENT ASSETS PRIORITY

1

Original Client Files

↓

2

AI Enhanced Versions

↓

3

Generated Assets

Never replace client branding.

------------------------------------------------------------

# APPROVED REFERENCES

Visual Inspiration

Apple

Linear

Stripe

Nothing

Museum of the Future

Dubai Architecture

Luxury Hotels

------------------------------------------------------------

# NEVER

❌ Use template sections

❌ Copy competitors

❌ Add unnecessary animations

❌ Ignore accessibility

❌ Sacrifice performance

❌ Hardcode repeated values

------------------------------------------------------------

# ALWAYS

✓ Reuse Components

✓ Optimize Assets

✓ Test Mobile

✓ Follow Documentation

✓ Keep Code Clean

✓ Build Premium Experiences

------------------------------------------------------------

# CHANGE LOG

----

v1.0 | 2026-07-01 | M01 Project Setup

Provisioned toolchain: Node 24.18.0, pnpm 11.9.0, git 2.54.0 (via winget).
Hand-built Next.js 15 + TypeScript 5 strict scaffold (no create-next-app).
Installed full approved stack: GSAP, Framer Motion, Three.js/R3F/Drei, RHF+Zod, Lucide.
BUILD_STANDALONE=true gating for Hostinger (Windows symlink limitation).
ESLint 9 + TypeScript 5 pinned for eslint-config-next@15 compatibility.

----

v1.1 | 2026-07-01 | M02 Core Architecture

Typed contracts for all data shapes (types/index.ts).
Verified contact data from business card (contact.ts — whatsapp: null pending).
Site config and navigation constants. Providers: Framer LazyMotion + MotionConfig.
Hooks: useMounted, useMediaQuery, usePrefersReducedMotion, useScrollLock.
Utilities: cn() (clsx+tailwind-merge), telHref, whatsappHref, mailtoHref.
DECISION: services/packages/faq/testimonials/industries data deferred to their milestone.
DECISION: description + keywords null until client-approved (SEO milestone).
DECISION: NEXT_PUBLIC_SITE_URL empty locally, set in production.

----

v1.2 | 2026-07-01 | M03 Design System

CSS-first @theme static in globals.css is the single source of truth.
Typed TS mirror in constants/design.ts (var refs + documented raw bridge).
Full token set: colors, fluid typography (clamp), radius, shadows, blur, glass,
spacing (8px base), breakpoints, containers, easings, spring, motion presets.
@utility: glass, glass-floating, glass-interactive, container-*, section-y, touch-target.
lib/typography.ts and lib/layout.ts for semantic class composition.
DECISION: No build-time token generator. Documented CSS↔JS bridge is acceptable
for the small set of runtime primitives (motion, breakpoints, z-index, opacity, themeColor).

----

v1.3 | 2026-07-01 | M04 Premium Navigation

Floating glass Navbar: transparent+expanded at top → glass+compact on scroll.
Logo scales 0.9 via Framer transform token on scroll. Framer-only (no GSAP in nav).
Mobile: fullscreen glass overlay, focus trap, Esc + backdrop + link close, scroll lock.
Shared Logo component in components/ui/Logo.tsx — single implementation.
Hooks: useScrollState (rAF-throttled), useActiveSection (IntersectionObserver scrollspy).
DECISION: WhatsApp CTA rendered conditionally — absent until contact.whatsapp verified.
DECISION: About in nav maps to #business-story; Business Journey not in primary nav.
DECISION: All nav links are real anchors in SSR HTML (crawlable).

----

Every important project decision should be recorded here.

------------------------------------------------------------

END OF DOCUMENT