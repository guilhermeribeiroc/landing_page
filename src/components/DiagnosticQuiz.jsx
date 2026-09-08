import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const generalQuestions = [
  {
    id: 'team',
    shortTitle: 'Equipe envolvida',
    title: 'Quantas pessoas participam da operação da empresa?',
    options: [
      ['Somente eu', 0], ['De 2 a 5 pessoas', 1], ['De 6 a 15 pessoas', 2], ['De 16 a 50 pessoas', 3], ['Mais de 50 pessoas', 3],
    ],
  },
  {
    id: 'hours',
    shortTitle: 'Tempo em tarefas repetitivas',
    title: 'Quanto tempo a equipe gasta por semana com tarefas repetitivas?',
    options: [
      ['Menos de 5 horas', 0], ['Entre 5 e 10 horas', 1], ['Entre 11 e 20 horas', 2], ['Mais de 20 horas', 3], ['Não consigo estimar', 2],
    ],
  },
  {
    id: 'bottleneck',
    shortTitle: 'Principal gargalo operacional',
    title: 'Qual é o principal gargalo da operação hoje?',
    options: [
      ['Digitar ou transferir dados entre ferramentas', 3], ['Cobrar, lembrar e acompanhar tarefas', 3], ['Produzir relatórios e indicadores', 2], ['Organizar solicitações e aprovações', 2], ['Integrar os sistemas que já usamos', 3], ['Ainda não conseguimos identificar', 1],
    ],
  },
  {
    id: 'tools',
    shortTitle: 'Como a operação é controlada',
    title: 'Como esses processos são controlados atualmente?',
    options: [
      ['Papel, mensagens e controles informais', 3], ['Principalmente por planilhas', 3], ['Vários sistemas que não se comunicam', 2], ['Um sistema central, mas ainda com tarefas manuais', 1], ['Já temos processos bem integrados', 0],
    ],
  },
  {
    id: 'urgency',
    shortTitle: 'Prazo para melhorar os processos',
    title: 'Quando você pretende melhorar esses processos?',
    options: [
      ['O quanto antes', 3], ['Nos próximos 30 dias', 2], ['Nos próximos 90 dias', 1], ['Ainda estou pesquisando', 0],
    ],
  },
  {
    id: 'landing',
    shortTitle: 'Captação de novos contatos',
    title: 'Como sua empresa transforma interesse em novos contatos hoje?',
    options: [
      ['Dependemos de Instagram, indicação ou WhatsApp', 2], ['Temos site, mas ele gera poucos contatos', 3], ['Temos uma landing page e queremos melhorar a conversão', 2], ['Ainda não temos uma página de apresentação', 3], ['Isso não é prioridade agora', 0],
    ],
  },
]

const automationQuestions = [
  {
    id: 'repetition',
    shortTitle: 'Tarefas repetidas',
    title: 'Onde sua equipe perde mais tempo repetindo tarefas?',
    options: [
      ['Copiando dados entre sistemas ou planilhas', 3], ['Cobrando retornos, prazos e aprovações', 3], ['Respondendo as mesmas dúvidas no atendimento', 3], ['Atualizando relatórios e indicadores', 2], ['Ainda não conseguimos apontar', 1],
    ],
  },
  {
    id: 'handoff',
    shortTitle: 'Andamento das tarefas',
    title: 'Quando uma tarefa precisa avançar, como a equipe fica sabendo?',
    options: [
      ['Alguém precisa avisar manualmente', 3], ['Usamos mensagens, lembretes ou planilhas', 3], ['O sistema avisa em alguns casos', 1], ['Já acontece automaticamente', 0],
    ],
  },
  {
    id: 'contacts',
    shortTitle: 'Novos contatos',
    title: 'Quando chega um novo contato, o que acontece depois?',
    options: [
      ['A equipe responde e registra tudo manualmente', 3], ['A resposta depende de quem está disponível', 3], ['Parte do processo já é automática', 1], ['O contato já segue um fluxo definido', 0],
    ],
  },
  {
    id: 'integration',
    shortTitle: 'Integração entre sistemas',
    title: 'Os sistemas que você usa trocam informações entre si?',
    options: [
      ['Não, precisamos copiar os dados', 3], ['Só algumas informações se conectam', 2], ['Temos integrações, mas ainda há retrabalho', 1], ['Sim, a maior parte já está integrada', 0],
    ],
  },
  {
    id: 'automationGoal',
    shortTitle: 'Primeira automação',
    title: 'O que você gostaria de automatizar primeiro?',
    options: [
      ['Atendimento e qualificação de contatos', 3], ['Agendamentos, lembretes e retornos', 3], ['Cadastro e atualização de dados', 2], ['Processos internos e aprovações', 2], ['Relatórios e acompanhamento de resultados', 2],
    ],
  },
  {
    id: 'timing',
    shortTitle: 'Momento de agir',
    title: 'Quando você quer colocar essa automação para funcionar?',
    options: [
      ['O quanto antes', 3], ['Nos próximos 30 dias', 2], ['Nos próximos 90 dias', 1], ['Ainda estamos entendendo as opções', 0],
    ],
  },
]

