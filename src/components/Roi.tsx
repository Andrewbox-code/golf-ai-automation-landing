import { PhoneMissed, TrendingUp, UserX, XCircle } from 'lucide-react'

const before = [
  { icon: PhoneMissed, label: 'Missed after-hours calls', value: 'Lost leads' },
  { icon: UserX, label: 'No-shows each month', value: 'No follow-up' },
  { icon: XCircle, label: 'Google reviews requested', value: 'Rarely asked' },
]

const after = [
  { icon: PhoneMissed, label: 'After-hours inquiries', value: 'Answered in seconds' },
  { icon: UserX, label: 'No-shows each month', value: 'Reminded & confirmed' },
  { icon: TrendingUp, label: 'Google reviews requested', value: 'Every time, automatically' },
]

function Roi() {
  return (
    <section id="roi" className="bg-fairway-900 py-20 text-cream-50 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-300">
            The Math
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            It pays for itself before you notice the bill.
          </h2>
          <p className="mt-4 text-lg text-cream-100/80">
            One recovered lesson booking or two saved no-shows a month
            typically covers the entire retainer. Everything after that is
            pure upside.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-cream-50/10 bg-fairway-950/60 p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-100/60">
              Before ParFront
            </h3>
            <div className="mt-6 space-y-5">
              {before.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-300">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="flex flex-1 items-center justify-between gap-3">
                    <span className="text-sm text-cream-100/80">{item.label}</span>
                    <span className="text-sm font-semibold text-red-300">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-gold-400/30 bg-fairway-950/60 p-8 ring-1 ring-gold-400/20">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-300">
              With ParFront
            </h3>
            <div className="mt-6 space-y-5">
              {after.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-400/15 text-gold-300">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div className="flex flex-1 items-center justify-between gap-3">
                    <span className="text-sm text-cream-100/80">{item.label}</span>
                    <span className="text-sm font-semibold text-gold-300">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gold-400/30 bg-gold-400/10 px-6 py-5 text-center">
          <p className="text-base font-medium text-cream-50">
            Example: a $65 lesson recovered from a single after-hours text
            reply, twice a month, already covers the Starter plan.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Roi
