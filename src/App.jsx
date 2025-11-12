import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Map from './components/Map'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full bg-white/60 backdrop-blur ring-1 ring-white/40 shadow-sm">
          <a href="#home" className="flex items-center gap-2 px-4 py-2">
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8"/>
                  <stop offset="100%" stopColor="#0ea5e9"/>
                </linearGradient>
              </defs>
              <path d="M6 34 Q 14 28 24 34 T 42 34" stroke="url(#g)" strokeWidth="3" strokeLinecap="round"/>
              <rect x="10" y="10" width="14" height="10" rx="3" fill="#bae6fd"/>
              <circle cx="34" cy="22" r="5" fill="#7dd3fc"/>
            </svg>
            <span className="font-semibold text-sky-900">Coroa & Costa</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 pr-2">
            {[
              { href: '#services', label: 'Serviços' },
              { href: '#about', label: 'Quem somos' },
              { href: '#contact', label: 'Contato' },
              { href: '#map', label: 'Localização' },
            ].map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sky-700 hover:bg-white transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 rounded-full bg-sky-500 text-white px-4 py-2 shadow-sm hover:bg-sky-600 transition">Orçamento</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="mt-20">
        <Hero />
        <Services />
        <About />
        <Contact />
        <Map />
        <footer className="py-10 text-center text-sky-800/70">© {new Date().getFullYear()} Coroa & Costa. Todos os direitos reservados.</footer>
      </main>
    </div>
  )
}
