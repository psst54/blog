import { COLOR } from "~/constants/color";
import { mq } from "~/constants/size";

export const link = {
  textDecoration: "none",

  "&:hover": {
    "*": {
      color: COLOR.TEXT.LINK,
    },
  },
};

// ---------- header style ----------

export const header = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",

  padding: "0 1rem",

  [mq[1]]: {
    padding: "0 0.5rem",
  },
};

export const title = {
  display: "flex",
  flex: 1,
  gap: "0.5rem",
  alignItems: "center",

  fontSize: "1.75rem",
  fontWeight: 900,
};

const block = {
  display: "flex",
  alignItems: "center",

  height: "3rem",
  padding: "0 1rem",
  borderRadius: "1.5rem",
};

export const filledBlock = {
  ...block,

  background: COLOR.TEXT.STANDARD,
  color: COLOR.TEXT.REVERSE,
};

export const borderedBlock = {
  ...block,

  border: `2px solid ${COLOR.TEXT.STANDARD}`,
};

export const divideLine = {
  flex: 1,
  height: "3px",
  background: "black",
};

export const image = {
  width: "3rem",
  height: "3rem",

  objectFit: "cover" as const,
  borderRadius: "1.5rem",
};

// ---------- header style ----------
