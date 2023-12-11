/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './tabs/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      // Set the default color mode to 'light'
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },

      },
      // Override text color to always be light
      textColor: {
        light: '#ffffff', // Set the text color to white
      },
    },
  },
  plugins: [],
};
