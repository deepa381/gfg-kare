import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const coordinators = {
        student: ["Anirudh", "Member A", "Member B", "Member C"],
        faculty: ["Dr. Savitha", "Dr. S. K. Singh"]
    };

    const socialLinks = [
        { name: 'Instagram', url: 'https://instagram.com', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.225.144 4.737 1.633 4.881 4.859.058 1.266.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.85-.144 3.225-1.633 4.737-4.859 4.881-1.266.058-1.645.069-4.849.069-3.204 0-3.584-.012-4.85-.07-3.225-.144-4.737-1.633-4.881-4.859-.058-1.266-.069-1.645-.069-4.849 0-3.204.012-3.584.07-4.85.144-3.225 1.633-4.737 4.859-4.881 1.266-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
        { name: 'YouTube', url: 'https://youtube.com', icon: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' }
    ];

    return (
        <footer id="footer" className="bg-bg text-text-muted border-t border-secondary/20 pt-24 pb-12 relative overflow-hidden">
            {/* Subtle SEO-friendly hidden H2 for heading hierarchy */}
            <h2 className="sr-only">GFG CAMPUS BODY KARE</h2>

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <motion.h3
                            className="text-text font-serif text-2xl font-bold mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            GFG CAMPUS BODY KARE
                        </motion.h3>
                        <p className="text-sm leading-relaxed mb-8 max-w-xs opacity-70">
                            The authoritative student chapter focused on engineering technical leaders through code, community, and competition.
                        </p>
                        <div className="space-y-3">
                            <p className="text-xs uppercase tracking-widest text-accent font-semibold">Inquiries</p>
                            <a
                                href="mailto:gfgkarestudentchapter@klu.ac.in"
                                className="text-sm hover:text-accent transition-colors duration-300 break-all"
                            >
                                gfgkarestudentchapter@klu.ac.in
                            </a>
                        </div>
                    </div>

                    {/* Student Coordinators */}
                    <div>
                        <h4 className="text-text font-serif text-lg font-medium mb-6">Student Leadership</h4>
                        <ul className="space-y-4">
                            {coordinators.student.map((name, idx) => (
                                <li key={idx} className="text-sm opacity-80 flex items-center gap-2 group cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Faculty Coordinators */}
                    <div>
                        <h4 className="text-text font-serif text-lg font-medium mb-6">Faculty Council</h4>
                        <ul className="space-y-4">
                            {coordinators.faculty.map((name, idx) => (
                                <li key={idx} className="text-sm opacity-80 flex items-center gap-2 group cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-accent transition-colors"></span>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className="text-text font-serif text-lg font-medium mb-6">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-secondary/50 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent group transition-all duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                                        <path d={social.icon} />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                        <div className="space-y-4 pt-4 border-t border-secondary/20">
                            <a href="#" className="block text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors">Privacy Charter</a>
                            <a href="#" className="block text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors">Terms of Operations</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-50">
                        © {new Date().getFullYear()} GFG CAMPUS BODY KARE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-2 opacity-30 text-[10px] uppercase tracking-[0.2em]">
                        <span>Secure Verification: </span>
                        <span className="font-mono">KARE-GFG-STABLE-v2</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
