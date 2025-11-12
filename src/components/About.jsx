import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-sky-100 blur-2xl" />
            <div className="rounded-3xl overflow-hidden ring-1 ring-sky-100 shadow-md bg-white/60 backdrop-blur">
              <svg viewBox="0 0 400 260" className="w-full h-auto">
                <defs>
                  <linearGradient id="water" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#7dd3fc"/>
                    <stop offset="100%" stopColor="#38bdf8"/>
                  </linearGradient>
                </defs>
                <rect x="20" y="120" width="360" height="100" rx="14" fill="url(#water)"/>
                <rect x="40" y="60" width="200" height="60" rx="10" fill="#bae6fd"/>
                <circle cx="300" cy="150" r="40" fill="#a5f3fc" opacity="0.7"/>
                <path d="M20,200 Q80,160 140,200 T260,200 T380,200" fill="none" stroke="#e0f2fe" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-sky-500 font-semibold">Quem somos</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-sky-900">Cuidamos da sua piscina como se fosse nossa</h2>
            <p className="mt-4 text-sky-700/80 leading-relaxed">
              Somos a Coroa & Costa, especialistas em piscinas. Unimos engenharia, design e um atendimento próximo para entregar projetos sob medida e manutenção impecável.
            </p>
            <ul className="mt-6 space-y-2 text-sky-800/80">
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" /> Equipe certificada e apaixonada por água</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" /> Materiais e equipamentos premium</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-sky-400" /> Projetos personalizados, do desenho à entrega</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
