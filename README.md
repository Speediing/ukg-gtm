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

Open [http://localhost:3000](http://localhost:3000). Default password is `land2expand` (override with `SITE_PASSWORD`).

## Brand

The lockup loads the official UKG wordmark directly from
`https://www.ukg.com/themes/custom/ukg_theme/logo.svg`. The SpaceXAI asset is
stored under `public/brand/`.

## Deploy

Deploy under the `jasonwiker` Vercel team with
`SITE_PASSWORD=land2expand`. The production alias is
`ukg-grokbot.vercel.app`.
