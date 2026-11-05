import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { formatPhone } from '../phone'
import { DK, OTHER, assess, nicheFromUrl, optionList, visibleQuestions } from './config'

const storageKey = 'otimizai-orcamento'
const whatsappNumber = '558888557247'
const initialContact = { name: '', company: '', phone: '', email: '', consent: false }
const presetNiche = nicheFromUrl()

function loadProgress() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey) || '{}')
    const answers = saved.answers && typeof saved.answers === 'object' ? saved.answers : {}
    if (presetNiche) answers.niche = presetNiche
    return { answers, current: Number.isInteger(saved.current) && saved.current >= 0 ? saved.current : 0 }
  } catch {
    return { answers: presetNiche ? { niche: presetNiche } : {}, current: 0 }
  }
}

const Icon = ({ d }) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>
const arrow = 'M5 12h14M13 6l6 6-6 6'
const backArrow = 'M19 12H5M11 6l-6 6 6 6'

export default function OrcamentoPage() {
  const transitioning = useRef(false)
  const [saved] = useState(loadProgress)
  const [answers, setAnswers] = useState(saved.answers)
  const [current, setCurrent] = useState(saved.current)
  const [contact, setContact] = useState(initialContact)
  const [screen, setScreen] = useState('questions')
  const [error, setError] = useState('')

  // Com o ramo vindo do link, a pergunta 1 não aparece.
  const list = useMemo(() => visibleQuestions(answers).filter((q) => !(presetNiche && q.id === 'niche')), [answers])
  const index = Math.min(current, list.length - 1)
  const question = list[index]
  const progress = screen === 'questions' ? ((index + 1) / list.length) * 100 : 100
  const needsOtherNiche = question?.id === 'niche' && answers.niche === OTHER

  useEffect(() => {
    if (screen !== 'questions') document.querySelector('.diagnostic-form-shell')?.scrollIntoView({ block: 'start' })
  }, [screen])

  useEffect(() => {
    try { sessionStorage.setItem(storageKey, JSON.stringify({ answers, current: index })) } catch { /* armazenamento indisponível */ }
  }, [answers, index])

  function setAnswer(id, value) {
    setError('')
    setAnswers((previous) => ({ ...previous, [id]: value }))
  }

  function toggle(option) {
    const selected = Array.isArray(answers[question.id]) ? answers[question.id] : []
    if (option.exclusive) return setAnswer(question.id, selected.includes(option.label) ? [] : [option.label])
    const exclusives = optionList(question, answers).filter((o) => o.exclusive).map((o) => o.label)
    const base = selected.filter((item) => !exclusives.includes(item))
    setAnswer(question.id, base.includes(option.label) ? base.filter((item) => item !== option.label) : [...base, option.label])
  }

  function validate() {
    const value = answers[question.id]
    if (question.type === 'multiple' && !(value || []).length) return 'Marque pelo menos uma opção para continuar.'
    if (question.type === 'single' && !value) return 'Escolha uma opção para continuar.'
    if (needsOtherNiche && (answers.otherNiche || '').trim().length < 2) return 'Escreva o ramo da sua empresa.'
    return ''
  }

  // O botão antigo ainda recebe cliques durante a animação de saída; sem a trava, um duplo clique pulava perguntas.
  function startTransition() {
    if (transitioning.current) return false
    transitioning.current = true
    window.setTimeout(() => { transitioning.current = false }, 450)
    return true
  }

  function next() {
    const message = validate()
    if (message) return setError(message)
    if (!startTransition()) return
    setError('')
    if (index < list.length - 1) setCurrent(index + 1)
    else setScreen('contact')
  }

  function back() {
    if (!startTransition()) return
    setError('')
    if (screen === 'contact') setScreen('questions')
    else if (index > 0) setCurrent(index - 1)
  }

  function submitContact(event) {
    event.preventDefault()
    const digits = contact.phone.replace(/\D/g, '')
    if (!contact.name.trim() || !contact.company.trim() || !contact.phone.trim()) return setError('Preencha nome, empresa e WhatsApp para continuar.')
    if (digits.length < 10) return setError('Informe o WhatsApp com DDD.')
    if (contact.email.trim() && !/^\S+@\S+\.\S+$/.test(contact.email)) return setError('Informe um e-mail válido ou deixe o campo em branco.')
    if (!contact.consent) return setError('Confirme o consentimento para enviar seu diagnóstico.')
    setError('')
    setScreen('result')
  }

  function whatsappUrl() {
    const { level, reasons, confirm, notes } = assess(answers)
    const ramo = answers.niche === OTHER ? `Outro (${answers.otherNiche})` : answers.niche
    const lines = visibleQuestions(answers).filter((q) => q.id !== 'niche').map((q) => {
      const value = answers[q.id]
      return `• ${q.title(answers)}\n  ${Array.isArray(value) ? value.join('; ') : value || 'Sem resposta'}`
    })
    const text = [
      '*DIAGNÓSTICO DE AUTOMAÇÃO — ORÇAMENTO*',
      '',
      `Ramo: ${ramo}`,
      `Escopo estimado: ${level}${reasons.length ? ` (${reasons.join('; ')})` : ''}`,
      '',
      '*CONTATO*',
      `Nome: ${contact.name}`,
      `Empresa: ${contact.company}`,
      `WhatsApp: ${contact.phone}`,
      contact.email.trim() && `E-mail: ${contact.email}`,
      '',
      '*RESPOSTAS*',
      ...lines,
      confirm.length ? `\n*CONFIRMAR NA CONVERSA*\n${confirm.map((c) => `• ${c}`).join('\n')}` : '',
      notes.length ? `\n*OBSERVAÇÕES*\n${notes.map((n) => `• ${n}`).join('\n')}` : '',
    ].filter((line) => line !== false && line !== '').join('\n').replace(/\n{3,}/g, '\n\n')
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  }

  function restart() {
    try { sessionStorage.removeItem(storageKey) } catch { /* armazenamento indisponível */ }
    setAnswers(presetNiche ? { niche: presetNiche } : {})
    setContact(initialContact)
    setCurrent(0)
    setError('')
    setScreen('questions')
  }

  const options = question ? optionList(question, answers) : []
  const selected = answers[question?.id]
  const enter = { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -16 }, transition: { duration: 0.25 } }

  return (
    <div className="diagnostic-page">
      <header className="diagnostic-page-header">
        <span className="logo">
          <span className="logo-icon"><img src={`${import.meta.env.BASE_URL}logo-clean.png`} alt="" /></span>
          <span className="logo-text">Otimiza<span>AI</span></span>
        </span>
      </header>

      <main className="diagnostic-page-main">
        <aside className="diagnostic-intro">
          <h1>Conte como é o seu atendimento. Nós montamos o orçamento.</h1>
          <p>Poucas perguntas, todas de clique, para entender o que a automação precisa fazer e quanto vai custar.</p>
          <ul>
            <li><Icon d="M5 12.5l4 4L19 7" /> Leva cerca de 3 minutos</li>
            <li><Icon d="M5 12.5l4 4L19 7" /> Quase tudo de clique, sem digitar texto longo</li>
            <li><Icon d="M5 12.5l4 4L19 7" /> Resumo pronto para enviar no WhatsApp</li>
          </ul>
        </aside>

        <section className="diagnostic-form-shell" aria-live="polite">
          <div className="diagnostic-progress" aria-label={`Progresso: ${Math.round(progress)}%`}>
            <div className="diagnostic-progress-meta"><span>{screen === 'questions' ? `Pergunta ${index + 1} de ${list.length}` : 'Etapa final'}</span><span>{Math.round(progress)}%</span></div>
            <div className="diagnostic-progress-track"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
          </div>

          <AnimatePresence mode="wait">
            {screen === 'questions' && question && (
              <motion.div className="diagnostic-step" key={question.id} {...enter}>
                <h2>{question.title(answers)}</h2>
                <p>{question.helper}</p>

                <div className={`diagnostic-options${question.type === 'multiple' ? ' diagnostic-options--stack' : ''}`} role={question.type === 'single' ? 'radiogroup' : 'group'} aria-label={question.title(answers)}>
                  {options.map((option) => {
                    const isOn = question.type === 'multiple' ? (selected || []).includes(option.label) : selected === option.label
                    return (
                      <button
                        key={option.label}
                        type="button"
                        className={isOn ? 'selected' : ''}
                        onClick={() => (question.type === 'multiple' ? toggle(option) : setAnswer(question.id, option.label))}
                        {...(question.type === 'multiple' ? { 'aria-pressed': isOn } : { role: 'radio', 'aria-checked': isOn })}
                      >
                        <span>{option.label}</span><i aria-hidden="true" />
                      </button>
                    )
                  })}
                </div>

                {needsOtherNiche && (
                  <label className="diagnostic-field diagnostic-field--inline">
                    <span>Qual é o ramo da sua empresa?</span>
                    <input value={answers.otherNiche || ''} onChange={(event) => setAnswer('otherNiche', event.target.value)} maxLength={40} placeholder="Ex.: academia, escola, contabilidade" autoFocus />
                  </label>
                )}

                {error && <p className="diagnostic-error" role="alert">{error}</p>}
                <div className="diagnostic-actions">
                  {index > 0 ? <button type="button" className="diagnostic-back" onClick={back}><Icon d={backArrow} /> Voltar</button> : <span />}
                  <button type="button" className="button" onClick={next}>Continuar <Icon d={arrow} /></button>
                </div>
              </motion.div>
            )}

            {screen === 'contact' && (
              <motion.form className="diagnostic-step" key="contact" {...enter} onSubmit={submitContact} noValidate>
                <h2>Para onde enviamos o orçamento?</h2>
                <p>Seus dados vão junto com o resumo para a nossa equipe retornar pelo WhatsApp.</p>
                <div className="diagnostic-contact-grid">
                  <label className="diagnostic-field"><span>Seu nome</span><input value={contact.name} onChange={(event) => setContact({ ...contact, name: event.target.value })} autoComplete="name" placeholder="Como podemos chamar você?" /></label>
                  <label className="diagnostic-field"><span>Empresa</span><input value={contact.company} onChange={(event) => setContact({ ...contact, company: event.target.value })} autoComplete="organization" placeholder="Nome da empresa" /></label>
                  <label className="diagnostic-field"><span>WhatsApp</span><input value={contact.phone} onChange={(event) => setContact({ ...contact, phone: formatPhone(event.target.value) })} type="tel" autoComplete="tel" inputMode="numeric" placeholder="(00) 00000-0000" /></label>
                  <label className="diagnostic-field"><span>E-mail <em>opcional</em></span><input value={contact.email} onChange={(event) => setContact({ ...contact, email: event.target.value })} autoComplete="email" inputMode="email" placeholder="voce@empresa.com" /></label>
                </div>
                <label className="diagnostic-consent"><input type="checkbox" checked={contact.consent} onChange={(event) => setContact({ ...contact, consent: event.target.checked })} /><span>Autorizo o uso destes dados para receber um orçamento e contato da OtimizaAI.</span></label>
                {error && <p className="diagnostic-error" role="alert">{error}</p>}
                <div className="diagnostic-actions">
                  <button type="button" className="diagnostic-back" onClick={back}><Icon d={backArrow} /> Voltar</button>
                  <button className="button" type="submit">Finalizar <Icon d={arrow} /></button>
                </div>
              </motion.form>
            )}

            {screen === 'result' && (
              <motion.div className="diagnostic-result" key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
                <span className="diagnostic-result-icon"><Icon d="M5 12.5l4 4L19 7" /></span>
                <h2>Pronto. Agora é só enviar.</h2>
                <p>Clique abaixo para mandar o resumo para a equipe da OtimizaAI pelo WhatsApp. O orçamento sai a partir dele.</p>
                <a className="button" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Enviar pelo WhatsApp <Icon d={arrow} /></a>
                <button type="button" className="diagnostic-restart" onClick={restart}>Refazer</button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  )
}

export { DK }
