/** @type {import('tailwindcss').Config} */
module.exports = {
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
        navColor: "#FF9900",
        heroTextColor: "#DFAF26",
        boxColorBlack: "#1D1D1B",
      },
      backgroundImage: {
        "hero-image": "url('/hero.png')",
        "layer-image": "url('/Layer 2.png')",
        "review-layer-image": "url('/review-layer.png')",
        "custom-gradient":
          "linear-gradient(360deg, #DFAF26 9%, rgba(223, 175, 38, 0) 100%)",
        "box-gradient": " linear-gradient(360deg, #292E36 0%, #1D1D1B 44.5%)",
        "franchising-box-gradient":
          " linear-gradient(180deg, #1D1D1B 0%, #44443F 100%)",
        "buttons-hero-background":
          "linear-gradient(360deg, #1d1d1b 62.01%, rgba(29, 29, 27, 0) 100%)",
      },
      boxShadow: {
        "custom-shadow": "-27px -21px 20.1px 0px #00000040",
        "hype-custom-shadow": "7.3px 9.12px 0px 0px #795F15",
      },
    },
  },
  plugins: [],
};
