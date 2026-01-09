import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    company: 'NatWest Group',
    role: 'Backend Developer',

    period: 'July 2024 – Present',
    details: 'Architected and built a new ISV Signature Matching microservice from the ground up, owning the complete lifecycle.',
    highlights: [
      'Implemented complex business logic modules (Rebate, Negative Ageing, Contra) and led code reviews.',
      'Engineered a fault-tolerant recovery mechanism to ensure zero state loss during service interruptions.',
      'Optimized API endpoints for concurrent HTTP requests using Python’s multithreading, decreasing response times by 3x.',
      'Architected and built a new ISV Signature Matching microservice from the ground up.'
    ],
    logo: '🏦'
  },
  {
    company: 'Freelance',
    role: 'Independent Smart-Contract Auditor',
    period: 'July 2023 – Present',
    details: 'Secured high-value DeFi protocols, ranking among top global auditors on Code4rena and Sherlock.',
    highlights: [
      'Identified and resolved 20+ critical vulnerabilities (reentrancy, economic exploits).',
      'Engineered gas optimizations reducing execution costs by up to 60%.',
      'Integrated Foundry fuzzer and Slither into client CI/CD pipelines.'
    ],
    logo: '🛡️'
  },
  {
    company: 'Zus Network',
    role: 'Smart Contract Auditor (Consultant)',
    period: 'April 2023 – June 2023',
    details: 'Security audit and backend optimization for core storage protocols prior to mainnet.',
    highlights: [
      'Resolved 10+ critical vulnerabilities ensuring a secure protocol deployment.',
      'Designed a comprehensive test suite in Go for complex scenario automation.',
      'Collaborated on secure coding standards and vulnerability monitoring.'
    ],
    logo: '🛰️'
  },
  {
    company: 'DLT Labs',
    role: 'Student Researcher',
    period: 'January 2023 – July 2023',
    details: 'Blockchain research focused on theft tracking. Resulted in an IEEE ANTS publication.',
    highlights: [
      'Developed a Two-Layered Blockchain Architecture using Hyperledger Fabric.',
      'Achieved 100x improvement in mobile theft resolution latency.',
      'Published research detailing system guarantees and performance benchmarks.'
    ],
    logo: '⛓️'
  }
];


const Experience = () => {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="experience-page container section animate-fade-in">
      <div className="reveal" style={{ marginBottom: '6rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '4.5rem', fontWeight: 800, letterSpacing: '-0.05em', marginBottom: '1.5rem', display: 'inline-block' }}>
          Real-world scale.
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: '1.6', marginBottom: '3rem' }}>
          Working with industry leaders to build highly reliable and performance-critical systems.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => window.open('https://drive.google.com/drive/folders/18StaXAN5Odo6mds5dGxj11s9YiRF-m-m?usp=sharing', '_blank')}>
            View Audit Reports 📑
          </button>
          <button className="btn-secondary" onClick={() => window.open('https://drive.google.com/file/d/1SQr6rotQZPPJK73bGZ55kMF3LolZy4Zl/view?usp=sharing', '_blank')}>
            Download Resume 📥
          </button>
        </div>
      </div>


      <div className="timeline-container stagger-reveal">
        {experiences.map((exp, idx) => (
          <div key={idx} className="timeline-item reveal">
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
            </div>

            <div className="timeline-content card glass shimmer">
              <div className="timeline-header">
                <div className="exp-logo">{exp.logo}</div>
                <div>
                  <h3 className="exp-company">{exp.company}</h3>
                  <div className="exp-role">{exp.role}</div>
                </div>
                <div className="exp-period">{exp.period}</div>
              </div>

              <p className="exp-details">{exp.details}</p>

              <ul className="exp-highlights">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="exp-highlight-item">
                    <span className="bullet"></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-container {
          position: relative;
          padding-left: 2rem;
          max-width: 900px;
        }

        .timeline-item {
          display: flex;
          gap: 3rem;
          margin-bottom: 4rem;
          position: relative;
        }

        .timeline-item:last-child .timeline-line {
          display: none;
        }

        .timeline-dot-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          left: -2.35rem;
          top: 0;
          height: 100%;
        }

        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent-blue);
          box-shadow: 0 0 10px var(--accent-blue);
          z-index: 2;
          margin-top: 2rem;
        }

        .timeline-line {
          width: 1px;
          flex: 1;
          background: linear-gradient(to bottom, var(--border-subtle) 0%, transparent 100%);
          margin-top: 0.5rem;
        }

        .timeline-content {
          padding: 3rem !important;
          border-radius: 32px !important;
          width: 100%;
        }

        .timeline-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .exp-logo {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .exp-company {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .exp-role {
          color: var(--accent-blue);
          font-weight: 600;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .exp-period {
          color: var(--text-tertiary);
          font-size: 0.875rem;
          font-weight: 500;
        }

        .exp-details {
          color: var(--text-primary);
          font-weight: 500;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .exp-highlights {
          list-style: none;
          padding: 0;
        }

        .exp-highlight-item {
          color: var(--text-secondary);
          font-size: 0.9375rem;
          margin-bottom: 0.75rem;
          display: flex;
          gap: 1rem;
          line-height: 1.6;
        }

        .bullet {
          width: 6px;
          height: 6px;
          background: var(--border-medium);
          border-radius: 50%;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .timeline-header {
            grid-template-columns: auto 1fr;
          }
          .exp-period {
            grid-column: span 2;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
