import { Flag } from 'lucide-react'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-fairway-900/10 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-fairway-900 text-gold-300">
            <Flag className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-fairway-950">
            Fairway AI
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-fairway-800 md:flex">
          <a href="#automations" className="transition hover:text-fairway-950">
            What We Automate
          </a>
          <a href="#roi" className="transition hover:text-fairway-950">
            ROI
          </a>
          <a href="#pricing" className="transition hover:text-fairway-950">
            Pricing
          </a>
          <a href="#testimonials" className="transition hover:text-fairway-950">
            Results
          </a>
        </nav>
        <a
          href="#audit"
          className="rounded-full bg-fairway-900 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition hover:bg-fairway-800"
        >
          Book Free Audit
        </a>
      </div>
    </header>
  )
}

export default Header
