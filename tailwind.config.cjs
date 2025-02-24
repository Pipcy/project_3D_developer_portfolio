/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // primary: "#121212",
        // secondary: "#aaa6c3",
        // tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // textLight: '#ffffff', // text color for dark mode
        // textDark: '#e5e7eb', // .. light ..
        
        // Light mode colors
        primary: "#ffffff", // Light background color
        secondary: "#f0f0f0", // Light background for secondary
        tertiary: "#e5e7eb", // Light tertiary color
        textLight: "#000000", // Text color for light mode

        // Dark mode colors
        'primary-dark': "#121212", // Dark background color
        'secondary-dark': "#1f1f1f", // Dark background for secondary
        'tertiary-dark': "#151030", // Dark tertiary color
        'text-dark': "#e5e7eb", // Text color for dark mode
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg-face.png')",
      },
    },
  },
  plugins: [],
};

