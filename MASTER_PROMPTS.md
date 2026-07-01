# ============================================================
#
# ACUBE V2
#
# MASTER PROMPTS
#
# Claude Code Production Prompt Library
#
# Version 2.0
#
# ============================================================

# PURPOSE

This document contains production-ready prompts for Claude Code.

Every prompt assumes Claude has access to

CLAUDE.md

PROJECT_BIBLE.md

DESIGN_SYSTEM.md

ANIMATION_SYSTEM.md

3D_SYSTEM.md

SECTION_BREAKDOWN.md

DEVELOPMENT_GUIDE.md

PROJECT_RULES.md

All client assets

------------------------------------------------------------
PHASE 0 — FOUNDATION (✅ Completed — Milestones 01–04)
------------------------------------------------------------

# PROMPT 01

Read the complete project documentation before writing any code.

Analyze

- Architecture
- Design System
- Animations
- 3D Strategy
- Branding
- Folder Structure

Then create a development plan.

Do not generate code.

------------------------------------------------------------

# PROMPT 02

Analyze the current project.

Create a report containing

• Folder structure

• Problems

• Missing files

• Duplicate components

• Performance issues

• Accessibility issues

• SEO issues

Do not modify anything.

------------------------------------------------------------

# PROMPT 03

Read every asset inside assets/references.

Use

Logo

Business Card

Office Images

Service Images

Documents

before generating placeholders.

------------------------------------------------------------
PROJECT SETUP (✅ Completed — M01 + M02)
------------------------------------------------------------

# PROMPT 04

Create the entire Next.js project architecture.

Generate

Folders

Providers

Hooks

Constants

Types

Utilities

Animations

without building UI.

------------------------------------------------------------

# PROMPT 05

Install and configure

Tailwind

GSAP

Framer Motion

Three.js

React Three Fiber

Drei

React Hook Form

Zod

Lucide

Configure production-ready settings.

------------------------------------------------------------
LAYOUT (✅ Completed — M03 Design System + M04 Premium Navigation)
------------------------------------------------------------

# PROMPT 06

Build the complete application layout.

Create

Navigation

Footer

Container

Section

Grid

Responsive Layout

Dark Theme

Glass Navigation

------------------------------------------------------------

# PROMPT 07

Create a reusable UI library.

Generate

Buttons

Cards

Inputs

Accordion

Modal

Badge

Tooltip

Spinner

Skeleton

Container

Every component must follow the design system.

------------------------------------------------------------
PHASE 1 — EXPERIENCE (M05–M16)
------------------------------------------------------------

# PROMPT 07B

Build the premium Entry Experience (M05).

Requirements

Full-screen branded loading sequence

ACUBE logo → cube → glow → expand → reveal

Maximum 2 seconds total

Skip on return visits (sessionStorage)

Framer Motion for the reveal / transition out

GSAP for the internal logo→cube timeline

Mobile-friendly

Reduced motion: instant reveal

Do not block Hero content from loading.

------------------------------------------------------------
HERO (M06)
------------------------------------------------------------

# PROMPT 08

Build the Hero section.

Requirements

Luxury

Interactive

3D

Responsive

SEO

Accessible

Animated

Follow every project document.

------------------------------------------------------------

# PROMPT 09

Create the Hero cinematic timeline (M06).

The Entry Experience (M05) has already completed before this runs.

Hero timeline sequence:

Environment + Cube

↓

Cube opens / Camera moves

↓

Dubai Skyline appears

↓

Global Network forms

↓

Headline reveals (already in DOM — never gated on animation)

↓

Description fades up

↓

CTA buttons slide up

↓

Statistics count up

↓

Scroll indicator appears

Use GSAP for the timeline.
Use Framer Motion for small component reveals.
Consume motion tokens from src/constants/design.ts.

------------------------------------------------------------

# PROMPT 10

Build the Three.js Hero Scene.

Contains

Cube

Dubai

Particles

Lighting

Business Network

Optimize for

60 FPS

------------------------------------------------------------

# PROMPT 11

Optimize Hero performance.

Reduce

Bundle

Models

Textures

Particles

Without changing visuals.

------------------------------------------------------------
CONTENT SECTIONS (M07–M16)
------------------------------------------------------------

# PROMPT 12

Build the Business Story section (M07).

Focus

Storytelling

Luxury

Motion

Performance

------------------------------------------------------------

# PROMPT 13

Build the Why UAE section.

Interactive

Glass Cards

Icons

Micro Animations

------------------------------------------------------------

# PROMPT 14

Build the Services Experience.

Interactive Panels

Hover

Expansion

Animation

CTA

------------------------------------------------------------

# PROMPT 15

Build the Business Journey Timeline.

GSAP

ScrollTrigger

Responsive

Accessible

------------------------------------------------------------

# PROMPT 16

Build the Industries section.

