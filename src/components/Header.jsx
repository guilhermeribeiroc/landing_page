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
    { label: 'Início', href: '#hero' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
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
            <div className="logo-icon"><img src="/logo-clean.png" alt="OtimizaAI" /></div>
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
            <motion.a
              href="https://wa.me/558888557247?text=Ol%C3%A1!%20Vi%20o%20site%20da%20OtimizaA%C3%8D%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20suas%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas."
              className="btn-cta"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale Conosco
              <span>→</span>
            </motion.a>
          </nav>

          <button className="menu-toggle" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
            <span /><span /><span />
          </button>
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
            <button className="mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
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
            <a href="https://wa.me/558888557247?text=Ol%C3%A1!%20Vi%20o%20site%20da%20OtimizaA%C3%8D%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20suas%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas." className="btn-cta" target="_blank" rel="noopener noreferrer">
              Fale Conosco →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
