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

```

acube/

├── CLAUDE.md
├── PROJECT_RULES.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── public/
├── docs/
├── assets/
├── src/
│
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
├── providers/
├── constants/
├── types/
├── utils/
├── animations/
├── styles/
└── data/

```

------------------------------------------------------------

# APP ROUTER

```

app/

layout.tsx

page.tsx

loading.tsx

error.tsx

not-found.tsx

about/

services/

industries/

packages/

contact/

blog/

api/

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
