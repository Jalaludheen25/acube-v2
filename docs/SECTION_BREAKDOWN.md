# ============================================================
#
# ACUBE V2
#
# SECTION BREAKDOWN
#
# Version 2.0
#
# ============================================================

# PURPOSE

This document defines every website section.

It is the implementation blueprint.

Claude Code should never guess layouts.

Every section has

• Purpose

• UX Goal

• Layout

• Content

• Animation

• 3D

• CTA

• SEO

• Accessibility

• Performance

------------------------------------------------------------

# WEBSITE FLOW

Entry Experience

↓

Hero

↓

Trust Bar

↓

Business Story

↓

Why UAE

↓

Services Experience

↓

Business Setup Journey

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

Consultation CTA

↓

Contact

↓

Footer

------------------------------------------------------------

============================================================
SECTION 01
============================================================

# ENTRY EXPERIENCE

Milestone 05

Purpose

Create a premium cinematic first impression before the Hero is visible.
This is NOT the Hero. It is the branded transition from loading into the experience.

Duration

1.5–2 seconds maximum

Animation

Logo appears

↓

Cube assembles

↓

Glow

↓

Cube opens

↓

Reveal website

Background

#050505 (--color-background)

Skip

Automatically skipped on second and subsequent visits (sessionStorage flag).

Performance

Maximum 2 seconds total.
Must not block Hero content from loading.

------------------------------------------------------------

============================================================
SECTION 02
============================================================

# HERO

Purpose

Immediately communicate

Luxury

Trust

Business

Innovation

Goal

Generate consultation.

------------------------------------------------------------

Layout

Desktop

------------------------------------------------

Left

Headline

Description

Buttons

Statistics

Right

Large Interactive 3D Scene

------------------------------------------------

Tablet

Text Top

3D Bottom

------------------------------------------------

Mobile

Text

↓

Buttons

↓

Statistics

↓

Small 3D Scene

------------------------------------------------------------

Headline

Build Your Business

With Confidence

In The UAE.

------------------------------------------------------------

Subheading

Helping entrepreneurs establish and grow successful businesses across the UAE through expert consultation, company formation, visas, banking assistance and corporate services.

------------------------------------------------------------

CTA

Primary

Book Free Consultation

Secondary

Explore Services

------------------------------------------------------------

Statistics

5000+

Businesses

40+

Countries

98%

Success Rate

10+

Years

------------------------------------------------------------

3D

Cube

Dubai

Connection Lines

Particles

------------------------------------------------------------

Animation

Loader

↓

3D

↓

Headline

↓

Paragraph

↓

Buttons

↓

Statistics

------------------------------------------------------------

CTA Goal

Consultation

------------------------------------------------------------

============================================================
SECTION 03
============================================================

# TRUST BAR

Purpose

Instant credibility.

Contains

Years

Countries

Businesses

Support

Government Process

Animation

Counter

Fade

------------------------------------------------------------

============================================================
SECTION 04
============================================================

# BUSINESS STORY

Purpose

Replace traditional About Us.

Tell a story.

Story

Dream

↓

Opportunity

↓

Challenges

↓

Solution

↓

ACUBE

↓

Success

------------------------------------------------------------

Layout

Two Columns

Image

Text

------------------------------------------------------------

Animation

Scroll Story

GSAP

Background Transition

------------------------------------------------------------

============================================================
SECTION 05
============================================================

# WHY UAE

Purpose

Sell UAE before ACUBE.

Cards

100% Ownership

Tax Benefits

Global Access

Business Friendly

Strategic Location

Fast Growth

Each card

Glass

Icon

Hover Animation

------------------------------------------------------------

============================================================
SECTION 06
============================================================

# SERVICES EXPERIENCE

Purpose

Show services interactively.

Layout

Glass Panels

Desktop

3x2

Tablet

2x3

Mobile

Stack

------------------------------------------------------------

Services

Business Setup

Company Formation

Visa

Banking

PRO

Tax

Corporate Consultancy

Golden Visa

------------------------------------------------------------

Hover

Panel Expands

↓

Icon Animates

↓

CTA Appears

------------------------------------------------------------

Click

Open Detailed Service Page

------------------------------------------------------------

============================================================
SECTION 07
============================================================

# BUSINESS SETUP JOURNEY

Purpose

Explain process.

Timeline

Consultation

↓

Business Activity

↓

Jurisdiction

↓

Documentation

↓

License

↓

Visa

↓

Bank Account

↓

Launch

Desktop

Horizontal

Mobile

Vertical

Animation

GSAP Draw

------------------------------------------------------------

============================================================
SECTION 08
============================================================

# INDUSTRIES

Purpose

Show expertise.

Industries

