import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SEO from '../components/SEO/SEO';

const projects = [
  {
    title: 'IDRECS',
    subtitle: 'Enterprise Data Processing & Recovery',
    description: 'Engineered a mission-critical data processing engine with a fault-tolerant recovery mechanism ensuring zero state loss during service interruptions. Specialized in high-throughput system architecture and concurrent processing pipelines.',
    tech: ['Python', 'Multithreading', 'System Design', 'Enterprise Architecture'],
    links: {},
    icon: '⚙️',
    features: [
      'Engineered a fault-tolerant recovery system ensuring transaction integrity.',
      'Optimized backend services for high-concurrency using Python multithreading.',
      'Reduced system response latency by 3x through algorithmic optimization.',
      'Implemented robust business logic modules for complex enterprise reporting.'
    ]
  },
  {
    title: 'ISV Signature Matching',
    subtitle: 'NatWest Group | Banking Microservice',
    description: 'Developed a high-availability microservice for automated signature verification within NatWest Group\'s retail banking infrastructure. Focused on extreme reliability, security compliance, and minimal latency.',
    tech: ['Python', 'FastAPI', 'Azure', 'Microservices', 'System Design'],
    links: {},
    icon: '🏦',
    features: [
      'Architected a resilient microservice handling core banking operations.',
      'Automated legacy verification workflows, reducing processing time by 40%.',
      'Implemented enterprise-grade logging, security, and financial compliance.',
      'Optimized data pipelines for real-time validation and error handling.'
    ]
  },
  {
    title: 'JobSleuth',
    subtitle: 'High-Throughput Data Aggregator',
    description: 'A distributed data aggregation platform designed for massive scale. Leveraging asynchronous parallel processing, it ingests and processes thousands of records daily from disparate sources into a unified, high-performance interface.',
    tech: ['Python', 'FastAPI', 'Asynchronous I/O', 'PostgreSQL', 'React'],
    links: { github: 'https://github.com/anjanayraina/JobSleuth', live: 'https://job-sleuth.onrender.com/' },
    icon: '🔍',
    features: [
      'Built concurrent data pipelines reducing collection time by 90%.',
      'Engineered a scalable FastAPI backend with asynchronous task processing.',
      'Developed a responsive React dashboard for real-time data visualization.',
      'Optimized database queries for millisecond-range filtering of 100k+ records.'
    ]
  },
  {
    title: 'Mon Finance AI',
    subtitle: 'AI-Powered Backend Architecture',
    description: 'A modular backend ecosystem bridging financial protocols. Features a high-performance FastAPI architecture, an intelligent data processing layer, and real-time monitoring. Designed for scalability and extensibility in high-stakes environments.',
    tech: ['FastAPI', 'MongoDB', 'Redis', 'Python', 'LLMs', 'React'],
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
      'Asynchronous microservice architecture for real-time intelligence.',
      'Deployed intelligent decision systems using LLM-powered data analysis.',
      'Built custom integration layers for diverse financial and API protocols.',
      'Hybrid engine supporting complex cross-platform execution logic.'
    ]
  },
  {
    title: 'PerpetualVault',
    subtitle: 'Fault-Tolerant Systems Research',
    description: 'A deep-dive into secure system architecture following the ERC-4626 standard. Built a robust, fault-tolerant oracle system that aggregates multi-source price feeds to ensure system integrity and prevent manipulation.',
    tech: ['Solidity', 'Foundry', 'System Security', 'ERC-4626'],
    links: { github: 'https://github.com/anjanayraina/PerpetualVault' },
    icon: '📈',
    features: [
      'Architected a secure vault standard for efficient resource management.',
      'Built a redundant oracle system with multi-layer failure protection.',
      'Implemented automated balance management and invariant protection.',
      'Designed gas-optimized logic for high-frequency state transitions.'
    ]
  },
  {
    title: 'Independent Security Research',
    subtitle: 'Systemic Vulnerability Analysis',
    description: 'Specialized in identifying critical systemic risks and logic flaws in distributed architectures. My work involves deep analysis of mathematical invariants and economic game theory to prevent catastrophic system failure.',
    tech: ['Security Engineering', 'Formal Verification', 'Foundry', 'Distributed Systems'],
    links: { live: 'https://drive.google.com/drive/folders/18StaXAN5Odo6mds5dGxj11s9YiRF-m-m?usp=sharing' },
    icon: '🛡️',
    features: [
      'Uncovered 20+ critical-severity vulnerabilities in complex systems.',
      'Ranked among top global security researchers on competitive platforms.',
      'Conducted deep-dive security reviews for high-traffic infrastructure.',
      'Specialized in logic-level exploit analysis and zero-day detection.'
    ]
  },
  {
    title: 'Middle Earth AI',
    subtitle: 'On-Chain Distributed Systems',
    description: 'A complex state-machine implementation on the Solana blockchain. Engineered the core programs using Rust, handling high-frequency state updates, asset minting, and cryptographic verification.',
    tech: ['Rust', 'Anchor', 'Solana', 'State Machine Design', 'AI'],
    links: { github: 'https://github.com/MiddleEarthAI/middle_earth_ai_program', live: 'https://www.middleearth.world/' },
    icon: '⚔️',
    features: [
      'Developed high-performance Rust programs for distributed state management.',
      'Implemented complex game logic as a verifiable on-chain state machine.',
      'Secured $100K+ TVL through rigorous testing and security audits.',
      'Integrated autonomous agents for dynamic state interactions.'
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
