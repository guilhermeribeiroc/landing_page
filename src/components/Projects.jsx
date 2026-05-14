import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 'gestprotech',
    tag: 'Sistema Jurídico',
    name: 'GestProTech',
    slogan: 'Gestão Completa para Escritórios de Advocacia',
    desc: 'Plataforma SaaS desenvolvida para modernizar a gestão jurídica. Controle de processos, clientes, audiências, prazos e finanças num único sistema. Interface intuitiva com autenticação segura e acessos por perfil.',
    status: 'Em operação',
    year: '2026',
    link: 'https://gestprotech.com.br',
    features: [
      'Gestão de processos com acompanhamento de status',
      'Cadastro multi-cliente com documentação',
      'Agenda com alertas de audiências e prazos',
      'Dashboard financeiro com relatórios',
      'Controle de acesso por perfil (Admin, Advogado)',
      'Gestão de parcerias entre profissionais',
      'Controle de despesas e lançamentos avulsos',
      'Importação automática de planilhas Excel',
      'Controle de honorários e parcelamentos',
      'Módulo de perícias e especialistas',
    ],
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(92,224,216,0.08) 100%)',
    screenshots: [
      {
        src: '/gestprotech_processos.jpg',
        label: 'Processos Ativos',
        desc: 'Gestão completa dos processos com status, área/tipo e ações rápidas de edição.',
      },
      {
        src: '/gestprotech_agenda.jpg',
        label: 'Agenda e Atendimentos',
        desc: 'Calendário mensal integrado com agendamento de atendimentos e visualização de compromissos.',
      },
      {
        src: '/gestprotech_estatisticas.jpg',
        label: 'Estatísticas e Faturamento',
        desc: 'Desempenho histórico com KPIs, relatório mensal detalhado e faturamento acumulado.',
      },
      {
        src: '/gestprotech_parcerias.jpg',
        label: 'Processos em Parceria',
        desc: 'Organização de processos compartilhados com outros profissionais parceiros.',
      },
      {
        src: '/gestprotech_arquivados.jpg',
        label: 'Processos Arquivados',
        desc: 'Gerenciamento de casos arquivados com filtros por status e período.',
      },
      {
        src: '/gestprotech_financeiro.jpg',
        label: 'Resumo Financeiro',
        desc: 'Dashboard financeiro completo com faturamento, despesas, lucro líquido e parcelas a receber.',
      },
      {
        src: '/gestprotech_lancamentos.jpg',
        label: 'Lançamentos e Despesas',
        desc: 'Registro de entradas e saídas avulsas, gráfico de produtividade e extrato detalhado.',
      },
      {
        src: '/gestprotech_clientes.jpg',
        label: 'Lista de Clientes',
        desc: 'Cadastro completo de clientes com busca rápida e gerenciamento de dados.',
      },
      {
        src: '/gestprotech_novo_processo.jpg',
        label: 'Cadastro de Processo',
        desc: 'Formulário completo para criar novos processos com vinculação de clientes e polo passivo.',
      },
      {
        src: '/gestprotech_classificacao.jpg',
        label: 'Classificação do Processo',
        desc: 'Definição de esfera, tipo do processo, status atual e marcação de urgência.',
      },
      {
        src: '/gestprotech_acompanhamento.jpg',
        label: 'Resultado e Acompanhamento',
        desc: 'Controle de perícias, audiências, exigências do juiz e dados previdenciários.',
      },
      {
        src: '/gestprotech_honorarios.jpg',
        label: 'Valores e Honorários',
        desc: 'Gestão de honorários com parcelas, repasse a parceiros e formas de pagamento.',
      },
      {
        src: '/gestprotech_importacao.jpg',
        label: 'Importação de Excel',
        desc: 'Importação automática de planilhas .XLSX e .CSV com reconhecimento de formatos INSS.',
      },
      {
        src: '/gestprotech_ficha_cliente.jpg',
        label: 'Ficha do Cliente',
        desc: 'Perfil completo do cliente com dados pessoais, histórico de ações e processos vinculados.',
      },
      {
        src: '/gestprotech_documentos.jpg',
        label: 'Documentos e Observações',
        desc: 'Anexo de documentos (procurações, PDFs) e anotações gerais do processo.',
      },
      {
        src: '/gestprotech_detalhe_processo.jpg',
        label: 'Detalhe do Processo',
        desc: 'Visão completa do caso com status, valores, audiências, exigências, parceiros e resumo financeiro.',
      },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    id: 'myclinica',
    tag: 'Sistema de Saúde',
    name: 'MyClinica',
    slogan: 'Gestão Inteligente para Clínicas e Consultórios',
    desc: 'Sistema web moderno desenvolvido para facilitar o dia a dia de profissionais da saúde. Oferece controle completo de agendamentos, prontuário eletrônico personalizado e gestão financeira de forma intuitiva.',
    status: 'Em operação',
    year: '2026',
    link: 'https://myclinica.online',
    features: [
      'Dashboard intuitivo com resumo financeiro e de atendimentos',
      'Prontuário eletrônico com anamnese e histórico',
      'Agenda interativa com visualização mensal, semanal e diária',
      'Controle financeiro de receitas e despesas',
      'Gestão inteligente de pacientes e prontuários',
      'Assistente com Inteligência Artificial integrado',
      'Integração e sincronização com Google Calendar',
    ],
    color: '#00b894',
    gradient: 'linear-gradient(135deg, rgba(0,184,148,0.15) 0%, rgba(85,239,196,0.08) 100%)',
    screenshots: [
      {
        src: '/myclinica_dashboard.png',
        label: 'Dashboard de Indicadores',
        desc: 'Visão geral da clínica com métricas de pacientes, agendamentos e faturamento no mês.',
      },
      {
        src: '/myclinica_prontuario.png',
        label: 'Prontuário Eletrônico',
        desc: 'Registro completo do paciente, com dados de identificação, anamnese detalhada e abas de evolução.',
      },
      {
        src: '/myclinica_agenda.png',
        label: 'Agenda Interativa',
        desc: 'Calendário completo para gestão de horários e profissionais, com suporte a múltiplas visualizações.',
      },
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

function ProjectModal({ project, onClose }) {
  const [activeShot, setActiveShot] = useState(0)

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <motion.div
      className="proj-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdrop}
    >
      <motion.div
        className="proj-modal"
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 40 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Header */}
        <div className="proj-modal-header">
          <div className="proj-modal-title-row">
            <div className="proj-modal-icon" style={{ color: project.color, background: `rgba(0,212,255,0.1)`, border: `1px solid rgba(0,212,255,0.2)` }}>
              {project.icon}
            </div>
            <div>
              <span className="proj-modal-tag">{project.tag}</span>
              <h2 className="proj-modal-name">{project.name}</h2>
            </div>
          </div>
          <button className="proj-modal-close" onClick={onClose} aria-label="Fechar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="proj-modal-body">
          {/* Galeria */}
          <div className="proj-gallery">
            <div className="proj-gallery-main">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeShot}
                  src={project.screenshots[activeShot].src}
                  alt={project.screenshots[activeShot].label}
                  className="proj-gallery-img"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
              <div className="proj-gallery-caption">
                <strong>{project.screenshots[activeShot].label}</strong>
                <span>{project.screenshots[activeShot].desc}</span>
              </div>
            </div>
            <div className="proj-gallery-thumbs">
              {project.screenshots.map((shot, i) => (
                <button
                  key={i}
                  className={`proj-gallery-thumb ${i === activeShot ? 'active' : ''}`}
                  onClick={() => setActiveShot(i)}
                >
                  <img src={shot.src} alt={shot.label} />
                  <span>{shot.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="proj-modal-info">
            <div className="proj-meta-row">
              <span className="proj-status-badge">
                <span className="proj-status-dot" />
                {project.status}
              </span>
              <span className="proj-year">{project.year}</span>
            </div>

            <p className="proj-modal-desc">{project.desc}</p>

            <div className="proj-section">
              <h4>Funcionalidades</h4>
              <ul className="proj-features-list">
                {project.features.map((f, i) => (
                  <li key={i}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {project.link && (
              <div className="proj-section" style={{ marginTop: '32px' }}>
                <a href={project.link} className="btn-cta" target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center' }}>
                  Acessar o Sistema
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <section id="projetos">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">// Portfólio</p>
            <h2 className="section-title">Sistemas que já <br />transformam negócios reais.</h2>
            <p className="section-subtitle">
              Projetos desenvolvidos e em operação. Clique em um card para ver as
              funcionalidades, screenshots e detalhes técnicos.
            </p>
          </motion.div>

          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {projects.map((p) => (
              <motion.div
                key={p.id}
                className="project-card"
                variants={cardVariants}
                onClick={() => setActiveProject(p)}
                style={{ '--proj-color': p.color }}
              >
                <div className="project-card-top">
                  <div className="project-card-icon">{p.icon}</div>
                  <div className="project-card-meta">
                    <span className="project-tag">{p.tag}</span>
                    <span className="project-year-pill">{p.year}</span>
                  </div>
                </div>

                <h3 className="project-name">{p.name}</h3>
                <p className="project-slogan">{p.slogan}</p>
                <p className="project-desc">{p.desc.substring(0, 130)}…</p>


                <div className="project-card-footer">
                  <span className="project-status-sm">
                    <span className="proj-status-dot" />
                    {p.status}
                  </span>
                  <span className="project-cta">
                    Ver detalhes
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>

                {/* Screenshot preview strip */}
                <div className="project-screenshots-strip">
                  {p.screenshots.slice(0, 2).map((s, i) => (
                    <div key={i} className="strip-thumb">
                      <img src={s.src} alt={s.label} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Coming soon card */}
            <motion.div className="project-card project-card--soon" variants={cardVariants}>
              <div className="soon-inner">
                <div className="soon-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3>Mais projetos em breve</h3>
                <p>Novos sistemas sendo desenvolvidos para diferentes segmentos. Entre em contato para saber o que está por vir.</p>
                <a href="https://wa.me/558888557247?text=Ol%C3%A1!%20Vi%20o%20site%20da%20OtimizaA%C3%8D%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20suas%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas." className="btn-cta" target="_blank" rel="noopener noreferrer" style={{ marginTop: '24px' }}>
                  Fale Conosco →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
