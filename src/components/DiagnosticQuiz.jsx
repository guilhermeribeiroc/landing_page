import { diagnosticUrl } from '../diagnostic-url'

export default function DiagnosticQuiz() {
  return (
    <section className="diagnostic" id="diagnostico">
      <div className="container diagnostic-layout">
        <div className="diagnostic-copy">
          <h2>Entenda o que sua empresa precisa antes de falar em ferramenta.</h2>
          <p>O diagnóstico coleta o contexto da operação, dos sistemas atuais e do processo que você quer melhorar primeiro.</p>
          <ul>
            <li><span>1</span> 7 perguntas objetivas</li>
            <li><span>2</span> CRM e integrações quando fizer sentido</li>
            <li><span>3</span> Resumo completo para nossa equipe</li>
          </ul>
        </div>

        <div className="diagnostic-shell diagnostic-callout">
          <div>
            <span className="diagnostic-callout-mark">OtimizaAI</span>
            <h3>Seu processo tem mais valor do que uma resposta genérica.</h3>
            <p>Conte como sua empresa funciona. Em cerca de 3 minutos, organizamos o contexto para uma análise mais precisa de automação, CRM e integrações.</p>
          </div>
          <a href={diagnosticUrl} className="button">
            Iniciar diagnóstico completo
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
          <small>Você só envia o resumo quando decidir continuar pelo WhatsApp.</small>
        </div>
      </div>
    </section>
  )
}
