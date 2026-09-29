import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../UI/Section';
import './BentoGrid.css';


const projects = [
    {
        title: 'Mor Finance AI',
        description: 'A modular trading ecosystem and Web3 intelligence platform. Architected Trading APIs/UI (99.9% uptime), Debt Discharge microservice (0% slippage), and real-time arbitrage engine (50+ events/sec).',
        tech: ['FastAPI', 'Microservices', 'Redis', 'LLMs', 'Web3'],
        imgLabel: 'Mor Finance AI Platform'
    },
    {
        title: 'IDRecs & Validation Platform',
        description: 'Enterprise banking platform at NatWest Group. Built fault-tolerant recovery reprocessing 5,000+ stuck records monthly (99.9% SLA) and validation microservice cutting manual review by 70%.',
        tech: ['Python', 'asyncio', 'FastAPI', 'OCR Orchestrator', 'Microservices'],
        imgLabel: 'Enterprise Banking Architecture'
    },
    {
        title: 'JobSleuth',
        description: 'Distributed data aggregation platform processing 5,000+ daily postings from 20+ sources. Built concurrent aiohttp pipelines reducing ingestion latency by 90% with AI semantic ranking.',
        tech: ['Python', 'aiohttp', 'FastAPI', 'PostgreSQL', 'React', 'CI/CD'],
        imgLabel: 'JobSleuth Aggregator'
    },
    {
        title: 'LeadFlow AI',
        description: 'AI-powered marketing SaaS that automates the end-to-end lead generation lifecycle. Features real-time SERP extraction and LLM-driven competitive audits with 100% Pytest suite.',
        tech: ['FastAPI', 'MongoDB', 'React', 'LLMs', 'SerpApi'],
        imgLabel: 'AI Lead Generation Pipeline'
    }
];

const BentoGrid = () => {
    const navigate = useNavigate();
    return (
        <Section id="work" className="bento-section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title-large">Things I've made trying to put my mark</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    I've worked on tons of little projects over the years, but these are some of the ones that I'm most proud of.
                </p>

                <div className="bento-actions">
                    <button className="btn-primary" onClick={() => navigate('/projects')}>View All Projects</button>
                    <button className="btn-secondary" onClick={() => window.open('https://github.com/anjanayraina', '_blank')}>GitHub</button>
                </div>


                <div className="project-grid-sleek reveal stagger-reveal">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card-sleek">
                            <div className="card-image-preview">
                                <span>{project.imgLabel}</span>
                            </div>
                            <div className="card-body-sleek">
                                <h3 className="card-title-sleek">{project.title}</h3>
                                <p className="card-desc-sleek">{project.description}</p>
                                <div className="card-tech-sleek">
                                    {project.tech.map(t => <span key={t} className="badge">{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default BentoGrid;
