const questions = [
  {
    question: 'A implantação vai interromper a operação?',
    answer: 'Não precisa. O projeto é dividido em etapas, começando pelo processo de maior impacto. O novo fluxo é validado antes de substituir controles importantes da rotina.',
  },
  {
    question: 'Quanto tempo leva para implementar uma automação?',
    answer: 'Em média, a implantação leva de uma a três semanas. O prazo pode variar conforme a quantidade de etapas, ferramentas e integrações envolvidas; depois do diagnóstico, alinhamos o escopo e o cronograma do processo.',
  },
  {
    question: 'Como os dados da empresa são protegidos?',
    answer: 'Cada projeto define acessos, autenticação, registro de operações e compartilhamento apenas dos dados necessários. Os requisitos são alinhados conforme os sistemas e informações envolvidos.',
  },
  {
    question: 'Minha equipe terá dificuldade para se adaptar?',
    answer: 'Não. Além de desenhar a solução sobre a lógica da operação, fazemos um treinamento com a equipe para que todos entendam o novo fluxo e consigam usar a ferramenta com segurança no dia a dia.',
  },
]

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="container faq-layout">
        <div className="section-heading">
          <h2>Perguntas antes de dar o próximo passo.</h2>
          <p>Automação precisa trazer segurança e clareza desde o início.</p>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true" /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
