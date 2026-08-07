# Waleion

Modern software product studio website.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + CSS Variables + shadcn/ui
- Framer Motion · GSAP · Lenis
- React Three Fiber · Drei
- React Hook Form · Zod
- Geist Sans / Geist Mono

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/           # Routes, metadata, SEO
  components/
    ui/          # Design-system primitives (shadcn + custom)
    layout/      # Shell, container, section, providers
    sections/    # Page sections
    cards/       # Card compositions
    buttons/     # Composite buttons
    navigation/  # Nav primitives
    animations/  # Motion wrappers
    icons/       # Brand / product icons
  lib/           # Utils, SEO, fonts, animations, validations
  hooks/         # Lenis, media query, mounted
  styles/        # Design tokens
  constants/     # Site + navigation config
  types/         # Shared TypeScript types
  data/          # Structured content
public/          # Static assets
```

## Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm run dev`   | Dev server (Turbopack) |
| `npm run build` | Production build       |
| `npm run start` | Start production server|
| `npm run lint`  | ESLint                 |

## Note

Brand: **Waleion**
