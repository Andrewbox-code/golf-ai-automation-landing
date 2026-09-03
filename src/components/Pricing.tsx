import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$297',
    description: 'One automation, done right — a focused fix for your biggest leak.',
    features: [
      'Choose 1 automation module',
      'Setup & integration included',
      'Monthly performance summary',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$597',
    description: 'The most popular setup — cover leads, no-shows, and reviews together.',
    features: [
      'Choose any 3 automation modules',
      'Setup & integration included',
      'Custom scripts for your business',
      'Priority phone & text support',
      'Monthly performance review call',
    ],
    highlighted: true,
  },
  {
    name: 'Full-Service',
    price: '$997',
    description: 'Every module running, fully managed — your entire front desk on autopilot.',
    features: [
      'All 4 automation modules',
      'Custom scripts & ongoing tuning',
      'Priority phone & text support',
      'Monthly strategy call',
      'New automations added as we build them',
    ],
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-700">
            Pricing
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-fairway-950 md:text-4xl">
            Less than one part-time front desk hire.
          </h2>
          <p className="mt-4 text-lg text-fairway-800/80">
            Flat monthly retainers. No setup surprises, no long-term
            contracts, cancel any time.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? 'border-fairway-900 bg-fairway-950 text-cream-50 shadow-xl lg:-translate-y-3'
                  : 'border-fairway-900/10 bg-cream-50 text-fairway-950'
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fairway-950">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl font-semibold">{tier.name}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  tier.highlighted ? 'text-cream-100/75' : 'text-fairway-800/70'
                }`}
              >
                {tier.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-serif text-4xl font-semibold">{tier.price}</span>
                <span
                  className={`text-sm ${
                    tier.highlighted ? 'text-cream-100/70' : 'text-fairway-800/60'
                  }`}
                >
                  / month
                </span>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.highlighted ? 'text-gold-300' : 'text-fairway-600'
                      }`}
                      strokeWidth={2.5}
                    />
                    <span className={tier.highlighted ? 'text-cream-100/90' : 'text-fairway-800/85'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#audit"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                  tier.highlighted
                    ? 'bg-gold-400 text-fairway-950 hover:bg-gold-300'
                    : 'bg-fairway-900 text-cream-50 hover:bg-fairway-800'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
