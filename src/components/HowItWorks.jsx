const services = [
  { number: '01', title: 'Sistemas sob medida', description: 'Plataformas que organizam a rotina, os dados e as decisões da empresa em um lugar só.', points: ['Operação centralizada', 'Acessos por perfil', 'Indicadores que fazem sentido'], icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 14h3M7 17h6M16 14h1" /></svg> },
  { number: '02', title: 'Landing pages', description: 'Páginas com mensagem clara, identidade forte e caminho direto para o próximo contato.', points: ['Design que diferencia', 'Experiência em qualquer tela', 'Foco em conversão'], icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v14H4z" /><path d="M4 9h16M8 7h.01M11 7h.01M9 14h6M9 17h3" /></svg> },
  { number: '03', title: 'Automação e integrações', description: 'Conexões que fazem a informação avançar entre ferramentas sem depender de tarefas manuais.', points: ['Menos retrabalho', 'Alertas no momento certo', 'Processos rastreáveis'], icon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M7.7 7.1l2.6 8M16.3 7.1l-2.6 8M8 6h8" /></svg> },
]

export default function HowItWorks() {
  return (
    <section className="services-section" id="como-funciona">
      <div className="container">
        <div className="services-intro">
          <p className="section-kicker">O que a Otimiza entrega</p>
          <h2>Presença digital para atrair. Sistemas para fazer acontecer.</h2>
          <p>Não existe solução de prateleira para uma operação que quer crescer. A gente combina estratégia, design e tecnologia para construir o próximo passo da sua empresa.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top"><span>{service.number}</span><div>{service.icon}</div></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="evidence-callout">
          <div>
            <p className="section-kicker">Resultados que importam</p>
            <h3>Seu projeto pode ser o próximo a entrar aqui.</h3>
            <span>Este espaço foi desenhado para reunir resultados, depoimentos e aprendizados reais de quem constrói com a Otimiza.</span>
          </div>
          <div className="evidence-slots" aria-label="Prévia da futura seção de resultados e depoimentos">
            <div><small>RESULTADO REAL</small><b>Métrica do projeto</b><span>Ex.: mais eficiência, conversões ou controle operacional.</span></div>
            <div><small>FEEDBACK REAL</small><b>Voz de quem usa</b><span>O depoimento do cliente entra aqui com contexto e identidade.</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
