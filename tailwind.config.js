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
                    DEFAULT: '#010a05', // Deepest Green/Black (Background)
                    surface: '#03110a', // Dark Forest (Surface)
                    glass: 'hsla(150, 30%, 5%, 0.8)',
                },
                primary: {
                    DEFAULT: '#064e3b', // Deep Royal Green (Primary - Near Black/Elegant)
                    light: '#065f46',
                },
                secondary: {
                    DEFAULT: '#1a4731', // Muted Forest Green (Secondary)
                },
                accent: {
                    DEFAULT: '#10b981', // Soft Emerald Glow (Accent - Sparingly)
                    glow: 'rgba(16, 185, 129, 0.3)',
                },
                gold: {
                    DEFAULT: '#FFD700', // Reserved for Founders
                    glow: 'rgba(255, 215, 0, 0.4)',
                },
                text: {
                    DEFAULT: '#ecfdf5', // Off-white
                    muted: '#6ee7b7', // Muted Greenish Text
                },
                border: '#064e3b',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Cinzel', 'serif'],
            },
            boxShadow: {
                'glow-accent': '0 0 15px rgba(16, 185, 129, 0.2)',
                'glow-accent-strong': '0 0 25px rgba(16, 185, 129, 0.3)',
                'glow-gold': '0 0 15px rgba(255, 215, 0, 0.3)',
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
