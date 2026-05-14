import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" className="logo">
              <div className="logo-icon"><img src="/logo-clean.png" alt="OtimizaAI" /></div>
              <div className="logo-text">Otimiza<span>AI</span></div>
            </a>
            <p>
              Transformamos tecnologia em vantagem competitiva real.
              Sistemas inteligentes, sob medida, para quem leva o próprio
              negócio a sério.
            </p>
          </div>

          <div className="footer-col">
            <h4>Soluções</h4>
            <a href="#solucoes">Sistemas de Gestão</a>
            <a href="#solucoes">Automação</a>
            <a href="#solucoes">SaaS & Plataformas</a>
            <a href="#solucoes">Sites & Landing Pages</a>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <a href="#sobre">Sobre Nós</a>
            <a href="#solucoes">Nossos Serviços</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <a href="mailto:contato@useotimiza.com.br">contato@useotimiza.com.br</a>
            <a href="https://wa.me/558888557247?text=Ol%C3%A1!%20Vi%20o%20site%20da%20OtimizaA%C3%8D%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20suas%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas." target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://instagram.com/otimizaii" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} OtimizaAI. Todos os direitos reservados.</p>
          <div className="footer-socials">
            <a href="https://instagram.com/otimizaii" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><path d="M17.5 6.5h.01"/>
              </svg>
            </a>
            <a href="https://wa.me/558888557247?text=Ol%C3%A1!%20Vi%20o%20site%20da%20OtimizaA%C3%8D%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20suas%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
