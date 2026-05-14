import { motion } from 'framer-motion'

export default function CtaSection() {
  return (
    <section className="cta-section" id="contato">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">// Vamos Conversar</p>
          <h2 className="section-title">
            Pronto para transformar sua empresa?
          </h2>
          <p className="section-subtitle">
            Fale com nosso time e descubra como a tecnologia certa pode
            otimizar seus processos e multiplicar seus resultados.
          </p>
          <div className="cta-buttons">
            <a href="https://wa.me/558888557247?text=Ol%C3%A1!%20Vi%20o%20site%20da%20OtimizaA%C3%8D%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20suas%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas." className="btn-cta" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="mailto:contato@useotimiza.com.br" className="btn-outline">
              Enviar E-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
