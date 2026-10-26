import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SEO from '../components/SEO/SEO';

const experiences = [
  {
    company: 'NatWest Group',
    role: 'Software Engineer II',
    period: 'Sep 2026 – Present',
    details: 'Refactoring synchronous APIs and data pipelines into non-blocking, event-driven architectures using Python, asyncio, FastAPI, and Redis.',
    highlights: [
      'Refactored synchronous RESTful API endpoints and data pipelines into non-blocking, event-driven architectures using Python, asyncio, FastAPI, and Redis, cutting execution latency by 90% and maximizing I/O throughput.',
      'Architected a containerized Validation Service microservice in Python, Pydantic, and Docker with strict schema validation, reducing manual report validation time by 70% via optimized batch ingestion and reconciliation.',
      'Spearheaded peer reviews, technical documentation, and architectural planning for a 4-member pod using Agile methodologies, standardizing Python, Pytest, and Jenkins CI/CD best practices to cut PR turnaround time by 40%.'
    ],
    logo: '🏦'
  },
  {
    company: 'NatWest Group',
    role: 'Software Engineer',
    period: 'Aug 2024 – Aug 2026',
    details: 'Engineering fault-tolerant recovery mechanisms and core financial reconciliation modules for enterprise banking platforms.',
    highlights: [
      'Established a fault-tolerant recovery mechanism for the enterprise IDRecs platform with custom edit functionality, idempotent retry logic, and an OCR orchestrator, reprocessing 5,000+ stuck records monthly for a 99% SLA.',
      'Integrated complex financial business logic modules (Rebate, Negative Aging, Contra) in Python and MongoDB for automated transaction processing, achieving 95%+ STP across 1,000+ daily records.'
    ],
    logo: '🏦'
  },
  {
    company: 'Zus Network',
    role: 'Protocol Engineer',
    period: 'Mar 2024 – Jul 2024',
    details: 'Backend infrastructure testing, protocol security auditing, and gas optimization for decentralized storage networks.',
    highlights: [
      'Programmed an end-to-end backend test suite in Go integrating custom property-based fuzzing and regression checks across repositories, streamlining CI/CD pipelines and reducing manual QA testing time by 70%.',
      'Audited distributed protocol services, Solidity modules, and state-transition logic using automated static analysis tooling, identifying and patching 5+ critical vulnerabilities across authentication and access-control workflows.',
      'Executed low-level virtual machine bytecode analysis, storage packing, and assembly-level memory optimizations, decreasing protocol execution overhead and transaction compute costs by up to 60%.'
    ],
    logo: '🛰️'
  },
  {
    company: 'Independent Researcher',
    role: 'Security Engineer & Auditor',
    period: '2023 – Present',
    details: 'Securing complex distributed systems and financial protocols through deep-dive systemic analysis and formal audits.',
    highlights: [
      'Audited global Web3 protocols and resolved 30+ critical vulnerabilities across high-traffic DeFi architectures.',
      'Engineered mathematical invariant tests, property-based fuzzing, and formal verification suites to ensure system integrity.',
      'Ranked among top global security researchers on competitive auditing platforms (Code4rena, Sherlock).'
    ],
    logo: '🛡️'
  },
  {
    company: 'IIIT Delhi & Research',
    role: 'B.Tech in CS & Biosciences & GDSC Technical Lead',
    period: 'Jan 2021 – May 2024',
    details: 'Graduated B.Tech from IIIT Delhi. Led blockchain initiatives and authored peer-reviewed research.',
    highlights: [
      'Graduated with B.Tech in Computer Science & Biosciences from IIIT Delhi (Jan 2021 – May 2024).',
      'Served as GDSC Core Member & Technical Lead at IIIT Delhi (Aug 2023 – June 2024).',
      'Won the Peak Hackathon organised by Mantra Chain (Jul 2024).',
      'Developed two-layered blockchain architecture resulting in an IEEE ANTS publication.'
    ],
    logo: '🎓'
  }
];


const Experience = () => {
  const revealRef = useScrollReveal();

  return (
    <div ref={revealRef} className="experience-page container section animate-fade-in">
      <SEO
        title="Experience & Resume"
        description="Professional experience of Anjanay Raina, Software Engineer II at NatWest Group, smart contract auditor, and distributed systems architect."
        url="/experience"
      />
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
