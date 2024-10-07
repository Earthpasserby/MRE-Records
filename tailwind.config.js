/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // You can replace 'sans' with any name you'd like to call it
        serif: ["Georgia", "serif"], // Add more font types if necessary
      },
    },
  },
  plugins: [],
};
