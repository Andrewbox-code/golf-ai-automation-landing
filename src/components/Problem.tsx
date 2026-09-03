import { Clock3, PhoneMissed, Star, UserX } from 'lucide-react'

const pains = [
  {
    icon: PhoneMissed,
    title: 'Leads go cold after hours',
    body: 'A parent calls about junior lessons at 7pm. No one answers. They call the next pro shop instead.',
  },
  {
    icon: UserX,
    title: 'No-shows with no follow-up',
    body: 'Lessons and tee times get booked, then quietly no-showed — and nobody reaches out to reschedule or refill the slot.',
  },
  {
    icon: Star,
    title: 'No time to chase reviews',
    body: 'Great lessons and rounds happen every day, but asking for a Google review always falls to the bottom of the list.',
  },
  {
    icon: Clock3,
    title: 'Slow replies lose bookings',
    body: 'Prospects text three golf schools at once. Whoever responds first — often within minutes — wins the booking.',
  },
]

function Problem() {
  return (
    <section className="bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-fairway-950 md:text-4xl">
            You didn't get into golf to run a call center.
          </h2>
          <p className="mt-4 text-lg text-fairway-800/80">
            These are the everyday admin gaps that quietly cost instructors
            and small courses real revenue.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="flex gap-4 rounded-2xl border border-fairway-900/10 bg-cream-50 p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fairway-900/10 text-fairway-700">
                <pain.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-semibold text-fairway-950">{pain.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-fairway-800/75">
                  {pain.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
