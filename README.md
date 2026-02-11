# Next Staking

Minimal Next.js application that renders `fanbase-staking-widget` on the main page.

## Stack

- Next.js (`pages` router)
- React 18 + TypeScript
- `fanbase-staking-widget`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main integration

The staking widget is rendered in `pages/index.tsx` using dynamic import with `ssr: false`:

- `appId`: configured inline in `pages/index.tsx`
- `chainId`: configured inline in `pages/index.tsx` (currently `80001`)

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Project structure

- `pages/index.tsx` - main staking page
- `pages/_app.tsx` - global app wrapper
- `styles/` - global and module CSS
- `public/` - static assets
