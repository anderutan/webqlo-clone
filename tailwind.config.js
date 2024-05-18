const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      screens: {
        mobile: '390px',
        tablet: '1024px',
        laptop: '1280px',
      },
      colors: {
        'text-primary': '#1D202F',
        'title-primary': '#1D202F',
        'btn-primary': '#1D202F',
        'btn-hover': '#A5B4FC',
        'btn-subscribe-primary': '#434c80',
        'footer-icon-primary': '#999',
        'footer-icon-hover': '#212529',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
