import { COLOR } from "@constants/color";

export const container = {
  width: "100%",

  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",

  padding: "1.5rem 0",

  "&:hover": {
    h2: { color: COLOR.TEXT.LINK },
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

export const title = {
  wordBreak: "keep-all" as const,
};

export const subTitle = {
  color: COLOR.TEXT.SECONDARY,
  wordBreak: "keep-all" as const,
};
