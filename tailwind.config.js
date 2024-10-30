/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",        // This includes all HTML and TypeScript files inside src folder
    "./src/app/**/*.{html,ts}",
    "./src/app/header/**/*.{html,ts}"    // Specifically for files in app folder (e.g., app.component.html)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

