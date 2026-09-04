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

- Static React/Vite/Tailwind landing page (`src/`) with hero, problem,
  live interactive demo, how-it-works, target industries, pricing, and a
  founding-partner lead-capture form
- The "live demo" (`src/components/LiveDemo.tsx`) is a **scripted**
  keyword-matched chat, not a real AI backend — it exists so a prospect
  can feel the product immediately with zero infrastructure cost
- The lead form posts to Netlify Forms — zero backend, works the moment
  this is deployed on Netlify (see README for the 3-step deploy)
- Nothing here handles real phone numbers, real SMS, real calendars, or
  billing yet — that's the roadmap below

## What's needed from the human to go further

- A Netlify (or similar) account connected to this GitHub repo — deploy
  takes minutes and needs no other setup for the current MVP
- A domain name (optional but recommended before real outreach)
- For Phase 3+: an Anthropic API key (for real AI conversations), a
  Twilio account (for real SMS/missed-call text-back), a Stripe account
  (for billing), and a calendar API (Cal.com or Google Calendar) — none
  of these are needed to deploy and start collecting leads today

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
3. **Real AI backend.** Replace the scripted `LiveDemo` with an actual
   Claude-powered conversation engine behind a serverless function
   (Netlify Functions or Vercel), so the same widget can be embedded on a
   real customer's site. Keep the Anthropic API key server-side only —
   never ship it to the client.
4. **Missed-call text-back via Twilio.** When a call to a client's
   forwarded/tracking number goes unanswered, auto-send an SMS that opens
   the same AI conversation flow, texting back within seconds.
5. **Calendar booking.** Wire confirmed appointments into Cal.com or
   Google Calendar so bookings land on the business's real calendar
   without manual entry.
6. **Stripe billing.** Self-serve checkout for the Starter/Growth tiers;
   the Agency tier can stay a manual sales conversation.
7. **Case studies.** Once the first founding partners are live, replace
   the honest "no fake testimonials yet" framing in `FoundingPartners.tsx`
   with real quotes and results.

## Prompt for a new session

> I'm continuing work on Recepta AI, an AI front desk product for local
> service businesses, in this repo. Read `BUILD_BRIEF.md` and `README.md`
> for full context on the product, business model, and roadmap. The
> landing page and a scripted live demo already exist and are deployed
> (or ready to deploy) via Netlify. My priority is revenue: help me either
> (a) push the roadmap forward — pick the next unbuilt phase in
> `BUILD_BRIEF.md`'s roadmap and implement it, or (b) improve conversion
> on the existing landing page (copy, demo realism, pricing framing), or
> (c) draft outbound sales/outreach content to get real local businesses
> looking at this. Ask me which of these to focus on if it isn't obvious
> from what I've said, then do the work end-to-end — build it, test it,
> commit it, and tell me exactly what I still need to do on my end (like
> connecting an API key or a Stripe account) to make it real.
