module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'spec': '999px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@themesberg/flowbite/plugin')
  ],
}
