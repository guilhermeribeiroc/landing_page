import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './ia-humanizada.css'

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>

function Mark() {
  return <a className="ai-logo" href="index.html" aria-label="Voltar para a Otimiza AI"><img src={`${import.meta.env.BASE_URL}otimiza-mark-transparent.png`} alt="" /><span>Otimiza<span>AI</span></span></a>
}

function ChatScene() {
  return <div className="ai-phone" aria-label="Exemplo de conversa no WhatsApp com IA"><div className="ai-phone-speaker" /><div className="ai-chat-scene ai-whatsapp">
    <div className="ai-whatsapp-head"><div><i>◔</i><span><b>Alice · Assistente virtual</b><small>online agora</small></span></div><strong>⋮</strong></div>
    <div className="ai-whatsapp-chat">
      <div className="wa-message wa-message--incoming">Olá! Gostaria de entender como vocês podem ajudar meu escritório.<time>22:14</time></div>
      <div className="wa-message wa-message--outgoing">Olá, Mariana! Sou a Alice, assistente virtual da Otimiza. Posso fazer algumas perguntas rápidas para direcionar você? <time>22:14 ✓✓</time></div>
      <div className="wa-message wa-message--incoming">Claro. Estamos perdendo muitos contatos fora do horário.<time>22:15</time></div>
      <div className="wa-message wa-message--outgoing">Entendi. Já registrei seu interesse e posso sugerir uma conversa com nossa equipe no melhor horário para você.<time>22:15 ✓✓</time></div>
      <div className="wa-typing"><i /><i /><i /> Alice está digitando</div>
    </div>
    <div className="ai-whatsapp-input">Mensagem <span>➤</span></div>
  </div><div className="ai-phone-home" /></div>
}

function CrmScene() {
  return <div className="ai-crm-scene" aria-label="Exemplo de painel CRM atualizado pela IA">
    <div className="ai-crm-browser"><i /><i /><i /><span>crm.suaempresa.com</span><b>VISÃO DA OPERAÇÃO · EXEMPLO</b></div>
    <div className="ai-crm-dashboard"><div className="ai-crm-overview"><section className="crm-chart"><p>Novos contatos</p><div><i /><i /><i /><i /><i /></div><small>SEG &nbsp; TER &nbsp; QUA &nbsp; QUI &nbsp; SEX</small></section><section className="crm-rate"><span>68%</span><p>Oportunidades em avanço</p></section><section className="crm-stat"><b>53</b><p>Tarefas em andamento <em>→</em></p></section><section className="crm-stat"><b>R$ 18.400</b><p>Propostas acompanhadas <em>→</em></p></section></div><div className="ai-crm-pipeline">
      <section><header><h3>Novos contatos</h3><span>12</span></header><article><b>Mariana Costa</b><p>Escritório Costa & Lima</p><small>WhatsApp · agora</small><footer>IA qualificou <span>↗</span></footer></article><article><b>Rafael Mendes</b><p>Grupo Veritas</p><small>Landing page · 12 min</small><footer>Nova oportunidade <span>↗</span></footer></article></section>
      <section><header><h3>Qualificação</h3><span>07</span></header><article><b>Patrícia Rocha</b><p>Rocha Consultoria</p><small>WhatsApp · hoje</small><footer>Reunião sugerida <span>↗</span></footer></article><article><b>Lucas Nunes</b><p>Nunes Advocacia</p><small>Site · hoje</small><footer>Dados completos <span>↗</span></footer></article></section>
      <section><header><h3>Proposta enviada</h3><span>04</span></header><article className="crm-card--focus"><b>Marcos Vieira</b><p>Vieira & Associados</p><small>Automação comercial</small><footer>Assinatura acompanhada <span>↗</span></footer></article><article><b>Bianca Torres</b><p>Clínica Horizonte</p><small>Sistema sob medida</small><footer>Retorno agendado <span>↗</span></footer></article></section>
      <section><header><h3>Contrato fechado</h3><span>09</span></header><article><b>Almeida Jurídico</b><p>Implantação confirmada</p><small>Hoje · 10:24</small><footer>Onboarding criado <span>✓</span></footer></article><article><b>Valle Saúde</b><p>Reunião de início marcada</p><small>Amanhã · 09:00</small><footer>Agenda sincronizada <span>✓</span></footer></article></section>
    </div></div>
  </div>
}

