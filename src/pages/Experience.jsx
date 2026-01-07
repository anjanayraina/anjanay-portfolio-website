import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
    {
        company: 'NatWest Group',
        role: 'Backend Developer',
        period: 'July 2024 – Present',
        details: 'Leading the ISV Signature Matching microservice architecture project. Focused on high-availability and fault-tolerant data recovery.',
        highlights: [
            'Engineered auto-recovery mechanisms for critical batch processing.',
            'Optimized API throughput by 3x via stateful caching and query tuning.',
            'Orchestrating cloud deployment on Azure with Terraform.'
        ],
        logo: '🏦'
    },
    {
        company: 'Zus Network',
        role: 'Backend Consultant',
        period: 'March 2024 – July 2024',
        details: 'Security audit and backend optimization for core storage protocols.',
        highlights: [
            'Audited Solidity codebases, identifying critical security flaws.',
            'Implemented robust unit testing suites for core Go services.'
        ],
        logo: '🛰️'
    },
    {
        company: 'DLT Labs',
        role: 'Student Researcher',
        period: 'January 2023 – July 2023',
        details: 'Blockchain research focused on Hyperledger Fabric. Resulted in a publication at IEEE ANTS.',
        highlights: [
            'Implemented theft tracking system on Hyperledger Fabric.',
            'Achieved 100x improvement in system resolution latency.'
        ],
        logo: '⛓️'
    }
];

const Experience = () => {
    const revealRef = useScrollReveal();

    return (
        <div ref={revealRef} className="experience-page container section animate-fade-in">
            <div className="reveal" style={{ marginBottom: '6rem' }}>
                <h1 className="text-gradient" style={{ fontSize: '4.5rem', fontWeight: 800, letterSpacing: '-0.05em', marginBottom: '1.5rem' }}>
                    Real-world scale.
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', lineHeight: '1.6' }}>
                    Working with industry leaders to build highly reliable and performance-critical systems.
                </p>
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
