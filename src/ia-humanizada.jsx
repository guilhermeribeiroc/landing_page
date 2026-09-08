import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './ia-humanizada.css'
import DiagnosticQuiz from './components/DiagnosticQuiz'

const base = import.meta.env.BASE_URL

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
const ArrowUpRight = () => <svg className="crm-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>

function Mark() {
  return <a className="ai-logo" href={base} aria-label="Voltar para a Otimiza AI"><img src={`${base}otimiza-mark-transparent.png`} alt="" /><span>Otimiza<span>AI</span></span></a>
}

function ChatScene() {
  return <div className="ai-phone ai-phone--iphone" aria-label="Exemplo de conversa no WhatsApp com IA"><span className="ai-phone-button ai-phone-button--silent" /><span className="ai-phone-button ai-phone-button--volume-up" /><span className="ai-phone-button ai-phone-button--volume-down" /><span className="ai-phone-button ai-phone-button--power" /><div className="ai-phone-speaker" /><div className="ai-chat-scene ai-whatsapp">
    <div className="ai-whatsapp-head"><div><img className="ai-whatsapp-avatar" src="/camila-avatar.png" alt="Camila" /><span><b>Camila · Cliente</b><small>online agora</small></span></div><strong>⋮</strong></div>
    <div className="ai-whatsapp-chat">
      <div className="wa-message wa-message--incoming">Olá! Sou a Camila, cliente nova. Gostaria de marcar uma consulta com dermatologista.<time>22:14</time></div>
      <div className="wa-message wa-message--outgoing">Claro, Camila! Temos a Dra. Marina Lopes e o Dr. André Silva. Você tem preferência?<time>22:14 ✓✓</time></div>
      <div className="wa-message wa-message--incoming">Pode ser com a Dra. Marina. Quero marcar na terça, dia 17.<time>22:15</time></div>
      <div className="wa-message wa-message--outgoing">Perfeito! Vou conferir a agenda dela para terça, dia 17.<time>22:15 ✓✓</time></div>
      <div className="wa-message wa-message--outgoing">Nesse dia, temos 9h, 14h ou 16h30. Qual horário você prefere?<time>22:15 ✓✓</time></div>
      <div className="wa-message wa-message--incoming">16h30, por favor.<time>22:16</time></div>
      <div className="wa-message wa-message--outgoing">Pronto! Consulta confirmada com a Dra. Marina, terça às 16h30. Obrigada, Camila!<time>22:16 ✓✓</time></div>
    </div>
    <div className="ai-whatsapp-input">Mensagem <span>➤</span></div>
  </div><div className="ai-phone-home" /></div>
}

function CrmScene() {
  return <div className="ai-crm-scene" aria-label="Exemplo de painel CRM atualizado pela IA">
    <div className="ai-crm-browser"><i /><i /><i /><span>crm.suaempresa.com</span><b>VISÃO DA OPERAÇÃO · EXEMPLO</b></div>
    <div className="ai-crm-dashboard"><div className="ai-crm-overview"><section className="crm-chart"><p>Novos contatos</p><div><i /><i /><i /><i /><i /></div><small>SEG &nbsp; TER &nbsp; QUA &nbsp; QUI &nbsp; SEX</small></section><section className="crm-rate"><span>68%</span><p>Oportunidades em avanço</p></section><section className="crm-stat"><b>53</b><p>Tarefas em andamento <em>→</em></p></section><section className="crm-stat"><b>R$ 18.400</b><p>Propostas acompanhadas <em>→</em></p></section></div><div className="ai-crm-pipeline">
      <section><header><h3>Novos contatos</h3><span>12</span></header><article><b>Mariana Costa</b><p>Escritório Costa & Lima</p><small>WhatsApp · agora</small><footer>IA qualificou <ArrowUpRight /></footer></article><article><b>Rafael Mendes</b><p>Grupo Veritas</p><small>Landing page · 12 min</small><footer>Nova oportunidade <ArrowUpRight /></footer></article></section>
      <section><header><h3>Qualificação</h3><span>07</span></header><article><b>Patrícia Rocha</b><p>Rocha Consultoria</p><small>WhatsApp · hoje</small><footer>Reunião sugerida <ArrowUpRight /></footer></article><article><b>Lucas Nunes</b><p>Nunes Advocacia</p><small>Site · hoje</small><footer>Dados completos <ArrowUpRight /></footer></article></section>
      <section><header><h3>Proposta enviada</h3><span>04</span></header><article className="crm-card--focus"><b>Marcos Vieira</b><p>Vieira & Associados</p><small>Automação comercial</small><footer>Assinatura acompanhada <ArrowUpRight /></footer></article><article><b>Bianca Torres</b><p>Clínica Horizonte</p><small>Sistema sob medida</small><footer>Retorno agendado <ArrowUpRight /></footer></article></section>
      <section><header><h3>Contrato fechado</h3><span>09</span></header><article><b>Almeida Jurídico</b><p>Implantação confirmada</p><small>Hoje · 10:24</small><footer>Onboarding criado <span>✓</span></footer></article><article><b>Valle Saúde</b><p>Reunião de início marcada</p><small>Amanhã · 09:00</small><footer>Agenda sincronizada <span>✓</span></footer></article></section>
    </div></div>
  </div>
}

