import { COLOR } from "~/constants/color";
import { mq } from "~/constants/size";

export const container = {
  width: "100%",

  display: "flex",
  gap: "1rem",

  padding: "1rem 0",

  "&:hover": {
    h2: { color: COLOR.TEXT.LINK },
  },

  [mq[1]]: {
    gap: "0.5rem",
  },
};

export const textArea = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",
};

export const titleArea = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.25rem",
};

export const text = {
  wordBreak: "keep-all" as const,
};

export const subText = {
  ...text,
  color: COLOR.TEXT.SECONDARY,
};
