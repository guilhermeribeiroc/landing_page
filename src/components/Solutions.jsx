import { motion } from 'framer-motion'

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Sistemas de Gestão',
    desc: 'ERPs e plataformas sob medida para controlar finanças, estoque, vendas e operações da sua empresa com eficiência máxima.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
      </svg>
    ),
    title: 'Automação Inteligente',
    desc: 'Automatize tarefas repetitivas com inteligência artificial. Reduza erros humanos e ganhe velocidade operacional.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z"/>
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
      </svg>
    ),
    title: 'SaaS & Plataformas Web',
    desc: 'Desenvolvimento de produtos digitais escaláveis, do MVP à solução completa pronta para o mercado.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Consultoria Tech',
    desc: 'Análise estratégica do seu negócio para identificar oportunidades de otimização e transformação digital.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>
      </svg>
    ),
    title: 'Sites & Landing Pages',
    desc: 'Páginas de alta conversão com design premium, SEO otimizado e performance excepcional em qualquer dispositivo.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Dashboards & BI',
    desc: 'Painéis inteligentes com dados em tempo real para tomada de decisão estratégica e acompanhamento de KPIs.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
}

export default function Solutions() {
  return (
    <section id="solucoes">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// Nossas Soluções</p>
          <h2 className="section-title">Tecnologia sob medida para <br />cada desafio do seu negócio.</h2>
          <p className="section-subtitle">
            Cada projeto é único. Desenvolvemos soluções personalizadas que se
            adaptam perfeitamente à realidade da sua empresa.
          </p>
        </motion.div>

        <motion.div
          className="solutions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards.map((c, i) => (
            <motion.div className="solution-card" key={i} variants={cardVariants}>
              <div className="card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="card-arrow">
                Saiba mais
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
