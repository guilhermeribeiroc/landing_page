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
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />
      <div className="container hero-container">
        <div className="hero-layout">
          <motion.div className="hero-copy" initial="hidden" animate="visible">
            <motion.p className="hero-eyebrow" variants={fadeUp} custom={0}>
              <span aria-hidden="true" /> Arquitetura digital para operações reais
            </motion.p>
            <motion.h1 variants={fadeUp} custom={0}>
              Menos operação manual. <strong>Mais negócio em movimento.</strong>
            </motion.h1>
            <motion.p className="hero-lead" variants={fadeUp} custom={1}>
              Transformamos planilhas, tarefas repetitivas e sistemas desconectados em processos automáticos, painéis de controle e uma operação mais eficiente.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp} custom={2}>
              <a href="#diagnostico" className="button">
                Fazer diagnóstico gratuito
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a href="#como-funciona" className="text-link">
                Como funciona a automação
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
              </a>
            </motion.div>
            <motion.p className="hero-note" variants={fadeUp} custom={3}>
              5 perguntas · cerca de 2 minutos · sem compromisso
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
