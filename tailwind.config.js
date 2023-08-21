module.exports = {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-full': '#8B13F4',
        'dark-100': '#000405',
        'dark-200': '#00070A',
        'dark-300': '#000204',
        'dark-400': '#000A0F',
        'dark-500': '#000C12',
        'dark-600': '#00111A',
        'dark-700': '#001119',
        'dark-800': '#0D161B',
        'dark-900': '#0D1D25',
        'dark-1000': '#192227',
        "light-100": "#FFFFFF",
        "light-200": "#FFFAF1",
        "light-300": "#E1E1E6",
        "light-400": "#C4C4CC",
        "light-500": "#7C7C8A",
        "light-600": "#76797B",
        "light-700": "#4D585E",
      },
    }
  },
  variants: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
};
