# DERYK home page — standalone source

This folder is independent of the original AGI platform project. It includes only the home page, header, footer, styles, logo and latest character image. Content is local in `src/content.ts`; no backend, shared workspace, environment file or Docker is required.

## Run

Install Node.js 24 (npm is included), extract the ZIP, then open a terminal in this folder:

```powershell
npm install
npm run dev
```

Open the URL printed by Vite in the terminal, usually **http://localhost:5173**. Keep the terminal running. Stop with Ctrl+C.

For a production build:

```powershell
npm run build
npm run preview
```

Do not double-click `index.html`; React needs the development or preview server. Internet is required for the first dependency installation. Google Fonts uses the network; the page falls back to a sans-serif font if unavailable. The character image and Font Awesome icons are local.

## What to edit

- `src/App.tsx`: home-page structure
- `src/content.ts`: home-page text
- `src/styles.css`: Tailwind/DaisyUI theme and responsive styles
- `src/components/`: header, footer and DERYK wordmark
- `public/images/agi-research.png`: latest character image

The Download button is intentionally unavailable. Navigation labels for other pages are disabled in this home-only preview, since those pages are not included. Their intended destinations are retained in `data-destination`. When integrating with your team's website, replace `PreviewLink` with real links or your router's link component. Home links work normally. This repository contains only the standalone home page.