const attendanceQuestions = [
  {
    id: 'responseTime',
    shortTitle: 'Tempo de resposta',
    title: 'Quanto tempo sua equipe demora para responder um novo contato?',
    options: [
      ['Respondemos na hora, quase sempre', 0], ['Em até 30 minutos', 1], ['Algumas horas depois', 2], ['Só no dia seguinte ou depois', 3],
    ],
  },
  {
    id: 'revenueLoss',
    shortTitle: 'Perda de faturamento',
    title: 'Você acredita que a empresa deixa de faturar por causa do atendimento?',
    options: [
      ['Não, não vejo esse problema', 0], ['Talvez, mas nunca medimos isso', 2], ['Sim, provavelmente perdemos vendas', 3], ['Sim, isso já é um problema conhecido', 3],
    ],
  },
  {
    id: 'afterHours',
    shortTitle: 'Atendimento fora do horário',
    title: 'O que acontece quando um cliente chama fora do horário comercial?',
    options: [
      ['Ele espera até o próximo dia útil', 3], ['Alguém da equipe responde pelo celular', 2], ['Já temos algum atendimento automático', 1], ['Quase não recebemos contato fora do horário', 0],
    ],
  },
  {
    id: 'followUp',
    shortTitle: 'Acompanhamento dos contatos',
    title: 'Depois do primeiro contato, como funciona o acompanhamento?',
    options: [
      ['Muitas vezes ninguém retoma o contato', 3], ['Depende de alguém lembrar de retornar', 3], ['Temos um processo, mas ainda manual', 2], ['Já acontece de forma automática', 0],
    ],
  },
  {
    id: 'gain',
    shortTitle: 'Maior ganho esperado',
    title: 'Se um atendimento respondesse, qualificasse e agendasse sozinho, qual seria o maior ganho?',
    options: [
      ['Parar de perder contatos e vendas', 3], ['Responder o cliente muito mais rápido', 3], ['Tirar tarefas repetitivas da equipe', 2], ['Ainda não sei dizer', 1],
    ],
  },
]

const variants = {
  general: {
    questions: generalQuestions,
    storageKey: 'otimiza-diagnostic',
    heading: 'Onde sua empresa pode destravar operação e crescimento?',
    description: 'Responda seis perguntas. Você recebe um score de oportunidade e descobre se o melhor ponto de partida é uma landing page, um sistema ou uma automação.',
    introTitle: 'Diagnóstico gratuito de operação e crescimento',
    introText: 'Identifique o maior gargalo da rotina ou da captação de contatos e descubra o melhor primeiro passo.',
    primaryFocus: (answers) => (answers.landing?.points >= 2 ? 'Landing page e conversão' : (answers.bottleneck?.label || 'Mapeamento operacional')),
    getResult(score) {
      if (score >= 15) return { label: 'Prioridade alta', text: 'Sua empresa mostra uma oportunidade clara de destravar a operação ou a captação de novos contatos. O próximo passo é priorizar o ponto de maior impacto.' }
      if (score >= 10) return { label: 'Alto potencial', text: 'Já existem sinais de tarefas, ferramentas ou canais de captação que podem ser organizados para o negócio avançar com menos atrito.' }
      if (score >= 6) return { label: 'Potencial moderado', text: 'Existe pelo menos um ponto de partida que pode simplificar a rotina ou tornar a presença digital mais efetiva.' }
      return { label: 'Estruturação inicial', text: 'O primeiro ganho está em clarear a rotina e a jornada do cliente antes de definir a melhor solução.' }
    },
  },
  automacoes: {
    questions: automationQuestions,
    storageKey: 'otimiza-diagnostic-automation',
    heading: 'Onde uma automação pode fazer diferença na sua rotina?',
    description: 'Responda seis perguntas e descubra qual tarefa vale automatizar primeiro.',
    introTitle: 'Diagnóstico gratuito de automações',
    introText: 'Em poucos minutos, você identifica onde sua equipe perde tempo e qual automação vale priorizar.',
    primaryFocus: (answers) => answers.automationGoal?.label || 'Mapeamento de automações',
    getResult(score) {
      if (score >= 15) return { label: 'Prioridade alta', text: 'Há tarefas manuais e pontos de acompanhamento que podem ser automatizados. O próximo passo é escolher por onde começar.' }
      if (score >= 10) return { label: 'Bom potencial', text: 'Sua rotina tem processos que podem ganhar velocidade com menos trabalho manual e mais acompanhamento.' }
      if (score >= 6) return { label: 'Potencial moderado', text: 'Existe um bom ponto de partida para organizar uma tarefa e testar uma automação.' }
      return { label: 'Primeiro mapeamento', text: 'Vale listar as tarefas que mais se repetem antes de decidir qual automação faz sentido.' }
    },
  },
  atendimento: {
    questions: attendanceQuestions,
    storageKey: 'otimiza-diagnostic-attendance',
    heading: 'Seu atendimento está deixando dinheiro na mesa?',
    description: 'Responda cinco perguntas rápidas e descubra o quanto uma IA de atendimento pode destravar na sua operação.',
    introTitle: 'Diagnóstico gratuito de atendimento com IA',
    introText: 'Em poucos minutos, você descobre se o atendimento está custando vendas e onde a IA pode ajudar primeiro.',
    primaryFocus: (answers) => answers.gain?.label || 'Mapeamento do atendimento',
    getResult(score) {
      if (score >= 11) return { label: 'Prioridade alta', text: 'O atendimento hoje provavelmente está custando vendas e horas da equipe. Automatizar essa frente deve ser o próximo passo.' }
      if (score >= 7) return { label: 'Bom potencial', text: 'Existem sinais claros de que uma IA de atendimento reduziria a demora e o retrabalho da equipe.' }
      if (score >= 4) return { label: 'Potencial moderado', text: 'Já existe um ponto de partida para tirar tarefas repetitivas do atendimento e responder mais rápido.' }
      return { label: 'Atendimento estruturado', text: 'Seu atendimento já está relativamente organizado. Vale mapear onde a IA pode ganhar tempo extra.' }
    },
  },
}

