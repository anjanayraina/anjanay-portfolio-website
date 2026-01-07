import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    title: 'JobSleuth',
    subtitle: 'Automated Job Aggregation Platform',
    description: 'Architected and deployed a full-stack platform that processes 5,000+ job postings daily from 10+ real-time sources.',
    tech: ['Python', 'FastAPI', 'Telethon', 'aiohttp', 'React', 'Render'],
    links: { github: 'https://github.com/anjanayraina/JobSleuth', live: 'https://job-sleuth.onrender.com/' },
    icon: '🔍'
  },
  {
    title: 'Middle Earth AI',
    subtitle: 'Distributed Strategy Game',
    description: 'Architected a system for a distributed game serving over 500+ players, with a core engine in JavaScript and on-chain programs in Rust.',
    tech: ['Rust', 'Python', 'JavaScript', 'NumPy', 'Solana'],
    links: { github: 'https://github.com/MiddleEarthAI/middle_earth_ai_program', live: 'https://www.middleearth.world/' },
    icon: '⚔️'
  },
  {
    title: 'Smart Contract Vaults',
    subtitle: 'DeFi Security Research',
    description: 'Developed advanced vault architectures for automated yield strategies while identifying and mitigating critical smart contract vulnerabilities.',
    tech: ['Solidity', 'Foundry', 'Hardhat', 'Ethers.js'],
    links: { github: '#' },
    icon: '🛡️'
  },
  {
    title: 'ISV Signature Matching',
    subtitle: 'NatWest Group Microservice',
    description: 'Architecting a high-availability microservice for automated signature verification in retail banking systems.',
    tech: ['Python', 'Azure', 'Microservices', 'FastAPI'],
    links: {},
    icon: '✍️'
  }
];

const Projects = () => {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="projects-page container section animate-fade-in">
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
          background: rgba(22, 22, 23, 0.4);
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .project-card-v2:hover {
          background: rgba(255, 255, 255, 0.02);
          transform: translateY(-8px);
          border-color: var(--accent-blue);
          box-shadow: 0 0 30px rgba(0, 122, 255, 0.2);
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
