/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#000000',
        midnight: '#0F172A',
        pearl: '#FFFFFF',
        glamPink: '#FF4D8D',
        royalViolet: '#8B5CF6',
        glass: 'rgba(255,255,255,0.12)'
      },
      fontFamily: {
        inter: ['Inter_400Regular'],
        poppins: ['Poppins_700Bold']
      }
    }
  },
  plugins: []
};
