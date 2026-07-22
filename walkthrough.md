# Ridell Salema — Personal Portfolio Website

An award-winning editorial personal portfolio website for **Ridell Salema**, crafted from scratch using Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

---

## Technical & Design Architecture

### 1. Off-White Editorial Palette
- **Background**: `#FAFAF8` (Soft off-white tone)
- **Card Surfaces**: `#F3F1EC` (Neutral surface elevation)
- **Borders**: `#D8D5CE` (Subtle divider color)
- **Primary Text**: `#1E1E1E` (Deep charcoal text)
- **Secondary Text**: `#6B6B6B` (Muted gray)
- **Accent Color**: `#5B4636` (Refined warm bronze)

### 2. Custom Typography Strategy
- **Display Name (`RIDELL SALEMA`)**: Google Font [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) configured via `next/font/google`.
- **Body & Headings**: Google Font [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (delivering a clean Neue Montreal aesthetic — *Inter is strictly omitted*).

### 3. Left Vertical Navigation (3 Pills)
- Pinned left-side navigation featuring exactly 3 pills:
  - `01 Overview`
  - `02 Projects`
  - `03 Experience`
- Active section detection via `IntersectionObserver` scroll-spy.
- Smooth scrolling on click.

---

## Sections Built

### Section 1: Minimalist Hero (Landing)
- Ultra-large display typography: `RIDELL SALEMA` in `Roboto Slab`.
- Subtitle: `Software Engineering Student`.
- Clean layout with zero social icons, profile picture, or clutter.

### Section 2: Professional Summary
- Concise tags: `Software Engineering Student` · `Backend Engineering` · `Cybersecurity` · `Africa University`.
- Single sentence statement: *"Building secure backend systems and digital products that solve real-world business problems."*

### Featured Projects (7 Projects)
Single data source at [`lib/projects.ts`](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/lib/projects.ts):
1. **MUZINDA** — Architectural digital platform & property management ecosystem.
2. **TraceAI** — Real-time AI audit & intelligence tracking platform.
3. **Kost Timbers** — Commercial inventory & lumber supply chain portal.
4. **Hivu Restaurant** — Bespoke digital dining experience & table reservation system.
5. **Junior School Website** — Institutional educational portal & parent communication hub.
6. **PA Rental Website** — Professional audio equipment rental & scheduling system.
7. **Elevated Value Partners** — Enterprise software hub for cybersecurity, AI, & data.

#### Project Card Features:
- Custom browser frames with 3-dot control header, thin border, and subtle shadow.
- Hover interaction (~250ms duration): Card lifts `-4px`, screenshot zooms `1.03x`, and arrow slides `3px`.
- Actions: `Live Website` and `GitHub` buttons.

### Experience Section (3 Premium Cards)
1. **Africa University** — Software Engineering Student (2024 — Present | Expected Graduation: 2028).
2. **Elevated Value Partners** — Startup | Focus: Cybersecurity, AI, Data, Internal Systems (includes placeholder link).
3. **Freelance Web Developer** — Business websites, Internal systems, Digital catalogues, Custom software solutions.

### Currently Learning
- Clean typographic grid without icons for:
  - `Cybersecurity`
  - `System Design`
  - `AI Engineering`
  - `Cloud Infrastructure`

### Contact & Footer
- Large heading: `Let's Connect`
- Custom typographic action links for `Email`, `LinkedIn`, `GitHub`, and `Download CV`.
- Minimal footer: `Ridell Salema` · `Built with Next.js.`

---

## Verification Results

### Build Verification
- Command: `npx next build`
- Result: **Passed cleanly with zero errors**
- Pre-rendered all 5 static pages smoothly.
