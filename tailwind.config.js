/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import { default as typo } from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8B0000",

          secondary: "#b22222",

          accent: "#ff4500",

          neutral: "#4b0082",

          "base-100": "#faf5f5",
          "primary-content": "#F4EDE4", // Bright beige
          "secondary-content": "#D6A4A4", // Muted salmon
          "accent-content": "#FF7043", // Matches accent for highlights
          "neutral-content": "#A89988", // Warm gray
          "base-content": "#F5F0EB", // Pale pinkish white

          info: "#8b4513",

          success: "#228b22",

          warning: "#ffa07a",

          error: "#b22222",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        lightBg: "#F4EDE4", // Light mode background
        darkBg: "#2C1E1E", // Dark mode background
      },
    },
  },
  plugins: [typo, daisyui],
};
