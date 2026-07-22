# Implementation Plan - Ridell Salema Portfolio Website

A bespoke, editorial, minimalist personal portfolio website for **Ridell Salema**, crafted with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The design emphasizes premium typography, generous whitespace, off-white editorial tones, and subtle motion.

## Visual & Technical Specifications

### Color Palette
- **Background**: `#FAFAF8` (Soft off-white tone)
- **Card Background**: `#F3F1EC` (Elevated neutral surface)
- **Borders**: `#D8D5CE` (Subtle divider color)
- **Primary Text**: `#1E1E1E` (Deep charcoal)
- **Secondary Text**: `#6B6B6B` (Muted gray)
- **Accent**: `#5B4636` (Refined warm bronze/brown)

### Typography Strategy
- **Display Name (`RIDELL SALEMA`)**: Google Font `Roboto Slab` (bold/medium display styling).
- **Body & Headlines**: Google Font `Plus Jakarta Sans` or `Outfit` (clean, contemporary sans-serif with a Neue Montreal feel — *Inter is strictly prohibited*).

### Motion & Interaction Guidelines
- **Scroll Animations**: Subtle opacity fade-in with 12px upward slide on scroll into view.
- **Card Hover**: 250ms smooth transition, lifting `-4px` on y-axis, screenshot zooming `1.03x`, and arrow sliding `3px` right.
- **Navigation**: Left-pinned 3-pill vertical navigation with active section indicator tracking scroll position.

---

## Proposed Changes

### Project Initialization & Setup

#### [NEW] [package.json](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/package.json)
Initialize Next.js 15 app with React 19, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

#### [NEW] [tailwind.config.ts](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/tailwind.config.ts) & [app/globals.css](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/app/globals.css)
Define design system variables, custom color utility classes, custom typography font families, and global smooth scroll behavior.

#### [NEW] [app/layout.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/app/layout.tsx)
Set up root layout with font imports (`Roboto_Slab` and `Plus_Jakarta_Sans`), SEO metadata (OpenGraph, Twitter card, favicon), and theme container with `#FAFAF8` background.

---

### Centralized Data & Asset Layer

#### [NEW] [lib/projects.ts](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/lib/projects.ts)
Single source of truth for the 7 featured projects:
1. **MUZINDA**
2. **TraceAI**
3. **Kost Timbers**
4. **Hivu Restaurant**
5. **Junior School Website**
6. **PA Rental Website**
7. **Elevated Value Partners**

Includes title, description, screenshot image path, live URL, and GitHub URL.

#### [NEW] [public/images/projects/](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/public/images/projects)
High-resolution, custom-styled SVG/PNG project preview mockups designed specifically for each project to render inside the browser frames.

---

### Core Component Layer

#### [NEW] [components/navigation/NavPills.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/navigation/NavPills.tsx)
Left-side floating vertical navigation bar with exactly 3 pills:
- `01 Overview` (Landing & Professional Summary)
- `02 Projects` (Featured Projects)
- `03 Experience` (Experience, Currently Learning, Contact)

Features active section highlighting using `IntersectionObserver` and smooth click-to-scroll.

#### [NEW] [components/sections/HeroSection.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/sections/HeroSection.tsx)
Section 1: Minimalist full-screen hero section featuring ultra-large display typography `RIDELL SALEMA` in `Roboto Slab` and `Software Engineering Student` below. No profile picture, no icons, no buttons.

#### [NEW] [components/sections/SummarySection.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/sections/SummarySection.tsx)
Section 2: Concise line tags (`Software Engineering Student` · `Backend Engineering` · `Cybersecurity` · `Africa University`) and single-sentence mission statement.

#### [NEW] [components/projects/ProjectCard.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/projects/ProjectCard.tsx) & [components/sections/ProjectsSection.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/sections/ProjectsSection.tsx)
Featured Projects section with custom browser frames around screenshots, hover lift/zoom/arrow slide effects, and Live Website / GitHub buttons.

#### [NEW] [components/sections/ExperienceSection.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/sections/ExperienceSection.tsx)
3 premium cards for Africa University, Elevated Value Partners, and Freelance Web Developer.

#### [NEW] [components/sections/LearningSection.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/sections/LearningSection.tsx)
Typography-focused "Currently Learning" section (Cybersecurity, System Design, AI Engineering, Cloud Infrastructure).

#### [NEW] [components/sections/ContactSection.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/sections/ContactSection.tsx) & [components/layout/Footer.tsx](file:///c:/Users/MTP/Documents/GitHub/ridell-portfolio/components/layout/Footer.tsx)
Contact section with large display heading `Let's Connect`, placeholder links for Email, LinkedIn, GitHub, Download CV, and minimal footer.

---

## Verification Plan

### Automated Verification
- `npm run build`: Verify TypeScript compilation and Next.js static site generator with zero errors.
- `npm run lint`: Ensure code cleanliness and standard compliance.

### Manual & Visual Verification
- Verify color exactness against specified HEX codes (`#FAFAF8`, `#F3F1EC`, `#D8D5CE`, `#1E1E1E`, `#6B6B6B`, `#5B4636`).
- Inspect font loading to ensure `Roboto Slab` for name and `Plus Jakarta Sans` for body text.
- Test scroll spy and smooth scroll with 3 vertical nav pills.
- Verify responsive layout across Desktop, Tablet, and Mobile screen sizes.
