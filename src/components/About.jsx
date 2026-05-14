import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
      </svg>
    ),
    title: 'IA +',
    highlight: 'Estratégia',
    desc: 'Inteligência artificial com foco em resultado real.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Tecnologia',
    highlight: 'Sob Medida',
    desc: 'Soluções personalizadas para cada desafio do seu negócio.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
    title: 'Transformamos',
    highlight: 'Ideias',
    desc: 'Em soluções reais que geram impacto e crescimento.',
  },
]

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
}

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeLeft}
          >
            <p className="section-label">// Sobre Nós</p>
            <h2 className="section-title">Quem Somos.</h2>
            <p className="section-subtitle">
              A OtimizaAI é uma empresa de tecnologia especializada no
              desenvolvimento de SaaS, sites e sistemas inteligentes para
              acelerar negócios. Mais que tecnologia, somos parceiros do
              seu crescimento.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <motion.div
                  className="about-feature"
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title} <span>{f.highlight}</span></h4>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeRight}
          >
            <div className="about-visual-card">
              <div className="quote-mark">"</div>
              <blockquote>
                Transformar tecnologia em{' '}
                <span>vantagem competitiva real</span> para quem leva o
                próprio negócio a sério.
              </blockquote>

              <div className="principle">
                <div className="principle-icon">◎</div>
                <div>
                  <small>Princípio que guia tudo</small>
                  <p>Software bem-feito não é custo — é <span>alavanca</span>.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