function AiHumanizadaPage() {
  return <div className="ai-page">
    <header className="ai-header"><div className="container ai-header-inner"><Mark /><a href={base} className="ai-back">← Voltar para a Otimiza</a></div></header>
    <main>
      <section className="ai-hero">
        <div className="ai-orb ai-orb--one" /><div className="ai-orb ai-orb--two" />
        <div className="container ai-hero-grid">
          <div className="ai-hero-copy">
            <p className="ai-kicker"><i /> IA PARA ATENDIMENTO, VENDAS E OPERAÇÃO</p>
            <h1>A IA responde. <strong>O contexto decide.</strong></h1>
            <p>Uma assistente que conversa com seus clientes, consulta as informações certas e ajuda sua equipe a não perder contatos, mesmo fora do horário comercial.</p>
            <a className="button ai-hero-button" href="#avaliar">Fazer diagnóstico <Arrow /></a>
            <small>Você define o tom, o que ela pode fazer e quando chama alguém da equipe.</small>
          </div>
          <ChatScene />
        </div>
      </section>

      <section className="ai-intro"><div className="container ai-section-head ai-section-head--split">
        <div><p className="ai-kicker"><i /> O QUE SIGNIFICA HUMANIZADA</p><h2>Não segue um roteiro engessado.</h2></div>
        <p>Ela entende o assunto da conversa, usa as informações permitidas da empresa e encaminha o que precisa para a pessoa certa.</p>
      </div></section>

      <section className="ai-personality"><div className="container"><div className="ai-section-head ai-section-head--split"><div><p className="ai-kicker">PERSONALIDADE DEFINIDA POR VOCÊ</p><h2>Você define como ela atende.</h2></div><p>Nome, função, tom de voz e limites ficam de acordo com a sua empresa. O atendimento pode ser mais próximo, direto, comercial ou técnico.</p></div><div className="ai-personality-grid">
        <article><span>01</span><h3>Nome e função</h3><p>Ela pode ter um nome próprio e atuar como assistente virtual, atendente digital ou apoio de uma área da empresa.</p></article>
        <article><span>02</span><h3>Conversa do seu jeito</h3><p>Você decide se o atendimento será mais formal, próximo, consultivo ou objetivo, sempre respeitando a linguagem da marca.</p></article>
        <article><span>03</span><h3>Ritmo natural</h3><p>Ela pode simular digitação, respeitar pausas e manter uma conversa clara, sem fingir que é uma pessoa.</p></article>
      </div><p className="ai-personality-note">O cliente encontra uma conversa objetiva. A equipe sabe o que aconteceu e qual é o próximo passo.</p></div></section>

      <section className="ai-comparison"><div className="container"><div className="ai-section-head"><p className="ai-kicker">A DIFERENÇA NA PRÁTICA</p><h2>O atendimento muda quando a conversa tem contexto.</h2></div><div className="ai-compare-grid">
        <article className="ai-compare-card ai-compare-card--common"><div className="ai-compare-label"><p>CHATBOT GENÉRICO</p><span>LIMITADO</span></div><h3>Responde.<br />Mas não resolve.</h3><div className="ai-compare-demo ai-compare-demo--common"><div className="ai-compare-wa-head"><i>◔</i><span><b>Atendimento automático</b><small>online agora</small></span><strong>⋮</strong></div><div className="ai-compare-wa-body"><p className="ai-compare-wa-message ai-compare-wa-message--in">Preciso de ajuda com meu caso.</p><p className="ai-compare-wa-message ai-compare-wa-message--out">Olá! Escolha uma opção:<br /><span>1 · Preços</span><br /><span>2 · Horários</span><br /><span>3 · Falar com suporte</span></p></div></div><ul><li>Só responde o que já está no menu</li><li>Não consulta histórico ou prioridade</li><li>Passa o contato quando a conversa sai do roteiro</li></ul></article>
        <div className="ai-compare-vs" aria-hidden="true">VS</div>
        <article className="ai-compare-card ai-compare-card--human"><div className="ai-compare-label"><p>IA HUMANIZADA OTIMIZA</p><span>EM AÇÃO</span></div><h3>Entende.<br />E faz avançar.</h3><div className="ai-compare-demo ai-compare-demo--human"><div className="ai-compare-wa-head"><i>◔</i><span><b>Alice · Assistente virtual</b><small>online agora</small></span><strong>⋮</strong></div><div className="ai-compare-wa-body"><p className="ai-compare-wa-message ai-compare-wa-message--in">Estamos perdendo contatos fora do horário.</p><p className="ai-compare-wa-message ai-compare-wa-message--out">Entendi, Mariana. Já registrei seu interesse.</p><p className="ai-compare-wa-message ai-compare-wa-message--out">Posso sugerir um horário para nossa equipe conversar com você?</p></div></div><ul><li>Entende o assunto e o histórico</li><li>Consulta e registra dados da operação</li><li>Agenda e chama o humano quando precisa</li></ul></article>
      </div></div></section>

      <section className="ai-integrations"><div className="container"><div className="ai-section-head ai-section-head--split"><div><p className="ai-kicker">CONECTADA À OPERAÇÃO</p><h2>Todo contato deixa a operação mais organizada.</h2></div><p>Depois de atender, ela registra o que importa, organiza o próximo passo e deixa tudo pronto para o time continuar.</p></div><CrmScene /><div className="ai-integration-grid">
        <article><span className="ai-integration-icon ai-integration-icon--crm">01</span><h3>CRM atualizado</h3><p>Registra o contato, o interesse e o histórico para que a próxima pessoa saiba de onde continuar.</p></article>
        <article><span className="ai-integration-icon ai-integration-icon--calendar">02</span><h3>Google Calendar integrado</h3><p>Consulta horários, agenda reuniões e envia confirmações sem depender de troca manual de mensagens.</p></article>
        <article><span className="ai-integration-icon ai-integration-icon--human">03</span><h3>Humano no momento certo</h3><p>Quando o caso pede atenção, a conversa chega à pessoa certa com o contexto necessário.</p></article>
      </div></div></section>

      <section className="ai-always"><div className="container ai-always-grid"><div><p className="ai-kicker">DISPONÍVEL, MAS COM LIMITES</p><h2>Atende quando você não está. Sem passar dos limites.</h2><p>Ela pode responder fora do horário, confirmar que recebeu o contato e deixar o próximo passo preparado. As regras da sua operação continuam valendo.</p></div><div className="ai-hours"><header><div><p>FORA DO EXPEDIENTE</p><span>22:14</span></div><b>Uma cliente manda mensagem às 22:14.</b></header><div className="ai-hours-chat"><p className="ai-hours-message ai-hours-message--in">Olá! Quero marcar uma consulta.</p><p className="ai-hours-message ai-hours-message--out">Olá! Posso encontrar um horário para você agora.</p></div><div className="ai-hours-results"><div><i>✓</i><span>Cliente atendida na hora</span></div><div><i>✓</i><span>Contato salvo no CRM</span></div><div><i>✓</i><span>Horário sugerido para a equipe</span></div></div></div></div></section>

      <section className="ai-case"><div className="container ai-case-grid"><div className="ai-case-copy"><p className="ai-kicker">EXEMPLO: ESCRITÓRIO DE ADVOCACIA</p><h2>Da primeira dúvida à contratação, sem deixar o interesse esfriar.</h2><p>Uma pessoa chama à noite. A IA entende a área de interesse, faz as perguntas permitidas, registra o caso e apresenta o próximo passo.</p><p>Com regras comerciais aprovadas, ela pode conduzir a conversa até a proposta e a assinatura. Questões jurídicas e decisões sensíveis continuam com a equipe.</p></div><ol className="ai-case-steps"><li><span>01</span><div><b>Entende a necessidade</b><p>Identifica o tipo de atendimento e faz as perguntas iniciais.</p></div></li><li><span>02</span><div><b>Organiza o próximo passo</b><p>Registra o interesse, consulta a agenda e sugere uma conversa.</p></div></li><li><span>03</span><div><b>Conduz a contratação</b><p>Apresenta informações comerciais aprovadas e acompanha a assinatura.</p></div></li><li><span>04</span><div><b>Chama o especialista</b><p>Encaminha ao humano quando o caso exige análise ou decisão.</p></div></li></ol></div></section>

      <DiagnosticQuiz variant="atendimento" anchorId="avaliar" />
    </main>
    <footer className="ai-footer"><div className="container"><Mark /><span>Tecnologia pensada para a sua operação.</span></div></footer>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><AiHumanizadaPage /></React.StrictMode>)
