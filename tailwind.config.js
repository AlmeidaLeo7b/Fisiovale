/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Criamos o apelido 'libre' para usar a fonte nova
        'libre': ['"Libre Baskerville"', 'serif'],
      }
    },
  },
  plugins: [],
}