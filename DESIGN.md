---
name: "OtimizaAI"
description: "Automação sob medida apresentada como uma operação visível, precisa e confiável."
colors:
  ink: "#071821"
  ink-raised: "#0b222c"
  ink-soft: "#12323d"
  paper: "#f5faf8"
  paper-pure: "#ffffff"
  paper-muted: "#d9e6e2"
  cyan: "#27ddc5"
  cyan-bright: "#62f4de"
  cyan-deep: "#087e77"
  lime: "#c9f563"
  danger: "#ff857a"
  text: "#effbf7"
  text-muted: "#a9c2bc"
  text-dark: "#0c252d"
  text-dark-muted: "#526c72"
  line: "rgba(191, 235, 225, 0.16)"
  line-dark: "rgba(7, 35, 42, 0.14)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(3.5rem, 6vw, 5.9rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(2.35rem, 5vw, 4.7rem)"
    fontWeight: 700
    lineHeight: 0.99
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.65rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  label: "7px"
  field: "9px"
  compact: "10px"
  option: "11px"
  control: "12px"
  surface: "16px"
  circle: "50%"
spacing:
  2xs: "6px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "#04191d"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.cyan-bright}"
    textColor: "#04191d"
  button-compact:
    backgroundColor: "{colors.cyan}"
    textColor: "#04191d"
    rounded: "{rounded.compact}"
    padding: "0 18px"
    height: "42px"
  text-link:
    textColor: "{colors.cyan-bright}"
    typography: "{typography.body}"
  field-default:
    backgroundColor: "#fbfdfc"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.field}"
    padding: "0 13px"
    height: "49px"
  option-default:
    backgroundColor: "#fbfdfc"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.option}"
    padding: "0 17px"
    height: "56px"
  option-selected:
    backgroundColor: "#dcf8ef"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.option}"
  control-panel:
    backgroundColor: "#0c242e"
    textColor: "{colors.text}"
    rounded: "{rounded.surface}"
    padding: "22px"
  diagnostic-shell:
    backgroundColor: "{colors.paper-pure}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.surface}"
    padding: "38px 48px 42px"
---

# Design System: OtimizaAI

## Overview

**Creative North Star: "Painel Operacional Editorial"**

A identidade da OtimizaAI transforma tecnologia em evidência operacional. O mundo visual combina a autoridade de um painel de controle com a clareza e o ritmo de uma peça editorial: hierarquia tipográfica forte, superfícies organizadas, dados alinhados e sinais de estado que explicam o que está acontecendo sem depender de jargão.

O sistema é escuro, preciso e confiante nos momentos de demonstração, alternando com campos claros que reduzem carga cognitiva em explicações e tarefas. Componentes parecem instrumentos de trabalho reais, não adereços futuristas. A anti-referência confirmada é a landing genérica que apenas lista serviços de tecnologia: toda expressão deve tornar processo, fluxo, estado ou resultado visível.

**Key Characteristics:**

- Azul-petróleo profundo como ambiente operacional dominante.
- Ciano para ação, conexão e progressão; verde-lima para conclusão e atividade confirmada.
- Tipografia editorial compacta, com contraste claro entre grandes manchetes e rótulos instrumentais.
- Elevação tonal por padrão e sombras ambientais apenas onde a hierarquia precisa de destaque.
- Controles arredondados com contenção: amigáveis, mas nunca lúdicos ou inflados.

## Colors

A paleta equilibra profundidade azul-petróleo, superfícies de papel frias e sinais saturados que funcionam como linguagem operacional.

### Primary

- **Ciano de Fluxo**: cor dominante de ações, conexões e núcleos de automação.
- **Ciano Luminoso**: realce de hover, links sobre fundos escuros e ênfases que precisam ganhar luminosidade.
- **Ciano Profundo**: estado ativo sobre superfícies claras, progresso, seleção e controles de alta legibilidade.

### Secondary

- **Lima Concluído**: sinal semântico raro para automação ativa, etapas concluídas e foco visível.

### Tertiary

- **Coral de Alerta**: reserva cromática para erro e risco; nunca compete com as ações primárias.

### Neutral

