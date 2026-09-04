const solutionCards = [
  {
    icon: 'inbox',
    eyebrow: '01 · Atrair',
    title: 'Landing pages que fazem sua oferta ser escolhida.',
    description: 'Transformamos uma boa solução em uma página clara, desejável e pronta para gerar conversas com as pessoas certas.',
    outcome: 'Para parar de perder oportunidades antes mesmo do primeiro contato.',
    action: 'Ver landing da OhFome',
    href: 'https://ohfome.app/site/',
    visual: 'landing',
    featured: true,
  },
  {
    icon: 'database',
    eyebrow: '02 · Organizar',
    title: 'Sistemas que colocam a operação no mesmo lugar.',
    description: 'Desenhamos plataformas para reunir processos, dados e decisões sem obrigar a equipe a trabalhar em torno das ferramentas.',
    outcome: 'Para quem já cresceu mais rápido do que a rotina consegue acompanhar.',
    action: 'Conhecer nossos sistemas',
    href: '#resultados',
    visual: 'system',
  },
  {
    icon: 'chart',
    eyebrow: '03 · Acelerar',
    title: 'Automações que fazem o trabalho avançar sozinho.',
    description: 'Conectamos as ferramentas que você já usa para que informação, tarefas e alertas cheguem ao lugar certo na hora certa.',
    outcome: 'Para reduzir retrabalho sem perder contexto, controle ou histórico.',
    action: 'Mapear uma automação',
    href: '#diagnostico',
    visual: 'automation',
  },
]

