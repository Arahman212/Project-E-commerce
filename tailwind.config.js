/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "custom-banner":"URL('/2nd section/banner.svg')",
        "custom-Ad":"URL('/6th section/picture.svg')",
        "custom-4thsection-picture":"URL('/4th section/mainbg.png')",
        "custom-5thsection-picture":"URL('/5th section/mainbg.png')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
