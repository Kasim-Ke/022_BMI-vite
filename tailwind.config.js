/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "748px",
      // => @media (min-width: 768px) { ... }

      lg: "1324px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
