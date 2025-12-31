import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/#home', id: 'home' },
        { name: 'About', path: '/#about', id: 'about' },
        { name: 'Team', path: '/#core-team', id: 'core-team' },
        { name: 'Events', path: '/#events', id: 'events' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'auto' });
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-bg-surface/90 backdrop-blur-md border-b border-secondary' : 'py-6 bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container flex justify-between items-center">
                <Link to="/" className="font-serif text-xl font-bold tracking-wider flex items-center gap-4 group">
                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                        <img
                            src={logo}
                            alt="GFG KARE Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-accent text-lg leading-tight">GFG</span>
                        <span className="text-text text-[10px] tracking-[0.3em] font-medium opacity-80 uppercase">Campus Body KARE</span>
                    </div>
                </Link>

                <ul className="flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            {location.pathname === '/' ? (
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    className="relative text-sm uppercase tracking-wider font-medium text-text hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    to={link.path}
                                    className="relative text-sm uppercase tracking-wider font-medium text-text hover:text-accent transition-colors duration-300"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => scrollToSection('footer')}
                            className="btn btn-primary ml-4"
                        >
                            Join Us
                        </button>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
