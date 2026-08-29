const useCases = [
  {
    icon: 'inbox',
    title: 'Leads e atendimento',
    before: 'Copiar dados, avisar o vendedor e criar o acompanhamento.',
    after: 'O lead entra, é classificado e chega ao responsável com a próxima ação criada.',
  },
  {
    icon: 'database',
    title: 'Cadastros e integrações',
    before: 'Digitar a mesma informação em planilhas e sistemas diferentes.',
    after: 'O dado é registrado uma vez e sincronizado com as ferramentas necessárias.',
  },
  {
    icon: 'chart',
    title: 'Relatórios gerenciais',
    before: 'Reunir dados de várias fontes para montar o relatório do período.',
    after: 'Indicadores são atualizados e apresentados em um painel centralizado.',
  },
  {
    icon: 'bell',
    title: 'Alertas e tarefas',
    before: 'Depender da memória para cobrar prazos, pendências e retornos.',
    after: 'Cada evento aciona a pessoa certa e registra o andamento do processo.',
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

export default function ValueSection() {
  return (
    <>
      <section className="use-cases" id="solucoes">
        <div className="container">
          <div className="section-heading">
            <h2>Veja o que muda quando o processo começa a trabalhar sozinho.</h2>
            <p>Exemplos práticos de rotinas que podem deixar de consumir tempo todos os dias.</p>
          </div>

          <div className="use-case-list">
            {useCases.map((item) => (
              <article className="use-case-row" key={item.title}>
                <div className="case-title"><UseCaseIcon type={item.icon} /><h3>{item.title}</h3></div>
                <div className="case-state case-state--before"><small>HOJE</small><p>{item.before}</p></div>
                <div className="case-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
                <div className="case-state case-state--after"><small>AUTOMATIZADO</small><p>{item.after}</p></div>
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
              <div className="comparison-head"><span>Operação manual</span><b>ATRITO</b></div>
              <ul>{comparison.manual.map((item) => <li key={item}><i />{item}</li>)}</ul>
            </div>
            <div className="comparison-switch" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </div>
            <div className="comparison-side comparison-side--automatic">
              <div className="comparison-head"><span>Operação automatizada</span><b>FLUXO</b></div>
              <ul>{comparison.automatic.map((item) => <li key={item}><i />{item}</li>)}</ul>
            </div>
          </div>

          <p className="benefit-statement">Menos retrabalho. Mais velocidade. Decisões com dados e uma equipe livre para atuar no que exige atenção humana.</p>
        </div>
      </section>

      <section className="proof" id="resultados">
        <div className="container proof-layout">
          <div className="proof-copy">
            <h2>Sistemas que organizam toda a operação.</h2>
            <p>Da agenda de uma clínica aos prazos de um escritório jurídico: cada plataforma é desenhada para reunir a rotina, os dados e as decisões em um só lugar.</p>
            <a href="#diagnostico" className="text-link">
              Quero um sistema assim
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          <div className="proof-project proof-project--primary">
            <div className="proof-image">
              <img src="/myclinica_dashboard.png" alt="Dashboard completo do sistema MyClínica com indicadores financeiros e de atendimentos" />
            </div>
            <div className="proof-project-body">
              <div className="proof-project-copy">
                <h3>MyClínica</h3>
                <p>Sistema web para clínicas e consultórios que reúne agenda, pacientes, prontuário eletrônico e gestão financeira. O painel apresenta atendimentos, receitas e despesas para facilitar o acompanhamento diário.</p>
                <a href="https://site.myclinica.online" target="_blank" rel="noopener noreferrer" className="proof-link">
                  Conhecer o MyClínica
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
                </a>
              </div>
              <ul className="proof-features" aria-label="Principais recursos do MyClínica">
                <li>Agenda com Google Calendar</li>
                <li>Prontuário eletrônico</li>
                <li>Financeiro e indicadores</li>
                <li>Assistente com inteligência artificial</li>
              </ul>
              <p className="proof-note">Interface do sistema · dados ilustrativos</p>
            </div>
          </div>
          <div className="proof-project proof-project--secondary">
            <div className="proof-image">
              <img src="/gestprotech_estatisticas.jpg" alt="Painel completo do GestProTech com desempenho histórico, indicadores e faturamento" />
            </div>
            <div className="proof-project-body">
              <div className="proof-project-copy">
                <h3>GestProTech</h3>
                <p>Plataforma de gestão para escritórios de advocacia. Centraliza processos, clientes, audiências, prazos, documentos e finanças, com acessos por perfil e visão histórica do desempenho.</p>
                <a href="https://gestprotech.com.br" target="_blank" rel="noopener noreferrer" className="proof-link">
                  Conhecer o GestProTech
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
                </a>
              </div>
              <ul className="proof-features" aria-label="Principais recursos do GestProTech">
                <li>Processos, audiências e prazos</li>
                <li>Clientes e documentos</li>
                <li>Honorários e financeiro</li>
                <li>Perfis de acesso e parcerias</li>
              </ul>
              <p className="proof-note">Interface do sistema · dados ilustrativos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
