import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-bg z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,135,0.15)_0%,transparent_70%)] opacity-60"></div>

                {/* Diagonal Wave Pattern */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <svg className="absolute w-full h-full" preserveAspectRatio="none">
                        <defs>
                            <pattern id="diagonal-waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <path
                                    d="M0,50 Q25,30 50,50 T100,50"
                                    fill="none"
                                    stroke="rgba(236, 253, 245, 0.3)"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M0,70 Q25,50 50,70 T100,70"
                                    fill="none"
                                    stroke="rgba(236, 253, 245, 0.2)"
                                    strokeWidth="1.5"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diagonal-waves)" transform="rotate(-15 960 540)" />
                    </svg>
                </div>

                {/* Large Diagonal Accent Stripe */}
                <div
                    className="absolute w-[150%] h-[800px] bg-gradient-to-br from-transparent via-white/5 to-transparent"
                    style={{
                        transform: 'rotate(-15deg)',
                        top: '20%',
                        right: '-20%'
                    }}
                ></div>
            </div>

            <div className="container relative z-10 text-center max-w-4xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                    <span className="block font-sans text-sm md:text-base lowercase tracking-[0.5em] text-accent/80 mb-6">
                        we
                    </span>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter leading-none mb-12 text-glow">
                        <span className="text-accent uppercase">GFG</span> <span className="text-text uppercase">KARE</span>
                    </h1>
                </motion.div>

                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                >
                    <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed tracking-wide mb-16">
                        Cultivating technical excellence and leadership in the quiet pursuit of mastery.
                    </p>

                    <motion.div
                        className="flex gap-8 justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    >
                        <button
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative px-8 py-3 overflow-hidden rounded-full transition-all duration-300"
                        >
                            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-accent group-hover:text-bg transition-colors">Enter</span>
                            <div className="absolute inset-0 border border-accent/30 rounded-full group-hover:bg-accent transition-all duration-500"></div>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
