import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'

const FloatingBubble = ({ delay = 0, size = 12, x = 0 }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.6, 1, 0.2])

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="absolute rounded-full bg-white/30 backdrop-blur-sm shadow-md pointer-events-none"
      initial={{ y: 0, opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1.2, ease: 'easeOut' }}
    >
      <div
        className="rounded-full"
        style={{ width: size, height: size, transform: `translateX(${x}px)` }}
      />
    </motion.div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0.15])

  return (
    <section id="home" ref={containerRef} className="relative h-[110vh] w-full overflow-hidden bg-gradient-to-b from-sky-50 via-sky-100 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-900/50 via-sky-900/20 to-transparent" style={{ opacity: gradientOpacity }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          style={{ y: titleY }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
        >
          Coroa & Costa
        </motion.h1>
        <motion.p
          style={{ y: subtitleY }}
          className="mt-4 max-w-2xl text-lg sm:text-xl md:text-2xl/relaxed text-sky-50/90 drop-shadow"
        >
          Piscinas, manutenção e remodelação com excelência artesanal
        </motion.p>
        <motion.div style={{ y: ctaY }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#services" className="pointer-events-auto inline-flex items-center rounded-full bg-sky-500/90 px-6 py-3 text-white shadow-lg shadow-sky-500/30 backdrop-blur transition hover:bg-sky-500">
            Nossos Serviços
          </a>
          <a href="#about" className="pointer-events-auto inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20">
            Quem somos
          </a>
        </motion.div>
      </div>

      <FloatingBubble size={10} x={-180} delay={0.2} />
      <FloatingBubble size={16} x={220} delay={0.4} />
      <FloatingBubble size={8} x={-60} delay={0.6} />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        aria-hidden
      >
        <svg className="w-full h-36 text-sky-100/80" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,160 C240,120 360,200 540,180 C720,160 840,80 1080,120 C1200,140 1320,130 1440,100 L1440,200 L0,200 Z" />
        </svg>
      </motion.div>
    </section>
  )
}
