/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            "light",
            "dark",
            {
                default: {
                    "primary": "#617A55",
                    "secondary": "#AA8B56",
                    "accent": "#A4D0A4",
                    "neutral": "#3d4451",
                    "base-100": "#F5F5F5",
                    "info": "#a0e5f3",
                    "success": "#38e5a9",    
                    "warning": "#fbbb28",    
                    "error": "#da2b53",
                },
            },
        ],
    },
}