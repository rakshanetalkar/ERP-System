/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "my-img":"url(https://wallpapercave.com/wp/wp10233863.jpg)",
      },
    },
  },
  plugins: [],
}