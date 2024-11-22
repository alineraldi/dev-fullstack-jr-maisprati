/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js, jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fundo': "#F6F1ED",
        'branco': "#ffffff",
        'preto': "#000000",
        'verde1': '#1B1E18',
        'verde2': '#121410',

        'fundo-dark': '#121410',
        'branco-dark': '#F6F1ED',
        'preto-dark': '#FFFFFF',
        'verde1-dark': '#F9F9F9'
      },

      fontFamily: {
        sans: ['karma', 'sans-serif'],
        serif: ['Older Dictator', 'serif']
      }
    },
  },
  plugins: [],
}