Technology

Healthcare

Trading

Construction

Hospitality

Retail

Education

Finance

Manufacturing

Consulting

Import Export

Real Estate

Hover

Lift

Glow

------------------------------------------------------------

============================================================
SECTION 09
============================================================

# WHY ACUBE

Purpose

Differentiate.

Cards

Transparent Pricing

Experienced Team

Government Expertise

Dedicated Manager

Fast Processing

End-to-End Service

Every card

Icon

Title

Description

CTA

------------------------------------------------------------

============================================================
SECTION 10
============================================================

# BUSINESS PACKAGES

Purpose

Compare solutions.

Cards

Starter

Professional

Enterprise

Structure

Title

Price

Features

Ideal For

CTA

Most Popular

Highlighted

------------------------------------------------------------

============================================================
SECTION 11
============================================================

# SUCCESS METRICS

Purpose

Increase trust.

Counters

Businesses

Countries

Clients

Success Rate

Animation

Counter

Fade

------------------------------------------------------------

============================================================
SECTION 12
============================================================

# TESTIMONIALS

Purpose

Social Proof.

Layout

Auto Carousel

Card

Client

Country

Business

Review

Rating

Optional

Video Review

------------------------------------------------------------

============================================================
SECTION 13
============================================================

# FAQ

Purpose

Answer objections.

Questions

Company Formation

Visa

Timeline

Costs

Banking

Taxes

Ownership

Accordion

Animation

Height

Arrow

Fade

------------------------------------------------------------

============================================================
SECTION 14
============================================================

# CONSULTATION CTA

Purpose

High-conversion section.

Headline

Ready To Build

Your UAE Business?

Buttons

Book Consultation

WhatsApp

Background

Luxury Gradient

------------------------------------------------------------

============================================================
SECTION 15
============================================================

# CONTACT

Purpose

Generate leads.

Layout

Left

Glass Contact Form

Right

Business Card

Address

Phone

WhatsApp

Email

Map

Business Hours

------------------------------------------------------------

Form

Name

Email

Phone

Company

Service

Message

------------------------------------------------------------

Validation

React Hook Form

Zod

------------------------------------------------------------

Success

Animated Confirmation

------------------------------------------------------------

============================================================
SECTION 16
============================================================

# FOOTER

Purpose

Navigation

Trust

SEO

Contains

Logo

Quick Links

Services

Contact

Social

Copyright

Privacy

Terms

Newsletter

Minimal Animation

------------------------------------------------------------

# GLOBAL CTA STRATEGY

Hero

Book Consultation

Business Story

Explore Services

Services

Talk to Expert

Timeline

Start Today

Packages

Choose Package

Testimonials

Book Consultation

Contact

Submit Form

------------------------------------------------------------

# RESPONSIVE RULES

Desktop

1920

1600

1440

1280

Tablet

1024

768

Mobile

430

390

375

360

320

No horizontal scroll.

------------------------------------------------------------

# SEO

Every section

Unique Heading

Internal Links

Semantic HTML

Structured Data

Alt Text

------------------------------------------------------------

# ACCESSIBILITY

Keyboard

Focus States

Contrast

ARIA Labels

Reduced Motion

Readable Typography

------------------------------------------------------------

# PERFORMANCE

Lazy Load

Images

3D

Video

Maps

Maintain

Lighthouse

95+

------------------------------------------------------------

# IMPLEMENTATION ORDER

Aligned with the canonical 22-milestone roadmap.
Do not advance to the next milestone until the current one passes all quality gates
(visual · performance · accessibility · responsive).

----

PHASE 0 — FOUNDATION (Completed)

✅ M01 Project Setup
✅ M02 Core Architecture
✅ M03 Design System
✅ M04 Premium Navigation

----

PHASE 1 — EXPERIENCE

M05  Entry Experience       (Section 01)
M06  Hero Experience        (Section 02)
     Trust Bar              (Section 03 — part of Hero milestone)
M07  Business Story         (Section 04 + Why UAE, Section 05)
M08  Services Experience    (Section 06)
M09  Business Journey       (Section 07)
M10  Industries             (Section 08)
M11  Why ACUBE              (Section 09)
M12  Packages               (Section 10 + Success Metrics, Section 11)
M13  Testimonials           (Section 12)
M14  FAQ                    (Section 13)
M15  Contact Experience     (Section 14 Consultation CTA + Section 15 Contact)
M16  Footer                 (Section 16)

----

PHASE 2 — LAUNCH

M17  SEO
M18  Animation Optimization
M19  Performance Optimization
M20  Quality Assurance
M21  Production Deployment
M22  Launch & Client Handover

------------------------------------------------------------

END OF DOCUMENT