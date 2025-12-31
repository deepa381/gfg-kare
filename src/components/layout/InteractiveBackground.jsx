import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                containerRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
                containerRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#010a05]"
        >
            {/* Base Pattern: A sophisticated geometric grid/mesh */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #1a4731 1px, transparent 1px),
                        linear-gradient(to bottom, #1a4731 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }}
            />

            {/* Subtle dots for texture */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `radial-gradient(#10b981 0.5px, transparent 0)`,
                    backgroundSize: '20px 20px'
                }}
            />

            {/* The "Shadow Below" effect */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(
                        450px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        rgba(0, 0, 0, 0.4) 0%,
                        transparent 80%
                    )`,
                }}
            />

            {/* Interactive Elevation Layer */}
            <div
                className="absolute inset-0"
                style={{
                    // Elevated Design: Gold mesh
                    backgroundImage: `
                        linear-gradient(to right, #FFD700 1px, transparent 1px),
                        linear-gradient(to bottom, #FFD700 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                    maskImage: `radial-gradient(
                        250px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        black 0%,
                        transparent 100%
                    )`,
                    WebkitMaskImage: `radial-gradient(
                        250px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        black 0%,
                        transparent 100%
                    )`,
                    // Physical lift effect
                    transform: 'translate(-2px, -2px)',
                    filter: 'drop-shadow(6px 6px 12px rgba(0,0,0,0.8))',
                    opacity: 0.8
                }}
            />

            {/* Highlight Glow around cursor */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(
                        350px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        rgba(16, 185, 129, 0.08) 0%,
                        transparent 70%
                    )`
                }}
            />

            {/* Decorative Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,10,5,0.7)_100%)]" />
        </div>
    );
};

export default InteractiveBackground;
