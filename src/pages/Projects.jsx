import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SEO from '../components/SEO/SEO';

const projects = [
  {
    title: 'Mon Finance AI',
    subtitle: 'AI-Driven Trading Ecosystem',
    description: 'A modular, AI-powered trading solution bridging DeFi and CeX. Features a high-performance FastAPI backend, an LLM-powered intelligence layer for market signals, and a real-time React dashboard with AI-chat assistance. Designed to democratize institutional-grade trading strategies using generative AI.',
    tech: ['FastAPI', 'MongoDB', 'React', 'LLMs', 'Binance API', 'Uniswap', 'EIP-712'],
    links: {
      github: 'https://github.com/Mor-Fin-AI',
      live: 'https://dashboard.morfinance.ai/',
      repos: [
        { name: 'API', url: 'https://github.com/Mor-Fin-AI/mon-finance-ai-v1-backend' },
        { name: 'UI', url: 'https://github.com/Mor-Fin-AI/mon-finance-ui' },
        { name: 'Workers', url: 'https://github.com/Mor-Fin-AI/mon-finance-ai-v1-backend-workers' }
      ]
    },
    icon: '🤖',
    features: [
      'Asynchronous microservice architecture for real-time market insights.',
      'AI-driven decision making using LLMs for trade recommendations.',
      'Non-custodial security via EIP-712 typed data signing.',
      'Hybrid trading engine supporting both Binance and Uniswap protocols.'
    ]
  },
  {
    title: 'JobSleuth',
    subtitle: 'Automated Job Aggregation',
    description: 'A high-throughput data aggregation platform designed to streamline the job search process. By leveraging asynchronous parallel processing, it scrapes and consolidates over 5,000 daily job postings from disparate sources into a unified, searchable interface.',
    tech: ['Python', 'FastAPI', 'Telethon', 'aiohttp', 'React'],
    links: { github: 'https://github.com/anjanayraina/JobSleuth', live: 'https://job-sleuth.onrender.com/' },
    icon: '🔍',
    features: [
      'Built concurrent Python pipelines reducing data collection time by 90%.',
      'Aggregated and processed 5,000+ daily job postings from multiple sources.',
      'Deployed a scalable FastAPI backend with asynchronous task processing.',
      'Developed a modern React dashboard for real-time job filtering.'
    ]
  },
  {
    title: 'Middle Earth AI',
    subtitle: 'On-Chain Strategy Game',
    description: 'A fully on-chain strategy game built on the Solana blockchain. I built the core Rust smart contracts using the Anchor framework, handling complex game state transitions, asset minting, and cryptographic verifications for fair gameplay.',
    tech: ['Rust', 'Anchor', 'Solana', 'TypeScript', 'AI'],
    links: { github: 'https://github.com/MiddleEarthAI/middle_earth_ai_program', live: 'https://www.middleearth.world/' },
    icon: '⚔️',
    features: [
      'Developed Rust-based Solana programs using Anchor framework.',
      'Implemented on-chain game state, asset minting, and complex battle logic.',
      'Secured $100K+ Total Value Locked (TVL) during peak gameplay.',
      'Integrated AI agents for dynamic on-chain strategy execution.'
    ]
  },
  {
    title: 'PerpetualVault',
    subtitle: 'DeFi Liquidity Protocol',
    description: 'A sophisticated decentralized perpetuals trading protocol built on the ERC-4626 standard. The architecture focuses on capital efficiency and security, featuring a custom fault-tolerant oracle system that aggregates price feeds to prevent manipulation.',
    tech: ['Solidity', 'Foundry', 'Chainlink', 'ERC-4626'],
    links: { github: 'https://github.com/anjanayraina/PerpetualVault' },
    icon: '📈',
    features: [
      'Architected a decentralized perpetuals protocol following ERC-4626 standard.',
      'Built a robust fault-tolerant double oracle system with Chainlink integration.',
      'Implemented automated yield-bearing strategies for vault depositors.',
      'Designed gas-optimized smart contracts for cross-margin trading.'
    ]
  },
  {
    title: 'Independent Security Research',
    subtitle: 'Smart Contract Auditing',
    description: 'As an independent security researcher, I specialize in identifying critical vulnerabilities in complex DeFi protocols. My work typically involves deep analysis of economic logic, reentrancy vectors, and mathematical invariants to protect user funds.',
    tech: ['Solidity', 'Echidna', 'Slither', 'Foundry', 'DeFi Security'],
    links: { live: 'https://drive.google.com/drive/folders/18StaXAN5Odo6mds5dGxj11s9YiRF-m-m?usp=sharing' },
    icon: '🛡️',
    features: [
      'Uncovered 20+ critical severity vulnerabilities across major protocols.',
      'Ranked among top auditors on competitive platforms (Code4rena, Sherlock).',
      'Conducted comprehensive security reviews for AMMs, lending markets, and bridges.',
      'Specialized in economic exploit analysis and formal verification.'
    ]
  },
  {
    title: 'IDRECS',
    subtitle: 'Enterprise Data Processing',
    description: 'Engineered a fault-tolerant recovery mechanism to ensure zero state loss during service interruptions for critical data processing jobs. Optimized API endpoints for concurrent HTTP requests using Python’s multithreading, decreasing response times by 3x.',
    tech: ['Python', 'Multithreading', 'API Optimization', 'Enterprise Architecture'],
    links: {},
    icon: '⚙️',
    features: [
      'Implemented complex business logic modules (Rebate, Negative Ageing, Contra).',
      'Engineered a fault-tolerant recovery mechanism ensuring zero state loss.',
      'Optimized API endpoints for concurrent HTTP requests using Python multithreading.',
      'Decreased response times by 3x and significantly boosted throughput.'
    ]
  },
  {
    title: 'ISV Signature Matching',
    subtitle: 'NatWest Group Banking Service',
    description: 'High-availability microservice for automated signature verification in retail banking systems, reducing latency by 40%.',
    tech: ['Python', 'Azure', 'FastAPI', 'Microservices'],
    links: {},
    icon: '⚖️',
    features: [
      'Engineered a high-availability microservice for retail banking systems.',
      'Automated core signature verification processes for NatWest Group.',
      'Reduced system latency by 40% through optimized processing pipelines.',
      'Implemented enterprise-grade security and logging for financial compliance.'
    ]
  }
];


