export const DK = 'Não sei dizer'

export const niches = [
  { slug: 'advocacia', label: 'Advocacia' },
  { slug: 'clinica', label: 'Clínica ou saúde' },
  { slug: 'veiculos', label: 'Concessionária ou veículos' },
  { slug: 'varejo', label: 'Loja ou varejo' },
  { slug: 'restaurante', label: 'Restaurante ou delivery' },
  { slug: 'imobiliaria', label: 'Imobiliária' },
]
export const OTHER = 'Outro'

const itemsTitle = {
  clinica: 'Quantos procedimentos e profissionais a IA precisa conhecer?',
  veiculos: 'Quantos veículos em estoque a IA precisa conhecer?',
  restaurante: 'Quantos itens tem o cardápio?',
  imobiliaria: 'Quantos imóveis ativos a IA precisa conhecer?',
  varejo: 'Quantos produtos a IA precisa conhecer?',
}

const isAdvocacia = (a) => a.niche === 'Advocacia'
const GESTPRO = 'Sim, uso o GestProTech'
const OTHER_SYSTEMS = ['Sim, outro sistema jurídico', 'Sim, um sistema ou ERP']
const PROCESS_UPDATES = 'Atualizar o cliente sobre o andamento dos processos'

// `exclusive`: opção que desmarca as demais em perguntas de múltipla escolha. "Não sei dizer" é sempre exclusiva e é adicionada a todas as perguntas (exceto ao ramo).
export const questions = [
  {
    id: 'niche', type: 'single', noDk: true,
    title: () => 'Qual é o ramo da sua empresa?',
    helper: 'Escolha o mais próximo. Se não aparecer, selecione Outro e escreva em poucas palavras.',
    options: () => [...niches.map((n) => n.label), OTHER],
  },
  {
    id: 'volume', type: 'single',
    title: () => 'Quantos contatos novos chegam por dia no WhatsApp?',
    helper: 'Uma estimativa já ajuda. Isso define o tamanho do servidor e o custo de IA.',
    options: () => ['Até 10 por dia', 'De 10 a 30 por dia', 'De 30 a 100 por dia', 'Mais de 100 por dia'],
  },
  {
    id: 'tasks', type: 'multiple',
    title: () => 'O que a IA precisa fazer?',
    helper: 'Marque todas as que se aplicam. Cada uma é uma etapa a mais no projeto.',
    options: (a) => [
      'Tirar dúvidas', 'Qualificar o cliente', 'Agendar', 'Enviar orçamento', 'Pedir documentos', 'Cobrar ou enviar Pix', 'Retomar quem sumiu', 'Lembrar compromissos',
      ...(isAdvocacia(a) ? [PROCESS_UPDATES] : []),
      'Receber leads de anúncio com boas-vindas automáticas', 'Enviar campanhas para a base de contatos',
    ],
  },
  {
    id: 'contract', type: 'single', showIf: isAdvocacia,
    title: () => 'A IA deve fechar o contrato sozinha?',
    helper: 'Fechar contrato exige integração com uma ferramenta de assinatura.',
    options: () => ['Não, só qualifica e agenda a consulta', 'Sim, envia o contrato para assinatura digital', 'Sim, envia o contrato e cobra a entrada dos honorários'],
  },
  {
    id: 'signature', type: 'single', showIf: (a) => isAdvocacia(a) && String(a.contract || '').startsWith('Sim'),
    title: () => 'Você usa alguma ferramenta de assinatura?',
    helper: 'Se não usa, indicamos uma. O custo da ferramenta é cobrado direto pelo fornecedor.',
    options: () => ['ZapSign', 'Clicksign', 'Autentique', 'D4Sign', 'Nenhuma'],
  },
  {
    id: 'areas', type: 'single', showIf: isAdvocacia,
    title: () => 'Quantas áreas de atuação a IA vai atender?',
    helper: 'Cada área precisa de um roteiro de atendimento próprio.',
    options: () => ['1 área', '2 a 3 áreas', '4 ou mais áreas'],
  },
  {
    id: 'system', type: 'single',
    title: () => 'Você já usa algum sistema de gestão?',
    helper: 'Define se a IA vai se integrar a um sistema que já existe ou se precisamos montar essa base.',
    options: (a) => (isAdvocacia(a)
      ? [GESTPRO, 'Sim, outro sistema jurídico', 'Só planilha ou agenda', 'Não uso nenhum']
      : ['Sim, um sistema ou ERP', 'Só planilha ou agenda', 'Não uso nenhum']),
  },
  {
    id: 'connect', type: 'multiple',
    title: () => 'Com o que a IA precisa se conectar?',
    helper: 'Marque o que vocês já usam e a IA deve consultar ou atualizar.',
    options: () => ['Google Agenda', 'CRM', 'Planilha', { label: 'Nada, só o WhatsApp', exclusive: true }],
  },
  {
    id: 'items', type: 'single',
    title: (a) => itemsTitle[nicheSlug(a)] || 'Quantos serviços ou produtos a IA precisa conhecer?',
    helper: 'Quanto maior a lista, maior a base de conhecimento a montar.',
    options: () => ['Até 10', 'De 10 a 50', 'Mais de 50'],
  },
  {
    id: 'material', type: 'single',
    title: () => 'Você já tem material pronto sobre o negócio?',
    helper: 'Tabela de preços, perguntas frequentes, catálogo ou roteiro de atendimento.',
    options: () => ['Sim, completo', 'Tenho em parte', 'Não tenho nada'],
  },
  {
    id: 'numbersCount', type: 'single',
    title: () => 'Quantos números de WhatsApp a IA vai atender?',
    helper: 'Cada número é uma conexão a mais.',
    options: () => ['1 número', '2 números', '3 ou mais'],
  },
  {
    id: 'numberUse', type: 'single',
    title: () => 'Qual número a IA vai usar?',
    helper: 'Em um número onde a equipe também conversa, a IA precisa saber quando se calar.',
    options: () => ['Um número só para o atendimento', 'O mesmo número em que a equipe também conversa', 'O número pessoal do dono'],
  },
  {
    id: 'media', type: 'multiple',
    title: () => 'Que tipos de mensagem entram no atendimento?',
    helper: 'Áudio, foto e vídeo mudam o custo de IA e o trabalho de montagem.',
    options: () => ['Clientes mandam áudio', 'Clientes mandam fotos ou documentos', 'A IA precisa enviar catálogo ou fotos', 'A IA precisa enviar áudios ou vídeos gravados', { label: 'Só texto', exclusive: true }],
  },
  {
    id: 'panel', type: 'single',
    title: () => 'Você quer um painel para acompanhar os contatos?',
    helper: 'Um painel mostra cada conversa, o estágio do cliente e os resultados.',
    options: () => ['Quero um painel com contatos e conversas', 'Já tenho CRM e quero integrar', 'Não preciso'],
  },
]

