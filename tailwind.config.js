/** @type {import('tailwindcss').Config} */

import { DefaultColors } from "tailwindcss/types/generated/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      "basic-0": "#FFFFFF",
      "basic-1": "#F7F7F7",
      "basic-2": "#EAEAEA",
      "basic-3": "#DBDBDB",
      "text-0": "#979797",
      "text-1": "#5C5C5C",
      "text-2": "#333333",
      "text-3": "#000000",
      "extra-0": "#FFB038",
      "extra-1": "#E56D20",
      "extra-2": "#1E2724",
      "cta-button": "#3C8629",
      "extra-4": "#6ED26C",
      "extra-5": "#285446",
      "extra-6": "#F9F1D7",
      "extra-7": "#F6E4B3",
      "transparent-logo": "#FFFFFFB2",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    fontSize: {
      h1_m: ["2rem", { lineHeight: "2.5rem" }],
      h2_m: ["1.5rem", { lineHeight: "1.75rem" }],
      h3_m: ["1.5rem", { lineHeight: "1.75rem" }],
      b1_m: ["1.25rem", { lineHeight: "1.5rem" }],
      b2_m: ["1rem", { lineHeight: "1.25rem" }],
      b3_m: ["0.875rem", { lineHeight: "1.125rem" }],
      b4_m: ["0.75rem", { lineHeight: "1rem" }],
      b5_m: ["0.625rem", { lineHeight: "0.875rem" }],
    },
    boxShadow: {
      upper: "0px -6px 36px 0px #0000001A",
      "upper-xl": "0px -36px 36px 0px #0000001A",
    },
    extend: {
      margin: {
        beforeContent: "40px",
      },
      padding: {
        beforeContent: "40px",
      },
    },
  },
  plugins: [],
};
