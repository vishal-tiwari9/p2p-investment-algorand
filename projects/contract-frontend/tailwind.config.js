/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Saari React files cover honi chahiye
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // DaisyUI yahan register hota hai
  ],
  // DaisyUI Config (Optional but recommended)
  daisyui: {
    themes: ["dark", "light", "cupcake"], // Tum "dark" default rakh sakte ho
  },
}