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

All client assets belong inside

assets/

references/

logo/

office/

staff/

services/

business-card/

documents/

certificates/

videos/

fonts/

icons/

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

Version

Date

Author

Description

Every important project decision should be recorded here.

------------------------------------------------------------

END OF DOCUMENT