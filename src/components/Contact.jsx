import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-sky-500 font-semibold">Contato</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-sky-900">Fale com a Coroa & Costa</h2>
          <p className="mt-3 text-sky-700/80 max-w-2xl mx-auto">Peça um orçamento, tire dúvidas ou agende uma manutenção. Responderemos rapidamente.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-sky-100 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3 text-sky-700"><Phone size={20} /> <span className="font-medium">+351 912 345 678</span></div>
            <p className="mt-2 text-sky-700/80">Seg–Sex, 9h às 18h</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-sky-100 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3 text-sky-700"><Mail size={20} /> <span className="font-medium">contacto@coroaecosta.pt</span></div>
            <p className="mt-2 text-sky-700/80">Respondemos no mesmo dia</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-sky-100 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3 text-sky-700"><MapPin size={20} /> <span className="font-medium">Lisboa, Portugal</span></div>
            <p className="mt-2 text-sky-700/80">Atendemos toda a região</p>
          </div>
        </div>
      </div>
    </section>
  )
}
