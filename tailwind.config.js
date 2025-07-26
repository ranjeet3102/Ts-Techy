/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
safelist: [
  { pattern: /from-(green|yellow|blue|purple|red|sky|pink|indigo|rose)-\d{3}/ },
  { pattern: /to-(emerald|orange|blue|indigo|pink|rose)-\d{3}/ },
  { pattern: /bg-gradient-to-(r|br)/ },
],

  theme: {
    extend: {
      keyframes: {
         animation: {
    'glow-pulse': 'pulse 4s ease-in-out infinite',
  },
        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },
      },
       animation: {
        'glow-pulse': 'pulse 3s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
        'border-spin': 'spin 4s linear infinite'
      },
    },
  },
  plugins: [],
}

