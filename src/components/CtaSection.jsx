import { diagnosticUrl } from '../diagnostic-url'

export default function CtaSection() {
  return (
    <section className="cta-section" id="contato">
      <div className="container">
        <div className="cta-box">
          <div className="cta-copy">
            <h2>Descubra o primeiro passo para tirar a operação do manual.</h2>
            <p>Em poucos minutos, você identifica o processo que merece atenção primeiro e ganha clareza para a próxima conversa.</p>
          </div>
          <div className="cta-action">
            <a href={diagnosticUrl} className="button">Começar diagnóstico</a>
            <small>7 perguntas · cerca de 3 minutos · sem compromisso</small>
          </div>
        </div>
      </div>
    </section>
  )
}
