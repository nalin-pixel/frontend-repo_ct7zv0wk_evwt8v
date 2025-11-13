import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Compass, Map, Globe2, ArrowRight } from 'lucide-react'

function App() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="min-h-screen bg-[#070b10] text-white selection:bg-blue-500/30 selection:text-white">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl/0">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_8px_24px_-8px_rgba(59,130,246,0.6)]" />
            <span className="text-sm tracking-widest uppercase text-white/70">Navia</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a className="hover:text-white transition-colors" href="#features">Explore</a>
            <a className="hover:text-white transition-colors" href="#about">About</a>
            <a className="hover:text-white transition-colors" href="#cta">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[92vh] w-full overflow-hidden">
        {/* Spline 3D cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/g5OaHmrKTDxRI7Ig/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Soft vignettes and gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.2)_60%,rgba(2,6,23,0.7)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b10] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070b10]" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl w-full px-6 pb-24">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur">
                <Compass className="h-3.5 w-3.5 text-cyan-300" />
                Tailored journeys for night-city explorers
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
                Travel, simplified.
                <br />
                Minimal. Modern. Night mode.
              </h1>
              <p className="mt-5 text-white/70 max-w-xl">
                Discover urban escapes with a clean, distraction‑free interface. Plan, book, and wander with clarity in a world of subtle neon.
              </p>

              {/* Skeuomorphic CTA */}
              <div className="mt-10 flex items-center gap-4" id="cta">
                <button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="group relative inline-flex items-center gap-3 rounded-2xl px-6 py-3 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                  style={{
                    // Skeuomorphic: soft raised surface with inner highlights
                    background: 'linear-gradient(180deg, rgba(28,38,49,0.95) 0%, rgba(12,18,26,0.95) 100%)',
                    boxShadow:
                      'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.35), 0 2px 0 rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span className="absolute inset-0 rounded-2xl" style={{
                    background:
                      'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 60%, rgba(255,255,255,0) 100%)'
                  }} />
                  <span className="relative flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_18px_-6px_rgba(34,211,238,0.7)]">
                      <Globe2 className="h-3.5 w-3.5 text-white" />
                    </span>
                    <span>Start your journey</span>
                    <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`} />
                  </span>
                </button>

                <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">See how it works</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal features */}
      <section id="features" className="relative py-24 bg-[#070b10]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Feature icon={<Map className="h-5 w-5 text-cyan-300" />} title="Smart itineraries" desc="Build clean, efficient routes—no clutter, just what matters." />
            <Feature icon={<Compass className="h-5 w-5 text-cyan-300" />} title="Urban discovery" desc="Find modern stays, late‑night spots, and seamless transit." />
            <Feature icon={<Globe2 className="h-5 w-5 text-cyan-300" />} title="Worldwide coverage" desc="Curated city guides across the globe in one place." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-white/5 bg-[#070b10]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/50">
          © {new Date().getFullYear()} Navia. Built for explorers of the night city.
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default App
