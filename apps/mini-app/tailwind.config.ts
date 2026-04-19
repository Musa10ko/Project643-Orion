import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
                extend: {
                    colors: {
                        primary: "#50A7EA", // Green for the main action
                        secondary: "#8B5CF6", // Purple accent
                        dark: {
                            900: "#141414", // Deep background
                            800: "#1A1A1E", // Secondary bg
                            700: "#27272D", // Card bg
                        },
                        light: {
                            50: "#FAFAFA",
                            100: "#F3F4F6",
                            200: "#E5E7EB",
                        }
                    },
                    animation: {
                      'spin-slow': 'spin 5s linear infinite',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    backgroundImage: {
                        'hero-gradient': 'radial-gradient(circle at center, rgba(76, 175, 80, 0.15) 0%, rgba(15, 15, 17, 0) 70%)',
                        'portal-glow': 'conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.05) 100%)',
                    }
                },
            },
  plugins: [],
};

export default config;