export function nicheSlug(answers) {
  return niches.find((n) => n.label === answers.niche)?.slug
}

export function optionList(question, answers) {
  const raw = question.options(answers).map((o) => (typeof o === 'string' ? { label: o } : o))
  return question.noDk ? raw : [...raw, { label: DK, exclusive: true }]
}

export function visibleQuestions(answers) {
  return questions.filter((q) => !q.showIf || q.showIf(answers))
}

export function nicheFromUrl() {
  const slug = new URLSearchParams(window.location.search).get('nicho')
  return niches.find((n) => n.slug === slug)?.label
}

const asList = (value) => (Array.isArray(value) ? value : value ? [value] : [])

// Classifica o escopo para orientar o orçamento. "Não sei dizer" nunca baixa o escopo para básico.
export function assess(answers) {
  const reasons = []
  const confirm = []
  const notes = []
  const tasks = asList(answers.tasks).filter((t) => t !== DK)
  const campaigns = tasks.includes('Enviar campanhas para a base de contatos')
  const flows = tasks.filter((t) => t !== 'Enviar campanhas para a base de contatos').length
  const contract = String(answers.contract || '').startsWith('Sim')
  const connect = asList(answers.connect).filter((c) => c !== DK && c !== 'Nada, só o WhatsApp')

  let advanced = false
  const flag = (reason) => { advanced = true; reasons.push(reason) }
  if (flows >= 5) flag(`${flows} etapas de atendimento`)
  if (connect.includes('CRM')) flag('integração com CRM')
  if (OTHER_SYSTEMS.includes(answers.system)) flag('integração com sistema de gestão que o cliente já usa')
  if (answers.items === 'Mais de 50' && answers.material === 'Não tenho nada') flag('muitos itens e nenhum material pronto')
  if (answers.numberUse === 'O mesmo número em que a equipe também conversa' || answers.numberUse === 'O número pessoal do dono') flag('número compartilhado com a equipe ou pessoal')
  if (answers.areas === '4 ou mais áreas') flag('4 ou mais áreas de atuação')
  if (contract) flag(answers.contract.includes('cobra') ? 'fechamento de contrato com assinatura e cobrança' : 'fechamento de contrato com assinatura')

  for (const q of visibleQuestions(answers)) {
    const value = asList(answers[q.id])
    if (value.includes(DK)) confirm.push(q.title(answers))
  }
  if (answers.system === GESTPRO) notes.push('Usa o GestProTech: integração nativa (sistema da casa)')
  if (isAdvocacia(answers) && answers.system === 'Não uso nenhum') notes.push('Não usa sistema de gestão: oferecer o GestProTech junto com a automação')
  if (answers.signature === 'Nenhuma') notes.push('Cliente precisa contratar uma ferramenta de assinatura (custo de terceiro)')
  if (tasks.includes(PROCESS_UPDATES)) notes.push('Pediu atualização de andamento de processos: definir a fonte do andamento (sistema do escritório, tribunal ou planilha) e se a atualização é automática ou manual')
  if (campaigns) notes.push('Pediu campanhas para a base de contatos: avaliar separadamente (risco de bloqueio do número)')
  if (asList(answers.media).includes('A IA precisa enviar áudios ou vídeos gravados')) notes.push('Precisa de áudios ou vídeos gravados pelo cliente')
  if (String(answers.panel || '').startsWith('Quero um painel')) notes.push('Interesse em painel (Otimiza AI CRM)')

  let level
  if (advanced) level = 'Avançado'
  else if (flows <= 2 && connect.length === 0 && answers.material === 'Sim, completo' && confirm.length === 0) level = 'Básico'
  else level = 'Intermediário'
  return { level, reasons, confirm, notes }
}
