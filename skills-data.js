// Agent Grimoire — Skills Data
// Auto-generated: Feb 28, 2026
// Total: 22 Legendary encoded skills + 3 internal skills

window.SKILLS = [

  // ═══════════════════════════════════════
  //  AG-001: Ghost Hacker
  // ═══════════════════════════════════════
  {
    id: 'ghost-hacker',
    name: 'Ghost Hacker',
    trigger: 'ghost-hacker',
    description: 'Cipher Noir — pseudonymous white hat, 12 years, top-3 Cantina. Full Web3 security: EVM + Solana audit, exploit dev, PoC, bounty submission.',
    bundle: 'security',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['security', 'audit', 'bounty', 'exploit', 'solidity', 'solana', 'web3', 'hacker', 'cantina', 'immunefi'],
    detail: {
      what: 'Cipher Noir is a pseudonymous white hat with 12 years on EVM and Solana. Covers smart contract audit, exploit development, PoC writing, and bounty submission. No PoC = no submit.',
      why: 'Automated tools miss 60% of real vulnerabilities. Cipher Noir finds what Slither and Mythril cannot — logic flaws, oracle manipulation, and cross-contract attack chains.',
      useCases: ['Full smart contract audit (EVM or Solana)', 'Bug bounty hunting on Cantina/Immunefi/Code4rena', 'Exploit development and PoC writing', 'Reverse engineering deployed contracts', 'Security review before production deployment'],
      commands: ['/ghost — preflight setup', '/recon — scope and attack surface', '/exploit — PoC development', '/report — submission-ready report', '/evm — EVM patterns', '/solana — Solana patterns'],
    },
  },

  // ═══════════════════════════════════════
  //  AG-002: The Oracle
  // ═══════════════════════════════════════
  {
    id: 'the-oracle',
    name: 'The Oracle',
    trigger: 'the-oracle',
    description: 'Dr. Asha Patel — polymath researcher, 20 years, former RAND analyst. Four modes: deep research, Feynman learning, expert panel, strategic synthesis.',
    bundle: 'research',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['research', 'analysis', 'expert', 'synthesis', 'feynman', 'learning', 'advisory', 'panel'],
    detail: {
      what: 'Dr. Asha Patel is a polymath researcher with 20 years at RAND and MIT. Four modes: deep research (web + synthesis), Feynman learning (simplify anything), expert panel (6 independent specialists), and strategic synthesis.',
      why: 'Research done wrong wastes hours and produces shallow takes. The Oracle forces competing views, cites sources, and calls out uncertainty — the research persona that actually tells you what it does not know.',
      useCases: ['Deep research on any topic with source citations', 'Feynman simplification of complex concepts', 'Expert panel analysis from 6 independent perspectives', 'Strategic synthesis with action plans', 'Debate mode for stress-testing ideas'],
      commands: ['/oracle — full research brief', '/research — deep dive', '/feynman — simplify any concept', '/panel — expert panel', '/debate — steelman + challenge', '/synthesize — pattern extraction'],
    },
  },

  // ═══════════════════════════════════════
  //  AG-003: Blog Post Writer / Morgan Chen
  // ═══════════════════════════════════════
  {
    id: 'blog-post-writer',
    name: 'Blog Post Writer — Morgan Chen',
    trigger: 'blog-post-writer',
    description: 'Morgan Chen — veteran editor and ghostwriter, 25 years. Makes any draft sound like the author wrote it. 15-attribute voice fingerprinting + kill list + 100-point gate.',
    bundle: 'writing',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['blog', 'editing', 'ghostwriting', 'humanizer', 'voice', 'kill list', 'polish', 'editor', 'draft', 'writing', 'morgan'],
    detail: {
      what: 'Morgan Chen is a 25-year veteran editor and ghostwriter (CoinDesk, Wired, The Atlantic). Takes any draft and makes it sound like the author wrote every word. Uses 15-attribute voice fingerprinting and the 24-pattern AI kill list.',
      why: 'AI-assisted drafts have tells. Morgan exists to close that gap — the author reads it and thinks they wrote it.',
      useCases: ['Polishing a rough draft into publish-ready prose', 'Humanizing AI-generated text', 'Voice-matching to a specific author', 'Running the kill list before submission', 'Scoring a draft 0-100'],
      commands: ['/edit — full editorial pass', '/profile — build voice fingerprint', '/score — 100-point check', '/kill-list — flag AI tells', '/voice-match — rewrite to match author'],
    },
  },

  // ═══════════════════════════════════════
  //  AG-004: Social Media Monster
  // ═══════════════════════════════════════
  {
    id: 'social-media-monster',
    name: 'Social Media Monster',
    trigger: 'social-media-monster',
    description: 'Aria Linkwell — SMM strategist, growth hacker, community builder, persuasion expert. 20+ years. Creative content, SEO, analytics, psychological influence.',
    bundle: 'marketing-growth',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['social media', 'SMM', 'growth', 'community', 'content', 'engagement', 'analytics', 'persuasion'],
    detail: {
      what: 'Aria Linkwell is a Social Media Monster — 20 years, multilingual, expert in creative content, SEO, community management, advertising, and psychological influence. Encoded in Grimoire format.',
      why: 'Social media is won by whoever understands their audience best and ships the right content on the right platform at the right time.',
      useCases: ['Full content strategy for any platform', 'Platform-native copy writing', 'Growth analysis and next steps', 'Community engagement frameworks', 'Content calendar with 40/30/20/10 mix'],
      commands: ['/smm — full strategy brief', '/social — content generation', '/grow — growth plan', '/engage — community framework', '/calendar — content calendar', '/copy — high-conversion copy'],
    },
  },

  // ═══════════════════════════════════════
  //  AG-005: Senior Dev Review / Marcus Kane
  // ═══════════════════════════════════════
  {
    id: 'senior-dev-review',
    name: 'Senior Dev Review — Marcus Kane',
    trigger: 'senior-dev-review',
    description: 'Marcus Kane — senior production engineer, 20 years. Reviews code through what happens at 3 AM when things break. Tests reality, not the happy path.',
    bundle: 'development',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['code review', 'production', 'senior dev', 'reliability', 'error handling', 'security'],
    detail: {
      what: 'Marcus Kane is a 20-year production engineer who got paged at 3 AM because the circuit breaker was not implemented. Reviews code for: error handling, data consistency, performance limits, security surface, and cost calculation.',
      why: 'AI writes code that works. Senior engineers write code that survives. Tests test the happy path. Marcus tests reality.',
      useCases: ['Reviewing AI-generated code before production', 'Failure mode analysis', 'Cost calculation for cloud workloads', 'Security surface mapping', 'Production readiness checks'],
      commands: ['/review — full senior review', '/worst-case — what breaks and how bad', '/prod-ready — yes/no with blockers', '/security — auth, input, secrets', '/cost — DB, API, storage bill risk'],
    },
  },

  // ═══════════════════════════════════════
  //  AG-006 through AG-022
  // ═══════════════════════════════════════
  {
    id: 'dev-solidity',
    name: 'Dev Solidity — Rex Callahan',
    trigger: 'dev-solidity',
    description: 'Rex Callahan — EVM engineer, 18 years, ex-Consensys, Foundry expert. Full Solidity dev: patterns, gas optimization, DeFi integrations, security-first.',
    bundle: 'development',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['solidity', 'evm', 'ethereum', 'foundry', 'smart contract', 'defi', 'web3'],
    detail: {
      what: 'Rex Callahan is an 18-year EVM engineer (ex-Consensys). Full Solidity stack: patterns library (UUPS, ERC4626, Diamond), gas optimization, DeFi integrations, Foundry testing, and security-first development.',
      why: 'EVM development without security patterns is just building attack surface. Rex builds secure by default.',
      useCases: ['Solidity smart contract development', 'DeFi protocol integrations', 'Gas optimization', 'Security-first architecture', 'Foundry testing and deployment'],
      commands: ['/evm — pre-build ritual', '/build — implement with patterns', '/test — fuzz + fork tests', '/audit — Slither + manual review', '/deploy — Foundry deploy + verify'],
    },
  },

  {
    id: 'dev-solana',
    name: 'Dev Solana — Kai Nakamura',
    trigger: 'dev-solana',
    description: 'Kai Nakamura — Solana dev, 8 years, early contributor. Anchor, Pinocchio, security-first. PDA safety, account validation, CPI guards.',
    bundle: 'development',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['solana', 'anchor', 'pinocchio', 'rust', 'spl', 'web3'],
    detail: {
      what: 'Kai Nakamura is an 8-year Solana developer and early contributor. Full stack: Anchor for rapid dev, Pinocchio for zero-copy performance, SPL tokens, DeFi integrations, and security-first patterns.',
      why: 'Solana programs that skip PDA safety and account validation get drained. Kai builds secure by default.',
      useCases: ['Solana program development', 'Anchor or Pinocchio framework selection', 'DeFi integrations (Raydium, Orca, Jito)', 'Security audit of Solana programs', 'Performance optimization with zero-copy'],
      commands: ['/solana — architecture and framework selection', '/anchor — scaffold + implement', '/pinocchio — zero-copy optimization', '/test — Bankrun + integration', '/secure — PDA + account validation'],
    },
  },

  {
    id: 'bounty-hunting',
    name: 'Bounty Hunting — Zero Day',
    trigger: 'bounty-hunting',
    description: 'Zero Day — pseudonymous auditor, 10 years, top-10 Code4rena. Full audit methodology: pre-flight, recon, static analysis, exploit dev, submission.',
    bundle: 'security',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['bug bounty', 'audit', 'cantina', 'immunefi', 'code4rena', 'vulnerability'],
    detail: {
      what: 'Zero Day is a pseudonymous auditor with 10 years across Cantina, Immunefi, and Code4rena (top-10). Full methodology: pre-flight, recon, static analysis, manual review, exploit dev, and platform-specific submission.',
      why: 'Most auditors submit low-severity noise. Zero Day only submits with a working PoC and clear impact calculation.',
      useCases: ['Full smart contract audit for bounties', 'Platform-specific submission formatting', 'Exploit development and PoC writing', 'Scope analysis and threat modeling', 'Vulnerability classification and impact calculation'],
      commands: ['/preflight — tools + scope check', '/recon — architecture map + entry points', '/audit — static + manual review', '/exploit — PoC development', '/report — submission-ready report'],
    },
  },

  {
    id: 'advisory-council',
    name: 'Advisory Council — The Board',
    trigger: 'advisory-council',
    description: 'The Board — 6 independent experts, orchestrated by The Strategist. Each analyzes independently, then they conflict, challenge, and synthesize. Action matrices.',
    bundle: 'strategy',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['advisory', 'multi-perspective', 'council', 'panel', 'strategy', 'decision'],
    detail: {
      what: 'The Board is an ensemble of 6 independent domain experts, orchestrated by The Strategist (20 years, RAND/McKinsey). Each expert analyzes independently with zero cross-influence, then they conflict, challenge, and synthesize.',
      why: 'Single-perspective analysis misses blind spots. The Board forces competing views and records dissent.',
      useCases: ['Multi-perspective analysis of any decision', 'Business strategy evaluation', 'Technical architecture review', 'Pre-mortem analysis', 'Steelman + devil\'s advocate debates'],
      commands: ['/council — full council session', '/panel — custom expert panel', '/steelman — best argument each side', '/premortem — what kills this', '/matrix — Do/Defer/Drop priorities'],
    },
  },

  {
    id: 'humanizer',
    name: 'Humanizer — Cassian Reed',
    trigger: 'humanizer',
    description: 'Cassian Reed — editor, 15 years, Wired/NYT. Zero tolerance for AI tells. Runs 24-pattern kill list, rewrites every violation, Friend Test last.',
    bundle: 'writing',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['humanize', 'AI writing', 'kill list', 'editing', 'human', 'strip patterns'],
    detail: {
      what: 'Cassian Reed is a 15-year editor (Wired, NYT) and AI pattern hunter. Runs the 24-pattern kill list on any text: phrase-level, structural, opening/closing clichés, and adverb padding. Rewrites every violation.',
      why: 'AI writing has tells. Readers feel them even when they can\'t name them. Cassian kills every one.',
      useCases: ['Stripping AI patterns from any text', 'Running the 24-pattern kill list', 'Rewriting flagged violations', 'Friend Test pass/fail check', 'Pre-publish quality gate'],
      commands: ['/humanize — full kill list + rewrite', '/scan — flag all violations', '/rewrite — kill each flag', '/friend-test — would a friend think AI wrote it'],
    },
  },

  {
    id: 'marketing',
    name: 'Marketing — Dex Varga',
    trigger: 'marketing',
    description: 'Dex Varga — growth operator, 18 years, 50+ product launches. Full GTM: ICP, value prop, messaging, channel mix, recursive improvement loop.',
    bundle: 'marketing-growth',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['marketing', 'GTM', 'launch', 'copy', 'content strategy', 'growth'],
    detail: {
      what: 'Dex Varga is an 18-year growth operator who has launched 50+ products across B2B and crypto. Full GTM stack: ICP definition, messaging frameworks, channel mix, copywriting, and recursive improvement.',
      why: 'Most launches fail because messaging is wrong, not because the product is bad. Dex fixes messaging first.',
      useCases: ['Go-to-market strategy', 'Copywriting across formats', 'Content calendar with 40/30/20/10 mix', 'Launch plan with phases and KPIs', 'Recursive scoring and improvement'],
      commands: ['/gtm — full GTM plan', '/copy — hook + body + CTA', '/launch — phased plan + budget', '/score — evaluate and improve', '/strategy — pillar map + distribution'],
    },
  },

  {
    id: 'voice-clone',
    name: 'Voice Clone — Echo',
    trigger: 'voice-clone',
    description: 'Echo — forensic linguist, 15 years, 200+ founders. Extracts voice DNA from any source and produces a reusable voice-capture.md. Not style — DNA.',
    bundle: 'writing',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['voice clone', 'ghostwriting', 'voice capture', 'fingerprint', 'forensic', 'brand voice'],
    detail: {
      what: 'Echo is a forensic linguist turned ghostwriter. Extracts voice DNA from any source (X/Twitter, blogs, interviews, Discord) and builds a 15-attribute signature. Produces a reusable voice-capture.md.',
      why: 'Surface-level style matching fails. Echo extracts the DNA — vocabulary choices, rhythm, topic ratios, authentic markers — and reproduces it on demand.',
      useCases: ['Cloning any brand or person\'s writing voice', 'Co-marketing content in a partner\'s voice', 'Ghostwriting for founders', 'Building reusable voice fingerprints', 'Calibrating and testing voice accuracy'],
      commands: ['/clone — full voice capture', '/profile — 15-attribute signature', '/sample — write in voice + test', '/calibrate — compare + iterate', '/capture — save voice-capture.md'],
    },
  },

  {
    id: 'vibecoding',
    name: 'Vibecoding — The Architect',
    trigger: 'vibecoding',
    description: 'The Architect — 20-year systems engineer, AI-native builder. Full methodology: Research > Plan > Build > Test > Review > Deploy. Model routing built in.',
    bundle: 'development',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['vibecoding', 'coding', 'claude code', 'build', 'deploy', 'model routing', 'sub-agents'],
    detail: {
      what: 'The Architect is a 20-year senior systems engineer who transitioned to AI-native building. Full vibecoding methodology with model routing (Haiku=explore, Sonnet=plan, Opus=implement), sub-agent orchestration, and the mandatory review loop.',
      why: 'If you don\'t know what good code looks like, AI coding just builds messy apps faster. The Architect knows.',
      useCases: ['Starting any new coding project', 'Model routing for AI-assisted development', 'Sub-agent orchestration with skills', 'Code review and Ralph loops', 'Production deployment pipeline'],
      commands: ['/vibe — pre-build research + plan', '/plan — architecture + task breakdown', '/build — incremental + test-first', '/review — senior review + Ralph loop', '/route — model selection', '/deploy — staging to prod'],
    },
  },

  {
    id: 'media-gen',
    name: 'Media Gen — Pixel',
    trigger: 'media-gen',
    description: 'Pixel — AI creative director, 12 years, visual storytelling. NanoBanana, Midjourney, DALL-E 3, Veo 3, Kling. Prompt formula. Iterate 3x minimum.',
    bundle: 'creative',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['image', 'video', 'midjourney', 'dalle', 'generation', 'creative', 'thumbnail', 'visual'],
    detail: {
      what: 'Pixel is a 12-year AI creative director. Full media generation: NanoBanana (Gemini), Midjourney, DALL-E 3, Flux for images. Veo 3, Kling, RunwayML for video. Uses the MTG prompt formula.',
      why: 'Good prompts produce 10x better results than random descriptions. Pixel knows the formula.',
      useCases: ['Image generation for marketing and content', 'Video generation for demos and social', 'Brand-consistent visual assets', 'Thumbnail and ad creative design', 'Prompt engineering for any visual tool'],
      commands: ['/image — tool select + prompt + generate', '/video — script to visual', '/prompt — formula + negative prompt', '/brand-kit — color palette + visual language'],
    },
  },

  {
    id: 'social-crypto-legend',
    name: 'Social Crypto Legend — Anon',
    trigger: 'social-crypto-legend',
    description: 'Anon — crypto-native writer, 8 years on X, 15K+. Voice memo style, humanizer kill list, Rohit 3-level disclosure. Zero hype. Build in public.',
    bundle: 'writing',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['tweet', 'X', 'crypto', 'social', 'voice memo', 'build in public', 'thread'],
    detail: {
      what: 'Anon is a crypto-native writer with 8 years on X and 15K+ organic followers. Writes like voice memo transcriptions: raw, building-in-public, zero hype. Fuses humanizer kill list with Rohit 3-level progressive disclosure.',
      why: 'Marketing-speak kills crypto engagement. Anon writes like a builder, not a marketer.',
      useCases: ['Shipping updates on X', 'Contest and hackathon submissions', 'Build-in-public moments', 'Hook writing for threads', 'Platform-native crypto content'],
      commands: ['/tweet — hook + body + kill list + test', '/thread — hook + 3-7 posts + closer', '/hook — 3 stop-scroll variants', '/ship — what built + why + what next'],
    },
  },

  {
    id: 'simplicity-auditor',
    name: 'Simplicity Auditor — Jobs Mode',
    trigger: 'simplicity-auditor',
    description: 'Jobs Mode — radical simplicity, 25 years product thinking. YES/NO/DEFER on everything. Default bias: subtraction. Steve Jobs standards.',
    bundle: 'strategy',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['simplicity', 'audit', 'subtraction', 'overengineered', 'complexity', 'product'],
    detail: {
      what: 'Jobs Mode is 25 years of product thinking distilled into one rule: if in doubt, cut it. Audits products, systems, architecture, strategy, UX, and messaging for overengineering and premature abstraction.',
      why: 'Most products fail from addition, not subtraction. Jobs Mode enforces the opposite.',
      useCases: ['Product feature audit (used vs built)', 'UX flow simplification', 'Architecture layer audit', 'Strategy clarity check', 'Messaging jargon strip'],
      commands: ['/simplify — full audit all domains', '/audit-ux — step count + cognitive load', '/audit-arch — layers + abstractions', '/cut — what to remove + why + impact'],
    },
  },

  // ═══════════════════════════════════════
  //  MEGA-MERGES (6 new Legendary skills)
  // ═══════════════════════════════════════
  {
    id: 'illuminated-council',
    name: 'Illuminated Council — Ilmina',
    trigger: 'illuminated-council',
    description: 'Ilmina — master facilitator, 22 years. Six Thinking Hats + Socratic dialogue + expert panel synthesis. The thinking upgrade for decisions that matter.',
    bundle: 'strategy',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['thinking', 'six hats', 'socratic', 'decision', 'framework', 'council', 'structured'],
    detail: {
      what: 'Ilmina is a 22-year master facilitator trained in de Bono\'s Six Thinking Hats, Socratic dialogue, and multi-expert synthesis. Runs any problem through 6 hats, then cross-examines with a curated expert panel. Delivers verdicts with confidence scores.',
      why: 'Unstructured thinking produces unstructured decisions. Ilmina forces every angle before committing.',
      useCases: ['Structured decision-making for high-stakes choices', 'Six Hats analysis of any problem', 'Socratic questioning of assumptions', 'Expert panel with cross-examination', 'Confidence-scored verdicts with recorded dissent'],
      commands: ['/illuminate — full 6 hats + panel + verdict', '/hats — six hat sequence', '/council — custom expert panel', '/verdict — recommendation + confidence', '/socratic — assumption challenge'],
    },
  },

  {
    id: 'growth-engine',
    name: 'Growth Engine — Maxwell Kade',
    trigger: 'growth-engine',
    description: 'Maxwell Kade — growth strategist, 15 years, scaled 3 startups to $100M+. Hormozi offer design + Dan Koe content leverage + unit economics.',
    bundle: 'marketing-growth',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['growth', 'offer', 'pricing', 'funnel', 'hormozi', 'leverage', 'unit economics', 'scale'],
    detail: {
      what: 'Maxwell Kade is a 15-year growth strategist who scaled 3 startups to $100M+. Merges Hormozi\'s $100M offer design, Dan Koe\'s content leverage framework, CEO-level strategic thinking, and venture evaluation. Full stack: offer design, pricing psychology, funnel architecture, content systems, and unit economics.',
      why: 'Growth without unit economics is just spending money faster. Maxwell builds growth engines that actually compound.',
      useCases: ['Offer design with Hormozi framework', 'Funnel architecture (acquisition + retention + viral)', 'Content leverage system (1 content > 7 platforms)', 'Unit economics modeling (CAC, LTV, payback)', 'Venture readiness evaluation'],
      commands: ['/growth — full growth audit', '/offer — grand slam offer design', '/funnel — acquisition + retention loops', '/leverage — content repurpose system', '/unit-econ — CAC + LTV + payback'],
    },
  },

  {
    id: 'builder-prime',
    name: 'Builder Prime — Forge',
    trigger: 'builder-prime',
    description: 'Forge — full-stack AI-native builder, 20 years, 100+ products. React/Next.js, backend, Solidity, Vercel. From user story to production in one skill.',
    bundle: 'development',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['fullstack', 'react', 'nextjs', 'solidity', 'build', 'ship', 'deploy', 'vercel', 'typescript'],
    detail: {
      what: 'Forge is a 20-year full-stack builder who has shipped 100+ products. Complete stack: Next.js/React/TailwindCSS frontend, API/DB backend, Solidity smart contracts, Vercel deployment, and PM toolkit. Model routing built in.',
      why: 'Shipping a product requires more than code. Forge handles the full journey from user story to production deployment.',
      useCases: ['Full-stack web app development', 'Smart contract + frontend integration', 'Next.js app architecture', 'Production deployment pipeline', 'PM toolkit (user stories, PRDs, sprint plans)'],
      commands: ['/forge — full build cycle', '/stack — tech selection + architecture', '/ship — ship checklist + deploy', '/arch — system design + data flow', '/deploy — staging to production'],
    },
  },

  {
    id: 'growth-architect',
    name: 'Growth Architect — Vance Okafor',
    trigger: 'growth-architect',
    description: 'Vance Okafor — growth architect, 16 years. Marketing psychology (Cialdini, nudges) + brand building + multi-channel strategy. Flywheels, not funnels.',
    bundle: 'marketing-growth',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['brand', 'psychology', 'cialdini', 'flywheel', 'channels', 'positioning', 'growth system'],
    detail: {
      what: 'Vance Okafor is a 16-year growth architect. Merges marketing psychology (Cialdini, behavioral nudges), brand positioning, multi-channel strategy, and flywheel design. Thinks in systems, not campaigns.',
      why: 'Funnels are linear and leak. Flywheels compound. Vance designs the system, not the campaign.',
      useCases: ['Brand positioning and category design', 'Marketing psychology frameworks', 'Multi-channel growth strategy', 'Flywheel design (acquire > engage > monetize > advocate)', 'Community-first growth planning'],
      commands: ['/architect — full growth system', '/brand — positioning + narrative + visual identity', '/psych — Cialdini + behavioral nudges', '/channels — organic vs paid vs community', '/flywheel — 4-loop design + metrics'],
    },
  },

  {
    id: 'signal-maker',
    name: 'Signal Maker — Priya Shah',
    trigger: 'signal-maker',
    description: 'Priya Shah — product strategist, 14 years, ex-Stripe, ex-Notion. PMF signals, PRDs, content systems, copywriting frameworks, email sequences.',
    bundle: 'strategy',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['product', 'PRD', 'content', 'email', 'copy', 'signal', 'PMF', 'strategy'],
    detail: {
      what: 'Priya Shah is a 14-year product strategist (ex-Stripe, ex-Notion). Finds PMF signals, writes PRDs, builds content pillar architectures, applies copywriting frameworks (PAS, BAB, AIDA), and designs email sequences.',
      why: 'Signal over noise. Most teams build features nobody wants because they skip user research. Priya finds the signal first.',
      useCases: ['Finding product-market fit signals', 'Writing PRDs with clear metrics', 'Building content pillar architecture', 'Copywriting with proven frameworks', 'Email sequence design (welcome, nurture, launch, win-back)'],
      commands: ['/signal — user research + PMF signals', '/prd — problem + solution + metrics + scope', '/content — pillar architecture + editorial calendar', '/email — sequence design', '/copy — framework selection + hook + body + CTA'],
    },
  },

  {
    id: 'phantom-red-team',
    name: 'Phantom Red Team',
    trigger: 'phantom-red-team',
    description: 'Phantom — offensive security specialist, 14 years, former NSA red team. Advanced vulnerability chaining, flash loan attacks, MEV, governance exploits.',
    bundle: 'security',
    tier: 'legendary',
    grimoire_ready: true,
    source: 'aria-custom',
    status: 'active',
    keywords: ['red team', 'offensive', 'exploit chain', 'flash loan', 'MEV', 'governance', 'advanced'],
    detail: {
      what: 'Phantom is a 14-year offensive security specialist (former NSA red team). Specialized in: advanced vulnerability chaining, flash loan attack design, MEV extraction, storage collision exploits, and governance manipulation. Finds what automated tools miss.',
      why: 'Ghost Hacker finds individual vulnerabilities. Phantom chains them into critical exploits that automated tools will never find.',
      useCases: ['Advanced vulnerability chaining', 'Flash loan attack design and PoC', 'MEV extraction analysis', 'Storage collision exploits (proxy, diamond)', 'Governance attack surface mapping'],
      commands: ['/phantom — full threat profile + attack surface', '/chain — multi-vulnerability chaining', '/flashloan — cross-protocol attacks', '/mev — frontrun + backrun + profit calc', '/redteam — complete threat model'],
    },
  },

  // ═══════════════════════════════════════
  //  INTERNAL SKILLS (not for Grimoire sale)
  // ═══════════════════════════════════════
  {
    id: 'aria-evolve',
    name: 'Aria Evolve',
    trigger: 'aria-evolve',
    description: 'Aria\'s self-evolution system. Reads observations, clusters patterns, produces new skills or SOUL.md updates. Internal only.',
    bundle: 'internal',
    tier: 'legendary',
    grimoire_ready: false,
    source: 'aria-custom',
    status: 'active',
    keywords: ['evolve', 'self-improvement', 'internal'],
  },

  {
    id: 'card-art-grimoire',
    name: 'Card Art Grimoire',
    trigger: 'card-art-grimoire',
    description: 'Generate MTG-style card art for Agent Grimoire tier cards. Internal art system.',
    bundle: 'internal',
    tier: 'advanced',
    grimoire_ready: false,
    source: 'aria-custom',
    status: 'active',
    keywords: ['card art', 'MTG', 'grimoire', 'illustration'],
  },

  {
    id: 'yearn-voice',
    name: 'Yearn Voice',
    trigger: 'yearn-voice',
    description: 'Write in Yearn Finance\'s voice. Senior-engineer style: direct, specific, technically fluent, zero hype. For Octant co-marketing.',
    bundle: 'internal',
    tier: 'advanced',
    grimoire_ready: false,
    source: 'aria-custom',
    status: 'active',
    keywords: ['yearn', 'defi', 'voice', 'octant'],
  },
];
