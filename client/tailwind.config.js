/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#6F73EE',
        'light-purple': '#8185F9',
        orange: '#F3A712',
        'light-orange': '#FAB836',
        black: '#282739',
        green: '#75D14A'
      }
    }
  },
  plugins: []
}
