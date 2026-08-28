import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const questions = [
  {
    id: 'team',
    title: 'Quantas pessoas participam da operação da empresa?',
    options: [
      ['Somente eu', 0], ['De 2 a 5 pessoas', 1], ['De 6 a 15 pessoas', 2], ['De 16 a 50 pessoas', 3], ['Mais de 50 pessoas', 3],
    ],
  },
  {
    id: 'hours',
    title: 'Quanto tempo a equipe gasta por semana com tarefas repetitivas?',
    options: [
      ['Menos de 5 horas', 0], ['Entre 5 e 10 horas', 1], ['Entre 11 e 20 horas', 2], ['Mais de 20 horas', 3], ['Não consigo estimar', 2],
    ],
  },
  {
    id: 'bottleneck',
    title: 'Qual é o principal gargalo da operação hoje?',
    options: [
      ['Digitar ou transferir dados entre ferramentas', 3], ['Cobrar, lembrar e acompanhar tarefas', 3], ['Produzir relatórios e indicadores', 2], ['Organizar solicitações e aprovações', 2], ['Integrar os sistemas que já usamos', 3], ['Ainda não conseguimos identificar', 1],
    ],
  },
  {
    id: 'tools',
    title: 'Como esses processos são controlados atualmente?',
    options: [
      ['Papel, mensagens e controles informais', 3], ['Principalmente por planilhas', 3], ['Vários sistemas que não se comunicam', 2], ['Um sistema central, mas ainda com tarefas manuais', 1], ['Já temos processos bem integrados', 0],
    ],
  },
  {
    id: 'urgency',
    title: 'Quando você pretende melhorar esses processos?',
    options: [
      ['O quanto antes', 3], ['Nos próximos 30 dias', 2], ['Nos próximos 90 dias', 1], ['Ainda estou pesquisando', 0],
    ],
  },
]

function getResult(score) {
  if (score >= 13) return { label: 'Prioridade operacional', text: 'Sua operação mostra forte aderência a uma solução personalizada. O próximo passo é mapear o fluxo de maior impacto.' }
  if (score >= 9) return { label: 'Alto potencial', text: 'Tarefas repetitivas e ferramentas desconectadas já indicam uma boa oportunidade de automação.' }
  if (score >= 5) return { label: 'Potencial moderado', text: 'Existe pelo menos um processo que pode ser simplificado e usado como primeiro ganho operacional.' }
  return { label: 'Estruturação inicial', text: 'O primeiro ganho está em organizar e mapear a rotina antes de definir a automação.' }
}

const initialContact = { name: '', phone: '', email: '', company: '', consent: false }

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4 4L19 7" /></svg>
}

function BackIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
}

