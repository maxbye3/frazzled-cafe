// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 2s infinite',
            },
            keyframes: {
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                pulse: {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                },
            },
        },
    },
    plugins: [],
};