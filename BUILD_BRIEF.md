# Recepta AI — Build Brief

This file is written as a standing prompt. Paste the section below
("Prompt for a new session") into a fresh Claude Code session any time
you want to keep building this product — it has everything needed to pick
up the work with no extra context.

## Product

**Recepta AI** — an AI front desk for local service businesses (salons,
dental/med spas, contractors, auto shops, gyms, vets, and similar). It:

1. Answers website chat and texts back every missed call within seconds, 24/7
2. Qualifies the lead in natural conversation (what they need, urgency, budget)
3. Books the appointment straight into the business's calendar
4. Alerts the business owner immediately when a hot lead needs a human

## Why this and why now

Local service businesses lose real revenue every day to unanswered calls
and after-hours chats — and most have no realistic way to staff a 24/7
front desk. "AI receptionist" tools are one of the fastest-growing wedges
in applied AI for exactly this reason: clear, provable ROI (a booked
appointment vs. a missed one), a large addressable market (every local
service business), high willingness to pay ($200–1,000/mo), low churn
once it's handling real revenue, and a real reseller channel — marketing
agencies and consultants are actively white-labeling tools like this to
sell to their own local-business clients.

## Business model

- **Direct SaaS**: sell subscriptions straight to local businesses
  (Starter/Growth tiers, see `Pricing.tsx`)
- **Agency reseller channel**: white-label tier for agencies/consultants
  who resell to their own client base — this is usually the faster path
  to volume, since one agency deal can bring 10+ locations at once
- **Founding-partner motion**: the first ~20 customers get locked-in
  pricing and hands-on setup in exchange for being early — this builds
  the first real testimonials and case studies, which are currently
  missing from the landing page on purpose (no fake reviews)

## Current state (what's already built)

- React/Vite/Tailwind landing page (`src/`) with hero, problem, live
  interactive demo, how-it-works, target industries, pricing, and a
  founding-partner lead-capture form
- A **real Claude-powered backend** for the live demo
  (`netlify/functions/chat.mts`) — once `ANTHROPIC_API_KEY` is set in
  Netlify's environment variables, `src/components/LiveDemo.tsx` has real
  AI conversations, not a script. Without the key set (or when the
  function isn't reachable, e.g. plain local dev), it falls back
  automatically to a realistic scripted conversation so the site never
  breaks — see the README's "Enabling real AI conversations" section
- A **real missed-call text-back and SMS pipeline** via Twilio
  (`netlify/functions/twilio-voice.mts`, `twilio-voice-status.mts`,
  `sms.mts`) — an unanswered call gets texted back within seconds, and
  the resulting SMS conversation runs on the same Claude backend with
  short-term memory per phone number (Netlify Blobs). All three verify
  Twilio's request signature before doing anything, and every send is
  wrapped so a Twilio or Blobs hiccup degrades gracefully instead of
  crashing the webhook. Needs a Twilio account + phone number to
  activate — see the README's "Enabling real missed-call text-back"
  section for exact setup steps
- **Real multi-tenancy** (`netlify/functions/_lib/business-store.mts`,
  `admin-business.mts`, `public/admin.html`) — this one deployment can
  answer for many different businesses at once. Whichever Twilio number
  a call/text came in on decides whose name, hours, pricing, and
  forwarding number get used (stored in Netlify Blobs, looked up by
  number); an unconfigured number just gets the demo persona. Businesses
  are added/edited/removed at `/admin.html` (password-protected by
  `ADMIN_KEY`) with no code changes and no redeploy — this is what lets
  a second, third, and Nth customer get onboarded without a developer
  each time. Verified against Netlify's own local Blobs emulator:
  create/list/lookup/delete all confirmed working, and a call to a
  configured number correctly uses that business's own persona instead
  of the demo's.
- The lead form posts to Netlify Forms — zero backend, works the moment
  this is deployed on Netlify (see README for deploy steps)
- Nothing here yet handles real calendars or billing, and the web chat
  widget still only runs on this landing page (not yet embeddable on a
  customer's own site) — that's the roadmap below

## What's needed from the human to go further

- A Netlify account connected to this GitHub repo — deploy takes minutes
  (`netlify.toml` in this repo already configures the build + functions)
- An Anthropic API key from console.anthropic.com, set as
  `ANTHROPIC_API_KEY` in Netlify — turns the live demo into a real AI
  conversation (this is the one piece of Phase 3 already coded and
  waiting on a key)
- A domain name (optional but recommended before real outreach)
- A Twilio account, set as `TWILIO_ACCOUNT_SID`/`TWILIO_AUTH_TOKEN` in
  Netlify — one account covers every business's number, this is a
  one-time setup, not per-customer (this is Phase 4, already coded and
  waiting on an account, same as Phase 3 waited on an Anthropic key)
- An `ADMIN_KEY` (any long random string) set in Netlify, then a visit
  to `/admin.html` to actually add each real customer's business (their
  Twilio number, name, hours/pricing, forwarding number) — this is the
  step that turns "the code supports many businesses" into "this
  specific customer's calls actually work"
- For Phase 6+: a Stripe account (for billing) and a calendar API
  (Cal.com or Google Calendar) — neither is needed to deploy, collect
  leads, run real AI web chat, or run real missed-call text-back today

## Roadmap, in priority order (revenue first, infrastructure second)

1. **Deploy + start driving traffic now.** The MVP as it stands is enough
   to validate demand. Deploy to Netlify, get a domain, and start putting
   this in front of real local businesses (outbound outreach, local
   Facebook/Nextdoor groups, referrals) before building anything else.
   Every founding-partner signup is a live buying signal.
2. **Turn outbound into a repeatable motion.** Draft (and keep iterating)
   cold email/DM scripts targeting the industries in `Industries.tsx`,
   pitching the live demo link directly. Track reply and signup rates per
   script/industry and double down on what converts.
3. **Real AI backend — done, pending a key.** `netlify/functions/chat.mts`
   already calls Claude server-side (the API key never reaches the
   client). Set `ANTHROPIC_API_KEY` in Netlify to turn it on.
4. **Missed-call text-back via Twilio — done, pending an account.**
   `netlify/functions/twilio-voice.mts`, `twilio-voice-status.mts`, and
   `sms.mts` handle the full flow: ring the business (if configured),
   text back on no-answer, and carry the SMS conversation on the same
   Claude backend with per-number memory. Every text-back sends from the
   specific business's own Twilio number (whichever number was actually
   called), never a shared/global one — set `TWILIO_ACCOUNT_SID`/
   `TWILIO_AUTH_TOKEN` to turn it on — see the README.
