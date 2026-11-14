import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  X, 
  Play, 
  Pause, 
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
  ChevronLeft,
  ChevronRight,
  Layers,
  Zap,
  Globe
} from 'lucide-react';

// Crisp inline SVGs for Social Affordances
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
// 1. ASSET SOURCES & PROXIES (PROMPT 1 & 2)
// ==========================================
const HERO_BG_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4";
const CF_BASE = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/";
const R2_BASE = "https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/";

const getProxyImage = (url, width = 800) => {
  return `https://images.higgs.ai/?default=1&output=webp&url=${encodeURIComponent(url)}&w=${width}&q=85`;
};

// ==========================================
// 2. CURATED 7 FLAGSHIP VIBE CODING & AI PROJECTS
// ==========================================
const PROJECTS = [
  {
    id: 'proj-01',
    num: '01',
    title: 'Look Circle',
    subtitle: 'Generative UI & Spatial Co-Processor',
    world: 'brand',
    category: 'Generative UI',
    tags: ['WebGL 2.0', 'Llama-3.3-70B', 'WebSockets', 'Tailwind'],
    ratio: 16 / 9,
    videoUrl: `${R2_BASE}aaaf/look-circle-hero.mp4`,
    posterId: 'hf_20261111_034848_928e6733-ce60-48f4-9a65-14dc76a1d74b',
    posterUrl: `${CF_BASE}hf_20261111_034848_928e6733-ce60-48f4-9a65-14dc76a1d74b.png`,
    badge: 'LIVE AGENT // v4.2 STREAM',
    worldColor: '#5E0ED7',
    description: 'Interface cinemática adaptativa construída com vibe coding para sintetizar fluxos cognitivos de LLMs em componentes de UI gerados em tempo real.',
    architecture: 'Speculative decoding pipeline streaming React AST nodes diretamente para um WebWorker de compilação JIT.',
    codeSnippet: `// Kernel de síntese Generative UI
const uiStream = await orchestrator.synthesizeComponent({
  intent: userPrompt,
  designTokens: activeTokens,
  engine: "vibe-compiler-v3",
  speculativeDecoding: true
});
mountDynamicNode(uiStream.compiledTree);`,
    metrics: [
      { label: 'Latency', val: '14.2ms' },
      { label: 'Throughput', val: '168 tok/s' },
      { label: 'Pipeline', val: 'Zero-Copy' }
    ]
  },
  {
    id: 'proj-02',
    num: '02',
    title: 'Video Studio',
    subtitle: 'Autonomous Motion AI & Multi-Modal Director',
    world: 'build',
    category: 'Autonomous Agents',
    tags: ['Next.js', 'PyTorch', 'LangGraph', 'FFmpeg WASM'],
    ratio: 16 / 9,
    videoUrl: `${R2_BASE}aaaf/kolibrie-landing.mp4`,
    posterId: 'hf_20261110_232427_5e9a291a-5c3e-4f0e-9506-06fedc0020f4',
    posterUrl: `${CF_BASE}hf_20261110_232427_5e9a291a-5c3e-4f0e-9506-06fedc0020f4.png`,
    badge: 'MULTI-AGENT // 60 FPS',
    worldColor: '#3AA8D0',
    description: 'Sistema autônomo de direção cinematográfica onde múltiplos agentes de IA planejam, animam e renderizam sequências interativas em tempo de execução.',
    architecture: 'Grafo cíclico com supervisão de latência e renderização de buffers acelerada por WebCodecs.',
    codeSnippet: `const directorAgent = new CinematicPlanner({
  storyboard: rawBrief,
  renderer: "WebCodecsHardwareEncoder"
});
for await (const frame of directorAgent.orchestrateScene()) {
  canvasContext.transferFromImageBitmap(frame.bitmap);
}`,
    metrics: [
      { label: 'Resolution', val: '4K Native' },
      { label: 'Render Pass', val: '8.3ms' },
      { label: 'Agent Sync', val: '99.8%' }
    ]
  },
  {
    id: 'proj-03',
    num: '03',
    title: 'Balloon Drop',
    subtitle: '3D Kinetic Simulation & Reactive Canvas',
    world: 'brand',
    category: '3D & Shaders',
    tags: ['Three.js', 'Rapier3D WASM', 'React 19', 'Compute Shaders'],
    ratio: 16 / 9,
    videoUrl: `${R2_BASE}aaaf/balloon-drop-hero-edge.mp4`,
    posterId: 'hf_20261109_030427_0961b20a-ba6b-4094-8ea2-de5916dfa0b3',
    posterUrl: `${CF_BASE}hf_20261109_030427_0961b20a-ba6b-4094-8ea2-de5916dfa0b3.png`,
    badge: 'RIGID BODY // 120 HZ',
    worldColor: '#5E0ED7',
    description: 'Ambiente físico imersivo acionado por micro-gestos e áudio espectral, unindo simulação de corpos rígidos e sombreamento volumétrico.',
    architecture: 'Simulação física desacoplada em SharedArrayBuffer rodando a 120Hz independente da taxa de quadros da UI.',
    codeSnippet: `const physicsWorld = new RapierPhysicsWorld({
  gravity: [0, -9.81, 0],
  substeps: 4
});
physicsWorld.onCollision((bodyA, bodyB) => {
  audioSynthesizer.triggerResonance(bodyA.kineticEnergy);
});`,
    metrics: [
      { label: 'Physics Step', val: '1.2ms' },
      { label: 'Bodies', val: '1,200 entities' },
      { label: 'Framerate', val: '120 FPS' }
    ]
  },
  {
    id: 'proj-04',
    num: '04',
    title: 'Fox Couture',
    subtitle: 'Parametric Latent Manifold & Real-Time Diffusion',
    world: 'brand',
    category: 'Vibe Coding',
    tags: ['SDXL-Turbo', 'TensorRT', 'Canvas2D', 'WebGPU'],
    ratio: 16 / 10,
    videoUrl: `${R2_BASE}aaaf/fox-couture-hero.mp4`,
    posterId: 'hf_20261107_154307_13b28214-7ca8-4b2a-b8aa-a2f84e7cfcec',
    posterUrl: `${CF_BASE}hf_20261107_154307_13b28214-7ca8-4b2a-b8aa-a2f84e7cfcec.png`,
    badge: 'LATENT VOYAGER // 30 FPS',
    worldColor: '#5E0ED7',
    description: 'Explorador contínuo de espaços latentes para design generativo de alta costura com interpolação esférica (SLERP) ao vivo pelo cursor.',
    architecture: 'Inferência de difusão de passo único com LCM e buffer swap triplo para eliminação total de stuttering.',
    codeSnippet: `const latentVector = slerp(latentAnchorA, latentAnchorB, cursorT);
const outputTensor = await turboPipeline.stepDenoise(latentVector, {
  guidanceScale: 0.0,
  seed: dynamicSeed
});
gpuTexture.write(outputTensor);`,
    metrics: [
      { label: 'Step Time', val: '28ms' },
      { label: 'Latent Dims', val: '4x64x64' },
      { label: 'Precision', val: 'FP16' }
    ]
  },
  {
    id: 'proj-05',
    num: '05',
    title: 'Synapse IDE',
    subtitle: 'Vibe Coding Autonomous Dev Environment',
    world: 'build',
    category: 'Autonomous Agents',
    tags: ['TypeScript', 'Claude 3.5 Sonnet', 'WASM Sandbox', 'Monaco'],
    ratio: 16 / 9,
    videoUrl: `${R2_BASE}aaaf/laptop-portfolio.mp4`,
    posterId: 'hf_20261111_030305_aa366bc0-85e3-4f61-82c1-cbf8ae8217a3',
    posterUrl: `${CF_BASE}hf_20261111_030305_aa366bc0-85e3-4f61-82c1-cbf8ae8217a3.png`,
    badge: 'AUTONOMOUS RECURSION',
    worldColor: '#3AA8D0',
    description: 'IDE conversacional orientada a intenção que traduz linguagem natural em arquiteturas completas com verificação estática instantânea.',
    architecture: 'Agente de planejamento multi-camada com verificação Z3 e rollback determinístico de estados de código.',
    codeSnippet: `async function* recursiveVibeLoop(naturalGoal) {
  const blueprint = await agentOrchestrator.decompose(naturalGoal);
  for (const module of blueprint.modules) {
    const code = await module.synthesize();
    yield verifyStaticSemantics(code);
  }
}`,
    metrics: [
      { label: 'Verification', val: '100% Type-Safe' },
      { label: 'Synthesis Speed', val: '3.4s / module' },
      { label: 'Self-Correction', val: '97.4%' }
    ]
  },
  {
    id: 'proj-06',
    num: '06',
    title: 'Kinetic Ink',
    subtitle: 'Reactive Neural Fluid Shader & Gestural Canvas',
    world: 'build',
    category: '3D & Shaders',
    tags: ['WebGL 2.0', 'GLSL Shaders', 'Web Audio API', 'PointerEvents'],
    ratio: 16 / 9,
    videoUrl: `${R2_BASE}aaaf/ink-portfolio.mp4`,
    posterId: 'hf_20261111_001348_8bc89068-e31a-4ccf-a6cb-893ff11c134f',
    posterUrl: `${CF_BASE}hf_20261111_001348_8bc89068-e31a-4ccf-a6cb-893ff11c134f.png`,
    badge: 'NAVIER-STOKES // 60 FPS',
    worldColor: '#3AA8D0',
    description: 'Solucionador numérico das equações de Navier-Stokes executado em fragment shaders para simulação tátil de fluidos e pigmentação orgânica.',
    architecture: 'Advecção, difusão e projeção de pressão implementadas com ping-pong Framebuffer Objects.',
    codeSnippet: `gl.useProgram(advectionShader);
gl.uniform2f(uPointerDelta, dx, dy);
gl.uniform1f(uViscosity, 0.985);
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);`,
    metrics: [
      { label: 'Grid Res', val: '1024x1024' },
      { label: 'Advection', val: '0.4ms' },
      { label: 'VRAM', val: '48 MB' }
    ]
  },
  {
    id: 'proj-07',
    num: '07',
    title: 'Sphere Gallery',
    subtitle: '4D Gaussian Splatting & WebGPU Radiance Field',
    world: 'learn',
    category: 'Generative UI',
    tags: ['WebGPU', '3DGS', 'WGSL', 'Rust WASM'],
    ratio: 16 / 9,
    videoUrl: `${R2_BASE}aaaf/sphere-gallery.mp4`,
    posterId: 'hf_20261111_011719_6594eb98-1eff-4903-9888-f4617764070d',
    posterUrl: `${CF_BASE}hf_20261111_011719_6594eb98-1eff-4903-9888-f4617764070d.png`,
    badge: '3.2M SPLATS // 120 FPS',
    worldColor: '#9ED8E4',
    description: 'Renderizador volumétrico de alta fidelidade para radiância neural baseado em Gaussian Splatting dinâmico rodando no navegador.',
    architecture: 'Radix sort em compute shaders WebGPU para classificação de 3.2 milhões de gaussianas em menos de 4ms.',
    codeSnippet: `@compute @workgroup_size(64, 1, 1)
fn sortAndRasterize(@builtin(global_invocation_id) id: vec3<u32>) {
  let splat = splatBuffer[id.x];
  let cov2D = computeProjectedCovariance(splat.pos, splat.cov3D);
  rasterizeFragment(cov2D, splat.harmonicColor);
}`,
    metrics: [
      { label: 'Gaussian Count', val: '3,240,000' },
      { label: 'Compute Pass', val: '3.8ms' },
      { label: 'Draw Calls', val: '1 / frame' }
    ]
  }
];

