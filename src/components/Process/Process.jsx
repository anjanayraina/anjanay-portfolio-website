import React from 'react';
import Section from '../UI/Section';
import './Process.css';

const steps = [
    { number: '01', title: 'Consult', description: 'Understanding your core challenges and technical requirements.' },
    { number: '02', title: 'Architect', description: 'Designing scalable, fault-tolerant systems backed by research.' },
    { number: '03', title: 'Deploy', description: 'Shipping high-performance code with rigorous testing and CI/CD.' },
];

const Process = () => {
    return (
        <Section id="process" className="process-section">
            <h2 className="section-title">Workflow</h2>
            <div className="process-list">
                {steps.map((step) => (
                    <div key={step.number} className="process-item">
                        <span className="process-number">{step.number}</span>
                        <div className="process-content">
                            <h3 className="process-title">{step.title}</h3>
                            <p className="process-description">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Process;
