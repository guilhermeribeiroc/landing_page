const steps = [
  {
    title: 'Encontramos o desperdício',
    text: 'Mapeamos tarefas repetitivas, retrabalho, atrasos e pontos em que a informação fica presa.',
  },
  {
    title: 'Desenhamos o fluxo ideal',
    text: 'Definimos regras, responsáveis e integrações para cada informação avançar sem depender de cobrança manual.',
  },
  {
    title: 'Automatizamos e centralizamos',
    text: 'Conectamos ferramentas e organizamos indicadores, alertas e tarefas em um controle simples.',
  },
  {
    title: 'Medimos e evoluímos',
    text: 'Acompanhamos o funcionamento e preparamos a operação para crescer com mais previsibilidade.',
  },
]

const examples = [
  ['Novo lead', 'Cadastrar no sistema', 'Avisar responsável'],
  ['Venda aprovada', 'Gerar tarefa', 'Atualizar painel'],
  ['Prazo próximo', 'Disparar alerta', 'Registrar retorno'],
]

export default function HowItWorks() {
  return (
    <section className="how-section" id="como-funciona">
      <div className="container">
        <div className="section-heading section-heading--split">
          <h2>Automação começa entendendo onde sua empresa perde tempo.</h2>
          <p>Processo primeiro, tecnologia depois. Cada solução parte da rotina real da equipe e entra em operação por etapas.</p>
        </div>

        <div className="steps-line">
          {steps.map((step, index) => (
            <article
              className="step-item"
              key={step.title}
            >
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="flow-demo">
          <div className="flow-demo-copy">
            <h3>Um evento acontece. O restante do processo avança sozinho.</h3>
            <p>Notificações, cadastros, relatórios e atualizações deixam de depender da memória da equipe.</p>
            <a href="#diagnostico" className="text-link">
              Descobrir o que automatizar primeiro
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          <div className="flow-demo-lines">
            {examples.map((flow, index) => (
              <div className="flow-row" key={flow[0]}>
                {flow.map((item, itemIndex) => (
                  <div className="flow-node-wrap" key={item}>
                    <span className={`flow-node ${itemIndex === flow.length - 1 ? 'flow-node--done' : ''}`}>{item}</span>
                    {itemIndex < flow.length - 1 && <i aria-hidden="true" />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
