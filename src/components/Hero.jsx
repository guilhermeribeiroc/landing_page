import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.4, 0, 0.2, 1] }
  })
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="grid-bg" />
      <div className="container">
        <motion.div className="hero-content" initial="hidden" animate="visible">
          <motion.div className="hero-badge" variants={fadeUp} custom={0}>
            <span className="dot" />
            Inovação em sistemas de gestão
          </motion.div>

          <motion.h1 variants={fadeUp} custom={1}>
            Tecnologia que{' '}
            <span className="highlight">otimiza</span> e{' '}
            <span className="highlight">automatiza</span> sua empresa.
          </motion.h1>

          <motion.p variants={fadeUp} custom={2}>
            Desenvolvemos sistemas de gestão inteligentes e sob medida. 
            Transformamos processos complexos em soluções digitais que 
            aceleram seu negócio e geram resultados reais.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeUp} custom={3}>
            <a href="https://wa.me/558888557247?text=Ol%C3%A1!%20Vi%20o%20site%20da%20OtimizaA%C3%8D%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20suas%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas." className="btn-cta" target="_blank" rel="noopener noreferrer">
              Solicitar Orçamento
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#solucoes" className="btn-outline">
              Conheça nossas soluções
            </a>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}
