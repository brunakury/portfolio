import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Share2, 
  Code2, 
  Sparkles, 
  Terminal, 
  Sliders, 
  Cpu, 
  Maximize2,
  Layers, 
  Zap, 
  Globe,
  Bot,
  BarChart3,
  Workflow,
  ShieldCheck,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  Play,
  Image as ImageIcon
} from 'lucide-react';

// ==========================================
// ÍCONES SOCIAIS VETORIAIS
// ==========================================
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ==========================================
// PROJETOS REAIS — ALINHADOS COM A TRILHA AI BUILDER (iFOOD)
// ==========================================
const PROJECTS = [
  {
    id: 'cardapio-copiloto',
    num: '01',
    title: 'Cardápio Copiloto',
    subtitle: 'Copiloto de Inteligência de Cardápio, OCR Multimodal & Ticket Médio',
    category: 'Agentes de Negócio',
    ifoodPillar: 'Agente que resolve problema de negócio',
    ifoodFitScore: 'Core Match: Ecossistema de Restaurantes Parceiros',
    tags: ['Google Gemini API', 'Tesseract.js (OCR)', 'pdf.js', 'React + Vite', 'Recharts', 'WCAG 2.1 AA'],
    liveUrl: 'https://cardapio-copiloto.vercel.app/',
    hasExternalLink: true,
    videoUrl: '/previews/cardapio-copiloto.mp4',
    posterUrl: '/previews/cardapio-copiloto.png',
    badge: 'ECOSSISTEMA IFOOD // RESTAURANTES',
    worldColor: '#EA1D2C', // Vermelho iFood / Ink & Paper
    description: 'Copiloto de inteligência comercial para restaurantes parceiros. Lê fotos ou PDFs de cardápios via OCR no cliente com fallback opcional para a API Google Gemini, sugerindo precificação psicológica (,90), reescrita apetitosa em 4 tons, criação de combos e simulação em tempo real do impacto no ticket médio e potencial explorado.',
    businessProblem: 'Restaurantes perdem faturamento por descrições pouco atraentes, ausência de combos estratégicos e preços não calibrados. O Copiloto orienta decisões de balcão sem depender de consultorias caras.',
    architecture: 'Leitura multimodal client-side com Tesseract.js e pdf.js (zero custo de infra) + proxy serverless opcional para Google Gemini Flash. Simulação estocástica de ticket e geração de relatório em PDF no navegador.',
    codeSnippet: `// Pipeline de sugestão de preços e combos estratégicos
const prompt = \`Analise os itens do cardápio e elabore sugestões de preço tático (final ,90), descrições apetitosas e 3 combos complementares: \${JSON.stringify(menuItems)}\`;

const copilotSuggestions = await geminiProxy.generate({
  model: "gemini-flash-latest",
  prompt,
  fallbackToClientHeuristics: true
});

// Recálculo transparente de ticket médio simulado
recalculateTicketPotential(copilotSuggestions.acceptedItems);`,
    metrics: [
      { label: 'Ticket Médio', val: 'Simulação ao Vivo' },
      { label: 'Potencial', val: 'Score 0 a 100' },
      { label: 'Acessibilidade', val: 'WCAG 2.1 AA' }
    ]
  },
  {
    id: 'vertice',
    num: '02',
    title: 'Vértice',
    subtitle: 'Plataforma Executiva de Tomada de Decisão, Malha Logística & Elasticidade',
    category: 'Dashboards de Decisão',
    ifoodPillar: 'Dashboard funcional & Análise com IA',
    ifoodFitScore: 'Core Match: Malha Logística & Eficiência de Entregas',
    tags: ['Google Gemini API', 'Fallback Heurístico', 'React 18', 'Tailwind CSS', 'Recharts', 'Dataset Olist (96k)'],
    liveUrl: 'https://vertice-lemon.vercel.app/',
    hasExternalLink: true,
    videoUrl: '/previews/vertice.mp4',
    posterUrl: '/previews/vertice.png',
    badge: 'LOGÍSTICA EXECUTIVA // 96K PEDIDOS',
    worldColor: '#F4B942', // Ouro / Dark Luxury
    description: 'Cockpit de inteligência operacional desenhado para liderança (COO/CFO). Processa 96.478 pedidos faturados (R$ 13,2M em GMV) nas 27 UFs brasileiras, cruzando lead time de entrega, estouro de SLA, queda de avaliação e churn. Inclui Diagnóstico Executivo por IA (Gemini/Hydrogen) com fallback heurístico autônomo e simulador regional de impacto de Centro de Distribuição.',
    businessProblem: 'Atrasos nas rotas de entrega desgastam a retenção e o LTV dos consumidores. O Vértice permite diagnosticar gargalos de SLA por estado e simular a quantidade de pedidos e GMV salvos antes de alocar capital em novos CDs.',
    architecture: 'Modelagem analítica em React 18 e Recharts. Integração com Gemini 2.5 Flash / Hydrogen combinada com motor heurístico local resiliente que garante continuidade do diagnóstico analítico mesmo sem conexão de API.',
    codeSnippet: `// Diagnóstico Executivo Reativo por Rota com Fallback Autônomo
async function getRegionalDiagnostic(stateMetrics) {
  try {
    return await geminiClient.synthesize({
      prompt: \`Gere 3 ações táticas para a rota \${stateMetrics.uf}: atraso de SLA em \${stateMetrics.delayRate}% e lead time de \${stateMetrics.leadTime} dias.\`,
      temperature: 0.2
    });
  } catch (error) {
    // Resiliência total: fallback para motor heurístico interno
    return localHeuristicEngine.computeInsights(stateMetrics);
  }
}`,
    metrics: [
      { label: 'Pedidos Analisados', val: '96.478' },
      { label: 'GMV Mapeado', val: 'R$ 13,22 Mi' },
      { label: 'UFs Integradas', val: '27 Estados' }
    ]
  },
  {
    id: 'urbanpulse',
    num: '03',
    title: 'UrbanPulse',
    subtitle: 'Hub de Inteligência Territorial, Mobilidade & Planejamento Geoespacial',
    category: 'Planejamento & Geoespacial',
    ifoodPillar: 'Simulador What-If & Expansão de Infraestrutura',
    ifoodFitScore: 'Core Match: Expansão de Dark Kitchens & Cobertura Urbana',
    tags: ['UrbanPulse AI (GenAI)', 'Leaflet / GeoJSON', 'React', 'Recharts', 'Tailwind', 'WCAG 2.1 AA'],
    liveUrl: 'https://urban-pulse-tawny.vercel.app/#/',
    hasExternalLink: true,
    videoUrl: '/previews/urbanpulse.mp4',
    posterUrl: '/previews/urbanpulse.png',
    badge: 'GEOESPACIAL // WHAT-IF SIMULATOR',
    worldColor: '#006CD2', // Azul Cartografia Urbana
    description: 'Plataforma geoespacial interativa para governança e expansão urbana. Cruza densidade demográfica, renda média, malha viária e o Índice de Vulnerabilidade Social (IVS), permitindo a simulação dinâmica de raios de atendimento (isocronas de 1 a 10 km) com copiloto GenAI para síntese contextual de evidências.',
    businessProblem: 'Decisões de expansão logística e alocação de equipamentos públicos baseadas apenas em médias agregadas da cidade mascaram desigualdades e provocam erros de localização. O UrbanPulse espacializa a realidade territorial em tempo real.',
    architecture: 'Cartografia vetorial com Leaflet e GeoJSON, gráficos Recharts e Copiloto GenAI com contextualização de indicadores socioeconômicos. Construído sob diretrizes rigorosas de acessibilidade (WCAG 2.1 AA) com tabela semântica de dados.',
    codeSnippet: `// Simulação dinâmica de isocronas e geração de evidências com GenAI
const isochroneCoverage = calculateRadiusCoverage(selectedHubLatLng, radiusKm);
const executiveBrief = await urbanPulseAI.generateEvidenceReport({
  impactedPopulation: isochroneCoverage.popTotal,
  socialVulnerabilityScore: isochroneCoverage.ivs,
  publicTransitProximity: isochroneCoverage.transitRatio
});
renderTerritorialTable(isochroneCoverage);`,
    metrics: [
      { label: 'Raio Dinâmico', val: '1 km a 10 km' },
      { label: 'Acessibilidade', val: 'WCAG 2.1 AA' },
      { label: 'Mapeamento', val: 'Interativo' }
    ]
  },
  {
    id: 'eduenf-agroecologia',
    num: '04',
    title: 'Apoio à EdUENF · Agroecologia',
    subtitle: 'Ferramenta Interna de Gestão Logística de Pedidos e Operação Editorial em Produção',
    category: 'Ferramentas Internas',
    ifoodPillar: 'Ferramenta interna deployada & Horas reais economizadas',
    ifoodFitScore: 'Core Match: Automação Operacional & Gestão de Pedidos',
    tags: ['Node.js / Express', 'React + Vite', 'Sessões httpOnly + bcrypt', 'Google Forms / Sheets CSV', 'Render Cloud'],
    liveUrl: 'https://apoio-eduenf-agroecologia.onrender.com/',
    hasExternalLink: true,
    videoUrl: '/previews/eduenf.mp4',
    posterUrl: '/previews/eduenf.png',
    badge: 'DEPLOYADO EM PRODUÇÃO // RENDER',
    worldColor: '#15803D', // Verde Agroecológico
    description: 'Sistema completo em produção composto por portal público e painel administrativo interno para triagem e controle de pedidos agroecológicos da editora universitária. Sincroniza respostas de formulários Google Forms via stream CSV, mantendo histórico de status, responsáveis e horas sem perder dados.',
    businessProblem: 'A gestão manual de pedidos por planilhas dispersas gerava retrabalho, perda de prazos e insegurança de dados. A ferramenta interna centralizou o fluxo com login seguro e sincronização contínua, economizando horas semanais da equipe.',
    architecture: 'Arquitetura full-stack ágil: Front-end React + Vite e backend Node.js com Express. Segurança com senhas criptografadas em bcrypt, cookies httpOnly SameSite=Strict e sincronização incremental resiliente de dados.',
    codeSnippet: `// Sincronização inteligente com preservação de metadados operacionais
app.post('/api/pedidos/sync', requireAuthSession, async (req, res) => {
  const publishedSheetRows = await fetchPublishedCsvStream(SPREADSHEET_URL);
  const syncedOrders = mergeOperationalState(localDatabase.orders, publishedSheetRows, [
    'status', 'responsavel', 'horas_alocadas', 'historico'
  ]);
  res.json({ updated: syncedOrders.length, timestamp: Date.now() });
});`,
    metrics: [
      { label: 'Ambiente', val: 'Produção (Render)' },
      { label: 'Segurança', val: 'bcrypt + httpOnly' },
      { label: 'Sincronização', val: 'Google Sheets' }
    ]
  },
  {
    id: 'n8n-vibe-engine',
    num: '05',
    title: 'Vibe Coding Engine via n8n',
    subtitle: 'Pipeline Automatizado de Meta-Prompting & Orquestração de Agentes para Entrega Ágil',
    category: 'Automações & Orquestração',
    ifoodPillar: 'Automação com n8n & Prompt Engineering Avançado',
    ifoodFitScore: 'Core Match: Trilha AI Builder (Construção Ágil com IA)',
    tags: ['n8n Automations', 'Prompt Chaining', 'Claude 3.5 Sonnet', 'Google Gemini', 'Meta-Prompting', 'Vibe Coding'],
    liveUrl: '#statement',
    hasExternalLink: false,
    videoUrl: '/previews/n8n-workflow.mp4',
    posterUrl: '/previews/n8n-workflow.png',
    badge: 'N8N WORKFLOW // META-PROMPT ENGINE',
    worldColor: '#7C3AED', // Roxo Profundo AI
    description: 'Fluxo estruturado no n8n que automatiza a orquestração de LLMs (Claude 3.5 e Gemini) para geração otimizada de prompts para ferramentas de vibe coding (Cursor, Bolt, v0). Decompõe intenções de negócio em requisitos técnicos, injeta diretrizes de design (Norman, Krug, Cooper) e gera o código-base utilizado neste portfólio.',
    businessProblem: 'O desenvolvimento com IA sem método gera código frágil, falta de acessibilidade e alucinações. O fluxo no n8n estabelece um pipeline reprodutível de engenharia de prompt que acelera o ciclo ideia-para-deploy de semanas para poucas horas.',
    architecture: 'Orquestrador no n8n com nós de Webhook, Prompt Chaining condicional, agentes de decomposição funcional, sintetizador de design tokens e formatador de especificações para modelos de raciocínio avançado.',
    codeSnippet: `// Estrutura do nó de orquestração n8n para meta-prompting
{
  "node": "Orquestrador de Intenção & Design System",
  "type": "n8n-nodes-base.aiAgent",
  "parameters": {
    "systemPrompt": "Você é um AI Solution Architect. Receba o objetivo bruto, aplique heurísticas de usabilidade (Don Norman), defina os contratos de dados e estruture o prompt mestre de execução.",
    "models": ["claude-3-5-sonnet", "gemini-2.0-flash"],
    "outputFormat": "Clean Production Code Specification"
  }
}`,
    metrics: [
      { label: 'Ciclo de Entrega', val: 'Dias em vez de meses' },
      { label: 'Orquestração', val: 'Claude & Gemini' },
      { label: 'Automação', val: '100% via n8n' }
    ]
  }
];

