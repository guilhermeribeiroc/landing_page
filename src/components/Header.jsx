import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { diagnosticUrl } from '../diagnostic-url'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Benefícios', href: '#beneficios' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      <header
        className="header"
        style={scrolled ? { background: 'rgba(4,10,16,0.88)', borderBottomColor: 'rgba(163,219,216,0.14)' } : {}}
      >
        <div className="container header-inner">
          <a href="#hero" className="logo">
            <div className="logo-icon logo-icon--png"><img src={`${import.meta.env.BASE_URL}otimiza-mark-transparent.png`} alt="OtimizaAI" /></div>
            <div className="logo-text">Otimiza<span>AI</span></div>
          </a>

          <nav className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="header-action">
            <a href={diagnosticUrl} className="button button--small">
              Fazer diagnóstico
            </a>

            <button className="menu-toggle" onClick={() => setMobileOpen(true)} aria-label="Abrir menu" aria-expanded={mobileOpen}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {l.label}
              </motion.a>
            ))}
            <a href={diagnosticUrl} className="button" onClick={() => setMobileOpen(false)}>
              Fazer diagnóstico
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
