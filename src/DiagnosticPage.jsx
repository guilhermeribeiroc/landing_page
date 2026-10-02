import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { homeUrl } from './diagnostic-url'

const questions = [
  {
    id: 'industry',
    title: 'Qual setor descreve melhor sua empresa?',
    helper: 'Isso nos ajuda a entender a rotina, os clientes e as integrações mais prováveis.',
    type: 'single',
    options: ['Serviços e consultoria', 'Comércio ou varejo', 'Saúde, clínica ou bem-estar', 'Imobiliário ou construção', 'Educação e cursos', 'Tecnologia ou software', 'Outro setor'],
  },
  {
    id: 'offer',
    title: 'O que sua empresa vende ou entrega?',
    helper: 'Escolha a opção mais próxima. Se não aparecer, você pode explicar em poucas palavras.',
    type: 'single',
    options: ['Serviços profissionais (consultoria, agência, contabilidade)', 'Atendimento ou saúde (clínica, estética, terapias)', 'Produtos físicos (loja, varejo, distribuição)', 'Cursos, mentoria ou treinamentos', 'Software, assinatura ou produto digital', 'Imóveis, construção ou projetos', 'Outro produto ou serviço'],
  },
  {
    id: 'team',
    title: 'Quantas pessoas atendem ou fazem a operação acontecer?',
    helper: 'Considere quem vende, atende clientes, executa processos ou acompanha a rotina.',
    type: 'single',
    options: ['Somente eu', 'De 2 a 5 pessoas', 'De 6 a 15 pessoas', 'De 16 a 50 pessoas', 'Mais de 50 pessoas'],
  },
  {
    id: 'priority',
    title: 'Onde você sente que perde mais tempo ou oportunidades?',
    helper: 'Escolha o ponto que mais incomoda hoje. Vamos usá-lo para priorizar a conversa.',
    type: 'single',
    options: ['Responder e organizar novos contatos', 'Acompanhar propostas, vendas ou clientes', 'Agendar, atender e confirmar clientes', 'Organizar tarefas, prazos ou equipe', 'Controlar financeiro e cobranças', 'Ver resultados, relatórios ou indicadores'],
  },
  {
    id: 'control',
    title: 'Onde ficam hoje as informações de clientes e processos?',
    helper: 'Sem julgamento: queremos entender o ponto de partida da empresa.',
    type: 'single',
    options: ['Principalmente em planilhas', 'WhatsApp, mensagens e anotações', 'Vários sistemas que não se comunicam', 'Já usamos um CRM', 'Um sistema próprio ou ERP', 'Ainda não temos um controle definido'],
  },
  {
    id: 'tools',
    title: 'Quais canais e ferramentas fazem parte da rotina?',
    helper: 'Selecione todas as que usam com frequência. Isso indica o que pode ser integrado.',
    type: 'multiple',
    options: ['WhatsApp', 'Instagram', 'Planilhas', 'Site ou formulários', 'E-mail', 'ERP ou financeiro', 'Agenda', 'Nenhuma por enquanto'],
  },
  {
    id: 'process',
    title: 'Qual situação você quer resolver primeiro?',
    helper: 'Descreva em uma ou duas frases. Ex.: “quando um cliente pedir orçamento pelo WhatsApp, criar o cadastro e avisar o vendedor”.',
    type: 'text',
  },
]

const initialContact = { name: '', company: '', phone: '', email: '', timing: '', investment: '', consent: false }

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

function BackIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4 4L19 7" /></svg>
}

