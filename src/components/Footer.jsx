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
              Automação e sistemas de gestão para empresas que querem crescer com mais controle, velocidade e eficiência.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>
            <a href="#como-funciona">Como funciona</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#resultados">Resultados</a>
            <a href="#diagnostico">Diagnóstico</a>
          </div>

          <div className="footer-col">
            <h4>Soluções</h4>
            <a href="#solucoes">Automação de processos</a>
            <a href="#solucoes">Integração de sistemas</a>
            <a href="#solucoes">Sistemas de gestão</a>
            <a href="#solucoes">Dashboards</a>
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
          </div>
        </div>
      </div>
    </footer>
  )
}
