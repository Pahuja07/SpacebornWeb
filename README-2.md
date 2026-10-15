# DERYK --- Neural AI Webpage

A simple, classic, research-focused webpage concept for DERYK Neural AI.

## 1. Goal

Build a polished sample webpage that feels consistent with the main
DERYK website. The page should communicate one idea clearly:

> **Neural AI investigates what measured signals can reveal through
> specialised, learned models.**

This is a frontend prototype. Approved research findings, use cases,
product status, and final copy can be added later.

## 2. Design direction

Keep the design **minimal, premium, and technical** rather than flashy.

-   **xAI inspiration:** clean navigation, strong hero composition,
    restrained animation, and clear section hierarchy.
-   **Claude inspiration:** diagrams and visual storytelling that make
    complex ideas easier to understand.
-   **Cursor inspiration:** polished cards and useful interactions.
-   **Anthropic inspiration:** calm, credible, research-led
    presentation.
-   Use these as inspiration, not as templates to copy.

### Visual system

-   **Background:** follow the existing DERYK website; use off-white or
    deep charcoal.
-   **Text:** high-contrast, readable typography.
-   **Accent:** one restrained blue/cyan accent; avoid competing neon
    colours.
-   **Layout:** generous whitespace, clear alignment, thin borders,
    simple cards, consistent spacing.
-   **Motion:** subtle transitions only. Avoid constant particles,
    excessive glow, or distracting animation.
-   **Typography:** reuse existing website fonts if available.

**First inspect the existing DERYK website and reuse its navbar, footer,
typography, spacing, and shared components.**

## 3. Recommended page sections

### 01 --- Hero

**Heading:** Neural AI

**Prototype tagline:** *Understanding what signals reveal.*

Add a short introduction and one CTA, such as **Explore the Research**.
Pair the text with a simple abstract visual: a waveform moving toward a
small network of connected nodes.

Keep the hero spacious. Avoid filling the screen with a complex 3D
scene.

### 02 --- The research question

Explain that the research explores whether specialised learned models
can capture domain-specific signal structure that general-purpose models
may not capture.

Use a simple two-column layout: short explanation on the left,
conceptual comparison on the right. Do not show invented scores or
suggest that one approach has already performed better.

### 03 --- From signal to inference

Make this the page's signature visual:

**Signals → Representation → Specialised inference → Evaluation**

Display four connected stages with simple line icons or abstract shapes.
On hover or tap, highlight a stage and show one short explanation. This
is an explanatory illustration, not a working AI demo.

### 04 --- Areas of investigation

Use four understated cards:

1.  **Signal Analysis** --- examining measured signals for meaningful
    structure.
2.  **Representation Learning** --- exploring how signals can be
    represented by a model.
3.  **Specialised Inference** --- investigating a narrow, defined
    question.
4.  **Comparative Evaluation** --- evaluating approaches against
    general-purpose baselines.

Keep descriptions short. These are research themes, not confirmed
released capabilities.

### 05 --- Research status

Use three clearly separated panels:

-   **What we're investigating**
-   **What has been validated**
-   **What is not yet a product**

Use clearly labelled placeholders until approved content is supplied. If
no findings have been validated, the final public page should say so
plainly.

### 06 --- Research direction

Show a simple conceptual relationship between Neural AI research and a
**possible future** route through Platform AI. Label this as a
direction, not an existing integration.

### 07 --- Closing section and footer

End with a short closing statement and a CTA only if it points to a real
destination. Reuse the existing DERYK footer.

## 4. Creative idea: let one visual do the work

The most memorable element should be a calm, elegant signal-to-inference
diagram---not lots of cards or effects.

-   A thin waveform enters from the left.
-   It passes through four labelled stages.
-   A restrained accent line connects the stages.
-   The active stage becomes slightly brighter on hover or scroll.
-   On mobile, the stages stack vertically and remain readable.

This makes the page distinctive while keeping it simple and classic.

## 5. Interaction and responsive behaviour

-   Smooth-scroll from the hero CTA to the research section.
-   Add subtle hover states to cards.
-   Make pipeline stages clickable or tappable.
-   Use a mobile navigation pattern consistent with the existing site.
-   Stack columns and cards on narrow screens.
-   Ensure good contrast, keyboard focus states, and readable text.
-   Respect reduced-motion preferences.

No backend, database, authentication, or actual AI model is needed for
this prototype.

## 6. Suggested component structure

Adapt this to the repository's actual framework:

``` text
NeuralAIPage
├── ExistingNavbar
├── NeuralAIHero
├── ResearchQuestion
├── SignalInferencePipeline
├── ResearchAreas
├── ResearchStatus
├── ResearchDirection
└── ExistingFooter
```

Reuse existing components wherever possible. Do not create a separate
project if Neural AI belongs inside the current DERYK website.

## 7. Suggested build order

1.  Run the existing website locally and inspect a sibling department
    page.
2.  Match the existing design system.
3.  Build the hero and page spacing.
4.  Build the signal-to-inference diagram.
5.  Add the four research cards.
6.  Add research-status panels with clearly marked placeholders.
7.  Add remaining sections and footer.
8.  Test desktop, tablet, and mobile layouts.
9.  Check links, focus states, contrast, and reduced-motion behaviour.
10. Ask for design and research-owner review before treating content as
    final.

## 8. Content and accuracy guardrails

-   Do not invent products, use cases, model architectures, metrics,
    experimental results, or integrations.
-   Keep research, validated findings, and product availability
    separate.
-   Mark placeholder content clearly during the prototype stage.
-   Obtain approval for research status, findings, limitations, and
    public-facing claims.
-   Focus on explaining the research question, not claiming a proven
    outcome.

## Definition of done

The prototype is ready for review when it has a consistent DERYK look, a
clear hero, an elegant signal-to-inference visual, concise
research-theme cards, transparent research-status placeholders,
responsive layouts, and no unsupported capability claims.
