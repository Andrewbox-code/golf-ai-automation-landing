import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

const painPoints = [
  'Missed calls / slow lead follow-up',
  'No-shows for lessons or tee times',
  'Not enough Google reviews',
  'Too many repetitive questions from customers',
  'Something else',
]

type FormState = {
  name: string
  business: string
  email: string
  painPoint: string
}

const initialState: FormState = {
  name: '',
  business: '',
  email: '',
  painPoint: painPoints[0],
}

function AuditForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section id="audit" className="bg-fairway-950 py-20 text-cream-50 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold-300">
            Get Started
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
            Book your free automation audit
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream-100/80">
            Tell us a bit about your business and biggest pain point. We'll
            follow up with a short call and a plan tailored to you — no
            obligation.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-cream-50/10 bg-fairway-900/50 p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                <CheckCircle2 className="h-7 w-7" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Thanks, {form.name.split(' ')[0] || 'there'}!
              </h3>
              <p className="mt-2 max-w-sm text-cream-100/80">
                We've got your details for {form.business || 'your business'}.
                A member of our team will reach out within one business day
                to schedule your audit call.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialState)
                  setSubmitted(false)
                }}
                className="mt-6 text-sm font-semibold text-gold-300 underline underline-offset-4 hover:text-gold-200"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5 sm:col-span-1">
                <label htmlFor="name" className="text-sm font-medium text-cream-100/85">
                  Your name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Jamie Rivera"
                  className="rounded-xl border border-cream-50/15 bg-fairway-950/60 px-4 py-3 text-cream-50 placeholder:text-cream-100/40 outline-none focus:border-gold-400"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-1">
                <label htmlFor="business" className="text-sm font-medium text-cream-100/85">
                  Business name
                </label>
                <input
                  id="business"
                  required
                  value={form.business}
                  onChange={(e) => updateField('business', e.target.value)}
                  placeholder="Ridgeline Golf Academy"
                  className="rounded-xl border border-cream-50/15 bg-fairway-950/60 px-4 py-3 text-cream-50 placeholder:text-cream-100/40 outline-none focus:border-gold-400"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="email" className="text-sm font-medium text-cream-100/85">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="jamie@ridgelinegolf.com"
                  className="rounded-xl border border-cream-50/15 bg-fairway-950/60 px-4 py-3 text-cream-50 placeholder:text-cream-100/40 outline-none focus:border-gold-400"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label htmlFor="painPoint" className="text-sm font-medium text-cream-100/85">
                  Biggest pain point right now
                </label>
                <select
                  id="painPoint"
                  value={form.painPoint}
                  onChange={(e) => updateField('painPoint', e.target.value)}
                  className="rounded-xl border border-cream-50/15 bg-fairway-950/60 px-4 py-3 text-cream-50 outline-none focus:border-gold-400"
                >
                  {painPoints.map((point) => (
                    <option key={point} value={point} className="bg-fairway-950">
                      {point}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-gold-400 px-8 py-3.5 text-base font-semibold text-fairway-950 transition hover:bg-gold-300 sm:col-span-2"
              >
                Book My Free Audit
              </button>
              <p className="text-center text-xs text-cream-100/50 sm:col-span-2">
                We'll never share your info. This is a demo form — no data
                is sent anywhere yet.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default AuditForm
