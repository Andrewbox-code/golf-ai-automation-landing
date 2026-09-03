import { Flag } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-cream-100 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-fairway-800/70 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-fairway-900 text-gold-300">
            <Flag className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <span className="font-serif font-semibold text-fairway-950">Fairway AI</span>
        </div>
        <p>© {new Date().getFullYear()} Fairway AI. Done-for-you automation for golf businesses.</p>
      </div>
    </footer>
  )
}

export default Footer
