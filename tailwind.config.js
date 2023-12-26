/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./public/assets/AboutUs/Group33745.png')",
        'card-img1':"url('/public/assets/images/homepage/Maskgroup2.png')",
        'carve-img':"url('/public/assets/images/homepage/photo-handsome-male-student-his-female-groupmate-demonstrates-okay-gesture-agree-with-something_1-removebg-preview 1.png')",
        'card-img2':"url('/public/assets/images/homepage/Rectangle1355.png')",

        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [ require("flowbite/plugin")],
}
