# ============================================================
#
# ACUBE V2
#
# ANIMATION SYSTEM
#
# Version 2.0
#
# ============================================================

# PURPOSE

Animation is the identity of ACUBE.

Animation should never exist simply because it looks impressive.

Every animation must improve

• Storytelling

• User Focus

• Luxury Feel

• Brand Perception

• Conversion

Visitors should remember

"The experience"

Not

"The animation"

------------------------------------------------------------

# MOTION PHILOSOPHY

Think

Apple Product Launch

↓

Linear

↓

Stripe Sessions

↓

Porsche

↓

Awwwards

↓

Museum of the Future

Never

Gaming

Crypto

NFT

Flashy Portfolio

------------------------------------------------------------

# MOTION PRINCIPLES

Every animation should feel

Elegant

Smooth

Heavy

Natural

Purposeful

Confident

Architectural

Premium

------------------------------------------------------------

# MOTION HIERARCHY

Hero

★★★★★

Story Sections

★★★★☆

Navigation

★★★★☆

Cards

★★★☆☆

Buttons

★★☆☆☆

Icons

★☆☆☆☆

Footer

★☆☆☆☆

Animation intensity should reduce while scrolling.

------------------------------------------------------------

# TIMING SYSTEM

Micro

150ms

Small

250ms

Medium

450ms

Large

700ms

Hero

1200ms

Scene Transition

1500ms

Never exceed

1800ms

------------------------------------------------------------

# EASING

Primary

easeOutExpo

Secondary

easeOutQuart

Buttons

easeOut

Exit

easeInOut

Avoid

Bounce

Elastic

Back

Overshoot

------------------------------------------------------------

# PAGE LOAD

Sequence

Black

↓

Logo

↓

Hero Scene

↓

Headline

↓

Description

↓

Buttons

↓

Statistics

↓

Scroll Indicator

Every element appears sequentially.

------------------------------------------------------------

# ENTRY EXPERIENCE

Milestone 05.

Black Background

↓

ACUBE Symbol

↓

Glow

↓

Assemble

↓

Rotate

↓

Expand

↓

Reveal Website

Maximum Duration

2 seconds

Skip on future visits (sessionStorage flag).

------------------------------------------------------------

# HERO EXPERIENCE

Hero animation should tell a story.

Timeline

00.00

Black

↓

00.80

Logo Appears

↓

01.50

Logo becomes Cube

↓

02.50

Cube Rotates

↓

03.50

Cube Opens

↓

05.00

Camera Moves Forward

↓

06.00

Dubai Skyline Appears

↓

07.50

Global Network Forms

↓

09.00

Headline

↓

10.00

Description

↓

11.00

CTA

↓

12.00

Statistics

↓

13.00

Scroll Indicator

------------------------------------------------------------

# HERO CAMERA

Movement

Slow Push

Maximum Rotation

5°

Mouse Parallax

Enabled

No sudden movement.

------------------------------------------------------------

# HERO TYPOGRAPHY

Headline

Opacity

0 → 100

Scale

0.95 → 1

Duration

1.2s

Paragraph

Fade Up

Buttons

Slide Up

Statistics

Count Up

------------------------------------------------------------

# HERO BUTTONS

Appear after headline.

Primary

Scale

Fade

Secondary

Slide

Hover

Lift

Glow

------------------------------------------------------------

# NAVIGATION

Load

Fade Down

Scroll

Blur Background

↓

Glass

↓

Shadow

↓

Logo Scale

Hover

Animated Underline

Mobile

Slide From Right

------------------------------------------------------------

# PAGE TRANSITION

Exit

Opacity

100 → 0

Scale

1 → 0.98

Enter

Opacity

0 → 100

Y

40px → 0

Duration

600ms

------------------------------------------------------------

# SECTION REVEAL

Trigger

20%

Visible

Animation

Opacity

0 → 100

Y

80px → 0

Duration

800ms

Only animate once.

------------------------------------------------------------

# STAGGER

Cards

0.15s

Icons

0.08s

Statistics

0.12s

Features

0.18s

Team

0.15s

------------------------------------------------------------

# BUSINESS STORY

Scroll

↓

Background changes

↓

Headline

↓

3D Object

↓

Paragraph

↓

CTA

The transition should feel cinematic.

------------------------------------------------------------

# SERVICE PANELS

Idle

Glass Reflection

Hover

Lift