function UseCaseIcon({ type }) {
  const paths = {
    inbox: <><path d="M4 5h16v14H4z" /><path d="M4 14h4l2 2h4l2-2h4" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" /></>,
    chart: <><path d="M4 20V9M10 20V4M16 20v-7M22 20H2" /></>,
    bell: <><path d="M18 8a6 6 0 00-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

function SolutionVisual({ type }) {
  if (type === 'landing') {
    return <div className="solution-preview solution-preview--landing"><img src="/projects/ohfome-landing.png" alt="Prévia da landing page da OhFome" /></div>
  }

  if (type === 'system') {
    return <div className="solution-preview solution-preview--system" aria-hidden="true"><div className="preview-browser"><i /><i /><i /><span>painel.suaempresa</span></div><div className="preview-dashboard"><aside><i /><i /><i /></aside><div><header><span /><b>Visão da operação</b><em>Hoje</em></header><section><span><small>Pendências</small><b>Organizadas</b></span><i /><i /><i /></section><footer><b>Processos</b><span>Atualizado agora</span></footer></div></div></div>
  }

  return <div className="solution-preview solution-preview--automation" aria-hidden="true"><div className="automation-path"><div><i className="dot dot--source" /><span>Novo contato</span></div><b>↓</b><div><i className="dot dot--process" /><span>Qualificar lead</span></div><b>↓</b><div><i className="dot dot--result" /><span>Equipe avisada</span></div></div><p>O processo continua — mesmo quando você não está olhando.</p></div>
}

const comparison = {
  manual: [
    'A mesma informação é digitada várias vezes',
    'O andamento depende de mensagens e cobranças',
    'Relatórios chegam quando a decisão já atrasou',
    'Erros aparecem somente no fim do processo',
    'Crescer aumenta o volume de trabalho manual',
  ],
  automatic: [
    'Cada informação entra uma única vez',
    'Tarefas avançam por regras definidas',
    'Indicadores ficam disponíveis para consulta',
    'Alertas antecipam atrasos e pendências',
    'A operação cresce com controle e histórico',
  ],
}

const systemCases = [
  {
    name: 'MyClínica',
    category: 'SaaS público · Saúde & atendimento',
    description: 'Agenda, prontuário, financeiro e relacionamento em uma operação clínica mais simples.',
    href: 'https://site.myclinica.online',
    logo: '/myclinica-logo.png',
    features: ['Agenda inteligente', 'Prontuário digital', 'Financeiro integrado'],
    visual: 'clinic',
  },
  {
    name: 'GestProTech',
    category: 'SaaS público · Gestão jurídica',
    description: 'Processos, prazos, clientes e resultados organizados para escritórios que precisam de visão.',
    href: 'https://gestprotech.com.br',
    logo: '/gestprotech-logo.jpeg',
    features: ['Processos e prazos', 'Financeiro centralizado', 'Acessos por perfil'],
    visual: 'legal',
  },
]

function SystemVisual({ type }) {
  const rows = type === 'clinic' ? ['Agenda de hoje', 'Pacientes confirmados', 'Receita do período'] : ['Prazos da semana', 'Processos ativos', 'Honorários a receber']
  return (
    <div className={`system-visual system-visual--${type}`} aria-hidden="true">
      <div className="system-window-bar"><i /><i /><i /><span>{type === 'clinic' ? 'myclinica.app' : 'gestprotech.app'}</span></div>
      <div className="system-window-body">
        <div className="system-side"><b /><b /><b /><b /></div>
        <div className="system-main">
          <div className="system-main-head"><span /><em>Visão geral</em><strong>Atualizado agora</strong></div>
          <div className="system-metric-row"><div><small>Visão central</small><b>Atualizada</b></div><div className="system-graphic"><i /><i /><i /><i /><i /><i /></div></div>
          <div className="system-list">{rows.map((row, index) => <div key={row}><span>{row}</span><b>{String(index + 1).padStart(2, '0')}</b></div>)}</div>
        </div>
      </div>
    </div>
  )
}

export default function ValueSection() {
  return (
    <>
      <section className="use-cases" id="solucoes">
        <div className="container">
          <div className="solutions-heading">
            <p className="section-kicker">O ponto de partida do seu próximo avanço</p>
            <h2>Onde sua empresa precisa destravar primeiro?</h2>
            <p>Da primeira visita à operação rodando: criamos o ponto que falta para sua empresa avançar com mais clareza, presença e ritmo.</p>
          </div>

          <div className="solution-journey" aria-label="Jornada das soluções da Otimiza AI">
            <span>Atrair clientes</span><i>→</i><span>Organizar a operação</span><i>→</i><span>Automatizar o crescimento</span>
          </div>

          <div className="solution-card-grid">
            {solutionCards.map((item) => (
              <article className={`solution-choice ${item.featured ? 'solution-choice--featured' : ''}`} key={item.title}>
                <div className="solution-choice-top"><span>{item.eyebrow}</span><UseCaseIcon type={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <SolutionVisual type={item.visual} />
                <div className="solution-choice-bottom"><small>{item.outcome}</small><a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>{item.action} <span aria-hidden="true">→</span></a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits" id="beneficios">
        <div className="container">
          <div className="section-heading section-heading--split">
            <h2>O problema não é usar planilhas. É depender delas para tudo.</h2>
            <p>Automação organiza o caminho da informação para a equipe ganhar velocidade sem perder controle.</p>
          </div>

          <div className="comparison">
            <div className="comparison-side comparison-side--manual">
              <div className="comparison-head"><span><small>O CUSTO INVISÍVEL</small>Operação manual</span><b>ATRITO</b></div>
              <ul>{comparison.manual.map((item) => <li key={item}><i />{item}</li>)}</ul>
              <p className="comparison-verdict">Quanto mais a empresa cresce, mais a rotina depende de esforço manual.</p>
            </div>
            <div className="comparison-switch" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </div>
            <div className="comparison-side comparison-side--automatic">
              <div className="comparison-head"><span><small>O RITMO QUE O NEGÓCIO PRECISA</small>Operação automatizada</span><b>FLUXO</b></div>
              <ul>{comparison.automatic.map((item) => <li key={item}><i />{item}</li>)}</ul>
              <p className="comparison-verdict">A equipe sabe o que fazer. A informação chega. O negócio continua avançando.</p>
            </div>
          </div>

          <p className="benefit-statement">Menos retrabalho. Mais velocidade. Decisões com dados e uma equipe livre para atuar no que exige atenção humana.</p>
        </div>
      </section>

      <section className="proof" id="resultados">
        <div className="container">
          <div className="proof-copy">
            <p className="section-kicker">Produtos SaaS da Otimiza</p>
            <h2>Dois sistemas públicos dentro de um portfólio maior.</h2>
            <p>MyClínica e GestProTech estão abertos ao público e representam duas das nossas principais plataformas. Além deles, criamos outros sistemas e soluções sob medida para operações específicas.</p>
            <a href="#diagnostico" className="text-link">
              Quero um sistema assim
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          <div className="system-cases">
            {systemCases.map((system) => (
              <article className="system-case" key={system.name}>
                <div className="system-case-copy">
                  <p>{system.category}</p>
                  <div className="system-product-head">
                    <div className="system-product-logo"><img src={system.logo} alt={`Logo ${system.name}`} /></div>
                    <h3>{system.name}</h3>
                  </div>
                  <span>{system.description}</span>
                  <ul>{system.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                  <a href={system.href} target="_blank" rel="noopener noreferrer" className="system-case-link">
                    Conhecer {system.name}
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
                  </a>
                </div>
                <SystemVisual type={system.visual} />
              </article>
            ))}
          </div>
          <p className="proof-portfolio-note">Também desenvolvemos plataformas internas, produtos sob medida e novas soluções para diferentes operações.</p>
        </div>
      </section>
    </>
  )
}
