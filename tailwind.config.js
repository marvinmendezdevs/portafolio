/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*'],
  theme: {
    extend: {
      colors: {
        'primary': '#252440',
        'secondary': '#2d2c55',
        'linkedin': '#0077B5',
        'youtube': '#c4302b',
        'tiktok': '#c4302b', /* Solo es uno de los dos colores */
        'whatsapp': '#25d366',
      },
      gridTemplateColumns: {
        'layout': '3fr 1fr'
      }
    },
  },
  plugins: [],
}

