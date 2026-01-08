import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../UI/Section';
import './BentoGrid.css';


const projects = [
    {
        title: 'Mon Finance AI',
        description: 'A modular, AI-powered trading ecosystem bridging DeFi and CeX. Features an asynchronous microservice architecture for real-time market analysis and automated execution.',
        tech: ['FastAPI', 'React', 'LLMs', 'Web3'],
        imgLabel: 'Mon Finance AI Dashboard'
    },
    {
        title: 'Middle Earth AI',
        description: 'An AI-powered on-chain strategy game built on Solana. Features complex battle logic, asset minting, and dynamic NPC agents powered by specialized AI.',
        tech: ['Solana', 'Rust', 'Anchor', 'AI'],
        imgLabel: 'Middle Earth AI Program'
    },
    {
        title: 'PerpetualVault',
        description: 'A decentralized perpetuals protocol following ERC-4626. Implements a fault-tolerant double oracle system with Chainlink for secure on-chain trading.',
        tech: ['Solidity', 'Foundry', 'Chainlink', 'ERC-4626'],
        imgLabel: 'PerpetualVault Protocol'
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


                <div className="project-grid-sleek">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card-sleek reveal">
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
