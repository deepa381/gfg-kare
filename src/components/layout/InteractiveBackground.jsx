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
            {/* Base Gradient Overlay - Elegant depth */}
            <div
                className="absolute inset-0 opacity-100"
                style={{
                    background: `
                        radial-gradient(circle at 20% 30%, rgba(6, 78, 59, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 70%, rgba(26, 71, 49, 0.12) 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, rgba(1, 10, 5, 0.8) 0%, rgba(1, 10, 5, 1) 100%)
                    `
                }}
            />

            {/* Elegant Grid Pattern - Subtle and refined */}
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #1a4731 0.5px, transparent 0.5px),
                        linear-gradient(to bottom, #1a4731 0.5px, transparent 0.5px)
                    `,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Diagonal Elegant Lines */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 2px,
                            rgba(16, 185, 129, 0.03) 2px,
                            rgba(16, 185, 129, 0.03) 4px
                        ),
                        repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 2px,
                            rgba(16, 185, 129, 0.03) 2px,
                            rgba(16, 185, 129, 0.03) 4px
                        )
                    `,
                    backgroundSize: '200px 200px'
                }}
            />

            {/* Subtle Dotted Texture - Refined */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `radial-gradient(circle,rgb(1, 52, 35) 0.8px, transparent 0.8px)`,
                    backgroundSize: '30px 30px',
                    backgroundPosition: '0 0, 15px 15px'
                }}
            />

            {/* Animated Gradient Orbs - Elegant floating effect */}
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    background: `
                        radial-gradient(ellipse 800px 600px at 10% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
                        radial-gradient(ellipse 600px 800px at 90% 80%, rgba(255, 215, 0, 0.04) 0%, transparent 50%),
                        radial-gradient(ellipse 700px 700px at 50% 50%, rgba(6, 78, 59, 0.05) 0%, transparent 50%)
                    `,
                    animation: 'pulse 20s ease-in-out infinite alternate'
                }}
            />

            {/* Interactive Shadow Below Cursor */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(
                        500px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        rgba(0, 0, 0, 0.5) 0%,
                        rgba(0, 0, 0, 0.2) 40%,
                        transparent 80%
                    )`,
                }}
            />

            {/* Interactive Gold Mesh Elevation - Refined */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 215, 0, 0.4) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 215, 0, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    maskImage: `radial-gradient(
                        300px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        black 0%,
                        transparent 80%
                    )`,
                    WebkitMaskImage: `radial-gradient(
                        300px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        black 0%,
                        transparent 80%
                    )`,
                    transform: 'translate(-3px, -3px)',
                    filter: 'drop-shadow(8px 8px 16px rgba(0,0,0,0.9))',
                    opacity: 0.7
                }}
            />

            {/* Interactive Emerald Glow - Enhanced */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(
                        400px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px),
                        rgba(16, 185, 129, 0.12) 0%,
                        rgba(16, 185, 129, 0.05) 50%,
                        transparent 75%
                    )`,
                    mixBlendMode: 'screen'
                }}
            />

            {/* Elegant Corner Accents */}
            <div
                className="absolute top-0 left-0 w-[600px] h-[600px] opacity-30"
                style={{
                    background: `radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)`,
                    filter: 'blur(60px)'
                }}
            />
            <div
                className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-30"
                style={{
                    background: `radial-gradient(circle, rgba(255, 215, 0, 0.06) 0%, transparent 70%)`,
                    filter: 'blur(60px)'
                }}
            />

            {/* Refined Vignette - More subtle */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(
                        circle at center,
                        transparent 0%,
                        transparent 40%,
                        rgba(1, 10, 5, 0.4) 80%,
                        rgba(1, 10, 5, 0.8) 100%
                    )`
                }}
            />

            {/* Elegant Border Glow */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    boxShadow: 'inset 0 0 200px rgba(16, 185, 129, 0.05), inset 0 0 100px rgba(255, 215, 0, 0.03)'
                }}
            />
        </div>
    );
};

export default InteractiveBackground;
