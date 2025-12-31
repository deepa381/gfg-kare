import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
                <Link to="/" className="font-serif text-xl font-bold text-text hover:text-accent transition-colors duration-300 tracking-wider">
                    GFG <span className="text-accent">CAMPUS BODY KARE</span>
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
