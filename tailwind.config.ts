import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": "#6a6aca",
        "secondary": "#FFEA95",
        "dark": "#3e3746",
        "black": "#3e3746"
      },
      boxShadow: {
        "input-active" : "0px 5px 20px 2px rgba(217, 201, 255, 0.30)"
      },
    },
  },
  plugins: [],
};
export default config;
