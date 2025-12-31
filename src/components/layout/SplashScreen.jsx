import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SplashScreen = ({ finishLoading }) => {
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // Animate In (Text reveals)
            await controls.start("visible");

            // Shorter linger time for better UX
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Signal transition to parent
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
                scale: 1.05,
                filter: "blur(20px)",
                transition: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
        >
            {/* Animated Gradient Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-bg via-primary/10 to-bg"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent/30 rounded-full"
                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: Math.random() * window.innerHeight,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: [null, Math.random() * window.innerHeight],
                        x: [null, Math.random() * window.innerWidth],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Glowing Orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[100px]"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Typography Content */}
            <div className="relative z-20 flex flex-col items-center">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, ease: "easeOut" }
                        }
                    }}
                    className="mb-6 relative"
                >
                    <motion.span
                        className="font-sans text-sm md:text-base text-accent uppercase tracking-[0.5em] opacity-90"
                        animate={{
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        we
                    </motion.span>

                    {/* Animated line divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={controls}
                        variants={{
                            hidden: { scaleX: 0 },
                            visible: {
                                scaleX: 1,
                                transition: { duration: 1.2, delay: 0.4, ease: "circOut" }
                            }
                        }}
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
                    />
                </motion.div>

                <div className="overflow-hidden">
                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-text tracking-widest leading-none"
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { y: 120, opacity: 0 },
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
                            }
                        }}
                    >
                        GFG <span className="text-secondary/50">|</span>{' '}
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-text to-accent"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            style={{ backgroundSize: '200% 200%' }}
                        >
                            KARE
                        </motion.span>
                    </motion.h1>
                </div>

                {/* Loading indicator */}
                <motion.div
                    className="mt-12 flex gap-2"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 0.6, delay: 0.8 }
                        }
                    }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-accent rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SplashScreen;
