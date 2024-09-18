import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
    },
    extend: {
      scale: {
        102: "1.02",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
        5: "5px",
        10: "10px",
      },
    },
  },
  plugins: [daisyui],
  corePlugins: {
    fontFamily: false,
  },
};
