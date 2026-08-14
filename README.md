# Gregor Sternat — Portfolio

A minimal, text-first portfolio built with Next.js, TypeScript, Tailwind CSS,
shadcn/ui, and Motion.

## Development

```bash
pnpm install
pnpm dev
```

The site is available at [http://localhost:3000](http://localhost:3000).

## Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm format
```

## Content

All editable portfolio content lives in
`src/lib/portfolio-content.ts`. The introduction, experience, education, stack,
and social links are adapted from Gregor's resume.

The selected project links to Gregor's Raytracer repository.

The GitHub, LinkedIn, and Twitter links point to Gregor's profiles.

## Structure

- `src/app/page.tsx` composes the one-page portfolio as a Server Component.
- `src/components/motion/reveal.tsx` contains the small client-side reveal layer.
- `src/components/experience-list.tsx` renders professional experience.
- `src/components/education-list.tsx` renders education.
- `src/components/stack-list.tsx` renders the compact technology stack.
- `src/components/project-list.tsx` owns project-row interactions.
- `components.json` keeps the shadcn/ui Nova configuration ready for future primitives.
