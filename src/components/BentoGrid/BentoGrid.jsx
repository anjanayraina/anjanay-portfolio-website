import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '../UI/Section';
import './BentoGrid.css';


const projects = [
    {
        title: 'SmartTrim AI',
        description: 'SmartTrim AI is a magic background remover. Upload your image, clear the background seamlessly, and bring your ideas to life.',
        tech: ['AI', 'Image Processing', 'Background Removal'],
        imgLabel: 'SmartTrim AI Preview'
    },
    {
        title: 'NexTalk',
        description: 'NexTalk is a cutting-edge replication of Zoom, built with the latest Next.js and TypeScript. Designed for high-performance video calls.',
        tech: ['Next.js', 'WebRTC', 'TypeScript'],
        imgLabel: 'NexTalk Interface'
    },
    {
        title: 'Swiggy Clone',
        description: 'A Swiggy inspired food ordering platform. Built using live Swiggy APIs and technologies like Tailwind CSS, Redux, and React Router.',
        tech: ['React', 'Redux', 'Tailwind'],
        imgLabel: 'Swiggy Clone UI'
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
