---
version: 1
slug: "src-diagnosticpage-jsx"
primary_target: "src/DiagnosticPage.jsx"
related_targets: ["src/diagnostic.css", "diagnostico/index.html", "src/diagnostic-url.js"]
---

## Scope and mode

Rota independente `/diagnostico/` da OtimizaAI em modo Operate.

## Audience, job and action

Donos, diretores e gestores de PMEs descrevem o contexto da empresa, as ferramentas usadas e o primeiro processo que desejam melhorar. A tarefa principal é concluir sete perguntas, revisar o resumo organizado e decidir se o envia para a equipe da OtimizaAI pelo WhatsApp.

## Proof and constraints

As respostas operacionais persistem apenas na sessão do navegador. Dados de contato permanecem somente no estado local da página. Não existe envio automático para backend, CRM ou banco de dados; o compartilhamento externo só ocorre quando a pessoa aciona o link final do WhatsApp. Não apresentar o resultado como score, recomendação automatizada ou análise já realizada.

## Direction and memorable moment

O Painel Operacional Editorial se torna uma tarefa focada: contexto e benefícios ficam à esquerda, enquanto um painel petróleo de alta legibilidade conduz cada resposta à direita. O momento memorável é a transformação das respostas em um resumo estruturado, pronto para uma conversa qualificada sem envio silencioso de dados.

## Open decisions

Definir endpoint de captura ou integração com CRM, política de privacidade publicada, retenção de dados e tratamento posterior do lead. Confirmar também a estratégia de hospedagem para servir corretamente a entrada multipágina em `/diagnostico/`.
