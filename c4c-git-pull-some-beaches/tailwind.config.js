/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "new-blue": "#8758FF",
                "main-grey": "#181818",
                "main-bg": "#000000",
                "main-purple": "#8758FF",
            },
            backgroundImage: {
                background: "url(/background.svg)",
            },
        },
    },
    plugins: [],
};
