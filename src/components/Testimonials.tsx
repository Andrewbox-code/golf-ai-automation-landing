import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      '“I used to lose Saturday morning lessons because I couldn’t answer my phone mid-lesson. Now every text gets a reply in under a minute, even when I’m on the range. I picked up three new junior students in the first month alone.”',
    name: 'Dana Whitfield',
    role: 'Head Golf Instructor, Ridgeline Golf Academy',
  },
  {
    quote:
      '“No-shows were quietly costing us thousands a month in tee time revenue. The reminder texts alone cut our no-show rate by more than half, and our Google reviews have nearly doubled without anyone on staff lifting a finger.”',
    name: 'Marcus Ojeda',
    role: 'General Manager, Pinehollow Golf Course',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-500">
            Results
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-fairway-950 md:text-4xl">
            What golf pros are saying
          </h2>
          <p className="mt-4 text-sm uppercase tracking-wide text-fairway-800/50">
            Placeholder testimonials — sample quotes for illustration
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative rounded-3xl border border-fairway-900/10 bg-cream-100 p-8"
            >
              <span className="absolute right-6 top-6 rounded-full border border-fairway-900/15 bg-cream-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-fairway-800/50">
                Placeholder
              </span>
              <div className="flex gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-[15px] leading-relaxed text-fairway-900/85">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-semibold text-fairway-950">{testimonial.name}</div>
                <div className="text-sm text-fairway-800/60">{testimonial.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