const initialContact = { name: '', phone: '', email: '', company: '', consent: false }

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4 4L19 7" /></svg>
}

function BackIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
}

export default function DiagnosticQuiz({ variant, anchorId }) {
  const urlVariant = new URLSearchParams(window.location.search).get('diagnostico') === 'automacoes' ? 'automacoes' : 'general'
  const active = variants[variant || urlVariant] || variants.general
  const questions = active.questions
  const storageKey = active.storageKey
  const [stage, setStage] = useState('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem(storageKey) || '{}') } catch { return {} }
  })
  const [contact, setContact] = useState(initialContact)
  const [error, setError] = useState('')

  useEffect(() => {
    sessionStorage.setItem(storageKey, JSON.stringify(answers))
  }, [answers, storageKey])

  const score = useMemo(() => Object.values(answers).reduce((sum, answer) => sum + (answer?.points || 0), 0), [answers])
  const result = active.getResult(score)
  const primaryFocus = active.primaryFocus(answers)
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
    const summary = questions.map((question, index) => `${index + 1}. *${question.shortTitle}*\n${answers[question.id]?.label || 'Não respondido'}`).join('\n\n')
    const message = `Olá, Otimiza! Acabei de concluir o diagnóstico.\n\n*CONTATO*\n• Nome: ${contact.name}\n• Empresa: ${contact.company || 'Não informada'}\n• WhatsApp: ${contact.phone}\n• E-mail: ${contact.email}\n\n*RESULTADO*\n• Score: ${score}/${questions.length * 3}\n• Perfil: ${result.label}\n• Prioridade identificada: ${primaryFocus}\n\n*RESPOSTAS DO DIAGNÓSTICO*\n${summary}\n\nQuero conversar sobre um plano inicial.`
    return `https://wa.me/558888557247?text=${encodeURIComponent(message)}`
  }

  function restart() {
    setAnswers({})
    setContact(initialContact)
    setCurrent(0)
    setStage('intro')
    sessionStorage.removeItem(storageKey)
  }

  return (
    <section className="diagnostic" id={anchorId || 'diagnostico'}>
      <div className="container diagnostic-layout">
        <div className="diagnostic-copy">
          <h2>{active.heading}</h2>
          <p>{active.description}</p>
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
                <h3>{active.introTitle}</h3>
                <p>{active.introText}</p>
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
                <div className="result-score"><strong>{score}</strong><span>/{questions.length * 3}</span></div>
                <h3>Seu Score de Oportunidade</h3>
                <p>{result.text}</p>
                <div className="result-focus"><small>PONTO PARA ANALISAR PRIMEIRO</small><strong>{primaryFocus}</strong></div>
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
