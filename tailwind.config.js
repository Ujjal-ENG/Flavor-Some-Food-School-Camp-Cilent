/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
};
