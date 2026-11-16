# B.KURY — Portfólio

> **Bruna Kury** — AI Builder · Estudante de Ciência de Dados · Designer  
> *"Transformo dados, design e IA em ferramentas reais, funcionais, do protótipo ao deploy."*

---

## ✦ Visão Geral

Portfólio interativo de página única em modo escuro nativo (*dark mode*), estruturado em torno de três visualizações imersivas em WebGL (Three.js) com transição fluida através de um dock flutuante inferior.

Projetado com foco em design editorial suíço, tipografia clássica, microinterações cinematográficas e acessibilidade universal (WCAG 2.1 AA com camada semântica oculta e fallback completo para navegadores sem WebGL).

---

## ✦ As 3 Vistas Interativas

### 1. Galeria (`#gallery`)
* **Esfera Fibonacci 3D**: 15 planos distribuídos de forma homogênea no espaço esférico via espiral de Fibonacci, exibindo miniaturas estáticas dos projetos em alta resolução.
* **Navegação Espacial**: Rotação com inércia por mouse/touch e transição para visualização detalhada ao clicar em um plano.
* **Reprodução sob Demanda**: O vídeo em alta definição é carregado e reproduzido exclusivamente ao expandir o projeto em zoom, pausando automaticamente ao retornar à esfera.
* **Tipografia Exclusiva**: Elementos de marca e créditos utilizando a família de fontes *Alte Haas Grotesk*.

### 2. Projetos (`#projects`)
* **Grade Interativa em WebGL**: Disposição responsiva em 2 colunas (desktop/tablet) ou coluna única (mobile) dos projetos em destaque.
* **Shaders Customizados (GLSL)**:
  * Efeito de shimmer esqueleto durante o carregamento de texturas.
  * *Glass-lens post-processing pass* com dispersão espectral e refração óptica.
  * Etiquetas de categoria (*frosted chips*) com efeito translúcido.
* **Cursor Contextual**: Bolha indicadora *"Ver"* que acompanha o ponteiro sobre os cards.
* **Modal Lightbox**: Exibição em tela cheia ao clicar no card, com reprodução contínua do vídeo demonstrativo ou visualização ampliada do print, descrição aprofundada, tags de stack e link direto para o deploy.

### 3. Sobre (`#about`)
* **Modelo 3D Interativo (Three.js)**: Cabeça de robô cromada com reflexos PMREM de 6 painéis emissores de luz, animação orgânica de flutuação, piscar de olhos e física de reação interativa ao clique (incluindo lente de choque e rotação elástica).
* **Enquadramento Tipográfico Responsivo**:
  * Em **Desktop**: Abertura central que emoldura lateralmente o robô entre as frases *"ferramentas"* e *"reais, funcionais,"*, com folga calculada para a antena e auréola.
  * Em **Mobile**: Distribuição vertical centrada acima e abaixo do modelo 3D, garantindo zero cortes nas margens.
* **Esteira Horizontal Infinita com Make-Space Magnético**:
  * 10 paradas de conteúdo navegáveis via scroll horizontal ou arraste.
  * Algoritmo de make-space magnético com zona elíptica de exclusão que afasta suavemente as linhas de texto da geometria do robô conforme passam por ele, preservando o entrelinhamento nativo.

---

## ✦ Projetos em Destaque

| # | Projeto | Categoria | Deploy | Descrição | Stack |
|---|---|---|---|---|---|
| 01 | **[Vértice](https://vertice-lemon.vercel.app/)** | Dashboard & IA | Vercel | Cockpit executivo de logística e e-commerce sobre 96.478 pedidos e 27 UFs, com KPIs, simulador de CD e diagnóstico por IA generativa (Gemini) com fallback local. | React + Vite, Gemini API, Recharts |
| 02 | **[Cardápio Copiloto](https://cardapio-copiloto.vercel.app/)** | IA Generativa | Vercel | Copiloto que lê cardápios (foto, PDF ou texto), sugere preços, descrições, nomes e combos, simulando ticket médio em tempo real. Gemini opcional via proxy serverless. | Gemini API, API serverless, WCAG 2.1 AA |
| 03 | **[UrbanPulse](https://urban-pulse-tawny.vercel.app/#/)** | Geodados & IA | Vercel | Hub de inteligência territorial com mapa interativo, simulador de raio de atendimento de 1 a 10 km, índice de vulnerabilidade social (IVS) e copiloto generativo. Exporta PDF e CSV. | React-Leaflet, Tailwind CSS, WCAG 2.1 AA |
| 04 | **Fluxo n8n de Vibe Coding** | Automação & Prompts | n8n | Fluxo completo de automação no n8n integrado a Telegram Bot, roteamento condicional de código vs prompts, GitHub API e entrega automatizada de especificações para vibe coding. | n8n, Engenharia de prompt, GitHub API, Telegram Bot |
| 05 | **[EdUENF Agroecologia](https://apoio-eduenf-agroecologia.onrender.com/)** | Ferramenta interna | Render | Site público e painel interno de gestão editorial, com backend próprio em Node e Express, autenticação segura e sincronização com formulários do Google Forms. | React + Vite, Node + Express, Autenticação |

---

## ✦ Estrutura de Arquivos

```text
vibe-coding/
├── index.html                 # Aplicação completa (HTML5, Three.js, CSS e shaders)
├── .gitignore                 # Configuração de exclusão para Git
├── README.md                  # Documentação do projeto
├── fonts/                     # Fontes tipográficas locais
│   ├── AlteHaasGroteskRegular.woff
│   └── AlteHaasGroteskBold.woff
└── media/                     # Mídias e previews dos projetos
    ├── vertice.png / vertice.mp4
    ├── cardapio.png / cardapio.mp4
    ├── urbanpulse.png
    ├── fluxo-n8n.png
    └── apoio.png / apoio.mp4
```

---

## ✦ Como Executar Localmente

Como a aplicação é estática e utiliza módulos ES e shaders Three.js, é recomendável servi-la via servidor HTTP local:

### Com Python:
```bash
python -m http.server 3000
```
Em seguida, acesse no navegador: `http://localhost:3000`

### Com Node.js / npx:
```bash
npx serve .
```

---

## ✦ Instruções de Deploy

A aplicação pode ser implantada diretamente em qualquer plataforma de hospedagem estática:

* **Vercel**: Importe o repositório ou execute `vercel` na pasta raiz.
* **Netlify**: Arraste a pasta ou conecte o repositório Git com diretório de publicação `./`.
* **GitHub Pages**: Habilite o GitHub Pages nas configurações do repositório apontando para a branch `main` (ou pasta raiz).

---

## ✦ Contato

* **LinkedIn**: [bruna-kury](https://www.linkedin.com/in/bruna-kury/)
