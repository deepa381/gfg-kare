import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import WinnersModal from './WinnersModal';

const EVENTS_DATA = {
    upcoming: {
        title: "ALGORITHMIST'26",
        date: "March 15-16, 2026",
        description: "The ultimate coding summit where logic meets glory. Two days of intense algorithmic challenges, workshops, and networking with elite developers.",
        image: "bg-gradient-to-br from-primary via-bg to-bg" // Abstract placeholder
    },
    past: [
        {
            id: 101,
            title: "GeekFest",
            description: "Annual tech harvest celebrating innovation.",
            image: "bg-secondary/20"
        },
        {
            id: 102,
            title: "HackHeist",
            description: "24-hour CTF and cybersecurity challenge.",
            image: "bg-accent/10"
        },
        {
            id: 103,
            title: "National Skill UP",
            description: "Nationwide campaign for technical upskilling.",
            image: "bg-primary/20"
        }
    ]
};

const Events = () => {
    const [selectedEventId, setSelectedEventId] = useState(null);
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="events" className="py-32 relative bg-bg">
            <div className="container">

                {/* --- UPCOMING EVENT SECTION --- */}
                <div className="mb-32">
                    <motion.div
                        className="text-left mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-4xl text-text font-serif">Upcoming Event</h3>
                    </motion.div>

                    <motion.div
                        className="relative w-full rounded-2xl overflow-hidden border border-secondary/30 group"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Event Card Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                            {/* Left: Poster Placeholder */}
                            <div className={`${EVENTS_DATA.upcoming.image} relative h-64 lg:h-auto flex items-center justify-center overflow-hidden`}>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <span className="text-accent/20 text-6xl font-black uppercase rotate-[-15deg] tracking-widest border-4 border-accent/20 p-4">Poster</span>
                            </div>

                            {/* Right: Content */}
                            <div className="bg-bg-surface p-10 lg:p-16 flex flex-col justify-center relative">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-accent animate-spin-slow">
                                        <path d="M50 0 L100 50 L50 100 L0 50 Z" stroke="currentColor" strokeWidth="1" />
                                    </svg>
                                </div>

                                <span className="inline-block py-1 px-3 border border-accent/30 rounded-full text-accent text-xs font-bold uppercase tracking-widest w-fit mb-6">
                                    Registration Open
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-text mb-4">{EVENTS_DATA.upcoming.title}</h3>
                                <p className="text-accent text-sm uppercase tracking-widest mb-8 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                                    {EVENTS_DATA.upcoming.date}
                                </p>
                                <p className="text-text-muted text-lg mb-10 leading-relaxed border-l-2 border-secondary pl-6">
                                    {EVENTS_DATA.upcoming.description}
                                </p>
                                <button className="btn btn-primary self-start">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>


                {/* --- PAST EVENTS SECTION (Grid Layout) --- */}
                <div>
                    <motion.div
                        className="text-left mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-2">Mission Logs</h2>
                        <h3 className="text-4xl text-text font-serif">Past Operations</h3>
                    </motion.div>

                    {/* Slider Wrapper with side buttons */}
                    <div className="relative group/slider">
                        {/* Navigation Buttons - Left */}
                        <motion.button
                            onClick={() => scroll('left')}
                            className="hidden md:flex absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-secondary bg-bg/80 backdrop-blur-sm items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Previous Events"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        {/* Navigation Buttons - Right */}
                        <motion.button
                            onClick={() => scroll('right')}
                            className="hidden md:flex absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-secondary bg-bg/80 backdrop-blur-sm items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-all z-20 opacity-0 group-hover/slider:opacity-100 shadow-lg"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Next Events"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>

                        {/* Horizontal Scroll Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                        >
                            {EVENTS_DATA.past.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    className="min-w-[85vw] md:min-w-[400px] snap-center bg-bg-surface border border-secondary/30 rounded-xl overflow-hidden flex flex-col group hover:border-accent/50 transition-colors duration-300"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Image Area */}
                                    <div className={`h-48 ${event.image} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                        <div className="absolute bottom-4 left-4">
                                            <h4 className="text-2xl font-bold text-white font-serif">{event.title}</h4>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className="text-text-muted text-sm mb-8 flex-1 opacity-80">{event.description}</p>

                                        <div className="flex gap-4 mt-auto">
                                            <button className="flex-1 py-3 text-xs font-bold uppercase tracking-wider border border-secondary text-text rounded-full hover:bg-secondary hover:text-white transition-all">
                                                Visit Site
                                            </button>
                                            <button
                                                onClick={() => setSelectedEventId(event.id)}
                                                className="flex-1 py-3 text-xs font-bold uppercase tracking-wider bg-secondary/10 text-accent border border-secondary rounded-full hover:bg-accent hover:text-bg hover:border-accent transition-all"
                                            >
                                                View Winners
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Winners Modal */}
            {selectedEventId && (
                <WinnersModal
                    eventId={selectedEventId}
                    onClose={() => setSelectedEventId(null)}
                />
            )}
        </section>
    );
};

export default Events;
