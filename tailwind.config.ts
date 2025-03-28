import type { Config } from "tailwindcss";

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const allowedSpacing = [2, 4, 8, 12, 16, 20, 24, 32];

const allowedBorderRadius = [0, 2, 4, 6, 8, 12, 16, 20, 24, 32];

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        regular: "400",
      },

      spacing: {
        ...allowedSpacing.reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px);
          return acc;
        }, {} as Record<string, string>),
        content: "77.5rem",
      },

      borderRadius: {
        ...allowedBorderRadius.reduce((acc, px) => {
          acc[`${px}pxr`] = pxToRem(px);
          return acc;
        }, {} as Record<string, string>),
      },
    },
  },
} satisfies Config;
