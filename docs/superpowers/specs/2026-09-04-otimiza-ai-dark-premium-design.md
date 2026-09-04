# Redesign dark premium — Otimiza AI

## Objetivo

Transformar a landing page da Otimiza AI em uma experiência dark premium, inspirada no ritmo visual e na hierarquia da LenaAI, mas inteiramente original e fiel à marca Otimiza AI. A página deve tornar a proposta de automação e desenvolvimento de sistemas mais clara, valorizar os cases e direcionar visitantes aos CTAs de diagnóstico.

## Direção visual

- Base visual em azul-petróleo muito escuro, quase preto.
- A paleta da marca será a única fonte de cor de destaque: verde-azulado/turquesa e seus tons profundos e claros derivados do logo fornecido.
- Não usar roxo.
- Gradientes e halos de luz em azul-petróleo e turquesa ficam restritos a fundos, bordas e estados ativos; texto e botões mantêm contraste alto.
- Tipografia expressiva para títulos e uma fonte de leitura limpa para textos de apoio.
- Painéis com fundo translúcido, bordas de baixo contraste, brilho interno leve e sombras profundas.
- Animações sutis e respeitosas a `prefers-reduced-motion`: entrada progressiva, transições de hover e realces sem movimento excessivo.

## Estrutura da página

1. **Navegação fixa** — logo da Otimiza AI, links âncora e CTA de diagnóstico. No desktop, o menu ganha tratamento translúcido; no mobile, abre em painel escuro acessível.
2. **Hero centralizado** — título orientado ao resultado da automação, texto de apoio, CTA primário para diagnóstico e CTA secundário para conhecer as soluções. Fundo com iluminação azul-petróleo/turquesa discreta.
3. **Prova social e contexto** — faixa de confiança ou indicadores já suportados pelo conteúdo existente, apresentada em tipografia e superfícies escuras.
4. **Soluções e transformação** — serviços, comparação entre operação manual e automatizada e etapas do processo reordenados em seções com hierarquia mais direta.
5. **Cases de sistemas** — substitui os prints atuais do MyClínica e do GestProTech por dois cards de produto. Cada card contém:
   - identidade/nome do sistema;
   - descrição curta e recursos principais;
   - um painel gráfico abstrato, original e leve para comunicar produto digital, sem screenshot;
   - botão de saída para sua landing.
6. **Diagnóstico, FAQ e CTA final** — permanecem como os principais pontos de conversão, atualizados para o novo sistema visual.
7. **Rodapé** — mantém navegação e meios de contato, com contraste e espaçamento coerentes com a nova página.

## Links dos cases

| Case | CTA | Destino |
| --- | --- | --- |
| MyClínica | Conhecer MyClínica | https://site.myclinica.online |
| GestProTech | Conhecer GestProTech | https://gestprotech.com.br |

Os links externos devem abrir em nova aba com `target="_blank"` e `rel="noopener noreferrer"`.

## Implementação e limites

- Preservar a stack atual (React, Vite e CSS existente) e a estrutura de componentes sempre que ela acomodar o redesign.
- Não reutilizar código, copy, ativos, nomes, layout literal ou marca da LenaAI; a referência orienta apenas o nível de acabamento, a composição escura e a hierarquia visual.
- Trocar o logo de demonstração pelo logo da Otimiza AI fornecido, usando um asset local otimizado.
- Manter CTAs e comportamento funcional já existentes, inclusive formulário/diagnóstico.
- O redesign deve funcionar em mobile, tablet e desktop, com foco visível, semântica de links e suporte a movimento reduzido.

## Verificação

- Executar o build de produção.
- Conferir links dos cases e CTAs existentes.
- Validar visualmente desktop e mobile em um navegador local, observando contraste, ausência de overflow horizontal e legibilidade dos cards.
- Confirmar que não há roxo aplicado ao tema final e que não restam screenshots dos cases na página.
