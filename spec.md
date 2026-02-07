# Ridell Salema Portfolio - Design Specification

## Project Context
A striking, modern portfolio landing page for Ridell Salema - a multi-disciplinary professional combining Software Engineering, Graphic Design, Video Editing, and Mechanical expertise.

---

## 1. Design Philosophy
- **Aesthetic**: Dark, cinematic, bold typography-driven
- **Mood**: Professional yet creative, powerful visual impact
- **Inspiration**: High-end agency portfolios, Awwwards-level aesthetics

---

## 2. Color Palette (NO BLUE/PURPLE)

### Primary Colors
- **Background Dark**: `#0a0a0a` (Near black)
- **Background Secondary**: `#141414` (Card backgrounds)
- **Surface**: `#1a1a1a` (Elevated surfaces)

### Accent Colors (Red/Orange spectrum - matches R logo)
- **Primary Accent**: `#e63946` (Vibrant red)
- **Secondary Accent**: `#ff6b35` (Warm orange)
- **Gradient**: `linear-gradient(135deg, #e63946, #ff6b35)`

### Text Colors
- **Primary Text**: `#ffffff` (Pure white)
- **Secondary Text**: `#a0a0a0` (Muted gray)
- **Accent Text**: `#e63946` (Highlight red)

---

## 3. Typography

### Font Stack
- **Headlines**: 'Space Grotesk', sans-serif (Bold, modern geometric)
- **Body**: 'Inter', sans-serif (Clean, highly readable)
- **Accent/Code**: 'JetBrains Mono', monospace (For tech elements)

### Type Scale
- **Hero Name**: 4rem - 8rem (responsive clamp)
- **Section Titles**: 3rem - 4rem
- **Subsections**: 1.5rem - 2rem
- **Body**: 1rem - 1.125rem
- **Small**: 0.875rem

---

## 4. Layout Structure

### Sections (Top to Bottom)
1. **Navigation** - Sticky, transparent → solid on scroll
2. **Hero** - Full viewport, profile image with floating text
3. **About** - Split layout, bio with skill highlights
4. **Skills** - 4-column grid with animated cards
5. **Design Portfolio** - Masonry/grid gallery with lightbox
6. **Software Projects** - Card carousel/grid
7. **Contact** - Form with social links
8. **Footer** - Minimal signature

### Grid System
- Container max-width: 1400px
- Gutter: 24px (mobile) / 48px (desktop)
- Section padding: 100px - 150px vertical

---

## 5. Motion & Animation

### Scroll Animations
- Intersection Observer for fade-in reveals
- Parallax on hero elements
- Staggered card animations

### Micro-interactions
- Button hover: scale + glow
- Card hover: lift + shadow increase
- Link hover: underline slide animation
- Image hover: zoom + overlay reveal

### Transitions
- Default: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Smooth scroll: scroll-behavior: smooth

---

## 6. Asset Protocol

### Images (Provided)
- Profile: RIDELL.JPEG
- 11 Design projects in various formats (png/jpg)

### Video (To Generate)
- Hero background: Abstract red/orange motion graphics
- Resolution: 1080p minimum
- Style: Dark, moody, geometric shapes with red accents

---

## 7. Component Specifications

### Navigation
- Logo: "RS" monogram or full name
- Links: Home, About, Skills, Portfolio, Projects, Contact
- CTA Button: "Let's Connect"
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Full viewport height (100vh)
- Video background (muted, loop, autoplay)
- Large profile image with mask/blend effects
- Giant typography for name
- Animated role tagline cycling through professions

### Design Gallery
- Grid layout with varying sizes
- Hover: Scale + overlay with project title
- Lightbox for full-size viewing
- Filter tabs (optional): All, Posters, Logos, etc.

### Software Project Cards
- Dark glass morphism effect
- Tech stack icons
- Brief description
- Hover: Border glow effect
- Links: GitHub, Live Demo placeholders

### Contact Form
- Floating labels
- Input focus: Red border glow
- Submit button with loading state
- Alternative: Direct email/social links

---

## 8. Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large: > 1440px

---

## 9. Performance Targets
- Lazy loading for all images
- Intersection Observer for animations
- Minimal external dependencies
- Critical CSS inlined
- Video: compressed, poster fallback color

---

## 10. Tech Stack
- HTML5 semantic structure
- Modern CSS (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- No heavy frameworks - lightweight and fast
