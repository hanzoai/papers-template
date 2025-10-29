export type Brand = 'hanzo' | 'zoo' | 'zen' | 'lux'

export interface BrandConfig {
  name: string
  fullName: string
  description: string
  website: string
  github: string
  primaryColor: string
  secondaryColor: string
  accentColor: string
  logo: string
  papers: PaperConfig[]
}

export interface PaperConfig {
  id: string
  title: string
  subtitle: string
  abstract: string
  pdfUrl: string
  latexUrl?: string
  githubUrl: string
  date: string
  authors: string[]
  tags: string[]
  relatedLinks?: {
    label: string
    url: string
  }[]
}

export const brandConfigs: Record<Brand, BrandConfig> = {
  hanzo: {
    name: 'Hanzo AI',
    fullName: 'Hanzo AI Inc (Techstars \'17)',
    description: 'AI compute infrastructure and market mechanisms for decentralized AI workloads',
    website: 'https://hanzo.ai',
    github: 'https://github.com/hanzoai',
    primaryColor: '#FF6B35',
    secondaryColor: '#004E89',
    accentColor: '#00D9FF',
    logo: '/logos/hanzo-logo.svg',
    papers: [
      {
        id: 'hmm',
        title: 'Hamiltonian Market Maker (HMM)',
        subtitle: 'Oracle-Minimal Pricing for AI Compute Marketplace',
        abstract: 'A novel AMM design for heterogeneous compute resources with provably-stable pricing via Hamiltonian invariants. Enables oracle-minimal economic settlement for AI inference and training workloads.',
        pdfUrl: 'https://github.com/hanzoai/papers/raw/main/hanzo-hmm.pdf',
        latexUrl: 'https://github.com/hanzoai/papers/blob/main/hanzo-hmm.tex',
        githubUrl: 'https://github.com/hanzoai/papers',
        date: '2024-10-28',
        authors: ['Hanzo AI Research'],
        tags: ['Economics', 'DeFi', 'Compute Marketplace', 'AMM'],
        relatedLinks: [
          { label: 'HIP-004 Specification', url: 'https://github.com/hanzoai/papers/blob/main/hips/HIP-004-hmm.md' },
          { label: 'Hanzo Network', url: 'https://hanzo.ai' },
        ],
      },
      {
        id: 'aso',
        title: 'Active Semantic Optimization (ASO)',
        subtitle: 'Training-Free GRPO for Single-Agent Adaptation',
        abstract: 'Training-free adaptation via Bayesian product-of-experts (PoE) decoding with token/embedding-level experiential priors. Foundation for Zoo\'s DSO multi-agent coordination.',
        pdfUrl: 'https://github.com/hanzoai/papers/raw/main/hanzo-aso.pdf',
        latexUrl: 'https://github.com/hanzoai/papers/blob/main/hanzo-aso.tex',
        githubUrl: 'https://github.com/hanzoai/papers',
        date: '2024-06-15',
        authors: ['Hanzo AI Research'],
        tags: ['Machine Learning', 'LLMs', 'Active Learning', 'GRPO'],
        relatedLinks: [
          { label: 'HIP-002 Specification', url: 'https://github.com/hanzoai/papers/blob/main/hips/HIP-002-aso.md' },
          { label: 'Zoo DSO (builds on ASO)', url: 'https://github.com/zooai/papers' },
        ],
      },
      {
        id: 'network',
        title: 'Hanzo Network Whitepaper',
        subtitle: 'L1 Blockchain for Decentralized AI Compute',
        abstract: 'Comprehensive whitepaper describing Hanzo Network\'s Layer-1 blockchain infrastructure, integrating HMM for compute pricing and supporting PoAI consensus for quality verification.',
        pdfUrl: 'https://github.com/hanzoai/papers/raw/main/hanzo-network-whitepaper.pdf',
        latexUrl: 'https://github.com/hanzoai/papers/blob/main/hanzo-network-whitepaper.tex',
        githubUrl: 'https://github.com/hanzoai/papers',
        date: '2024-10-20',
        authors: ['Hanzo AI Team'],
        tags: ['Blockchain', 'Infrastructure', 'Network', 'Architecture'],
        relatedLinks: [
          { label: 'Hanzo Network', url: 'https://hanzo.ai' },
          { label: 'GitHub', url: 'https://github.com/hanzoai' },
        ],
      },
    ],
  },
  zoo: {
    name: 'Zoo Labs',
    fullName: 'Zoo Labs Foundation (501c3)',
    description: 'Democratizing AI through decentralized training and open source frontier models',
    website: 'https://zoo.ngo',
    github: 'https://github.com/zooai',
    primaryColor: '#2ECC71',
    secondaryColor: '#27AE60',
    accentColor: '#F39C12',
    logo: '/logos/zoo-logo.svg',
    papers: [
      {
        id: 'dso',
        title: 'Decentralized Semantic Optimization (DSO)',
        subtitle: 'Byzantine-Robust Prior Aggregation for Collective Intelligence',
        abstract: 'A decentralized protocol for aggregating AI model priors with Byzantine fault tolerance, enabling collective intelligence at network scale. Builds on Hanzo\'s ASO with multi-agent coordination.',
        pdfUrl: 'https://github.com/zooai/papers/raw/main/zoo-dso.pdf',
        latexUrl: 'https://github.com/zooai/papers/blob/main/zoo-dso.tex',
        githubUrl: 'https://github.com/zooai/papers',
        date: '2024-10-28',
        authors: ['Zoo Labs Foundation'],
        tags: ['Machine Learning', 'Multi-Agent', 'Byzantine Fault Tolerance', 'Collective Intelligence'],
        relatedLinks: [
          { label: 'ZIP-001 Specification', url: 'https://github.com/zooai/zips/blob/main/ZIP-001-dso.md' },
          { label: 'Hanzo ASO (foundation)', url: 'https://github.com/hanzoai/papers' },
        ],
      },
      {
        id: 'genesis',
        title: 'Zoo Labs Genesis Paper',
        subtitle: 'AI-Powered Asset-Backed NFTs and Agent Wallets (October 2021)',
        abstract: 'The foundational whitepaper establishing Zoo Labs as one of the first AI-powered NFT ecosystems. Each NFT represents an autonomous AI agent with its own crypto wallet. Launched October 2021 as 100% airdrop to CryptoZoo users.',
        pdfUrl: 'https://github.com/zooai/papers/raw/main/zoo-genesis-whitepaper.md',
        githubUrl: 'https://github.com/zooai/papers',
        date: '2021-10-01',
        authors: ['Zoo Labs Foundation'],
        tags: ['NFT', 'AI Agents', 'Game-Fi', 'Genesis', 'Historical'],
        relatedLinks: [
          { label: 'ZIP-003 Documentation', url: 'https://github.com/zooai/zips/blob/main/ZIP-003-genesis.md' },
          { label: 'Zoo Website', url: 'https://zoo.ngo' },
          { label: 'AI Chat', url: 'https://ai.zoo.ngo' },
        ],
      },
    ],
  },
  zen: {
    name: 'Zen AI',
    fullName: 'Zen AI Model Family',
    description: 'Ultra-efficient frontier language models (600M-480B parameters) co-developed by Hanzo AI and Zoo Labs',
    website: 'https://zenlm.ai',
    github: 'https://github.com/zenlm',
    primaryColor: '#9B59B6',
    secondaryColor: '#8E44AD',
    accentColor: '#E74C3C',
    logo: '/logos/zen-logo.svg',
    papers: [
      {
        id: 'whitepaper',
        title: 'Zen AI Whitepaper v1.0.1',
        subtitle: 'Ultra-Efficient Frontier Language Models',
        abstract: 'Complete Zen ecosystem documentation covering 600M to 480B parameter models with 95% reduction in energy consumption, RAIS achieving 94% effectiveness, and edge deployment capabilities.',
        pdfUrl: 'https://github.com/zenlm/papers/raw/main/ZEN_WHITEPAPER_2025.md',
        githubUrl: 'https://github.com/zenlm/papers',
        date: '2025-01-15',
        authors: ['Hanzo AI Inc', 'Zoo Labs Foundation'],
        tags: ['LLMs', 'Efficiency', 'Edge Computing', 'Model Architecture'],
        relatedLinks: [
          { label: 'Model Hub', url: 'https://huggingface.co/zenlm' },
          { label: 'Documentation', url: 'https://zenlm.ai' },
        ],
      },
    ],
  },
  lux: {
    name: 'Lux',
    fullName: 'Lux Network',
    description: 'High-performance blockchain with multi-consensus architecture and post-quantum security',
    website: 'https://lux.network',
    github: 'https://github.com/luxfi',
    primaryColor: '#3498DB',
    secondaryColor: '#2980B9',
    accentColor: '#E67E22',
    logo: '/logos/lux-logo.svg',
    papers: [
      // Lux papers will be added when available
    ],
  },
}

// Get brand from environment or default to hanzo
export function getBrand(): Brand {
  const brand = process.env.NEXT_PUBLIC_BRAND?.toLowerCase()
  if (brand && brand in brandConfigs) {
    return brand as Brand
  }
  return 'hanzo'
}

export function getBrandConfig(brand?: Brand): BrandConfig {
  const b = brand || getBrand()
  return brandConfigs[b]
}
