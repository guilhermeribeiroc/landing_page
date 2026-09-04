const stages = [
  {
    number: '01',
    title: 'Entendemos a prioridade',
    text: 'Começamos pelo objetivo, pela rotina atual e pelo ponto onde o negócio está perdendo tempo, informação ou oportunidade.',
  },
  {
    number: '02',
    title: 'Desenhamos o primeiro passo',
    text: 'Transformamos o cenário em uma proposta clara: o que criar, o que conectar e o que vale priorizar agora.',
  },
  {
    number: '03',
    title: 'Construímos para usar',
    text: 'A solução entra na operação com validação, ajustes e um caminho simples para a equipe acompanhar o resultado.',
  },
]

export default function MethodSection() {
  return (
    <section className="method-section" id="metodo">
      <div className="container">
        <div className="method-heading">
          <div>
            <p className="section-kicker">Do diagnóstico à operação</p>
            <h2>Primeiro, clareza. Depois, a solução certa.</h2>
          </div>
          <p>Em vez de começar por uma ferramenta, começamos por aquilo que precisa mudar no seu negócio.</p>
        </div>
        <ol className="method-stages">
          {stages.map((stage) => (
            <li key={stage.number}>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </li>
          ))}
        </ol>
        <a href="#diagnostico" className="method-cta">
          Quero mapear minhas prioridades
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </section>
  )
}
