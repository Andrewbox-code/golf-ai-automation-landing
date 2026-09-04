# Recepta AI — Your AI Front Desk

Landing page + live interactive demo for **Recepta AI**, an AI front desk for
local service businesses (salons, dental/med spas, contractors, auto shops,
gyms, vets). It answers website chat and texts back every missed call 24/7,
qualifies the lead, and books it straight into the business's calendar.
Built with React, TypeScript, Vite, and Tailwind CSS.

See [`BUILD_BRIEF.md`](./BUILD_BRIEF.md) for the full product vision, the
monetization plan, and the phased roadmap — hand that file to a Claude Code
session any time you want to keep building this out.

## What's live in this MVP

- Pain-first hero and problem section aimed at missed-call/missed-chat leads
- A **fully interactive live demo** (`src/components/LiveDemo.tsx`) — a
  scripted-but-realistic chat widget visitors can actually type into, so
  prospects feel the product before any real backend exists
- How-it-works, target-industries, and founding-partner pricing sections
- A lead-capture form (`src/components/WaitlistForm.tsx`) for founding
  partners, wired to Netlify Forms with zero extra backend

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint      # run oxlint
```

## Deploying it for real

The `npm run build` output in `dist/` is a static site — it runs on any
static host. **Netlify** is the fastest path because the lead form works
out of the box with zero extra backend:

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** →
   **Import an existing project** → pick this repo and branch.
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.
4. Every submission on the "Claim your founding-partner spot" form now
   shows up under your Netlify site's **Forms** tab, and Netlify can email
   you on each new submission (Site settings → Forms → Notifications).

No Formspree, no database, no server code — the form in
`src/components/WaitlistForm.tsx` already posts to Netlify's forms
endpoint, and `index.html` has the hidden static form Netlify needs to
register it at build time. This only activates on Netlify; on any other
host (or in local dev) the form still works from the visitor's point of
view, it just doesn't have anywhere to deliver submissions yet.

### Custom domain

Once deployed, Netlify's **Domain settings** tab walks you through
pointing a domain you own at the site (or buying one through Netlify).
This step needs your own domain registrar login, so it isn't something
that can be done for you — but it's a five-minute, no-code step once the
site is live.

## Next steps

This repo is the MVP: a landing page proving the pitch with a working
interactive demo, and a way to capture interested leads. It is **not yet**
running real AI conversations, real SMS, or real billing — see
[`BUILD_BRIEF.md`](./BUILD_BRIEF.md) for exactly what to build next and in
what order, prioritized by what gets this to paying customers fastest.
