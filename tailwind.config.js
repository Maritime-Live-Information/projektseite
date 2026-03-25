import { heroui } from "@heroui/theme";
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                oswald: ['Oswald', ...defaultTheme.fontFamily.sans],
                montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
            }
        },
    },
    darkMode: "class",
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        default: {
                            50: "#fafafa",
                            100: "#f2f2f3",
                            200: "#ebebec",
                            300: "#e3e3e6",
                            400: "#dcdcdf",
                            500: "#d4d4d8",
                            600: "#afafb2",
                            700: "#8a8a8c",
                            800: "#656567",
                            900: "#404041",
                            foreground: "#000",
                            DEFAULT: "#d4d4d8"
                        },
                        primary: {
                            50: "#e8f7ff",
                            100: "#c6ecff",
                            200: "#a3dfff",
                            300: "#80d0ff",
                            400: "#5dc0fc",
                            500: "#3aaced",
                            600: "#1798db",
                            700: "#0084c7",
                            800: "#0070b0",
                            900: "#005d97",
                            foreground: "#fff",
                            DEFAULT: "#0084c7"
                        },
                        secondary: {
                            50: "#75c1de",
                            100: "#5fa8c5",
                            200: "#4b8aaa",
                            300: "#1f6382",
                            400: "#1a5570",
                            500: "#3a758f",
                            600: "#2a5d74",
                            700: "#1c4659",
                            800: "#145080",
                            900: "#102835",
                            foreground: "#fff",
                            DEFAULT: "#1c4659"
                        },
                        success: {
                            50: "#e2f8ec",
                            100: "#b9efd1",
                            200: "#91e5b5",
                            300: "#68dc9a",
                            400: "#40d27f",
                            500: "#17c964",
                            600: "#13a653",
                            700: "#0f8341",
                            800: "#0b5f30",
                            900: "#073c1e",
                            foreground: "#000",
                            DEFAULT: "#17c964"
                        },
                        warning: {
                            50: "#fef4e4",
                            100: "#fce4bd",
                            200: "#fad497",
                            300: "#f9c571",
                            400: "#f7b54a",
                            500: "#f5a524",
                            600: "#ca881e",
                            700: "#9f6b17",
                            800: "#744e11",
                            900: "#4a320b",
                            foreground: "#000",
                            DEFAULT: "#f5a524"
                        },
                        danger: {
                            50: "#fee1eb",
                            100: "#fbb8cf",
                            200: "#f98eb3",
                            300: "#f76598",
                            400: "#f53b7c",
                            500: "#f31260",
                            600: "#c80f4f",
                            700: "#9e0c3e",
                            800: "#73092e",
                            900: "#49051d",
                            foreground: "#000",
                            DEFAULT: "#f31260"
                        },
                        background: "#ffffff",
                        foreground: "#000000",
                        content1: { DEFAULT: "#ffffff", foreground: "#000" },
                        content2: { DEFAULT: "#f4f4f5", foreground: "#000" },
                        content3: { DEFAULT: "#e4e4e7", foreground: "#000" },
                        content4: { DEFAULT: "#d4d4d8", foreground: "#000" },
                        focus: "#0084c7",
                        overlay: "#000000"
                    }
                },
                dark: {
                    colors: {
                        default: {
                            50: "#141e2e",
                            100: "#1a2738",
                            200: "#223344",
                            300: "#2d4050",
                            400: "#3a4f63",
                            500: "#65656b",
                            600: "#8c8c90",
                            700: "#b2b2b5",
                            800: "#d9d9da",
                            900: "#ffffff",
                            foreground: "#fff",
                            DEFAULT: "#3f3f46"
                        },
                        primary: {
                            50: "#003d67",
                            100: "#004d7f",
                            200: "#005d97",
                            300: "#0070b0",
                            400: "#0084c7",
                            500: "#1798db",
                            600: "#3aaced",
                            700: "#5dc0fc",
                            800: "#80d0ff",
                            900: "#a3dfff",
                            foreground: "#fff",
                            DEFAULT: "#0084c7"
                        },
                        secondary: {
                            50: "#0a1820",
                            100: "#0d1f2a",
                            200: "#102835",
                            300: "#145080",
                            400: "#1c4659",
                            500: "#2a5d74",
                            600: "#3a758f",
                            700: "#1a5570",
                            800: "#1f6382",
                            900: "#4b8aaa",
                            foreground: "#fff",
                            DEFAULT: "#1c4659"
                        },
                        success: {
                            50: "#073c1e",
                            100: "#0b5f30",
                            200: "#0f8341",
                            300: "#13a653",
                            400: "#17c964",
                            500: "#40d27f",
                            600: "#68dc9a",
                            700: "#91e5b5",
                            800: "#b9efd1",
                            900: "#e2f8ec",
                            foreground: "#000",
                            DEFAULT: "#17c964"
                        },
                        warning: {
                            50: "#4a320b",
                            100: "#744e11",
                            200: "#9f6b17",
                            300: "#ca881e",
                            400: "#f5a524",
                            500: "#f7b54a",
                            600: "#f9c571",
                            700: "#fad497",
                            800: "#fce4bd",
                            900: "#fef4e4",
                            foreground: "#000",
                            DEFAULT: "#f5a524"
                        },
                        danger: {
                            50: "#49051d",
                            100: "#73092e",
                            200: "#9e0c3e",
                            300: "#c80f4f",
                            400: "#f31260",
                            500: "#f53b7c",
                            600: "#f76598",
                            700: "#f98eb3",
                            800: "#fbb8cf",
                            900: "#fee1eb",
                            foreground: "#000",
                            DEFAULT: "#f31260"
                        },
                        background: "#080e1a",
                        foreground: "#f0f0f0",
                        content1: { DEFAULT: "#1a2332", foreground: "#f0f0f0" },
                        content2: { DEFAULT: "#212d3d", foreground: "#f0f0f0" },
                        content3: { DEFAULT: "#2a3a4e", foreground: "#f0f0f0" },
                        content4: { DEFAULT: "#354861", foreground: "#f0f0f0" },
                        focus: "#053246",
                        overlay: "#ffffff"
                    }
                }
            },
            layout: {
                disabledOpacity: "0.5"
            }
        })
    ]
};