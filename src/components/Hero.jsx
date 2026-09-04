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

          <motion.div
            className="operation-map"
            initial={{ opacity: 0, clipPath: 'inset(12% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Demonstração de um processo manual transformado em fluxo automático"
          >
            <div className="map-topline">
              <span>Fluxo operacional</span>
              <span className="live-status"><i /> Automação ativa</span>
            </div>
            <div className="map-stage map-stage--input">
              <span className="stage-label">ENTRADAS</span>
              <div className="input-stream">
                <span>Formulário recebido</span>
                <span>Cadastro atualizado</span>
                <span>Prazo alterado</span>
              </div>
            </div>
            <div className="automation-core">
              <div className="core-ring"><span>AI</span></div>
              <div>
                <strong>Otimiza Flow</strong>
                <small>validando · organizando · direcionando</small>
              </div>
            </div>
            <div className="map-stage map-stage--output">
              <span className="stage-label">AÇÕES AUTOMÁTICAS</span>
              <ul>
                <li><span>01</span> Responsável notificado <b>feito</b></li>
                <li><span>02</span> Tarefa criada <b>feito</b></li>
                <li><span>03</span> Dashboard atualizado <b>feito</b></li>
              </ul>
            </div>
            <div className="map-footer">
              <span>Sem copiar dados</span><span>Sem cobrar manualmente</span><span>Com histórico</span>
            </div>
          </motion.div>
        </div>

        <div className="pain-strip" aria-label="Problemas que a OtimizaAI resolve">
          <span>Planilhas duplicadas</span>
          <span>Relatórios demorados</span>
          <span>Cadastros repetidos</span>
          <span>Equipe presa no operacional</span>
        </div>
      </div>
    </section>
  )
}
