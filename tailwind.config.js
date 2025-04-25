// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // adjust this based on your folder structure
    theme: {
      extend: {
        keyframes: {
          'spin-reverse': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(-360deg)' },
          },
        },
        animation: {
          'spin-reverse-slow': 'spin-reverse 5s linear infinite',
        },
      },
    },
    plugins: [],
  };
  