- **Petróleo Base**: fundo estrutural e âncora de maior profundidade.
- **Petróleo Elevado** e **Petróleo Suave**: degraus tonais para separar painéis, linhas e agrupamentos sem depender de sombra.
- **Papel Frio**, **Papel Puro** e **Papel Neblina**: superfícies claras de leitura, formulário e contraste editorial.
- **Texto Luminoso** e **Texto Neblina**: texto primário e secundário sobre fundos escuros.
- **Texto Petróleo** e **Texto Petróleo Suave**: texto primário e secundário sobre fundos claros.
- **Linha Clara** e **Linha Escura**: divisores translúcidos adequados ao campo em que aparecem.

### Named Rules

**The Signal Color Rule.** Ciano indica ação ou fluxo; verde-lima confirma atividade ou conclusão. Não use os dois como decoração intercambiável.

**The Two Fields Rule.** Superfícies escuras demonstram a operação; superfícies claras organizam leitura e decisão. A alternância cria ritmo sem diluir a identidade.

## Typography

**Display Font:** Bricolage Grotesque (com fallback sans-serif)  
**Body Font:** Manrope (com fallback sans-serif)  
**Label/Mono Font:** Manrope; não existe família monoespaçada no sistema implementado.

**Character:** Bricolage Grotesque traz a voz editorial e proprietária das manchetes, com formas compactas e grande presença. Manrope sustenta textos, controles e microdados com neutralidade técnica, mantendo a interface legível e operacional.

### Hierarchy

- **Display**: manchetes de entrada, grandes e compactas, com peso 600 e entrelinha muito fechada.
- **Headline**: títulos de seção e chamadas editoriais, com peso 700 e ritmo quase sem folga vertical.
- **Title**: nomes de etapas, casos e blocos funcionais, com peso 700 e leitura curta.
- **Body**: texto corrido em Manrope regular; descrições permanecem normalmente entre 50 e 66 caracteres por linha.
- **Label**: microtexto instrumental em peso 800, espaçamento amplo e caixa alta quando comunica estágio, estado ou categoria.

### Named Rules

**The Editorial Compression Rule.** Manchetes usam entrelinha e tracking negativos para formar blocos decisivos; corpo e instruções recuperam espaço para leitura confortável.

**The Instrument Label Rule.** Caixa alta e tracking expandido pertencem a microestados e rótulos curtos, nunca a parágrafos ou chamadas principais.

## Layout

O sistema usa um contêiner central de até 1180px, com 24px de respiro lateral no desktop e 16px no mobile. Seções combinam grids assimétricos com grandes blocos de texto e painéis operacionais; linhas e divisórias organizam sequências em vez de uma coleção de cards isolados.

O ritmo vertical é amplo em superfícies editoriais, enquanto componentes internos usam passos recorrentes de 8px, 12px, 16px, 24px, 32px e 48px. O layout reduz de duas colunas para uma em 1020px ou 780px conforme a densidade do conteúdo; sequências operacionais viram pilhas verticais em 520px. A navegação de desktop cede lugar a um painel de tela cheia abaixo de 780px.

**The Continuous Flow Rule.** Prefira grids, linhas e relações antes/depois que façam o olhar percorrer um processo; evite transformar cada ideia em um card independente.

## Elevation & Depth

A elevação é tonal por padrão. Variações entre Petróleo Base, Elevado e Suave, além de bordas translúcidas, definem a maior parte da hierarquia. Sombras são ambientais e aparecem apenas em elementos que precisam se destacar do fluxo — chamadas de ação, painéis de demonstração, formulário de diagnóstico e controles flutuantes.

### Shadow Vocabulary

- **Ação ciano**: brilho difuso sob a ação primária; aumenta levemente no hover.
- **Painel operacional**: sombra profunda e ampla que separa uma demonstração escura do campo de fundo.
- **Painel claro**: sombra fria e suave para formulários ou experiências que precisam parecer manipuláveis.
- **Controle flutuante**: sombra curta e mais densa para pequenos elementos posicionados sobre duas superfícies.

### Named Rules

**The Tonal-First Rule.** Se dois planos puderem ser separados por tom e borda, não adicione sombra. A sombra é um recurso de hierarquia, não uma textura global.

## Shapes

O vocabulário usa cantos moderadamente arredondados: 16px em grandes superfícies, 12px em ações, 9–11px em campos e opções, e 7px em rótulos compactos. Círculos ficam reservados a status, seleção, confirmação e pequenos controles de transição. Bordas são finas e translúcidas; a geometria deve parecer calibrada, não acolchoada.