export default function DiagnosticQuiz() {
  const [stage, setStage] = useState('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem('otimiza-diagnostic') || '{}') } catch { return {} }
  })
  const [contact, setContact] = useState(initialContact)
  const [error, setError] = useState('')

  useEffect(() => {
    sessionStorage.setItem('otimiza-diagnostic', JSON.stringify(answers))
  }, [answers])

  const score = useMemo(() => Object.values(answers).reduce((sum, answer) => sum + (answer?.points || 0), 0), [answers])
  const result = getResult(score)
  const progress = stage === 'questions' ? ((current + 1) / questions.length) * 100 : stage === 'capture' ? 100 : 0

  function chooseAnswer(label, points) {
    const question = questions[current]
    setAnswers((previous) => ({ ...previous, [question.id]: { label, points } }))
    window.setTimeout(() => {
      if (current < questions.length - 1) setCurrent((value) => value + 1)
      else setStage('capture')
    }, 180)
  }

  function goBack() {
    setError('')
    if (stage === 'capture') {
      setStage('questions')
      setCurrent(questions.length - 1)
    } else if (current > 0) setCurrent((value) => value - 1)
    else setStage('intro')
  }

  function submitDiagnostic(event) {
    event.preventDefault()
    if (!contact.name.trim() || !contact.phone.trim() || !contact.email.trim()) {
      setError('Preencha nome, WhatsApp e e-mail para continuar.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(contact.email)) {
      setError('Informe um e-mail válido.')
      return
    }
    if (!contact.consent) {
      setError('Confirme o consentimento para receber o diagnóstico.')
      return
    }

    setError('')
    setStage('result')
    window.setTimeout(() => document.querySelector('.diagnostic-shell')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50)
  }

  function whatsappUrl() {
    const summary = questions.map((question) => `${question.title}\n${answers[question.id]?.label || 'Não respondido'}`).join('\n\n')
    const message = `Olá! Concluí o Diagnóstico de Eficiência da OtimizaAI.\n\nNome: ${contact.name}\nEmpresa: ${contact.company || 'Não informada'}\nE-mail: ${contact.email}\nScore: ${score}/15 — ${result.label}\n\n${summary}\n\nQuero receber meu plano inicial de automação.`
    return `https://wa.me/558888557247?text=${encodeURIComponent(message)}`
  }

  function restart() {
    setAnswers({})
    setContact(initialContact)
    setCurrent(0)
    setStage('intro')
    sessionStorage.removeItem('otimiza-diagnostic')
  }

  return (
    <section className="diagnostic" id="diagnostico">
      <div className="container diagnostic-layout">
        <div className="diagnostic-copy">
          <h2>Onde sua empresa pode ganhar eficiência com automação?</h2>
          <p>Responda cinco perguntas. Você recebe um score de oportunidade e descobre qual processo merece atenção primeiro.</p>
          <ul>
            <li><span><CheckIcon /></span> Resultado imediato</li>
            <li><span><CheckIcon /></span> Recomendação personalizada</li>
            <li><span><CheckIcon /></span> Sem compromisso</li>
          </ul>
        </div>

        <div className="diagnostic-shell" aria-live="polite">
          {stage !== 'intro' && stage !== 'result' && (
            <div className="quiz-progress">
              <div><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
              <small>{stage === 'capture' ? 'Última etapa' : `Pergunta ${current + 1} de ${questions.length}`}</small>
            </div>
          )}

          <AnimatePresence mode="wait">
            {stage === 'intro' && (
              <motion.div className="quiz-screen quiz-intro" key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}>
                <span className="quiz-symbol">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>
                </span>
                <h3>Diagnóstico Gratuito de Eficiência</h3>
                <p>Identifique o nível de desperdício operacional e o primeiro processo com potencial de automação.</p>
                <button className="button" type="button" onClick={() => setStage('questions')}>Iniciar diagnóstico</button>
                <small>Cerca de 2 minutos · respostas confidenciais</small>
              </motion.div>
            )}

            {stage === 'questions' && (
              <motion.div className="quiz-screen" key={questions[current].id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3>{questions[current].title}</h3>
                <div className="quiz-options">
                  {questions[current].options.map(([label, points]) => (
                    <button
                      type="button"
                      className={answers[questions[current].id]?.label === label ? 'selected' : ''}
                      key={label}
                      onClick={() => chooseAnswer(label, points)}
                    >
                      <span>{label}</span><i />
                    </button>
                  ))}
                </div>
                <button className="quiz-back" type="button" onClick={goBack}><BackIcon /> Voltar</button>
              </motion.div>
            )}

            {stage === 'capture' && (
              <motion.form className="quiz-screen capture-form" key="capture" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} onSubmit={submitDiagnostic} noValidate>
                <div className="capture-ready"><i /> Análise concluída</div>
                <h3>Seu diagnóstico está pronto.</h3>
                <p>Informe seus dados para ver o score e levar seu resumo para uma conversa no WhatsApp.</p>
                <div className="form-grid">
                  <label><span>Nome</span><input value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} autoComplete="name" placeholder="Como podemos chamar você?" /></label>
                  <label><span>WhatsApp</span><input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} autoComplete="tel" inputMode="tel" placeholder="(00) 00000-0000" /></label>
                  <label><span>E-mail</span><input value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} autoComplete="email" inputMode="email" placeholder="voce@empresa.com" /></label>
                  <label><span>Empresa <em>opcional</em></span><input value={contact.company} onChange={(e) => setContact({ ...contact, company: e.target.value })} autoComplete="organization" placeholder="Nome da empresa" /></label>
                </div>
                <label className="consent"><input type="checkbox" checked={contact.consent} onChange={(e) => setContact({ ...contact, consent: e.target.checked })} /><span>Concordo em usar estes dados para receber meu diagnóstico e tratar esta solicitação.</span></label>
                {error && <p className="form-error" role="alert">{error}</p>}
                <button className="button" type="submit">Ver meu score</button>
                <button className="quiz-back" type="button" onClick={goBack}><BackIcon /> Voltar</button>
              </motion.form>
            )}

            {stage === 'result' && (
              <motion.div className="quiz-screen result-screen" key="result" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}>
                <span className="result-label">{result.label}</span>
                <div className="result-score"><strong>{score}</strong><span>/15</span></div>
                <h3>Seu Score de Oportunidade de Automação</h3>
                <p>{result.text}</p>
                <div className="result-focus"><small>PROCESSO PARA ANALISAR PRIMEIRO</small><strong>{answers.bottleneck?.label || 'Mapeamento operacional'}</strong></div>
                <a className="button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Receber plano pelo WhatsApp</a>
                <button className="quiz-restart" type="button" onClick={restart}>Refazer diagnóstico</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
