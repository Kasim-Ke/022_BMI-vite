/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "580px",
      // => @media (min-width: ) { ... }

      md: "680px",
      // => @media (min-width: ) { ... }}
       lg: "1324px",
      // => @media (min-width: ) { ... }
    },
  },
  plugins: [],
};