**The Calibrated Radius Rule.** O raio acompanha a escala e a função do componente; não transforme painéis, campos e chips em cápsulas genéricas.

## Components

Os componentes parecem precisos, confiantes e operacionais. Estado e hierarquia são visíveis, mas o tratamento permanece contido.

### Buttons

- **Shape:** retângulo de cantos controlados, com 52px de altura e raio de 12px; a variante compacta usa 42px e raio de 10px.
- **Primary:** fundo Ciano de Fluxo, texto em petróleo quase preto, peso 800 e padding horizontal de 24px.
- **Hover / Focus:** ganha Ciano Luminoso, sobe 2px e amplia a sombra ambiental; foco global usa contorno Lima Concluído de 3px com afastamento de 4px.
- **Text link:** Ciano Luminoso, peso 700, seta funcional e sublinhado apenas no hover.

### Chips

- **Style:** rótulos de estado usam raio de 7px, corpo compacto e contraste tonal; estados ativos recebem verde ou ciano profundo conforme a semântica.
- **State:** pontos circulares e microtexto em caixa alta comunicam atividade e conclusão; chips não são ornamentos.

### Cards / Containers

- **Corner Style:** superfícies principais usam raio de 16px; subblocos internos ficam entre 8px e 12px.
- **Background:** painéis operacionais partem de Petróleo Elevado ou tons literais adjacentes; painéis de tarefa usam Papel Puro.
- **Shadow Strategy:** tonal primeiro; aplique a sombra ambiental correspondente apenas em painéis de destaque.
- **Border:** 1px translúcido, claro sobre escuro e escuro sobre claro.
- **Internal Padding:** 22–48px conforme a densidade; preserve espaço maior em experiências de leitura e menor em linhas de dados.

### Inputs / Fields

- **Style:** fundo quase branco, contorno verde-acinzentado de 1px, altura de 49px, raio de 9px e padding horizontal de 13px.
- **Focus:** borda muda para Ciano Profundo e recebe anel externo translúcido de 3px.
- **Error / Disabled:** erro usa texto escuro avermelhado sobre fundo coral muito claro; não existe estado desabilitado implementado.

### Navigation

- **Style:** cabeçalho fixo de 76px no desktop e 68px no mobile, marca em Bricolage Grotesque e links compactos em Manrope. Links ganham Ciano Luminoso no hover; a ação do diagnóstico usa o botão compacto.
- **Mobile:** abaixo de 780px, a navegação abre em um campo petróleo de tela cheia, com links editoriais maiores e ação primária ao final.

### Operational Panel

O painel operacional é o componente-assinatura: cabeçalho de estado, entradas em chips, um núcleo ciano e saídas numeradas com confirmação verde. Ele deve representar um processo real ou plausível, mantendo linhas, dados e estados alinhados como uma interface de controle.

### Diagnostic Controls

O diagnóstico usa uma superfície clara elevada, progresso linear ciano, opções de linha inteira e estados selecionados em verde-menta. Mudanças de etapa combinam fade com deslocamento horizontal curto; a tarefa permanece legível e direta em todas as larguras.

## Do's and Don'ts

### Do:

- **Do** use o contraste entre campos escuros de operação e campos claros de leitura ou decisão.
- **Do** reserve Ciano de Fluxo para ação, conexão e progresso, e Lima Concluído para confirmação.
- **Do** mostre processos com entradas, transições, estados e saídas visualmente verificáveis.
- **Do** mantenha bordas finas, dados alinhados e espaçamento disciplinado para que os componentes pareçam instrumentos confiáveis.
- **Do** respeite `prefers-reduced-motion` e preserve foco visível em todas as ações.

### Don't:

- **Don't** reduza a identidade a uma grade genérica de serviços, ícones e promessas abstratas.
- **Don't** use verde-lima como acento decorativo amplo; sua raridade comunica conclusão e atividade.
- **Don't** aplique sombras em todas as superfícies; separe planos por tom e borda primeiro.
- **Don't** use caixa alta espaçada fora de rótulos curtos, estados e categorias.
- **Don't** invente componentes, variantes ou estados que o produto ainda não implementa.
