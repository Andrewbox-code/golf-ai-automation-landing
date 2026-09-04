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
- A **real, working live demo** (`src/components/LiveDemo.tsx` +
  `netlify/functions/chat.mts`) — the chat widget calls a real Claude-powered
  backend once you add an API key (see below). If the key isn't set, or the
  function isn't reachable (e.g. plain `npm run dev`/`vite preview`), it
  falls back to a realistic scripted conversation automatically — the site
  always works, it just isn't "live AI" until configured
- How-it-works, target-industries, and founding-partner pricing sections
- A lead-capture form (`src/components/WaitlistForm.tsx`) for founding
  partners, wired to Netlify Forms with zero extra backend

## Enabling real AI conversations

The live demo is backed by a real Netlify Function (`netlify/functions/chat.mts`)
that calls the Claude API. To turn it on:

1. Deploy this site on Netlify (see below).
2. In your Netlify site: **Site configuration → Environment variables** →
   add `ANTHROPIC_API_KEY` with a key from
   [console.anthropic.com](https://console.anthropic.com).
3. Redeploy. The widget's status line will switch to "Live AI · online now"
   once it gets a real response.

Optionally set `CHAT_MODEL` (defaults to `claude-sonnet-5`) to use a
cheaper/faster model like `claude-haiku-4-5-20251001` if this gets enough
public traffic that cost matters. See `.env.example` for both variables,
and `npx netlify-cli dev` to run the function locally (plain `npm run dev`
does not run Netlify Functions, so the widget will use the scripted
fallback in local dev unless you use `netlify dev`).

## Enabling real missed-call text-back (Twilio)

Beyond the website chat widget, this repo also has a real backend for
Recepta AI's other core pitch — texting back missed calls and carrying on
an SMS conversation — via three more Netlify Functions:

- `netlify/functions/twilio-voice.mts` — handles an incoming call: rings
  `BUSINESS_FORWARD_NUMBER` if set, or texts back immediately if not
- `netlify/functions/twilio-voice-status.mts` — fires when that ring
  attempt finishes; anything other than "answered" triggers a text-back
- `netlify/functions/sms.mts` — handles the resulting SMS conversation
  with real Claude replies and short-term memory per phone number (via
  Netlify Blobs, zero extra setup — provisioned automatically once
  deployed on Netlify)

Every one of these verifies Twilio's `X-Twilio-Signature` header (using
Twilio's own SDK, not a hand-rolled check) before doing anything, so only
genuine requests from Twilio can trigger a paid API call or an SMS send.

To turn it on:

1. Buy a phone number in [console.twilio.com](https://console.twilio.com).
2. Add `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and `TWILIO_PHONE_NUMBER`
   (the number you just bought) to your Netlify environment variables —
   same place as `ANTHROPIC_API_KEY`, both are required for this to work.
3. Optionally set `BUSINESS_FORWARD_NUMBER` (the real business line to
   try first) and `BUSINESS_NAME` (used in the text-back opener).
4. In the Twilio number's configuration, set:
   - **A call comes in** → Webhook, `https://YOUR-SITE.netlify.app/.netlify/functions/twilio-voice`, HTTP POST
   - **A message comes in** → Webhook, `https://YOUR-SITE.netlify.app/.netlify/functions/sms`, HTTP POST
5. Redeploy (env var changes need a redeploy to take effect) and call the
   number to test.

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
   **Import an existing project** → pick this repo and branch. Netlify
   reads `netlify.toml` in this repo automatically, so build command,
   publish directory, and the functions folder are already configured —
   just confirm and deploy.
3. Every submission on the "Claim your founding-partner spot" form now
   shows up under your Netlify site's **Forms** tab, and Netlify can email
   you on each new submission (Site settings → Forms → Notifications).
4. Add `ANTHROPIC_API_KEY` (see "Enabling real AI conversations" below) to
   make the live demo run on real AI instead of its scripted fallback.

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
