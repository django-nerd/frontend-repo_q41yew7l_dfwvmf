import React from 'react'
import { Hammer, Sparkles, Waves } from 'lucide-react'

const Card = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl bg-white/70 ring-1 ring-sky-100 p-6 shadow-sm backdrop-blur hover:shadow-xl transition relative overflow-hidden">
    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-100/60 blur-2xl" />
    <div className="flex items-center gap-4">
      <div className="rounded-xl bg-sky-50 p-3 text-sky-600 ring-1 ring-sky-100">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-sky-900">{title}</h3>
    </div>
    <p className="mt-3 text-sky-700/80 leading-relaxed">{desc}</p>
  </div>
)

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-sky-500 font-semibold">Serviços</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-sky-900">Tudo para a sua piscina</h2>
          <p className="mt-3 text-sky-700/80 max-w-2xl mx-auto">Projetamos, construímos e cuidamos da sua piscina com atenção aos detalhes e paixão pela água.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card icon={Waves} title="Construção de Piscinas" desc="Piscinas personalizadas com acabamentos premium, integração paisagística e equipamentos de última geração." />
          <Card icon={Sparkles} title="Manutenção" desc="Tratamento, limpeza, equilíbrio químico e inspeções regulares para água sempre cristalina." />
          <Card icon={Hammer} title="Reformas" desc="Revestimentos, iluminação, automação e modernizações para renovar o visual e a eficiência." />
        </div>
      </div>

      <svg className="pointer-events-none absolute -bottom-20 left-0 right-0 w-full text-sky-100" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,138.7C672,149,768,203,864,218.7C960,235,1056,213,1152,218.7C1248,224,1344,256,1392,272L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
      </svg>
    </section>
  )
}
