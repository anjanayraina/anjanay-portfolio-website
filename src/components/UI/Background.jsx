import React, { useMemo } from 'react';
import './Background.css';

const Background = () => {
    // Generate random stars once
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1 + 'px',
            delay: `${Math.random() * 5}s`,
            duration: `${Math.random() * 3 + 2}s`
        }));
    }, []);

    return (
        <div className="background-container">
            {/* Grid Overlay */}
            <div className="grid-overlay"></div>

            {/* Animated Glows */}
            <div className="nebula-glow glow-1"></div>
            <div className="nebula-glow glow-2"></div>

            {/* Twinkling Stars */}
            <div className="stars-layer">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            animationDelay: star.delay,
                            animationDuration: star.duration
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Background;