const CATEGORIES = ['Todos', 'Agentes de Negócio', 'Dashboards de Decisão', 'Planejamento & Geoespacial', 'Ferramentas Internas', 'Automações & Orquestração'];

// ==========================================
// COMPONENTE INTELIGENTE DE PREVIEW DE MÍDIA
// (SUPORTA VÍDEO MP4/WEBM, GIF, PRINT ESTÁTICO OU MOCKUP ILUSTRATIVO)
// ==========================================
function ProjectMediaPreview({ project, onClick }) {
  const [videoError, setVideoError] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[16/10] bg-[#0E1318] overflow-hidden cursor-pointer select-none group"
      onClick={onClick}
    >
      {/* 1. Tentativa de reprodução de Vídeo (MP4/WebM curto ou GIF) */}
      {!videoError && project.videoUrl ? (
        <video
          src={project.videoUrl}
          poster={project.posterUrl}
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
        />
      ) : !imgError && project.posterUrl ? (
        /* 2. Tentativa de Imagem/Print estático ou GIF */
        <img
          src={project.posterUrl}
          alt={`Preview de ${project.title}`}
          className="absolute inset-0 w-full h-full object-cover opacity-95 transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        /* 3. Mockup Editorial Temático em SVG/CSS caso ainda não haja arquivo físico */
        <div 
          className="absolute inset-0 w-full h-full p-5 flex flex-col justify-between"
          style={{
            background: `radial-gradient(circle at 80% 20%, ${project.worldColor}35 0%, #0A0E13 85%)`
          }}
        >
          {/* Header da Barra de Janela do App */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
              {project.category}
            </span>
          </div>

          {/* Elemento Gráfico Central Simulado */}
          <div className="flex flex-col items-center justify-center my-auto py-2 text-center">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 shadow-lg"
              style={{ backgroundColor: `${project.worldColor}25`, border: `1px solid ${project.worldColor}60` }}
            >
              {project.id === 'cardapio-copiloto' && <Bot size={24} style={{ color: project.worldColor }} />}
              {project.id === 'vertice' && <BarChart3 size={24} style={{ color: project.worldColor }} />}
              {project.id === 'urbanpulse' && <Globe size={24} style={{ color: project.worldColor }} />}
              {project.id === 'eduenf-agroecologia' && <FileSpreadsheet size={24} style={{ color: project.worldColor }} />}
              {project.id === 'n8n-vibe-engine' && <Workflow size={24} style={{ color: project.worldColor }} />}
            </div>
            <h4 className="text-white text-base font-bold tracking-tight font-sans">
              {project.title}
            </h4>
            <p className="text-white/60 text-[11px] font-mono mt-0.5 line-clamp-1">
              {project.ifoodPillar}
            </p>
          </div>

          {/* Barra inferior com KPIs simulados */}
          <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
            <span>{project.metrics[0].label}: <strong className="text-white">{project.metrics[0].val}</strong></span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={10} /> Funcional
            </span>
          </div>
        </div>
      )}

      {/* Badge Superior com Número e Indicador de Preview */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold uppercase bg-black/80 backdrop-blur-md text-white border border-white/15">
          PROJETO {project.num}
        </span>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          PRONTO
        </span>
      </div>

      {/* Overlay com Ação no Hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
          <Maximize2 size={13} />
          Inspecionar Arquitetura & Detalhes
        </span>
      </div>
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL DO PORTFÓLIO
// ==========================================
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  
  // Brief Builder Interactive State (Dados Reais Bruna Kury)
  const [briefArea, setBriefArea] = useState('Restaurantes e Logística');
  const [briefGoal, setBriefGoal] = useState('criar um agente com IA e automação');
  const [briefTimeline, setBriefTimeline] = useState('nas próximas semanas');
  const [copiedBrief, setCopiedBrief] = useState(false);

  // Filtro de Projetos
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Todos') return PROJECTS;
    return PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Briefing Text Composto
  const composedBriefText = useMemo(() => {
    return `Olá Bruna, vi seu portfólio para a Trilha AI Builder do iFood. Gostaria de conversar sobre soluções na área de ${briefArea} para ${briefGoal} ${briefTimeline}. Vamos conversar!`;
  }, [briefArea, briefGoal, briefTimeline]);

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(composedBriefText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2200);
  };

  // Keyboard navigation (Esc fecha modal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProjectModal(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#0A0A0B] font-sans antialiased selection:bg-[#EA1D2C] selection:text-white overflow-x-hidden">
      
      {/* =========================================================================
          BANNER ATS & IFOOD GENAI BUILDER BADGE (TOPO FIXO)
          ========================================================================= */}
      <div className="w-full bg-[#0A0A0B] text-white px-4 py-2 border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono tracking-wider uppercase">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#EA1D2C] text-white font-bold">
            <Sparkles size={12} />
            PROGRAMA DE ESTÁGIO IFOOD 2026
          </span>
          <span className="hidden sm:inline text-white/60">|</span>
          <span className="text-white/80">
            TRILHA <strong>AI BUILDER</strong> · CIÊNCIA DE DADOS & DESIGN GRÁFICO
          </span>
        </div>
      </div>

      {/* =========================================================================
          SEÇÃO 1: HERO VIEW (EDITORIAL, IMPACTANTE E ALINHADO À VAGA)
          ========================================================================= */}
      <section 
        id="hero"
        className="relative min-h-[92vh] w-full flex flex-col justify-between overflow-hidden border-b border-black/10"
      >
        {/* Fundo com Gradiente Sutil e Textura */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#EA1D2C]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#5E0ED7]/10 blur-3xl" />
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />
        </div>

        {/* 1.1 BARRA DE NAVEGAÇÃO */}
        <header className="relative z-20 w-full px-5 sm:px-8 md:px-12 pt-6 flex items-center justify-between">
          {/* Logo + Nome de Bruna Kury */}
          <div className="flex items-center gap-3.5">
            <a 
              href="#hero" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA1D2C] rounded-full"
              aria-label="Bruna Kury Home"
            >
              <div className="w-9 h-9 rounded-full border-2 border-[#EA1D2C] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="w-3 h-3 rounded-full bg-[#EA1D2C] transition-transform duration-300 group-hover:scale-125" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-widest uppercase text-black">
                  BRUNA KURY
                </span>
                <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#EA1D2C] -mt-0.5">
                  AI BUILDER · DATA SCIENCE
                </span>
              </div>
            </a>
          </div>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {[
              { label: 'PROJETOS REALIZADOS', href: '#projects' },
              { label: 'MATCH TRILHA IFOOD', href: '#ifood-match' },
              { label: 'FILOSOFIA BUILDER', href: '#manifesto' },
              { label: 'CONTATO', href: '#contact' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-[13px] font-semibold tracking-widest uppercase text-black py-1 transition-colors duration-200 hover:text-[#EA1D2C] group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#EA1D2C] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Redes e Ações Rápidas */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/bruna-kury/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A0A0B] text-white text-xs font-mono font-medium hover:bg-[#EA1D2C] transition-colors"
              title="LinkedIn de Bruna Kury"
            >
              <LinkedinIcon size={14} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={12} />
            </a>

            {/* Menu Mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 text-white"
              aria-label="Abrir Menu"
            >
              <span className="w-4 h-0.5 bg-white rounded-full" />
              <span className="w-4 h-0.5 bg-white rounded-full" />
              <span className="w-4 h-0.5 bg-white rounded-full" />
            </button>
          </div>
        </header>

        {/* 1.2 STATS ROW: DADOS E MÉTRICAS REAIS */}
        <div className="relative z-10 flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-10 md:py-6">
          <div className="flex items-center gap-6 sm:gap-10 md:gap-14 text-right">
            
            {/* Métrica 1: Produtos Reais */}
            <div className="flex flex-col items-end">
              <div 
                className="font-bold text-black leading-none flex items-baseline tracking-tight font-sans"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
              >
                <span className="text-[#EA1D2C] text-[0.6em] font-bold mr-1">+</span>
                <span>04</span>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-tight whitespace-pre-line">
                PRODUTOS DEPLOYADOS{'\n'}& FUNCIONAIS
              </p>
            </div>

            {/* Métrica 2: Volume de Pedidos Analisados */}
            <div className="flex flex-col items-end">
              <div 
                className="font-bold text-black leading-none flex items-baseline tracking-tight font-sans"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
              >
                <span className="text-[#EA1D2C] text-[0.6em] font-bold mr-1">+</span>
                <span>96k</span>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-tight whitespace-pre-line">
                PEDIDOS ANALISADOS{'\n'}(R$ 13M+ GMV)
              </p>
            </div>

            {/* Métrica 3: Vibe Coding & n8n */}
            <div className="flex flex-col items-end">
              <div 
                className="font-bold text-black leading-none flex items-baseline tracking-tight font-sans"
                style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)' }}
              >
                <span className="text-[#EA1D2C] text-[0.6em] font-bold mr-0.5">100</span>
                <span className="text-[#EA1D2C] text-[0.6em] font-bold">%</span>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-tight whitespace-pre-line">
                PONTA A PONTA{'\n'}COM GENAI & N8N
              </p>
            </div>

          </div>
        </div>

        {/* 1.3 BOTTOM SECTION (PROPOSTA DE VALOR & HEADLINE MONUMENTAL) */}
        <div className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-8">
          
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-relaxed max-w-[160px] sm:max-w-[220px] md:max-w-md">
              TRANSFORMANDO INTENÇÃO EM PRODUTOS REAIS COM INTELIGÊNCIA ARTIFICIAL
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm sm:text-lg md:text-xl font-bold tracking-wide text-[#EA1D2C] hover:text-[#B80010] whitespace-nowrap transition-colors group"
            >
              <span>EXPLORAR PROJETOS</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="flex items-end justify-between gap-4 pt-2">
            <div className="w-[140px] sm:w-[220px] md:w-[340px] shrink-0">
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-left text-black/80 leading-snug">
                ESTUDANTE DE CIÊNCIA DE DADOS & DESIGNER GRÁFICA. CONSTRUÇÃO ACELERADA COM VIBE CODING, N8N E MODELOS DE FRONTEIRA.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-black/70 font-semibold">
                  CANDIDATURA GENAI IFOOD
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end text-right">
              {['BUILDER', 'DATA', 'ACTION'].map((word) => (
                <div key={word} className="overflow-hidden">
                  <div
                    className="font-bold uppercase text-black tracking-tighter"
                    style={{
                      fontSize: 'clamp(2.4rem, 10vw, 9.8rem)',
                      lineHeight: 0.86,
                      letterSpacing: '-0.04em'
                    }}
                  >
                    {word}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 2: MANIFESTO & A FORÇA DA DUPLA FORMAÇÃO (DADOS + DESIGN + IA)
          ========================================================================= */}
      <section 
        id="manifesto"
        className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#FAF9F6] border-b border-black/10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          
          <div className="flex-1">
            <span className="text-xs font-mono tracking-widest text-[#EA1D2C] font-bold uppercase block mb-3">
              [ PERFIL AI BUILDER · IFOOD GENAI ]
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.2] tracking-[-0.015em] text-black">
              Eu não apenas peço código para a IA: eu conecto{' '}
              <span className="underline decoration-[#EA1D2C] decoration-2 underline-offset-4">
                necessidades de negócio
              </span>
              , orquestro{' '}
              <span className="underline decoration-[#5E0ED7] decoration-2 underline-offset-4">
                pipelines no n8n
              </span>{' '}
              e entrego ferramentas deployadas que resolvem dores reais.
            </h2>

            <p className="mt-6 text-sm sm:text-base text-black/70 leading-relaxed max-w-2xl">
              Minha formação em <strong>Design Gráfico</strong> garante interfaces com usabilidade de classe mundial, acessibilidade (WCAG 2.1 AA) e eliminação de fricção para o usuário final. Minha graduação em <strong>Ciência de Dados</strong> me dá o rigor analítico para validar métricas reais de GMV, SLA logístico, taxas de conversão e inferência estatística. A GenAI e o Vibe Coding são o motor que transforma essas duas frentes em produtos entregues em dias.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-black/10">
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-[#EA1D2C] uppercase">01. DESIGN GRÁFICO</span>
                <p className="text-xs text-black/70 mt-1">Design Systems, WCAG 2.1 AA, arquitetura da informação e foco obsessivo no usuário.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-[#5E0ED7] uppercase">02. CIÊNCIA DE DADOS</span>
                <p className="text-xs text-black/70 mt-1">Modelagem quantitativa, análise de grandes datasets (96k pedidos), KPIs e elasticidade.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase">03. GENAI BUILDER</span>
                <p className="text-xs text-black/70 mt-1">Orquestração no n8n, Prompt Chaining com Claude/Gemini e Vibe Coding ponta a ponta.</p>
              </div>
            </div>
          </div>

          {/* Card de Identificação da Candidata */}
          <div className="w-full md:w-80 shrink-0 p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-black/10">
                <span className="text-xs font-mono font-semibold uppercase text-black/70">CANDIDATA IFOOD</span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#EA1D2C]" />
              </div>
              <h3 className="text-xl font-bold font-sans text-black mt-3">Bruna Kury</h3>
              <p className="text-xs text-black/60 mt-1 leading-relaxed">
                Estudante de Ciência de Dados & Designer Gráfica. Construtora de soluções com Inteligência Artificial Generativa.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 flex flex-col gap-2.5">
              <a
                href="https://www.linkedin.com/in/bruna-kury/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-black hover:text-[#EA1D2C] transition-colors p-2 rounded-lg hover:bg-black/5"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon size={14} className="text-[#EA1D2C]" />
                  PERFIL NO LINKEDIN
                </span>
                <ArrowUpRight size={14} />
              </a>
              <div className="text-[11px] font-mono text-black/50 p-2 bg-black/5 rounded-lg">
                Trilha Selecionada: <strong>AI Builder</strong><br />
                Área de Aplicação: <strong>Negócios / Logística / Restaurantes</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 3: PROJETOS EM DESTAQUE (TODOS OS 5 PROJETOS REAIS COM PREVIEW)
          ========================================================================= */}
      <section 
        id="projects" 
        className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#F2F1ED] border-b border-black/10"
      >
        {/* Cabeçalho da Seção e Filtros */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#EA1D2C]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#EA1D2C]">
                [ PROJETOS & DEMOS REAIS ]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
              Soluções Construídas com GenAI
            </h2>
            <p className="text-xs sm:text-sm text-black/60 mt-1 max-w-xl">
              Projetos reais com código, arquitetura de prompt e demos em produção. Clique em qualquer card para inspecionar os detalhes técnicos.
            </p>
          </div>

          {/* Filtros por Categoria */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-black text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-black/70 border border-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Projetos Reais */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group relative flex flex-col rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Media Preview Box (Vídeo, GIF, Print ou Mockup Estilizado) */}
              <ProjectMediaPreview 
                project={proj} 
                onClick={() => setSelectedProjectModal(proj)} 
              />

              {/* Informações e Metadados do Projeto */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-medium text-black/50 mb-2">
                    <span className="uppercase text-[#EA1D2C] font-bold">{proj.category}</span>
                    <span>{proj.metrics[0].label}: {proj.metrics[0].val}</span>
                  </div>

                  <h3 
                    onClick={() => setSelectedProjectModal(proj)}
                    className="text-xl font-bold text-black font-sans group-hover:text-[#EA1D2C] transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight size={18} className="text-black/40 group-hover:text-[#EA1D2C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs font-medium text-black/60 mt-1 mb-3">
                    {proj.subtitle}
                  </p>

                  <p className="text-xs text-black/70 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Tag de Alinhamento com a vaga */}
                  <div className="mt-3 px-2.5 py-1.5 rounded-lg bg-[#FAF9F6] border border-black/5 flex items-center gap-1.5 text-[10px] font-mono text-black/80">
                    <Sparkles size={11} className="text-[#EA1D2C] shrink-0" />
                    <span className="truncate"><strong>iFood Match:</strong> {proj.ifoodPillar}</span>
                  </div>
                </div>

                {/* Tags Tecnológicas & Botões de Ação */}
                <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-black/5 text-[10px] font-mono text-black/70 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {proj.hasExternalLink && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-[#EA1D2C]/10 text-[#EA1D2C] hover:bg-[#EA1D2C] hover:text-white transition-colors flex items-center gap-1"
                        title="Abrir Demo em Produção"
                      >
                        <span>Demo</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProjectModal(proj)}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-black hover:bg-black/5"
                    >
                      Detalhes
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 4: MATRIZ DE MATCH DIRETO COM A TRILHA AI BUILDER DO IFOOD
          ========================================================================= */}
      <section 
        id="ifood-match" 
        className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#FAF9F6] border-b border-black/10"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono tracking-widest text-[#EA1D2C] font-bold uppercase block mb-2">
              [ CHECKLIST DE QUALIFICAÇÃO ATS & GESTORES ]
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
              O que o iFood espera vs. O que entreguei
            </h2>
            <p className="text-sm text-black/60 mt-3">
              Mapeamento direto entre as competências e entregas solicitadas no edital da vaga e as evidências práticas demonstradas nos projetos deste portfólio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#EA1D2C]/10 flex items-center justify-center text-[#EA1D2C] mb-3">
                  <Bot size={18} />
                </div>
                <h3 className="font-bold text-base text-black font-sans">
                  Agentes que Resolvem Dores de Negócio
                </h3>
                <p className="text-xs text-black/60 mt-1 leading-relaxed">
                  O edital busca quem transforma LLMs em ferramentas práticas para os desafios diários da operação.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/10 text-xs font-mono">
                <strong className="text-[#EA1D2C]">Evidência:</strong> Cardápio Copiloto com precificação estratégica (,90), reescrita apetitosa e geração de combos para restaurantes.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-[#5E0ED7]/10 flex items-center justify-center text-[#5E0ED7] mb-3">
                  <BarChart3 size={18} />
                </div>
                <h3 className="font-bold text-base text-black font-sans">
                  Dashboards Funcionais & Análise com IA
                </h3>
                <p className="text-xs text-black/60 mt-1 leading-relaxed">
                  Capacidade de sintetizar grandes massas de dados em interfaces que auxiliam a tomada de decisão.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/10 text-xs font-mono">
                <strong className="text-[#5E0ED7]">Evidência:</strong> Vértice com 96k pedidos Olist (R$ 13M GMV), SLA logístico, Gemini com fallback e simulador de CD.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                  <Clock size={18} />
                </div>
                <h3 className="font-bold text-base text-black font-sans">
                  Ferramentas Deployadas & Horas Economizadas
                </h3>
                <p className="text-xs text-black/60 mt-1 leading-relaxed">
                  Construção e deploy real de soluções que eliminam processos manuais e controles dispersos.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/10 text-xs font-mono">
                <strong className="text-emerald-600">Evidência:</strong> Apoio EdUENF em produção no Render, sincronizando formulários Google e eliminando horas de triagem manual.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 mb-3">
                  <Workflow size={18} />
                </div>
                <h3 className="font-bold text-base text-black font-sans">
                  Automações com n8n & Prompt Engineering
                </h3>
                <p className="text-xs text-black/60 mt-1 leading-relaxed">
                  Experiência comprovada em ferramentas de automação (n8n, Make) e encadeamento avançado de prompts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/10 text-xs font-mono">
                <strong className="text-purple-600">Evidência:</strong> Fluxo próprio no n8n de meta-prompting orquestrando Claude e Gemini para acelerar a entrega deste portfólio.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 mb-3">
                  <Zap size={18} />
                </div>
                <h3 className="font-bold text-base text-black font-sans">
                  Vibe Coding & Prototipagem em Dias
                </h3>
                <p className="text-xs text-black/60 mt-1 leading-relaxed">
                  Capacidade de criar produtos completos do zero em poucos dias utilizando IA como copiloto construtor.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/10 text-xs font-mono">
                <strong className="text-blue-600">Evidência:</strong> Todos os 4 sistemas deste portfólio foram construídos e deployados de forma ágil com Vibe Coding.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 mb-3">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-bold text-base text-black font-sans">
                  Design Universal & Acessibilidade (WCAG 2.1 AA)
                </h3>
                <p className="text-xs text-black/60 mt-1 leading-relaxed">
                  Garantia de conformidade, alto contraste e inclusão em produtos digitais de alcance massivo.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/10 text-xs font-mono">
                <strong className="text-amber-600">Evidência:</strong> Cardápio Copiloto e UrbanPulse construídos estritamente sob as diretrizes de acessibilidade WCAG 2.1 AA.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SEÇÃO 5: CONTATO & BRIEFING INTERATIVO
          ========================================================================= */}
      <section 
        id="contact" 
        className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#FAF9F6]"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <span className="text-xs font-mono tracking-widest text-[#EA1D2C] font-bold uppercase mb-2">
            [ VAMOS CONVERSAR? ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-black tracking-tight leading-tight mb-4">
            Pronta para construir soluções de GenAI no iFood.
          </h2>
          <p className="text-sm sm:text-base text-black/60 max-w-lg mb-10">
            Disponível para a Trilha AI Builder do Programa de Estágio GenAI do iFood. Personalize o briefing abaixo ou conecte-se diretamente comigo.
          </p>

          {/* Card Interativo de Briefing */}
          <div className="w-full text-left p-6 sm:p-10 rounded-2xl bg-white border border-black/10 shadow-lg relative overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-black/50">
                PROPOSTA DE CONEXÃO & PROJETO
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-[#EA1D2C]/10 text-[#EA1D2C] font-semibold">
                <Sparkles size={12} />
                RESPOSTA RÁPIDA
              </span>
            </div>

            <div className="font-serif text-lg sm:text-xl md:text-2xl leading-relaxed text-black/90">
              Olá Bruna, gostaríamos de conversar sobre oportunidades na área de{' '}
              <input 
                type="text"
                value={briefArea}
                onChange={(e) => setBriefArea(e.target.value)}
                placeholder="Restaurantes / Logística"
                className="font-sans font-medium text-base sm:text-lg text-[#EA1D2C] bg-transparent border-b-2 border-[#EA1D2C] px-1 py-0.5 focus:outline-none focus:border-black transition-colors"
                style={{ width: `${Math.max(briefArea.length, 18) * 0.7}ch` }}
              />{' '}
              para{' '}
              <input 
                type="text"
                value={briefGoal}
                onChange={(e) => setBriefGoal(e.target.value)}
                placeholder="construir soluções de GenAI"
                className="font-sans font-medium text-base sm:text-lg text-[#EA1D2C] bg-transparent border-b-2 border-[#EA1D2C] px-1 py-0.5 focus:outline-none focus:border-black transition-colors"
                style={{ width: `${Math.max(briefGoal.length, 20) * 0.7}ch` }}
              />
              , com início{' '}
              
              <span className="inline-flex flex-wrap items-center gap-1.5 align-middle my-1">
                {['nas próximas semanas', 'no início do estágio', 'quando for conveniente'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setBriefTimeline(t)}
                    className={`font-sans text-xs sm:text-sm font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                      briefTimeline === t
                        ? 'bg-[#EA1D2C] text-white shadow-sm'
                        : 'bg-black/5 hover:bg-black/10 text-black/70'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </span>
              .
            </div>

            {/* Ações do Card */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-[11px] font-mono uppercase tracking-wider text-black/50">
                DIRECIONADO A BRUNA KURY · CIÊNCIA DE DADOS & DESIGN GRÁFICO
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleCopyBrief}
                  className="px-3.5 py-2 rounded-full border border-black/15 bg-white hover:bg-black/5 text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200"
                  title="Copiar mensagem"
                >
                  {copiedBrief ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-600">COPIADO!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>COPIAR</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.linkedin.com/in/bruna-kury/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 rounded-full bg-[#EA1D2C] hover:bg-[#B80010] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm"
                >
                  <LinkedinIcon size={14} />
                  <span>CONECTAR NO LINKEDIN</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Ecossistema e Stack Técnica */}
          <div className="mt-14 flex flex-col items-center">
            <span className="text-[10px] font-mono tracking-widest uppercase text-black/40 font-semibold mb-4">
              [ STACK & FERRAMENTAS DOMINADAS ]
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono font-bold text-black/60">
              <span>Google Gemini API</span>
              <span>Claude 3.5 Sonnet</span>
              <span>n8n Automations</span>
              <span>Prompt Chaining</span>
              <span>Vibe Coding (Cursor/Bolt)</span>
              <span>React 18/19</span>
              <span>Tailwind CSS</span>
              <span>Recharts</span>
              <span>Leaflet</span>
              <span>Node.js</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          RODAPÉ
          ========================================================================= */}
      <footer className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-10 bg-[#F1EFEA] border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-2 border-[#EA1D2C] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#EA1D2C]" />
            </div>
            <span className="text-xs font-semibold tracking-widest uppercase text-black">
              BRUNA KURY · CANDIDATURA ESTÁGIO GENAI IFOOD © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-widest text-black/70">
            <a
              href="https://www.linkedin.com/in/bruna-kury/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#EA1D2C] flex items-center gap-1.5 transition-colors"
            >
              <LinkedinIcon size={14} />
              LINKEDIN
            </a>
            <a
              href="#hero"
              className="hover:text-[#EA1D2C] transition-colors"
            >
              VOLTAR AO TOPO ↑
            </a>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          MODAL INTERATIVO: INSPEÇÃO DE CÓDIGO, ARQUITETURA E FIT IFOOD
          ========================================================================= */}
      <AnimatePresence>
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-black/15 flex flex-col"
            >
              {/* Header do Modal */}
              <div className="sticky top-0 z-20 px-6 py-4 bg-white/95 backdrop-blur border-b border-black/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase bg-[#EA1D2C]/10 text-[#EA1D2C]">
                    PROJETO {selectedProjectModal.num}
                  </span>
                  <h3 className="text-lg font-bold text-black font-sans">
                    {selectedProjectModal.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black transition-colors"
                  aria-label="Fechar Modal"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Conteúdo Detalhado do Modal */}
              <div className="p-6 sm:p-8 flex flex-col gap-6">
                
                {/* Media Preview dentro do Modal */}
                <div className="rounded-xl overflow-hidden border border-black/10">
                  <ProjectMediaPreview 
                    project={selectedProjectModal} 
                    onClick={() => {}} 
                  />
                </div>

                {/* Bloco de Match com a vaga */}
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-[#EA1D2C] block">
                      CORRESPONDÊNCIA COM A VAGA IFOOD AI BUILDER:
                    </span>
                    <p className="text-sm font-semibold text-black mt-0.5">
                      {selectedProjectModal.ifoodPillar}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black text-white text-xs font-mono font-medium whitespace-nowrap self-start sm:self-auto">
                    {selectedProjectModal.ifoodFitScore}
                  </span>
                </div>

                {/* Descrição e Problema de Negócio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-black/60 mb-1.5 flex items-center gap-1.5">
                      <TrendingUp size={14} className="text-[#EA1D2C]" />
                      O PROBLEMA DE NEGÓCIO RESOLVIDO
                    </h4>
                    <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                      {selectedProjectModal.businessProblem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-black/60 mb-1.5 flex items-center gap-1.5">
                      <Cpu size={14} className="text-[#5E0ED7]" />
                      ARQUITETURA DE IA & PROMPT
                    </h4>
                    <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                      {selectedProjectModal.architecture}
                    </p>
                  </div>
                </div>

                {/* Métricas Reais */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-black/60 mb-2.5">
                    MÉTRICAS & INDICADORES-CHAVE
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedProjectModal.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-black/5 text-center">
                        <span className="text-[10px] font-mono uppercase text-black/50 block">{m.label}</span>
                        <span className="text-sm sm:text-base font-bold text-black font-sans">{m.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet / Arquitetura */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-black/60 mb-2 flex items-center gap-1.5">
                    <Terminal size={14} className="text-black/70" />
                    TRECHO DE IMPLEMENTAÇÃO / ARQUITETURA
                  </h4>
                  <pre className="p-4 rounded-xl bg-[#0E1318] text-white/90 text-xs font-mono overflow-x-auto leading-relaxed border border-white/10">
                    <code>{selectedProjectModal.codeSnippet}</code>
                  </pre>
                </div>

                {/* Rodapé do Modal com Links */}
                <div className="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProjectModal.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded bg-black/5 text-xs font-mono text-black/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedProjectModal.hasExternalLink && (
                      <a
                        href={selectedProjectModal.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-full bg-[#EA1D2C] hover:bg-[#B80010] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <span>Acessar Demo ao Vivo</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProjectModal(null)}
                      className="px-4 py-2 rounded-full border border-black/15 hover:bg-black/5 text-black text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          DRAWER MOBILE MENU
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex flex-col p-6 sm:p-8 justify-between"
          >
            <div className="flex items-center justify-between pb-6 border-b border-black/10">
              <span className="text-sm font-bold tracking-widest uppercase text-black">
                BRUNA KURY · MENU
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center text-black"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-auto text-2xl font-bold uppercase tracking-wider">
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EA1D2C] transition-colors"
              >
                PROJETOS REALIZADOS
              </a>
              <a
                href="#ifood-match"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EA1D2C] transition-colors"
              >
                MATCH TRILHA IFOOD
              </a>
              <a
                href="#manifesto"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EA1D2C] transition-colors"
              >
                FILOSOFIA BUILDER
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#EA1D2C] transition-colors"
              >
                CONTATO & LINKEDIN
              </a>
            </div>

            <div className="pt-6 border-t border-black/10 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/bruna-kury/"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full bg-[#EA1D2C] text-white text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <LinkedinIcon size={14} />
                <span>VER LINKEDIN</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