const CATEGORIES = ['All Projects', 'Vibe Coding', 'Generative UI', 'Autonomous Agents', '3D & Shaders'];

export default function App() {
  // Navigation & View State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('WORK');
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  
  // Interactive Project Showcase State
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [activeChoiceHover, setActiveChoiceHover] = useState(null); // 'startups', 'brands', 'learners', 'chat'
  
  // Brief Builder Interactive State
  const [briefWhat, setBriefWhat] = useState('a generative AI vibe app');
  const [briefWho, setBriefWho] = useState('startups & innovators');
  const [briefTimeline, setBriefTimeline] = useState('in 4 weeks');
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  // Header word reveal toggle (FEARLESS / VIBE)
  const [headingVariant, setHeadingVariant] = useState(0);

  // Mouse tracking for editorial cursor hover card
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPointerInsideStage, setIsPointerInsideStage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') return PROJECTS;
    return PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  // Project Brief Generator
  const composedBriefText = useMemo(() => {
    return `Hi Bruna, I'm creating ${briefWhat.trim() || '[project]'} for ${briefWho.trim() || '[target audience]'}, and I want it ${briefTimeline}. Let's talk!`;
  }, [briefWhat, briefWho, briefTimeline]);

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(composedBriefText);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2200);
  };

  const handleShareBrief = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Project Brief for Bruna Kury',
          text: composedBriefText,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to copy
        handleCopyBrief();
      }
    } else {
      handleCopyBrief();
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2000);
    }
  };

  // Switch heading words periodically or on interaction
  useEffect(() => {
    const timer = setInterval(() => {
      setHeadingVariant(prev => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation (Esc to close modal)
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

  const headingWords = headingVariant === 0 
    ? ["FEARLESS", "VISION", "DELIVERED"] 
    : ["VIBE", "CODING", "ENGINEERED"];

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#000000] font-sans antialiased selection:bg-[#5E0ED7] selection:text-white overflow-x-hidden">
      
      {/* =========================================================================
          SECTION 1: HERO VIEW (PROMPT 1 SPECIFICATION 1:1 WITH LIGHT AESTHETIC)
          ========================================================================= */}
      <section 
        id="hero"
        className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video 
            className="absolute inset-0 w-full h-full object-cover opacity-90 scale-105 transition-transform duration-1000 ease-out"
            autoPlay 
            loop 
            muted 
            playsInline
            src={HERO_BG_VIDEO}
          />
          {/* Subtle light translucent scrim ensuring black text has 100% crisp contrast */}
          <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px] transition-opacity" />
          {/* Grain texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />
        </div>

        {/* 1.1 NAVIGATION BAR */}
        <header className="relative z-20 w-full px-5 sm:px-8 md:px-12 pt-5 md:pt-6 flex items-center justify-between">
          {/* Left: Circular Logo + Name */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3.5"
          >
            <a 
              href="#hero" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5E0ED7] rounded-full"
              aria-label="Bruna Kury Home"
            >
              {/* Logo: 32px round div, 2px border in #5E0ED7, containing 10px solid circle */}
              <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5E0ED7] transition-transform duration-300 group-hover:scale-125" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-widest uppercase text-black">
                  BRUNA KURY
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-black/50 -mt-0.5">
                  VIBE CODING & AI
                </span>
              </div>
            </a>
          </motion.div>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {['WORK', 'EXPERTISE', 'VIBE CODING', 'BRIEF / CONTACT'].map((item, idx) => (
              <motion.a
                key={item}
                href={item === 'WORK' ? '#projects' : item === 'BRIEF / CONTACT' ? '#brief' : '#statement'}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (idx + 1) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative text-[14px] font-semibold tracking-widest uppercase text-black py-1 transition-colors duration-200 hover:text-[#5E0ED7] group`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#5E0ED7] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </motion.a>
            ))}
          </nav>

          {/* Right: Quick Social Badges & 36px Black Round Hamburger Button */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 sm:gap-4"
          >
            {/* Direct Social Links (Bruna Kury) */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href="https://github.com/brunakury"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center text-black transition-all duration-200 hover:scale-105"
                title="GitHub: @brunakury"
                aria-label="GitHub de Bruna Kury"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://linkedin.com/in/brunakury"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#5E0ED7]/10 hover:bg-[#5E0ED7]/20 border border-[#5E0ED7]/20 flex items-center justify-center text-[#5E0ED7] transition-all duration-200 hover:scale-105"
                title="LinkedIn: Bruna Kury"
                aria-label="LinkedIn de Bruna Kury"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>

            {/* Hamburger Icon: 36px round black button with 3 white lines */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5E0ED7]"
              aria-label="Abrir Menu de Navegação"
            >
              <span className="w-4 h-0.5 bg-white rounded-full transition-transform" />
              <span className="w-4 h-0.5 bg-white rounded-full transition-transform" />
              <span className="w-4 h-0.5 bg-white rounded-full transition-transform" />
            </button>
          </motion.div>
        </header>

        {/* 1.2 STATS ROW (Middle Section: flex-1, vertically centered, right-aligned) */}
        <div className="relative z-10 flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
          <div className="flex items-center gap-6 sm:gap-10 md:gap-14 text-right">
            
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-end"
            >
              <div 
                className="font-semibold text-black leading-none flex items-baseline tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
              >
                <span className="text-[#5E0ED7] text-[0.55em] font-bold mr-1">+</span>
                <span>07</span>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-tight whitespace-pre-line">
                CRAFTED VIBE{'\n'}APPLICATIONS
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-end"
            >
              <div 
                className="font-semibold text-black leading-none flex items-baseline tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
              >
                <span className="text-[#5E0ED7] text-[0.55em] font-bold mr-1">+</span>
                <span>140k</span>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-tight whitespace-pre-line">
                TOKENS SYNTHESIZED{'\n'}IN REALTIME
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-end"
            >
              <div 
                className="font-semibold text-black leading-none flex items-baseline tracking-tight"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
              >
                <span className="text-[#5E0ED7] text-[0.55em] font-bold mr-0.5">100</span>
                <span className="text-[#5E0ED7] text-[0.55em] font-bold">%</span>
              </div>
              <p className="mt-1.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-tight whitespace-pre-line">
                AUTONOMOUS{'\n'}ORCHESTRATION
              </p>
            </motion.div>

          </div>
        </div>

        {/* 1.3 BOTTOM SECTION (Pinned to bottom with padding) */}
        <div className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-10">
          
          {/* Row A (tagline + CTA) */}
          <div className="flex items-center justify-between gap-4">
            {/* Left: Small uppercase tagline paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black leading-relaxed max-w-[140px] sm:max-w-[200px] md:max-w-xs"
            >
              SHAPING BOLD<br />
              VISIONS INTO POWER<br />
              WITH VIBE CODING
            </motion.p>

            {/* Right: CTA link "Work With Us" with ArrowUpRight */}
            <motion.a
              href="#brief"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-[#5E0ED7] hover:text-[#4D0AB5] whitespace-nowrap transition-colors group"
            >
              <span>WORK WITH US</span>
              <ArrowUpRight 
                className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
            </motion.a>
          </div>

          {/* Row B (description + main heading) */}
          <div className="flex items-end justify-between gap-3 sm:gap-6 pt-2">
            
            {/* Left: Fixed-width descriptive container */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.84, ease: [0.22, 1, 0.36, 1] }}
              className="w-[130px] sm:w-[200px] md:w-[320px] shrink-0"
            >
              <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-left text-black/90 leading-snug">
                CREATIVE STUDIO & AI ARCHITECTURE BUILT AROUND ELEVATING YOUR INTENT INTO STRIKING REALITY.
              </p>
              <div className="mt-3 hidden sm:flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-black/60">
                  DISPONÍVEL PARA NOVOS PROJETOS
                </span>
              </div>
            </motion.div>

            {/* Right: The main heading — three words stacked vertically with clip reveal */}
            <div className="flex flex-col items-end text-right">
              {headingWords.map((word, wordIdx) => (
                <div key={word} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.4 + wordIdx * 0.14,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="font-semibold uppercase text-black tracking-tight"
                    style={{
                      fontSize: 'clamp(2.2rem, 9.2vw, 9.2rem)',
                      lineHeight: 0.88,
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {word}
                  </motion.div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EDITORIAL INTENT & INTERACTIVE CURSOR SENTENCE (PROMPT 2)
          ========================================================================= */}
      <section 
        id="statement"
        className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[#FAF9F6] border-t border-black/10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* Editorial Sentence with Interactive Choice Underlines */}
          <div className="flex-1">
            <span className="text-xs font-mono tracking-widest text-[#5E0ED7] font-semibold uppercase block mb-4">
              [ PHILOSOPHY & MANIFESTO ]
            </span>

            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.2] tracking-[-0.015em] text-black">
              I craft autonomous systems for{' '}
              <a
                href="#projects"
                onMouseEnter={() => setActiveChoiceHover('startups')}
                onMouseLeave={() => setActiveChoiceHover(null)}
                className="relative inline-block font-medium text-black group cursor-pointer"
              >
                <span className="relative z-10 underline decoration-[#5E0ED7] decoration-2 underline-offset-4 group-hover:text-[#5E0ED7] transition-colors">
                  startups
                </span>
                <sup className="text-xs font-sans font-semibold text-[#5E0ED7] ml-0.5">01</sup>
              </a>
              , generative showreels for{' '}
              <a
                href="#projects"
                onMouseEnter={() => setActiveChoiceHover('brands')}
                onMouseLeave={() => setActiveChoiceHover(null)}
                className="relative inline-block font-medium text-black group cursor-pointer"
              >
                <span className="relative z-10 underline decoration-[#3AA8D0] decoration-2 underline-offset-4 group-hover:text-[#3AA8D0] transition-colors">
                  brands
                </span>
                <sup className="text-xs font-sans font-semibold text-[#3AA8D0] ml-0.5">02</sup>
              </a>{' '}
              and open toolkits for{' '}
              <a
                href="#projects"
                onMouseEnter={() => setActiveChoiceHover('learners')}
                onMouseLeave={() => setActiveChoiceHover(null)}
                className="relative inline-block font-medium text-black group cursor-pointer"
              >
                <span className="relative z-10 underline decoration-purple-600 decoration-2 underline-offset-4 group-hover:text-purple-600 transition-colors">
                  vibe coders
                </span>
                <sup className="text-xs font-sans font-semibold text-purple-600 ml-0.5">03</sup>
              </a>
              . Or just{' '}
              <a
                href="#brief"
                onMouseEnter={() => setActiveChoiceHover('chat')}
                onMouseLeave={() => setActiveChoiceHover(null)}
                className="relative inline-block font-medium text-black group cursor-pointer"
              >
                <span className="relative z-10 underline decoration-emerald-500 decoration-2 underline-offset-4 group-hover:text-emerald-600 transition-colors">
                  start a project
                </span>
                <sup className="text-xs font-sans font-semibold text-emerald-500 ml-0.5">04</sup>
              </a>
              .
            </p>

            <p className="mt-6 text-sm sm:text-base font-sans text-black/60 max-w-xl leading-relaxed">
              Eliminando a barreira entre pensamento conceitual e código vivo. Cada aplicação é orquestrada através de modelos de linguagem, agentes autônomos e física em tempo real para proporcionar experiências digitais inesquecíveis.
            </p>
          </div>

          {/* Side Credentials Box */}
          <div className="w-full md:w-80 shrink-0 p-6 rounded-2xl bg-white border border-black/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/10">
                <span className="text-xs font-mono font-semibold uppercase text-black/70">ARQUITETA / DEVELOPER</span>
                <div className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
              </div>
              <h3 className="text-xl font-bold font-sans text-black mt-3">Bruna Kury</h3>
              <p className="text-xs text-black/60 mt-1 leading-relaxed">
                Especialista em Vibe Coding, Engenharia de Interfaces com IA, React 19, Motion Design e Shaders WebGL.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/10 flex flex-col gap-2.5">
              <a
                href="https://linkedin.com/in/brunakury"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-black hover:text-[#5E0ED7] transition-colors p-2 rounded-lg hover:bg-black/5"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon size={14} className="text-[#5E0ED7]" />
                  CONECTAR NO LINKEDIN
                </span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/brunakury"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-black hover:text-[#5E0ED7] transition-colors p-2 rounded-lg hover:bg-black/5"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon size={14} />
                  REPOSITÓRIOS GITHUB
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE 7 FLAGSHIP PROJECTS SHOWCASE (MOTION & 3D INTERACTION)
          ========================================================================= */}
      <section 
        id="projects" 
        className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-16 md:py-24 bg-[#F2F1ED] border-t border-black/10"
      >
        {/* Section Header & Category Filters */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#5E0ED7]">
                [ CURATED SELECTION ]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">
              Flagship Vibe Coding Projects
            </h2>
          </div>

          {/* Category Filter Pills */}
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

        {/* Project Cards Grid with Rich Video Preview & Hover Micro-Interactions */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative flex flex-col rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Media Preview Box with Auto-playing Video on Hover */}
              <div 
                className="relative w-full aspect-[16/10] bg-[#111920] overflow-hidden cursor-pointer"
                onClick={() => setSelectedProjectModal(proj)}
              >
                {/* Poster Still Fallback */}
                <img
                  src={proj.posterUrl}
                  alt={proj.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Looping Ambient Video */}
                <video
                  src={proj.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-300"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* Overlay Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold uppercase bg-black/75 backdrop-blur-md text-white border border-white/20">
                    No. {proj.num}
                  </span>
                </div>

                {/* Inspect Action Pill on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 size={13} />
                    Inspecionar Código & Specs
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono font-medium text-black/50 mb-2">
                    <span className="uppercase text-[#5E0ED7] font-semibold">{proj.category}</span>
                    <span>{proj.metrics[0].label}: {proj.metrics[0].val}</span>
                  </div>

                  <h3 className="text-xl font-bold text-black font-sans group-hover:text-[#5E0ED7] transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    <ArrowUpRight size={18} className="text-black/40 group-hover:text-[#5E0ED7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs font-medium text-black/60 mt-1 mb-3">
                    {proj.subtitle}
                  </p>

                  <p className="text-xs text-black/70 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Tags & CTA Button */}
                <div className="mt-5 pt-4 border-t border-black/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-black/5 text-[10px] font-mono text-black/70 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProjectModal(proj)}
                    className="text-xs font-semibold uppercase tracking-wider text-[#5E0ED7] hover:underline flex items-center gap-1"
                  >
                    Detalhes
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: BUILD VIEW & INTERACTIVE BRIEF BUILDER (PROMPT 2 SPECIFICATION)
          ========================================================================= */}
      <section 
        id="brief" 
        className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-20 md:py-28 bg-[#FAF9F6] border-t border-black/10"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <span className="text-xs font-mono tracking-widest text-[#5E0ED7] font-semibold uppercase mb-3">
            [ INTERACTIVE PROJECT BRIEF ]
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#0E2A3B] tracking-tight leading-tight mb-4">
            I take ideas from intent to ship.
          </h2>
          <p className="text-sm sm:text-base text-black/60 max-w-lg mb-12">
            Configure seu briefing interativo abaixo. Copie a estrutura pronta com um clique ou envie diretamente para iniciar o desenvolvimento.
          </p>

          {/* The Brief Card (Refined Light Mode Glass Container) */}
          <div className="w-full text-left p-6 sm:p-10 rounded-2xl bg-white border border-black/10 shadow-lg relative overflow-hidden">
            
            {/* Header label */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-black/50">
                SHARE WHAT YOU'RE CREATING
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-[#5E0ED7]/10 text-[#5E0ED7] font-semibold">
                <Sparkles size={12} />
                VIBE CODING READY
              </span>
            </div>

            {/* Interactive Sentence with Fill-in-the-Blanks */}
            <div className="font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-black/90">
              I'm creating{' '}
              <input 
                type="text"
                value={briefWhat}
                onChange={(e) => setBriefWhat(e.target.value)}
                placeholder="a generative AI web app"
                className="font-sans font-medium text-base sm:text-xl text-[#5E0ED7] bg-transparent border-b-2 border-[#5E0ED7] px-1 py-0.5 focus:outline-none focus:border-black transition-colors"
                style={{ width: `${Math.max(briefWhat.length, 18) * 0.65}ch` }}
              />{' '}
              for{' '}
              <input 
                type="text"
                value={briefWho}
                onChange={(e) => setBriefWho(e.target.value)}
                placeholder="startups and creators"
                className="font-sans font-medium text-base sm:text-xl text-[#5E0ED7] bg-transparent border-b-2 border-[#5E0ED7] px-1 py-0.5 focus:outline-none focus:border-black transition-colors"
                style={{ width: `${Math.max(briefWho.length, 16) * 0.65}ch` }}
              />
              , and I want it{' '}
              
              {/* Timeline Radio Pills */}
              <span className="inline-flex flex-wrap items-center gap-1.5 align-middle my-1">
                {['in 4 weeks', 'by next month', "when it's ready"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setBriefTimeline(t)}
                    className={`font-sans text-xs sm:text-sm font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                      briefTimeline === t
                        ? 'bg-[#5E0ED7] text-white shadow-sm'
                        : 'bg-black/5 hover:bg-black/10 text-black/70'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </span>
              .
            </div>

            {/* Note & Actions Row */}
            <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-[11px] font-mono uppercase tracking-wider text-black/50">
                GOES TO BRUNA KURY. FAST FEEDBACK & PROTOTYPING GUARANTEED.
              </p>

              <div className="flex items-center gap-2.5">
                {/* Copy Brief Button */}
                <button
                  onClick={handleCopyBrief}
                  className="px-3.5 py-2 rounded-full border border-black/15 bg-white hover:bg-black/5 text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200"
                  title="Copiar briefing para a área de transferência"
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

                {/* Share Button */}
                <button
                  onClick={handleShareBrief}
                  className="p-2 rounded-full border border-black/15 bg-white hover:bg-black/5 text-black transition-all duration-200"
                  title="Compartilhar briefing"
                  aria-label="Compartilhar"
                >
                  <Share2 size={16} />
                </button>

                {/* Send via Email / Direct Connect */}
                <a
                  href={`mailto:brunakury.dev@gmail.com?subject=${encodeURIComponent("Novo Projeto Vibe Coding")}&body=${encodeURIComponent(composedBriefText)}`}
                  className="px-5 py-2 rounded-full bg-[#5E0ED7] hover:bg-[#4D0AB5] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm"
                >
                  <span>ENVIAR PARA BRUNA</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Social Proof & Trusted Ecosystem */}
          <div className="mt-14 flex flex-col items-center">
            <span className="text-[10px] font-mono tracking-widest uppercase text-black/40 font-semibold mb-6">
              [ STACK & PARTNER ECOSYSTEM ]
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="font-mono text-sm font-bold tracking-tight text-black">React 19</span>
              <span className="font-mono text-sm font-bold tracking-tight text-black">Tailwind CSS</span>
              <span className="font-mono text-sm font-bold tracking-tight text-black">Three.js</span>
              <span className="font-mono text-sm font-bold tracking-tight text-black">WebGPU</span>
              <span className="font-mono text-sm font-bold tracking-tight text-black">Claude API</span>
              <span className="font-mono text-sm font-bold tracking-tight text-black">LangGraph</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FOOTER (BRUNA KURY PORTFOLIO CLOSING)
          ========================================================================= */}
      <footer className="relative z-10 w-full px-5 sm:px-8 md:px-12 py-12 bg-[#F1EFEA] border-t border-black/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
            </div>
            <span className="text-sm font-semibold tracking-widest uppercase text-black">
              BRUNA KURY © {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/brunakury"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-widest text-black/70 hover:text-[#5E0ED7] flex items-center gap-1.5 transition-colors"
            >
              <GithubIcon size={14} />
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/brunakury"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold uppercase tracking-widest text-black/70 hover:text-[#5E0ED7] flex items-center gap-1.5 transition-colors"
            >
              <LinkedinIcon size={14} />
              LINKEDIN
            </a>
            <a
              href="#hero"
              className="text-xs font-semibold uppercase tracking-widest text-black/70 hover:text-black transition-colors"
            >
              BACK TO TOP ↑
            </a>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          MODAL: DEEP DIVE PROJECT INSPECTOR (SYSTEM TELEMETRY & RUNNABLE CODE)
          ========================================================================= */}
      <AnimatePresence>
        {selectedProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProjectModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-black/10 p-6 sm:p-8 text-black"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black transition-transform hover:scale-105 active:scale-95"
                aria-label="Fechar modal"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-[#5E0ED7]/10 text-[#5E0ED7]">
                  {selectedProjectModal.badge}
                </span>
                <span className="text-xs font-mono text-black/50">
                  {selectedProjectModal.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-sans text-black">
                {selectedProjectModal.title}
              </h2>
              <p className="text-sm font-medium text-black/60 mt-1">
                {selectedProjectModal.subtitle}
              </p>

              {/* Video Player Box */}
              <div className="mt-6 w-full rounded-2xl overflow-hidden aspect-[16/9] bg-black relative shadow-inner">
                <video
                  src={selectedProjectModal.videoUrl}
                  poster={selectedProjectModal.posterUrl}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Technical Overview & Metrics */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedProjectModal.metrics.map((m) => (
                  <div key={m.label} className="p-4 rounded-xl bg-[#F8F7F4] border border-black/5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-black/50 block">
                      {m.label}
                    </span>
                    <span className="text-lg font-bold font-mono text-[#5E0ED7] mt-1 block">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Description & Architecture Details */}
              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#5E0ED7] font-semibold mb-2">
                  [ ARQUITETURA & VIBE CODING ]
                </h4>
                <p className="text-sm text-black/80 leading-relaxed">
                  {selectedProjectModal.description}
                </p>
                <p className="text-sm text-black/60 leading-relaxed mt-2">
                  {selectedProjectModal.architecture}
                </p>
              </div>

              {/* Runnable Code Viewer */}
              <div className="mt-6">
                <div className="flex items-center justify-between pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-black/60 flex items-center gap-1.5">
                    <Terminal size={14} />
                    KERNEL IMPLEMENTATION
                  </span>
                  <span className="text-[10px] font-mono text-black/40">TYPESCRIPT / GLSL</span>
                </div>
                <pre className="p-4 rounded-xl bg-[#141C22] text-[#EEF4F6] font-mono text-xs overflow-x-auto leading-relaxed">
                  <code>{selectedProjectModal.codeSnippet}</code>
                </pre>
              </div>

              {/* Tech Stack Chips */}
              <div className="mt-6 pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedProjectModal.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono text-black font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/brunakury"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full border border-black/20 hover:bg-black/5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <GithubIcon size={14} />
                    VER NO GITHUB
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MOBILE MENU OVERLAY (PROMPT 1 SPECIFICATION 1:1)
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top row: same logo (left) and 36px round black close button with X (right) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5E0ED7]" />
                </div>
                <span className="text-sm font-semibold tracking-widest uppercase text-black">
                  BRUNA KURY
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white transition-transform active:scale-95"
                aria-label="Fechar Menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Middle: Vertical list of 4 nav links at text-3xl, font-semibold, tracking-widest, uppercase */}
            <div className="flex flex-col gap-8 mt-16">
              {[
                { label: 'WORK', href: '#projects' },
                { label: 'EXPERTISE', href: '#statement' },
                { label: 'VIBE CODING', href: '#projects' },
                { label: 'FEEDBACK', href: '#brief' }
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="text-3xl font-semibold tracking-widest uppercase text-black hover:text-[#5E0ED7] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Bottom: Social connections & Work With Us CTA */}
            <div className="mt-auto pt-8 border-t border-black/10 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/brunakury"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-black"
                >
                  <GithubIcon size={16} />
                  GITHUB
                </a>
                <span className="text-black/30">/</span>
                <a
                  href="https://linkedin.com/in/brunakury"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#5E0ED7]"
                >
                  <LinkedinIcon size={16} />
                  LINKEDIN
                </a>
              </div>

              <a
                href="#brief"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-between text-xl font-semibold tracking-wide text-[#5E0ED7] hover:text-[#4D0AB5] transition-colors"
              >
                <span>WORK WITH US</span>
                <ArrowUpRight size={24} />
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
