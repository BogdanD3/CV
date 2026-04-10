# CV Retro v2.0 — Bogdan Delic

Gamified retro CV built with **React + TypeScript + Tailwind CSS**.

## Stack
- React 18
- TypeScript 5
- Tailwind CSS 3
- Vite 5

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI pieces
│   ├── FloatingIcons.tsx
│   ├── GlitchTitle.tsx
│   ├── PipRow.tsx
│   ├── Sidebar.tsx
│   └── StatBar.tsx
├── tabs/             # One file per tab/section
│   ├── ProfileTab.tsx
│   ├── QuestsTab.tsx
│   ├── SkillsTab.tsx
│   ├── AchievementsTab.tsx
│   └── ContactTab.tsx
├── data/             # All CV content lives here
│   └── index.ts
├── types/            # TypeScript interfaces
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Deploying to GitHub Pages

1. Set `base` in `vite.config.ts` to your repo name:
   ```ts
   base: '/CV-WebSite/',
   ```
2. Build: `npm run build`
3. Push the `dist/` folder to the `gh-pages` branch, or use the `gh-pages` npm package:
   ```bash
   npm install -D gh-pages
   npx gh-pages -d dist
   ```

## Customisation

All content is in `src/data/index.ts` — edit skills, quests, achievements and contact links there. No need to touch any component files.
