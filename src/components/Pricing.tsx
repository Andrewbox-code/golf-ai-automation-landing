import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$197',
    cadence: '/mo',
    description: 'One location, getting every lead answered.',
    features: [
      'Website chat AI front desk',
      'Missed-call text-back',
      'Up to 300 conversations/mo',
      'Calendar booking integration',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$397',
    cadence: '/mo',
    description: 'For busier locations that want SMS too.',
    features: [
      'Everything in Starter',
      'Two-way SMS lead follow-up',
      'Up to 1,000 conversations/mo',
      'Hot-lead alerts to your phone',
      'Priority setup & tuning',
    ],
    highlight: true,
  },
  {
    name: 'Agency / White-label',
    price: '$997',
    cadence: '/mo',
    description: 'Resell Recepta AI to your own clients under your brand.',
    features: [
      'Unlimited client locations',
      'Your branding, your pricing',
      'Dedicated onboarding support',
      'Volume conversation pricing',
    ],
    highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-mint-400">
            Founding-partner pricing
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Simple pricing. Locked in for life if you join early.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            The first 20 businesses get these rates locked in forever, plus a say
            in what we build next.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl border p-8 ${
                tier.highlight
                  ? 'border-violet-400/50 bg-violet-500/10 shadow-xl shadow-violet-950/40'
                  : 'border-ink-50/10 bg-navy-850'
              }`}
            >
              {tier.highlight && (
                <span className="mb-4 w-fit rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-semibold">{tier.name}</h3>
              <p className="mt-1 text-sm text-ink-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">{tier.price}</span>
                <span className="text-ink-300">{tier.cadence}</span>
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-100">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-400" strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  tier.highlight
                    ? 'bg-violet-500 text-white hover:bg-violet-400'
                    : 'border border-ink-50/15 text-ink-50 hover:bg-ink-50/5'
                }`}
              >
                Claim founding rate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
