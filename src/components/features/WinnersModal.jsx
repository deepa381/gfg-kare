import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getEventWinners } from '../../services/dataService';

const WinnersModal = ({ eventId, onClose }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await getEventWinners(eventId);
            setData(result);
            setLoading(false);
        };
        fetchData();
    }, [eventId]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-bg/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-bg-surface border border-secondary rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl relative"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-text-muted hover:text-accent transition-colors z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-accent">Hall of Victory</h2>

                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
                            </div>
                        ) : (
                            <>
                                {/* Top 3 Podium */}
                                <div className="flex flex-col md:flex-row justify-center items-end gap-8 mb-16">
                                    {/* 2nd Place */}
                                    <div className="order-2 md:order-1 flex flex-col items-center">
                                        <div className="w-24 h-24 rounded-full border-2 border-secondary overflow-hidden mb-4 shadow-lg relative">
                                            <img src={data.topWinners[1].image} alt="2nd Place" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 w-full bg-secondary/80 text-center text-xs text-white pb-1 pt-4 -mb-2">2nd</div>
                                        </div>
                                        <h3 className="text-lg font-bold text-text mb-1">{data.topWinners[1].name}</h3>
                                        <p className="text-xs uppercase tracking-widest text-text-muted">{data.topWinners[1].project}</p>
                                    </div>

                                    {/* 1st Place */}
                                    <div className="order-1 md:order-2 flex flex-col items-center -mt-8">
                                        <div className="relative">
                                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-gold text-4xl">👑</div>
                                            <div className="w-32 h-32 rounded-full border-4 border-gold shadow-[0_0_20px_rgba(255,215,0,0.3)] overflow-hidden mb-4 relative z-10">
                                                <img src={data.topWinners[0].image} alt="1st Place" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gold mb-1">{data.topWinners[0].name}</h3>
                                        <p className="text-sm uppercase tracking-widest text-accent font-semibold">{data.topWinners[0].project}</p>
                                    </div>

                                    {/* 3rd Place */}
                                    <div className="order-3 flex flex-col items-center">
                                        <div className="w-24 h-24 rounded-full border-2 border-secondary overflow-hidden mb-4 shadow-lg relative">
                                            <img src={data.topWinners[2].image} alt="3rd Place" className="w-full h-full object-cover" />
                                            <div className="absolute bottom-0 w-full bg-secondary/60 text-center text-xs text-white pb-1 pt-4 -mb-2">3rd</div>
                                        </div>
                                        <h3 className="text-lg font-bold text-text mb-1">{data.topWinners[2].name}</h3>
                                        <p className="text-xs uppercase tracking-widest text-text-muted">{data.topWinners[2].project}</p>
                                    </div>
                                </div>

                                {/* Full List */}
                                <div className="w-full bg-bg/50 rounded-lg overflow-hidden border border-secondary/20">
                                    <div className="grid grid-cols-12 bg-secondary/20 p-4 text-xs uppercase tracking-widest font-bold text-accent">
                                        <div className="col-span-2 text-center">Rank</div>
                                        <div className="col-span-6">Team / Name</div>
                                        <div className="col-span-4 text-right">Project</div>
                                    </div>
                                    {data.allWinners.map((winner, idx) => (
                                        <div key={idx} className="grid grid-cols-12 p-4 border-b border-secondary/10 hover:bg-secondary/5 transition-colors items-center text-sm">
                                            <div className="col-span-2 text-center text-text-muted font-serif opacity-60">#{winner.rank}</div>
                                            <div className="col-span-6 font-medium text-text">{winner.name}</div>
                                            <div className="col-span-4 text-right text-text-muted text-xs uppercase tracking-wide">{winner.project}</div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default WinnersModal;
