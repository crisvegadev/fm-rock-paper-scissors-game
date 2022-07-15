/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Scissors-Gradient-1': 'hsl(39, 89%, 49%)',
        'Scissors-Gradient-2': 'hsl(40, 84%, 53%)',
        'Paper-Gradient-1': 'hsl(230, 89%, 62%)',
        'Paper-Gradient-2': 'hsl(230, 89%, 65%)',
        'Rock-Gradient-1': 'hsl(349, 71%, 52%)',
        'Rock-Gradient-2': 'hsl(349, 70%, 56%)',
        'Lizard-Gradient-1': 'hsl(261, 73%, 60%)',
        'Lizard-Gradient-2': 'hsl(261, 72%, 63%)',
        'Cyan-Gradient-1': 'hsl(189, 59%, 53%)',
        'Cyan-Gradient-2': 'hsl(189, 58%, 57%)',
        'Radial-Gradient-1': 'hsl(214, 47%, 23%)',
        'Radial-Gradient-2': 'hsl(237, 49%, 15%)',
        'Dark-text': 'hsl(229, 25%, 31%)',
        'Score-Text': 'hsl(229, 64%, 46%)',
        'Header-Outline': 'hsl(217, 16%, 45%)'
      },
      borderWidth: {
        16: '32px',
      },
      fontFamily: {
        barlow: ['Barlow Semi Condensed', 'sans-serif'],
      },
      screens: {
        'xs': '380px',
      }
    },
  },
  plugins: [],
}
