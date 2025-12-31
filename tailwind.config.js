/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    DEFAULT: '#0a0f0a', // Deep Dark Green/Black (Background)
                    surface: '#0d130d', // Dark Forest (Surface)
                    glass: 'hsla(120, 20%, 5%, 0.8)',
                },
                primary: {
                    DEFAULT: '#1a3a1a', // Deep Forest Green (Primary)
                    light: '#2d5a2d',
                },
                secondary: {
                    DEFAULT: '#1e2b1e', // Dark Slate Green (Secondary)
                },
                accent: {
                    DEFAULT: '#00ff87', // Bright Lime/Neon Green (Accent)
                    glow: 'rgba(0, 255, 135, 0.3)',
                },
                gold: {
                    DEFAULT: '#f59e0b', // Refined Amber Gold
                    glow: 'rgba(245, 158, 11, 0.4)',
                },
                text: {
                    DEFAULT: '#f1f5f9', // Off-white
                    muted: '#94a3b8', // Muted Slate
                },
                border: '#1a3a1a',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Montserrat', 'sans-serif'],
            },
            boxShadow: {
                'glow-accent': '0 0 15px rgba(0, 255, 135, 0.2)',
                'glow-accent-strong': '0 0 25px rgba(0, 255, 135, 0.3)',
                'glow-gold': '0 0 15px rgba(245, 158, 11, 0.3)',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.6)',
            },
            animation: {
                'fade-in-down': 'fadeInDown 1s ease-out',
                'fade-in-up': 'fadeInUp 1s ease-out',
                'pulse-slow': 'pulse 4s infinite alternate',
            },
            keyframes: {
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            }
        },
    },
    plugins: [],
}
