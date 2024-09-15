/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,  // Disable Tailwind's default resets
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
