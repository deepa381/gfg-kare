import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-bg z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,78,59,0.15)_0%,transparent_70%)] opacity-60"></div>
                {/* Subtle Grid */}
                {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div> */}
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

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-text tracking-widest leading-none mb-12">
                        GFG <span className="text-transparent bg-clip-text bg-gradient-to-r from-text via-accent to-text opacity-90">KARE</span>
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
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
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
