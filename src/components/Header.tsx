import { useState } from 'react'
import { Flag, Menu, X } from 'lucide-react'

const links = [
  { href: '#automations', label: 'What We Automate' },
  { href: '#roi', label: 'ROI' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Results' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-fairway-950">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#audit"
            className="hidden rounded-full bg-fairway-900 px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-sm transition hover:bg-fairway-800 sm:inline-block"
          >
            Book Free Audit
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-fairway-900/15 text-fairway-900 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-fairway-900/10 bg-cream-50 px-6 py-4 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-fairway-800 transition hover:bg-cream-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#audit"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-fairway-900 px-5 py-2.5 text-center text-sm font-semibold text-cream-50 sm:hidden"
          >
            Book Free Audit
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
