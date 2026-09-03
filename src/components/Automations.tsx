import { useState } from 'react'
import {
  CalendarClock,
  MessageCircleQuestion,
  MessageCircleReply,
  Star,
  type LucideIcon,
} from 'lucide-react'

type Module = {
  icon: LucideIcon
  name: string
  tagline: string
  details: string[]
}

const modules: Module[] = [
  {
    icon: MessageCircleReply,
    name: 'Lead Follow-Up',
    tagline: 'Instant replies to every lesson or booking inquiry, day or night.',
    details: [
      'Texts and emails new inquiries back within seconds, even at 9pm on a Sunday',
      'Answers common questions and books the lesson or tee time straight into your calendar',
      'Hands off to you automatically for anything outside the script',
    ],
  },
  {
    icon: CalendarClock,
    name: 'No-Show Reduction',
    tagline: 'Automatic reminders and confirmations before every lesson or tee time.',
    details: [
      'Sends a confirmation text right after booking, then a reminder the day before',
      'Lets customers confirm, reschedule, or cancel with one tap — no phone tag',
      'Flags open slots the moment a cancellation comes in so you can refill them',
    ],
  },
  {
    icon: Star,
    name: 'Review Generation',
    tagline: 'A review request sent right after the lesson or round, while it’s fresh.',
    details: [
      'Fires automatically a few hours after a lesson or round wraps up',
      'Sends a direct one-tap link straight to your Google review page',
      'Routes unhappy customers to a private feedback form instead of a public review',
    ],
  },
  {
    icon: MessageCircleQuestion,
    name: 'FAQ Chatbot',
    tagline: 'Answers your most-asked questions on your site and by text, 24/7.',
    details: [
      '"Do you have lessons Saturday?" "What’s your rate?" — answered instantly, any time of day',
      'Lives on your website and your business texting line',
      'Learns your hours, pricing, and policies once, then handles the repeat questions for good',
    ],
  },
]

function Automations() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = modules[activeIndex]

  return (
    <section id="automations" className="bg-cream-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-700">
            The Offer
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-fairway-950 md:text-4xl">
            What we automate for you
          </h2>
          <p className="mt-4 text-lg text-fairway-800/80">
            Four modules that mix and match to your business. Tap one to see
            exactly how it works.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div
            role="tablist"
            aria-label="Automation modules"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1"
          >
            {modules.map((module, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={module.name}
                  type="button"
                  role="tab"
                  id={`module-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls="module-panel"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                    isActive
                      ? 'border-fairway-900 bg-fairway-900 text-cream-50 shadow-md'
                      : 'border-fairway-900/10 bg-cream-100 text-fairway-950 hover:border-fairway-900/30 hover:bg-cream-200'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                      isActive
                        ? 'bg-gold-400 text-fairway-950'
                        : 'bg-fairway-900/10 text-fairway-700'
                    }`}
                  >
                    <module.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block font-semibold">{module.name}</span>
                    <span
                      className={`mt-0.5 block text-sm leading-snug ${
                        isActive ? 'text-cream-100/80' : 'text-fairway-800/70'
                      }`}
                    >
                      {module.tagline}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <div
            id="module-panel"
            role="tabpanel"
            aria-labelledby={`module-tab-${activeIndex}`}
            className="rounded-3xl border border-fairway-900/10 bg-fairway-950 p-8 text-cream-50 lg:col-span-3 md:p-10"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400 text-fairway-950">
              <active.icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold">
              {active.name}
            </h3>
            <p className="mt-2 text-cream-100/80">{active.tagline}</p>
            <ul className="mt-6 space-y-3">
              {active.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm leading-relaxed text-cream-100/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {detail}
                </li>
              ))}
            </ul>
            <a
              href="#audit"
              className="mt-8 inline-flex rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-fairway-950 transition hover:bg-gold-300"
            >
              Add this to my audit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Automations
