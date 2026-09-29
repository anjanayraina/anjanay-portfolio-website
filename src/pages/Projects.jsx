import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SEO from '../components/SEO/SEO';

const projects = [
  {
    title: 'Mor Finance AI',
    subtitle: 'AI-Powered Trading & Web3 Intelligence | Jan 2025 – Present',
    description: 'A high-performance trading ecosystem and Web3 intelligence platform. Features asynchronous microservice architecture, spot/margin trading engines, automated debt discharge, and real-time arbitrage processing.',
    tech: ['FastAPI', 'Python', 'Web3', 'Microservices', 'MongoDB', 'Redis', 'LLMs'],
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
      'Architected the core Trading API and responsive Trading UI for spot and margin trading (99.9% uptime).',
      'Engineered a Debt Discharge Microservice using Flash and Collateralized Loans, achieving 0% slippage on atomic trade execution.',
      'Developed a Real-Time Arbitrage Engine processing 50+ events/sec that continuously monitors on-chain swap events with sub-millisecond latency.',
      'Integrated LLM-based agents within Developer Academy for personalized, real-time code debugging and curriculum guidance.',
      'Scaled an LLM Service to fetch market data, feed AI models, and generate signals, handling 10,000+ daily trades (60% accuracy improvement).'
    ]
  },
  {
    title: 'JobSleuth',
    subtitle: 'High-Throughput Automated Job Aggregator | Oct 2024 – Dec 2024',
    description: 'A distributed job aggregation and semantic ranking platform designed for high scale. Ingests and processes thousands of postings daily from disparate sources with asynchronous concurrency and AI-based filtering.',
    tech: ['Python', 'aiohttp', 'FastAPI', 'PostgreSQL', 'React', 'AsyncIO', 'CI/CD'],
    links: { github: 'https://github.com/anjanayraina/JobSleuth', live: 'https://job-sleuth.onrender.com/' },
    icon: '🔍',
    features: [
      'Deployed an automated job aggregation platform processing 5,000+ daily postings from 20+ sources.',
      'Achieved a 90% reduction in data ingestion time via highly concurrent, asynchronous aiohttp pipelines.',
      'Implemented AI-based semantic ranking algorithms to filter and prioritize job listings based on user skill sets and long-term career goals.',
      'Maintained consistent availability for 200+ registered users by building robust, automated CI/CD pipelines resulting in zero downtime.'
    ]
  },
  {
    title: 'IDRecs Platform & Microservices',
    subtitle: 'NatWest Group | Enterprise Banking Architecture',
    description: 'Enterprise data processing engine and validation microservices. Engineered fault-tolerant recovery, automated reconciliation, and non-blocking event-driven architectures.',
    tech: ['Python', 'asyncio', 'FastAPI', 'OCR Orchestrator', 'Microservices', 'Azure'],
    links: {},
    icon: '🏦',
    features: [
      'Engineered a fault-tolerant recovery mechanism with OCR orchestrator, automatically correcting and reprocessing 5,000+ stuck records monthly (99.9% SLA).',
      'Architected a Validation Service microservice to replace legacy workflows, reducing manual report validation time by 70%.',
      'Refactored core synchronous API endpoints into non-blocking event-driven architectures with Python asyncio, reducing latency by 10x.',
      'Implemented complex financial business logic modules (Rebate, Negative Ageing, Contra) for automated transaction reconciliation.'
    ]
  },
  {
    title: 'Independent Security Research & Zus Network',
    subtitle: 'Web3 Security, Auditing & Gas Optimization',
    description: 'Specialized in identifying critical systemic risks, mathematical invariant testing, and assembly optimizations for core blockchain and DeFi infrastructure.',
    tech: ['Solidity', 'Foundry', 'Slither', 'Go', 'Formal Verification', 'Echidna'],
    links: { live: 'https://drive.google.com/drive/folders/18StaXAN5Odo6mds5dGxj11s9YiRF-m-m?usp=sharing' },
    icon: '🛡️',
    features: [
      'Audited global Web3 protocols and resolved 30+ critical vulnerabilities across high-traffic DeFi architectures.',
      'Engineered an automated backend test suite in Go with custom fuzzing and regression checks, reducing manual QA testing time by 50%.',
      'Audited Solidity smart contracts for Zus Network using Foundry and Slither to identify and patch 5+ critical vulnerabilities.',
      'Implemented low-level static analysis and assembly optimizations, decreasing smart contract execution and gas costs by up to 60%.'
    ]
  },
  {
    title: 'LeadFlow AI',
    subtitle: 'AI-Powered Marketing SaaS',
    description: 'Architected a modular backend API using FastAPI to automate the end-to-end lead generation lifecycle. Features real-time SERP data extraction, AI-driven website audits, and competitive analysis using LLMs.',
    tech: ['FastAPI', 'MongoDB', 'React', 'LLMs', 'SerpApi', 'Pytest', 'Tailwind CSS'],
    links: { github: 'https://github.com/anjanayraina/lead_generator', live: 'https://lead-gen-ai-sooty.vercel.app/' },
    icon: '⚡',
    features: [
      'Engineered a high-performance scraping pipeline using SerpApi and BeautifulSoup.',
      'Integrated LLM-based intelligence for automated website audits and competitive battle plans.',
      'Built a responsive React dashboard with lead tracking and waitlist management.',
      'Implemented a robust data layer with MongoDB and verified with a 100% Pytest suite.'
    ]
  },
  {
    title: 'PerpetualVault',
    subtitle: 'DeFi Protocol & Secure Systems Research',
    description: 'A deep-dive into secure system architecture following the ERC-4626 standard. Built a robust, fault-tolerant oracle system that aggregates multi-source price feeds to ensure DeFi system integrity and prevent manipulation.',
    tech: ['Solidity', 'Foundry', 'Chainlink', 'ERC-4626'],
    links: { github: 'https://github.com/anjanayraina/PerpetualVault' },
    icon: '📈',
    features: [
      'Architected a decentralized vault following ERC-4626 standards.',
      'Built a redundant oracle system with multi-layer failure protection.',
      'Implemented automated balance management and invariant protection.',
      'Designed gas-optimized logic for high-frequency on-chain state transitions.'
    ]
  },
  {
    title: 'Middle Earth AI',
    subtitle: 'On-Chain Distributed Systems & Game Theory',
    description: 'A complex state-machine implementation on the Solana blockchain. Engineered the core programs using Rust, handling high-frequency state updates, asset minting, and cryptographic verification.',
    tech: ['Rust', 'Anchor', 'Solana', 'State Machine Design', 'AI'],
    links: { github: 'https://github.com/MiddleEarthAI/middle_earth_ai_program', live: 'https://www.middleearth.world/' },
    icon: '⚔️',
    features: [
      'Developed high-performance Rust programs for distributed state management.',
      'Implemented complex game logic as a verifiable on-chain state machine.',
      'Secured $100K+ TVL through rigorous testing and security audits.',
      'Integrated autonomous agents for dynamic on-chain interactions.'
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
