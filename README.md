# DERYK AGI website — standalone frontend

This folder is independent of the original AGI platform project. It includes every website page, the shared header and footer, styles, logo and latest character image. All content is local in `src/features/agi/content.ts`; no backend, shared workspace, environment file or Docker is required.

| Page           | Route           |
| -------------- | --------------- |
| Home           | `/deryk`          |
| Approach       | `/deryk/approach` |
| Research areas | `/deryk/research` |
| Open questions | `/deryk/unknowns` |

The root `/` redirects to `/deryk`. Previous `/agi` URLs redirect to their `/deryk` equivalents. Navbar and footer links work, including the four research-area links. Browser history, direct page URLs and refresh are supported by the development and preview servers.

## Run

Install Node.js 24 (npm is included), extract the ZIP, then open a terminal in this folder:

```powershell
npm install
npm run dev
```

Open **http://localhost:5174/deryk**. Keep the terminal running. Stop with Ctrl+C. If port 5174 is already in use, stop the previous preview or run `npm run dev -- --port 5175` and open the address Vite prints.

For a production build:

```powershell
npm run build
npm run preview
```

Do not double-click `index.html`; React needs the development or preview server. Internet is required for the first dependency installation. Google Fonts uses the network; the page falls back to a sans-serif font if unavailable. The character image and Font Awesome icons are local.

## What to edit

- `src/app/App.tsx`: routes and application structure
- `src/features/agi/content.ts`: text for all pages
- `src/features/agi/pages/`: approach, research and open-question pages
- `src/features/agi/AgiPage.tsx`: home-page structure
- `src/styles/theme.css`: Tailwind/DaisyUI theme and responsive styles
- `src/components/`: header, footer, icons and DERYK wordmark
- `public/images/agi-research.png`: latest character image

The Download button remains an intentionally unavailable placeholder. All page links are now real React Router links; there are no disabled preview labels or API loading/retry states.

Only this separate folder was updated; the original project was not changed. The supplied PDF and DOCX references are not included. When deploying the production `dist/` folder to a static host, configure its SPA fallback to `index.html` for direct links to work.