↓

Glow

↓

Expand

↓

Reveal CTA

↓

Icon Rotate

Click

Open Detail

------------------------------------------------------------

# TIMELINE

Draw Line

↓

Node Appears

↓

Icon

↓

Title

↓

Description

Use GSAP Timeline.

------------------------------------------------------------

# PACKAGE CARDS

Idle

Floating

Hover

Scale

Glow

Highlight Border

CTA

Pulse

Most Popular

Gold Accent

------------------------------------------------------------

# TESTIMONIALS

Cards

Auto Scroll

Pause On Hover

Fade Between Groups

Country Flag

Small Animation

------------------------------------------------------------

# FAQ

Accordion

Height Animation

Arrow Rotation

Fade

Duration

250ms

------------------------------------------------------------

# CONTACT

Inputs

Glow On Focus

Submit

Loading

↓

Progress

↓

Success

↓

Confirmation

Never reload page.

------------------------------------------------------------

# CURSOR

Desktop Only

Small Dot

↓

Outer Ring

↓

Magnetic Hover

↓

Button Attraction

↓

Text Change

Disable

Mobile

------------------------------------------------------------

# PARALLAX

Mouse

5–10px

Scroll

10%

Maximum

15%

Never create motion sickness.

------------------------------------------------------------

# PARTICLES

Opacity

10%

Movement

Very Slow

Desktop

120

Tablet

60

Mobile

25

------------------------------------------------------------

# LIGHT ANIMATION

Soft Light

Moves Slowly

Logo Reflection

Breathing Effect

No flashing.

------------------------------------------------------------

# GRADIENTS

Animate only

Opacity

Position

Very slowly

Duration

30–60 seconds

------------------------------------------------------------

# GLASS REFLECTION

Light Sweep

Every

8–12 seconds

Very subtle

------------------------------------------------------------

# 3D MOTION

Cube

Rotate

Float

Reflect

Globe

Rotate

Country Highlights

Buildings

Small Float

Documents

Hover Rotation

------------------------------------------------------------

# SCROLL STORY

Every section should transition naturally.

Never hard cuts.

Background evolves.

Lighting evolves.

Objects evolve.

------------------------------------------------------------

# MOBILE

Reduce

Distance

50%

Duration

25%

Particles

50%

Disable

Heavy Mouse Effects

------------------------------------------------------------

# REDUCED MOTION

Respect

prefers-reduced-motion

Disable

Parallax

Continuous Rotation

Heavy Timelines

Replace with

Fade

Opacity

------------------------------------------------------------

# PERFORMANCE

Animate only

Transform

Opacity

Filter (minimal)

Avoid

Top

Left

Width

Height

Margin

Never trigger layout recalculation.

------------------------------------------------------------

# TOOL SPLIT

The following split is now codified (implemented in Milestone 04).

Never mix tools for the same job.

------------------------------------------------------------

# GSAP

Use Only

Entry Experience timeline

Hero cinematic timeline

Pinned / ScrollTrigger sections

Story Scroll (Business Story, etc.)

Horizontal Scroll

Complex multi-step sequences

------------------------------------------------------------

# FRAMER MOTION

Use

Navigation (implemented — M04)

Cards

Buttons

Forms

Modals

Lists

Page-level micro-interactions

Small Components

Implementation: LazyMotion (strict, domAnimation loaded on demand)
+ MotionConfig reducedMotion="user" (global reduced-motion).
Always use m.* components, never motion.* (enforced by LazyMotion strict).

Motion tokens live in: src/constants/design.ts
(duration · easing · spring · stagger · delay · motionPresets)

------------------------------------------------------------

# CSS ANIMATION

Use

Underline

Spinner

Loading

Pulse

Micro Effects

------------------------------------------------------------

# SOUND

Optional

Muted by Default

Only if approved

Very subtle

Hover

Success

Scene Change

------------------------------------------------------------

# QUALITY CHECKLIST

Every animation should

✓ Guide Attention

✓ Improve UX

✓ Be GPU Accelerated

✓ Maintain 60 FPS

✓ Respect Accessibility

✓ Feel Premium

✓ Be Consistent

✓ Never Distract

------------------------------------------------------------

# FINAL MOTION RULE

If users notice the animation,

it is good.

If users remember the experience,

it is exceptional.

That is the standard for ACUBE.

------------------------------------------------------------

END OF DOCUMENT