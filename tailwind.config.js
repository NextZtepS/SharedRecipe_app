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
                    "primary": "#617a55",
                    "secondary": "#aa8b56",
                    "accent": "#a4d0a4",
                    "neutral": "#3d4451",
                    "base-100": "#f5f5f5",
                    "info": "#a0e5f3",
                    "success": "#38e5a9",    
                    "warning": "#ffca28",    
                    "error": "#da2b53",
                },
            },
        ],
    },
}