function AiHumanizadaPage() {
  return <div className="ai-page">
    <header className="ai-header"><div className="container ai-header-inner"><Mark /><a href="index.html" className="ai-back">← Voltar para a Otimiza</a></div></header>
    <main>
      <section className="ai-hero">
        <div className="ai-orb ai-orb--one" /><div className="ai-orb ai-orb--two" />
        <div className="container ai-hero-grid">
          <div className="ai-hero-copy">
            <p className="ai-kicker"><i /> IA PARA ATENDIMENTO, VENDAS E OPERAÇÃO</p>
            <h1>A IA responde. <strong>O contexto decide.</strong></h1>
            <p>Uma assistente conectada aos processos da sua empresa para conversar, organizar informações e levar cada pessoa ao próximo passo — mesmo fora do horário comercial.</p>
            <a className="button ai-hero-button" href="#avaliar">Quero avaliar uma IA <Arrow /></a>
            <small>Feita com regras, tom de voz e limites definidos pela sua empresa.</small>
          </div>
          <ChatScene />
        </div>
      </section>

      <section className="ai-intro"><div className="container ai-intro-grid">
        <p className="ai-kicker">O QUE SIGNIFICA HUMANIZADA</p>
        <div><h2>Não é um robô com respostas prontas.</h2><p>É uma IA preparada com o contexto, a linguagem e as regras da sua empresa. Ela entende a intenção da conversa, consulta informações permitidas e sabe quando avançar — ou quando chamar alguém do time.</p></div>
      </div></section>

      <section className="ai-personality"><div className="container"><div className="ai-section-head ai-section-head--split"><div><p className="ai-kicker">PERSONALIDADE DEFINIDA POR VOCÊ</p><h2>Humanizada no jeito de conversar. Clara sobre quem ela é.</h2></div><p>A empresa escolhe o nome, o papel, o tom de voz e os limites da assistente. A experiência pode ser acolhedora, objetiva, comercial ou técnica — sempre com uma identidade que representa bem a marca.</p></div><div className="ai-personality-grid">
        <article><span>01</span><h3>Nome e papel próprios</h3><p>Ela pode ter um nome específico e atuar como assistente virtual, atendente digital ou apoio direto de uma área da empresa. Também pode falar em nome da marca ou como assistente do fundador, de forma transparente.</p></article>
        <article><span>02</span><h3>Tom, empatia e comportamento</h3><p>Você define se a conversa será mais próxima, formal, consultiva ou direta. A IA pode acolher dúvidas, adaptar a linguagem e conduzir o atendimento de acordo com o perfil de cada público.</p></article>
        <article><span>03</span><h3>Ritmo de conversa natural</h3><p>Ela pode simular digitação, respeitar pausas e construir respostas no ritmo que faz sentido para o canal. O objetivo é uma conversa mais humana, sem fingir que não é uma IA.</p></article>
      </div><p className="ai-personality-note">Uma experiência realmente humanizada não é esconder a tecnologia: é usar a tecnologia com contexto, empatia e responsabilidade.</p></div></section>

      <section className="ai-comparison"><div className="container"><div className="ai-section-head"><p className="ai-kicker">A DIFERENÇA NA PRÁTICA</p><h2>Resposta automática não é atendimento de verdade.</h2></div><div className="ai-compare-grid">
        <article className="ai-compare-card ai-compare-card--common"><p>CHATBOT COMUM</p><h3>Segue um roteiro.</h3><ul><li>Responde perguntas fechadas</li><li>Desvia para links ou menus</li><li>Não conhece histórico ou contexto</li><li>Para quando a conversa fica complexa</li></ul></article>
        <article className="ai-compare-card ai-compare-card--human"><p>IA HUMANIZADA</p><h3>Entende o cenário e encaminha.</h3><ul><li>Interpreta a intenção da pessoa</li><li>Registra e consulta dados no CRM</li><li>Agenda o próximo passo no calendário</li><li>Encaminha para o humano com contexto</li></ul></article>
      </div></div></section>

      <section className="ai-integrations"><div className="container"><div className="ai-section-head ai-section-head--split"><div><p className="ai-kicker">CONECTADA À OPERAÇÃO</p><h2>Uma conversa pode mover o negócio inteiro.</h2></div><p>Em vez de responder e esquecer, a IA transforma cada interação em uma ação registrada, acompanhável e pronta para o time continuar.</p></div><CrmScene /><div className="ai-integration-grid">
        <article><span className="ai-integration-icon ai-integration-icon--crm">01</span><h3>CRM atualizado</h3><p>Identifica contatos, registra interesses e mantém o histórico disponível para a próxima conversa.</p></article>
        <article><span className="ai-integration-icon ai-integration-icon--calendar">02</span><h3>Google Calendar integrado</h3><p>Consulta horários, agenda reuniões e envia confirmações sem depender de troca manual de mensagens.</p></article>
        <article><span className="ai-integration-icon ai-integration-icon--human">03</span><h3>Humano no momento certo</h3><p>Quando existe exceção, negociação sensível ou necessidade de decisão, a conversa chega à pessoa certa com todo o contexto.</p></article>
      </div></div></section>

      <section className="ai-always"><div className="container ai-always-grid"><div><p className="ai-kicker">DISPONÍVEL, MAS COM LIMITES</p><h2>Atendimento contínuo. Critério humano.</h2><p>A IA pode responder fora do horário comercial, confirmar recebimentos e preparar o próximo passo. Ela não inventa informação, não substitui decisões estratégicas e segue os limites definidos pela sua operação.</p></div><div className="ai-hours"><span>22:14</span><div><i /> Resposta enviada fora do expediente</div><div><i /> Interesse salvo no CRM</div><div><i /> Reunião sugerida para o próximo horário disponível</div></div></div></section>

      <section className="ai-case"><div className="container ai-case-grid"><div className="ai-case-copy"><p className="ai-kicker">EXEMPLO: ESCRITÓRIO DE ADVOCACIA</p><h2>Da primeira dúvida à contratação, sem deixar o interesse esfriar.</h2><p>Uma pessoa entra em contato à noite. A IA entende a área de interesse, conduz a triagem permitida, coleta dados iniciais, registra o caso e apresenta o próximo passo.</p><p>Com regras comerciais aprovadas, ela pode conduzir a jornada até a proposta e a assinatura. Questões jurídicas, exceções e decisões sensíveis continuam com a equipe.</p></div><ol className="ai-case-steps"><li><span>01</span><div><b>Entende a necessidade</b><p>Identifica o tipo de atendimento e faz as perguntas iniciais.</p></div></li><li><span>02</span><div><b>Organiza o próximo passo</b><p>Registra o interesse, consulta a agenda e sugere uma conversa.</p></div></li><li><span>03</span><div><b>Conduz a contratação</b><p>Apresenta informações comerciais aprovadas e acompanha a assinatura.</p></div></li><li><span>04</span><div><b>Chama o especialista</b><p>Encaminha ao humano sempre que o caso exige análise ou decisão.</p></div></li></ol></div></section>

      <section className="ai-cta" id="avaliar"><div className="container"><div className="ai-cta-box"><div><p className="ai-kicker">PRÓXIMO PASSO</p><h2>Vamos descobrir onde uma IA pode ajudar de verdade.</h2><p>Começamos pelo atendimento que sua equipe já faz hoje, pelas ferramentas que já usa e pelo resultado que precisa melhorar.</p></div><a href="https://wa.me/558888557247?text=Olá!%20Quero%20avaliar%20uma%20IA%20humanizada%20para%20minha%20empresa." target="_blank" rel="noopener noreferrer" className="button">Quero avaliar minha IA <Arrow /></a></div></div></section>
    </main>
    <footer className="ai-footer"><div className="container"><Mark /><span>IA com contexto para operações reais.</span></div></footer>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><AiHumanizadaPage /></React.StrictMode>)
