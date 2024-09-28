import { COLOR } from "@constants/color";

export const container = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  gap: "1rem",

  width: "14rem",
  height: "18rem",

  border: "3px solid black",
  borderRadius: "1rem",

  "&:hover": {
    h2: { color: COLOR.TEXT.LINK },
  },
};

export const textArea = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",
  padding: "1rem",

  overflow: "auto",
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
