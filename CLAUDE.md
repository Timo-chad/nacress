# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Type-check (tsc -b) then build for production
npm run preview   # Preview production build locally
```

No lint or test scripts are configured yet.

## Architecture

**NACRESS** is a luxury jewelry e-commerce landing page — a React 19 SPA built with Vite. The site is French-language, targeting a Coastal Luxury brand identity.

**Stack:** React 19 · TypeScript 5.7 · Vite 6 · TanStack Router · Tailwind CSS 4 · Framer Motion 12

### Routing

TanStack Router with file-based routing. `src/routeTree.gen.ts` is auto-generated — do not edit manually. Adding a new route means creating a file under `src/routes/` and letting the router codegen regenerate the tree (runs automatically on `dev`).

### Page structure

The homepage (`src/routes/index.tsx`) is a full-page scroll experience composed of stacked components:

1. `BackgroundVideo` — fixed, parallax video (scroll-driven `bottom` position)
2. `Navbar` — fixed header; switches to frosted glass at 60 px scroll threshold
3. `Hero` — full-viewport-height text entrance with Framer Motion `animate-nacress-fade-up`
4. `PoeticSection` — brand story with scroll-triggered Framer Motion animations
5. `ProductGrid` — 6 full-screen product slides; scroll progress drives opacity, scale, and parallax per slide
6. `Footer`

### Design system

Custom CSS variables and utilities are defined in `src/styles.css` under the "Coastal Luxury" theme:
- Color tokens: `--sand-light`, `--sand-dark`, `--bronze`, `--turquoise`, `--turquoise-deep`
- Typography: "Cormorant Garamond" (display) + "Inter" (body), both from Google Fonts
- Key utility classes: `.tracking-luxury` (0.35 em letter-spacing), `.reading-veil` (backdrop blur overlay), `.animate-nacress-bob`

### Path aliases

`@/*` resolves to `./src/*` (configured in `tsconfig.json` and `vite.config.ts`).

### Utility

`src/lib/utils.ts` exports `cn()` (class merging via `clsx` + `tailwind-merge`). Use it whenever conditionally composing Tailwind classes.

`src/hooks/use-mobile.tsx` exposes `useIsMobile()` — breakpoint is 768 px.

### Static assets

Product images live in `src/assets/catalogue 2026/`. The background video (`bg-coastal.mp4`) is in `public/`.

### Current limitations

The site is fully static: no cart, no backend, no API integration. Product data is hardcoded in `ProductGrid.tsx`.
