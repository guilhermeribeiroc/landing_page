import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
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
      <motion.header
        className="header"
        style={scrolled ? { background: 'rgba(10,22,40,0.92)', borderBottomColor: 'rgba(0,212,255,0.1)' } : {}}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container header-inner">
          <a href="#hero" className="logo">
            <div className="logo-icon logo-icon--png"><img src={`${import.meta.env.BASE_URL}otimiza-logo.png`} alt="OtimizaAI" /></div>
            <div className="logo-text">Otimiza<span>AI</span></div>
          </a>

          <nav className="nav-links">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
          <div className="header-action">
            <motion.a
              href="#diagnostico"
              className="button button--small"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              Fazer diagnóstico
            </motion.a>

            <button className="menu-toggle" onClick={() => setMobileOpen(true)} aria-label="Abrir menu" aria-expanded={mobileOpen}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </motion.header>

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
            <a href="#diagnostico" className="button" onClick={() => setMobileOpen(false)}>
              Fazer diagnóstico
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
