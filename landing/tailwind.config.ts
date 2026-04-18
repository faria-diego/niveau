import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1A1714",
        cream: "#F5F1E8",
        "cream-dark": "#EDE8DE",
        rust: "#D63B22",
        "rust-dark": "#B52D17",
        muted: "#7A7068",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["'DM Mono'", "var(--font-geist-mono)", "monospace"],
        serif: ["'Outfit'", "system-ui", "sans-serif"],
      },
      borderColor: {
        DEFAULT: "rgba(26, 23, 20, 0.09)",
      },
      opacity: {
        "8": "0.08",
      },
    },
  },
  plugins: [],
};

export default config;