5. **Multi-tenancy — done.** One deployment now answers correctly for as
   many businesses as you add at `/admin.html`, looked up by whichever
   Twilio number was called or texted. Onboarding customer #2, #3, etc.
   no longer needs a code change or a redeploy — just a visit to
   `/admin.html` with their info and a Twilio number pointed at the same
   two webhook URLs. What's still missing: the web chat widget
   (`chat.mts`) is wired to accept a `business` key already, but nothing
   embeds it on a real customer's own site yet — right now it only runs
   on this landing page as the demo.
6. **Embeddable web widget.** Package `src/components/LiveDemo.tsx`'s
   chat UI as a small script a customer can drop into their own site
   (a `<script>` tag pointing at a bundled widget, similar to Intercom/
   Drift), passing their business key so `chat.mts` answers as them.
7. **Calendar booking.** Wire confirmed appointments into Cal.com or
   Google Calendar so bookings land on the business's real calendar
   without manual entry.
8. **Stripe billing.** Self-serve checkout for the Starter/Growth tiers;
   the Agency tier can stay a manual sales conversation.
9. **Case studies.** Once the first founding partners are live, replace
   the honest "no fake testimonials yet" framing in `FoundingPartners.tsx`
   with real quotes and results.

## Prompt for a new session

> I'm continuing work on Recepta AI, an AI front desk product for local
> service businesses, in this repo. Read `BUILD_BRIEF.md` and `README.md`
> for full context on the product, business model, and roadmap. The
> landing page is deployed (or ready to deploy) via Netlify, with a real
> Claude-powered backend for web chat and Twilio-powered missed-call
> text-back/SMS already built, and real multi-tenancy so one deployment
> can serve many businesses (added/managed at `/admin.html`, no code
> changes needed per customer) — see "What's needed from the human" in
> `BUILD_BRIEF.md` for the few things still needed to flip each piece on.
> My priority is revenue: help me either
> (a) push the roadmap forward — pick the next unbuilt phase in
> `BUILD_BRIEF.md`'s roadmap and implement it, or (b) improve conversion
> on the existing landing page (copy, demo realism, pricing framing), or
> (c) draft outbound sales/outreach content to get real local businesses
> looking at this. Ask me which of these to focus on if it isn't obvious
> from what I've said, then do the work end-to-end — build it, test it,
> commit it, and tell me exactly what I still need to do on my end (like
> connecting an API key or a Stripe account) to make it real.