export default function DiagnosticPage() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('otimizai-full-diagnostic') || '{}') } catch { return {} }
  })
  const [contact, setContact] = useState(initialContact)
  const [screen, setScreen] = useState('questions')
  const [error, setError] = useState('')

  const question = questions[current]
  const progress = screen === 'questions' ? ((current + 1) / questions.length) * 100 : 100
  const needsSystemName = question?.id === 'control' && ['Já usamos um CRM', 'Vários sistemas separados', 'Um sistema próprio ou ERP'].includes(answers.control)
  const needsOfferDetail = question?.id === 'offer' && answers.offer === 'Outro produto ou serviço'

  useEffect(() => {
    sessionStorage.setItem('otimiza-full-diagnostic', JSON.stringify(answers))
  }, [answers])

  const summary = useMemo(() => questions.map((item) => {
    const value = answers[item.id]
    return `${item.title}\n${Array.isArray(value) ? value.join(', ') : value || 'Não informado'}`
  }).concat(answers.offer === 'Outro produto ou serviço' && answers.otherOffer ? `Produto ou serviço informado\n${answers.otherOffer}` : []).join('\n\n'), [answers])

  function setAnswer(id, value) {
    setError('')
    setAnswers((previous) => ({ ...previous, [id]: value }))
  }

  function toggleTool(option) {
    const currentTools = answers.tools || []
    if (option === 'Nenhuma por enquanto') {
      setAnswer('tools', currentTools.includes(option) ? [] : [option])
      return
    }
    const withoutNone = currentTools.filter((item) => item !== 'Nenhuma por enquanto')
    setAnswer('tools', withoutNone.includes(option) ? withoutNone.filter((item) => item !== option) : [...withoutNone, option])
  }

  function validateQuestion() {
    if (question.type === 'multiple' && !(answers[question.id] || []).length) return 'Selecione pelo menos uma ferramenta para continuar.'
    if (question.type === 'text' && (answers[question.id] || '').trim().length < 8) return 'Conte um pouco mais sobre o primeiro processo que você quer melhorar.'
    if (!answers[question.id]) return 'Escolha uma opção para continuar.'
    if (needsOfferDetail && !(answers.otherOffer || '').trim()) return 'Conte em poucas palavras qual é o produto ou serviço principal.'
    if (needsSystemName && !(answers.systemName || '').trim()) return 'Informe o CRM, ERP ou sistema principal que vocês usam.'
    return ''
  }

  function next() {
    const validation = validateQuestion()
    if (validation) {
      setError(validation)
      return
    }
    setError('')
    if (current < questions.length - 1) setCurrent((value) => value + 1)
    else setScreen('contact')
  }

  function back() {
    setError('')
    if (screen === 'contact') setScreen('questions')
    else if (current > 0) setCurrent((value) => value - 1)
    else window.location.href = homeUrl
  }

  function submitContact(event) {
    event.preventDefault()
    if (!contact.name.trim() || !contact.company.trim() || !contact.phone.trim() || !contact.email.trim()) {
      setError('Preencha nome, empresa, WhatsApp e e-mail para continuar.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      setError('Informe um e-mail válido.')
      return
    }
    if (!contact.consent) {
      setError('Confirme o consentimento para enviar seu diagnóstico.')
      return
    }
    setError('')
    setScreen('result')
  }

  function whatsappUrl() {
    const message = `Olá! Concluí o Diagnóstico de Automação e CRM da OtimizaAI.\n\nNome: ${contact.name}\nEmpresa: ${contact.company}\nWhatsApp: ${contact.phone}\nE-mail: ${contact.email}\nQuando deseja começar: ${contact.timing || 'Não informado'}\nFaixa de investimento: ${contact.investment || 'Não informado'}\n${answers.systemName ? `Sistema atual: ${answers.systemName}\n` : ''}\n${summary}\n\nQuero receber uma análise inicial do projeto.`
    return `https://wa.me/558888557247?text=${encodeURIComponent(message)}`
  }

  function restart() {
    sessionStorage.removeItem('otimiza-full-diagnostic')
    setAnswers({})
    setContact(initialContact)
    setCurrent(0)
    setError('')
    setScreen('questions')
  }

  return (
    <div className="diagnostic-page">
      <header className="diagnostic-page-header">
        <a href={homeUrl} className="logo" aria-label="Voltar ao site da OtimizaAI">
          <span className="logo-icon"><img src={`${import.meta.env.BASE_URL}logo-clean.png`} alt="" /></span>
          <span className="logo-text">Otimiza<span>AI</span></span>
        </a>
        <a href={homeUrl} className="diagnostic-return"><BackIcon /> Voltar ao site</a>
      </header>

      <main className="diagnostic-page-main">
        <aside className="diagnostic-intro">
          <h1>Conte como sua operação funciona. Nós mostramos por onde começar.</h1>
          <p>São sete perguntas objetivas para entender sua empresa, os sistemas usados e o primeiro processo que vale automatizar.</p>
          <ul>
            <li><CheckIcon /> Leva cerca de 3 minutos</li>
            <li><CheckIcon /> Perguntas adaptadas à sua resposta</li>
            <li><CheckIcon /> Resumo enviado para análise da OtimizaAI</li>
          </ul>
        </aside>

        <section className="diagnostic-form-shell" aria-live="polite">
          <div className="diagnostic-progress" aria-label={`Progresso: ${Math.round(progress)}%`}>
            <div className="diagnostic-progress-meta"><span>{screen === 'questions' ? `Pergunta ${current + 1} de ${questions.length}` : 'Etapa final'}</span><span>{Math.round(progress)}%</span></div>
            <div className="diagnostic-progress-track"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
          </div>

          <AnimatePresence mode="wait">
            {screen === 'questions' && (
              <motion.div className="diagnostic-step" key={question.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                <h2>{question.title}</h2>
                <p>{question.helper}</p>

                {question.type === 'single' && (
                  <div className="diagnostic-options" role="radiogroup" aria-label={question.title}>
                    {question.options.map((option) => (
                      <button key={option} type="button" className={answers[question.id] === option ? 'selected' : ''} onClick={() => setAnswer(question.id, option)} role="radio" aria-checked={answers[question.id] === option}>
                        <span>{option}</span><i aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                )}

                {needsSystemName && (
                  <label className="diagnostic-field diagnostic-field--inline">
                    <span>Qual é o principal sistema usado hoje?</span>
                    <input value={answers.systemName || ''} onChange={(event) => setAnswer('systemName', event.target.value)} placeholder="Ex.: Pipedrive, HubSpot, sistema próprio" autoFocus />
                  </label>
                )}

                {question.type === 'multiple' && (
                  <div className="diagnostic-options diagnostic-options--multiple" aria-label={question.title}>
                    {question.options.map((option) => {
                      const selected = (answers.tools || []).includes(option)
                      return <button key={option} type="button" className={selected ? 'selected' : ''} onClick={() => toggleTool(option)} aria-pressed={selected}><span>{option}</span><i aria-hidden="true" /></button>
                    })}
                  </div>
                )}

                {needsOfferDetail && (
                  <label className="diagnostic-field diagnostic-field--inline">
                    <span>Qual é o principal produto ou serviço?</span>
                    <input value={answers.otherOffer || ''} onChange={(event) => setAnswer('otherOffer', event.target.value)} placeholder="Ex.: equipamentos agrícolas, advocacia trabalhista…" autoFocus />
                  </label>
                )}

                {question.type === 'text' && (
                  <label className="diagnostic-field">
                    <span>Descreva o processo</span>
                    <textarea value={answers.process || ''} onChange={(event) => setAnswer('process', event.target.value)} placeholder="Ex.: Quando o cliente pedir uma proposta pelo WhatsApp..." rows="5" autoFocus />
                  </label>
                )}

                {error && <p className="diagnostic-error" role="alert">{error}</p>}
                <div className="diagnostic-actions">
                  <button type="button" className="diagnostic-back" onClick={back}><BackIcon /> Voltar</button>
                  <button type="button" className="button" onClick={next}>Continuar <ArrowIcon /></button>
                </div>
              </motion.div>
            )}

            {screen === 'contact' && (
              <motion.form className="diagnostic-step" key="contact" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }} onSubmit={submitContact} noValidate>
                <h2>Para onde enviamos a análise?</h2>
                <p>Preencha seus dados para receber o resumo e seguir pelo WhatsApp com a equipe.</p>
                <div className="diagnostic-contact-grid">
                  <label className="diagnostic-field"><span>Seu nome</span><input value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} autoComplete="name" placeholder="Como podemos chamar você?" /></label>
                  <label className="diagnostic-field"><span>Empresa</span><input value={contact.company} onChange={(event) => setContact({ ...contact, company: event.target.value })} autoComplete="organization" placeholder="Nome da empresa" /></label>
                  <label className="diagnostic-field"><span>WhatsApp</span><input value={contact.phone} onChange={(event) => setContact({ ...contact, phone: event.target.value })} autoComplete="tel" inputMode="tel" placeholder="(00) 00000-0000" /></label>
                  <label className="diagnostic-field"><span>E-mail</span><input value={contact.email} onChange={(event) => setContact({ ...contact, email: event.target.value })} autoComplete="email" inputMode="email" placeholder="voce@empresa.com" /></label>
                  <label className="diagnostic-field"><span>Quando pretende começar? <em>opcional</em></span><select value={contact.timing} onChange={(event) => setContact({ ...contact, timing: event.target.value })}><option value="">Selecione uma opção</option><option>O quanto antes</option><option>Nos próximos 30 dias</option><option>Nos próximos 90 dias</option><option>Ainda estou avaliando</option></select></label>
                  <label className="diagnostic-field"><span>Faixa de investimento <em>opcional</em></span><select value={contact.investment} onChange={(event) => setContact({ ...contact, investment: event.target.value })}><option value="">Prefiro receber orientação</option><option>Até R$ 3 mil</option><option>De R$ 3 mil a R$ 8 mil</option><option>De R$ 8 mil a R$ 20 mil</option><option>Acima de R$ 20 mil</option></select></label>
                </div>
                <label className="diagnostic-consent"><input type="checkbox" checked={contact.consent} onChange={(event) => setContact({ ...contact, consent: event.target.checked })} /><span>Autorizo o uso destes dados para receber uma análise do meu projeto e contato da OtimizaAI.</span></label>
                {error && <p className="diagnostic-error" role="alert">{error}</p>}
                <div className="diagnostic-actions">
                  <button type="button" className="diagnostic-back" onClick={back}><BackIcon /> Voltar</button>
                  <button className="button" type="submit">Ver meu resumo <ArrowIcon /></button>
                </div>
              </motion.form>
            )}

            {screen === 'result' && (
              <motion.div className="diagnostic-result" key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
                <span className="diagnostic-result-icon"><CheckIcon /></span>
                <h2>Seu diagnóstico está pronto para análise.</h2>
                <p>Seu contexto está organizado. Clique abaixo para enviar o resumo completo à equipe da OtimizaAI pelo WhatsApp.</p>
                <div className="diagnostic-result-focus"><small>PRIORIDADE INFORMADA</small><strong>{answers.priority}</strong></div>
                <a className="button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Enviar diagnóstico pelo WhatsApp <ArrowIcon /></a>
                <button type="button" className="diagnostic-restart" onClick={restart}>Refazer diagnóstico</button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  )
}