const Projects = () => {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="projects-page container section animate-fade-in">
      <SEO
        title="Projects & Portfolio"
        description="Explore Anjanay Raina's portfolio of high-performance backend systems, AI trading ecosystems, and secure DeFi protocols."
        url="/projects"
      />
      <div className="reveal" style={{ marginBottom: '6rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '4.5rem', fontWeight: 800, letterSpacing: '-0.05em', marginBottom: '1.5rem' }}>
          Built with precision.
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: '1.6' }}>
          Select projects where I've led architecture, security, or implementation from zero to production.
        </p>
      </div>

      <div className="project-grid-enhanced stagger-reveal">
        {projects.map((project, index) => (
          <div key={index} className="project-item-group reveal">
            <div className="project-card-v2 glass glow-hover">
              <div className="project-header">
                <div className="project-icon-box">
                  {project.icon}
                </div>
                <div className="project-links-v2">
                  {project.links.github && <a href={project.links.github} target="_blank" className="link-icon">GH</a>}
                  {project.links.live && <a href={project.links.live} target="_blank" className="link-icon">↗</a>}
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title-v2">{project.title}</h3>
                <div className="project-subtitle-v2">{project.subtitle}</div>
                <p className="project-desc-v2">{project.description}</p>

                {project.features && (
                  <ul className="project-features-v2">
                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                )}

                {project.links.repos && (
                  <div className="project-repos-v2">
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Repositories:</span>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                      {project.links.repos.map(repo => (
                        <a key={repo.name} href={repo.url} target="_blank" className="repo-link">
                          {repo.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-stack-v2">
                  {project.tech.map(t => <span key={t} className="tech-badge-v2">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .project-grid-enhanced {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2.5rem;
        }

        .project-card-v2 {
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--border-subtle);
          background: var(--bg-card);
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .project-card-v2:hover {
          background: var(--bg-tertiary);
          transform: translateY(-8px);
          border-color: var(--accent-blue);
          box-shadow: 0 0 30px var(--accent-soft);
        }


        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2.5rem;
        }

        .project-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          border: 1px solid var(--border-subtle);
        }

        .link-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border-subtle);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          margin-left: 0.5rem;
          color: var(--text-tertiary);
          transition: all 0.2s ease;
        }

        .link-icon:hover {
          color: var(--text-primary);
          border-color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .project-title-v2 {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .project-subtitle-v2 {
          color: var(--accent-blue);
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .project-desc-v2 {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2.5rem;
          font-size: 1rem;
        }

        .project-stack-v2 {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tech-badge-v2 {
          font-size: 0.75rem;
          padding: 0.35rem 0.75rem;
          border-radius: 8px;
          background: var(--bg-tertiary);
          color: var(--text-tertiary);
          font-weight: 500;
          border: 1px solid var(--border-subtle);
        }

        .project-features-v2 {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
        }

        .project-features-v2 li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          padding-left: 1.25rem;
          position: relative;
        }

        .project-features-v2 li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-blue);
        }

        .project-repos-v2 {
          margin-bottom: 2rem;
          padding: 1rem;
          background: var(--accent-soft);
          border-radius: 12px;
          border: 1px solid var(--border-medium);
        }

        .repo-link {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          background: var(--bg-tertiary);
          transition: all 0.2s ease;
        }

        .repo-link:hover {
          background: var(--accent-blue);
          color: white;
        }

        @media (max-width: 768px) {
          .project-grid-enhanced {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
