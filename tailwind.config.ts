import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        main: "8px 8px 0px 0px #000",
      },
      colors: {
        accent: "#F4D04E",
        black: "#111111",
        gray: "#7F7F7F",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("hocus-visible", ["&:hover", "&:focus-visible"]);
    }),
  ],
} satisfies Config;
