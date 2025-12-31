import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SplashScreen = ({ finishLoading }) => {
    // Control animations with a sequence
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // 1. Start: Elements are hidden (handled by initial props)

            // 2. Animate In (Text reveals)
            await controls.start("visible");

            // 3. Linger (Let the user absorb the brand)
            await new Promise(resolve => setTimeout(resolve, 2000)); // 2s linger

            // 4. Signal transition to parent (Main App) - Parent will trigger unmount
            finishLoading();
        };
        sequence();
    }, [controls, finishLoading]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.1,
                filter: "blur(10px)",
                transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } // Custom easing for "elegant" exit
            }}
        >
            {/* Cinematic Noise Texture - Deeper opacity for filmic look */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-10 mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Deep Atmospheric Lighting */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg z-0 opacity-80"></div>

            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -20, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Typography Content */}
            <div className="relative z-20 flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1, ease: "easeOut" }
                        }
                    }}
                    className="mb-4 relative"
                >
                    <span className="font-sans text-sm md:text-base text-accent uppercase tracking-[0.5em] opacity-80">
                        we 
                    </span>
                    {/* Elegant line divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={controls}
                        variants={{
                            hidden: { scaleX: 0 },
                            visible: {
                                scaleX: 1,
                                transition: { duration: 1.5, delay: 0.5, ease: "circOut" }
                            }
                        }}
                        className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
                    />
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-text tracking-widest leading-none"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { y: 100, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
                            }
                        }}
                    >
                        GFG <span className="text-secondary opacity-50">|</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-text via-accent to-text">KARE</span>
                    </motion.h1>
                </div>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
