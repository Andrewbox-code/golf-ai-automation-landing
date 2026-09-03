import { CheckCircle2 } from 'lucide-react'

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-fairway-950 text-cream-50">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #fdfbf5 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-300">
            Done-for-you AI automation for golf businesses
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Stop losing lessons to missed calls and no-shows.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream-100/85 md:text-xl">
            We install AI automation that runs your front desk 24/7 — so
            every lead gets a fast reply, every lesson gets confirmed, and
            every round ends with a review request. You focus on teaching
            and running your course.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#audit"
              className="w-full rounded-full bg-gold-400 px-8 py-3.5 text-center text-base font-semibold text-fairway-950 shadow-lg shadow-gold-400/20 transition hover:bg-gold-300 sm:w-auto"
            >
              Book a Free Automation Audit
            </a>
            <a
              href="#automations"
              className="w-full rounded-full border border-cream-50/25 px-8 py-3.5 text-center text-base font-semibold text-cream-50 transition hover:bg-cream-50/10 sm:w-auto"
            >
              See What We Automate
            </a>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-cream-100/70 sm:flex-row">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-300" />
              No long-term contracts
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-300" />
              Live in under 2 weeks
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-300" />
              Built for golf pros, not IT teams
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
