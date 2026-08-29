# UKG x SpaceXAI

A passworded Grok Bot leave-behind for UKG sales.

## What it is

Three sales workflows on one page. Each one starts with a real work trigger,
shows the agent chat beside its computer, and ends with an artifact for the rep
to review.

The app keeps the seeded architecture: Next.js 15.5, the `src/` App Router,
Geist, and the vGPU hero effect.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set `SITE_PASSWORD` in `.env.local` before starting the app.
Open [http://localhost:3000](http://localhost:3000).

## Brand

The lockup uses a local copy of the official UKG wordmark from
`https://www.ukg.com/themes/custom/ukg_theme/logo.svg`. Its source URL is
recorded beside the asset under `public/brand/`.
