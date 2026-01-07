import React from 'react';
import Section from '../UI/Section';
import './BentoGrid.css';

const projects = [
    {
        title: 'LLM-Powered DeFi Platform',
        category: 'AI & Blockchain',
        description: 'An intelligent interface for decentralized finance protocols.',
        size: 'large', // spans 2 columns
    },
    {
        title: 'JobSleuth',
        category: 'High-Throughput Backend',
        description: 'Data ingestion pipeline processing 5k+ jobs daily.',
        size: 'small',
    },
    {
        title: 'Middle Earth AI',
        category: 'Distributed Systems',
        description: 'DeFi Strategy Game with on-chain state management.',
        size: 'small',
    },
    {
        title: 'Smart Contract Auditing',
        category: 'Security',
        description: 'Audited Solidity codebases identifying critical vulnerabilities.',
        size: 'wide', // spans full width
    },
];

const BentoGrid = () => {
    return (
        <Section id="work" className="bento-section">
            <h2 className="section-title">Proof of Work</h2>
            <div className="bento-grid">
                {projects.map((project, index) => (
                    <div key={index} className={`bento-card ${project.size}`}>
                        <div className="card-content">
                            <span className="card-category">{project.category}</span>
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default BentoGrid;
