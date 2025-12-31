import React from 'react';
import { motion } from 'framer-motion';

const Founders = () => {
    // Mock data for founders - in production this would come from dataService
    const founders = [
        {
            name: "Founder Name",
            role: "Founding Lead",
            image: null // Placeholder
        },
        {
            name: "Co-Founder Name",
            role: "Co-Founding Lead",
            image: null
        }
    ];

    return (
        <section id="founders" className="py-32 bg-bg-surface border-t border-secondary relative overflow-hidden">
            {/* Exclusive Gold Glow for Founders Only */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        className="text-gold mb-4 text-sm uppercase tracking-[0.5em] font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Legacy
                    </motion.h2>
                    <motion.h3
                        className="text-4xl md:text-5xl font-serif text-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Founding <span className="text-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.2)]">Signatories</span>
                    </motion.h3>
                </div>

                <div className="flex flex-wrap justify-center gap-16">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            className="relative group text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.2) }}
                        >
                            <div className="w-64 h-80 bg-gradient-to-b from-bg to-secondary/30 border border-gold/30 rounded-t-full mb-6 relative overflow-hidden transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.1)]">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-secondary/10"></div>
                            </div>

                            <h4 className="text-2xl font-serif text-text mb-2 group-hover:text-gold transition-colors">{founder.name}</h4>
                            <p className="text-gold/80 text-xs uppercase tracking-widest">{founder.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
