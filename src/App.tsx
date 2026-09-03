import AuditForm from './components/AuditForm'
import Automations from './components/Automations'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Problem from './components/Problem'
import Roi from './components/Roi'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans text-fairway-950">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Automations />
        <Roi />
        <Pricing />
        <Testimonials />
        <AuditForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
