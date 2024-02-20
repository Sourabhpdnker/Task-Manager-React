/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "40px"],
      "4xl": ["36px", "50px"],
      "5xl": ["50px", "60px"],
      "6xl": ["65px", "60px"],
      "7xl": ["80px", "60px"],
      "8xl": ["96px", "106px"],
    },
    extend: {},
  },
  plugins: [],
}

// npm install - D tailwindcss
// npx tailwindcss init
//npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p