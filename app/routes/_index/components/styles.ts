import { COLOR } from "@constants/color";

export const link = {
  textDecoration: "none",

  outline: "none",

  "&:hover": {
    "*": {
      color: COLOR.TEXT.LINK,
    },
  },
};

export const header = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

export const title = {
  display: "flex",
  flex: 1,
  gap: "0.5rem",
  alignItems: "center",

  fontSize: "1.75rem",
  fontWeight: 900,
};

export const border = {
  display: "flex",
  alignItems: "center",

  height: "3rem",
  padding: "0 1rem",
  background: COLOR.TEXT.STANDARD,

  color: COLOR.TEXT.REVERSE,

  borderRadius: "1.5rem",
};

export const line = {
  flex: 1,
  height: "3px",
  background: "black",
};

export const img = {
  width: "3rem",
  height: "3rem",

  objectFit: "cover" as const,
  borderRadius: "1.5rem",
};