Luxury Grid

Glass Cards

Hover Motion

------------------------------------------------------------

# PROMPT 17

Build the Why ACUBE section.

Premium Cards

Statistics

Trust Elements

------------------------------------------------------------

# PROMPT 18

Build Packages.

Pricing Comparison

Glass

Hover

Highlight

------------------------------------------------------------

# PROMPT 19

Build Testimonials.

Carousel

Animation

Country

Client

Rating

------------------------------------------------------------

# PROMPT 20

Build FAQ.

Accordion

SEO Schema

Animation

------------------------------------------------------------

# PROMPT 21

Build Contact.

Luxury Form

Validation

Map

WhatsApp

Business Card

------------------------------------------------------------
ANIMATION
------------------------------------------------------------

# PROMPT 22

Review every animation.

Remove

Unnecessary Motion

Improve

Luxury

Performance

Accessibility

------------------------------------------------------------

# PROMPT 23

Replace CSS animation with GSAP where appropriate.

------------------------------------------------------------

# PROMPT 24

Improve Framer Motion interactions.

------------------------------------------------------------
THREE.JS
------------------------------------------------------------

# PROMPT 25

Optimize every GLB model.

Reduce polygons.

Compress.

Lazy load.

------------------------------------------------------------

# PROMPT 26

Review lighting.

Improve realism.

Reduce render cost.

------------------------------------------------------------

# PROMPT 27

Improve Hero Scene quality while maintaining FPS.

------------------------------------------------------------
SEO
------------------------------------------------------------

# PROMPT 28

Audit SEO.

Generate

Metadata

Schema

OpenGraph

Twitter

Canonical

------------------------------------------------------------

# PROMPT 29

Generate Local Business schema.

------------------------------------------------------------

# PROMPT 30

Generate FAQ schema.

------------------------------------------------------------
ACCESSIBILITY
------------------------------------------------------------

# PROMPT 31

Audit accessibility.

Return

Problems

Severity

Solutions

------------------------------------------------------------

# PROMPT 32

Implement reduced motion support.

------------------------------------------------------------

# PROMPT 33

Improve keyboard navigation.

------------------------------------------------------------
PERFORMANCE
------------------------------------------------------------

# PROMPT 34

Perform Lighthouse optimization.

Target

95+

------------------------------------------------------------

# PROMPT 35

Optimize

Images

Fonts

Scripts

Videos

3D

------------------------------------------------------------

# PROMPT 36

Reduce JavaScript bundle size.

------------------------------------------------------------
REFACTOR
------------------------------------------------------------

# PROMPT 37

Review project.

Find

Duplicate code

Unused components

Dead code

Large components

------------------------------------------------------------

# PROMPT 38

Split oversized components.

Maximum

250 lines.

------------------------------------------------------------

# PROMPT 39

Improve architecture.

------------------------------------------------------------
BUG FIXES
------------------------------------------------------------

# PROMPT 40

Analyze all console errors.

Fix root causes.

------------------------------------------------------------

# PROMPT 41

Analyze hydration issues.

------------------------------------------------------------

# PROMPT 42

Analyze build warnings.

------------------------------------------------------------
CONTENT
------------------------------------------------------------

# PROMPT 43

Rewrite website copy.

Professional

Luxury

International English

------------------------------------------------------------

# PROMPT 44

Improve CTAs.

------------------------------------------------------------

# PROMPT 45

Improve readability.

------------------------------------------------------------
HOSTINGER
------------------------------------------------------------

# PROMPT 46

Prepare production deployment.

Generate

PM2

Environment Variables

Build Commands

Deployment Checklist

------------------------------------------------------------

# PROMPT 47

Audit production build before deployment.

------------------------------------------------------------

# PROMPT 48

Generate deployment report.

------------------------------------------------------------
FINAL QA
------------------------------------------------------------

# PROMPT 49

Review the complete website.

Check

UI

UX

Animation

Performance

Accessibility

SEO

Content

Responsive

Code

------------------------------------------------------------

# PROMPT 50

Compare the implementation against all project documentation.

List

Completed

Missing

Needs Improvement

Do not change code.

------------------------------------------------------------

# UNIVERSAL PROMPT

Before implementing any feature

1.

Read every relevant document.

2.

Understand business goals.

3.

Understand user experience.

4.

Review existing architecture.

5.

Reuse components.

6.

Optimize for performance.

7.

Respect accessibility.

8.

Maintain premium quality.

9.

Follow coding standards.

10.

Only then generate code.

------------------------------------------------------------

# FINAL RULE

Every response from Claude Code should improve one or more of these

✓ User Experience

✓ Brand Quality

✓ Maintainability

✓ Performance

✓ Accessibility

✓ SEO

✓ Conversion

Never generate code that reduces the quality of the final product.

------------------------------------------------------------

END OF DOCUMENT