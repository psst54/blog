import { COLOR } from "@constants/color";
import { SIZE } from "@constants/size";

export const container = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",

  width: "14rem",
  height: "18rem",

  border: `${SIZE.BORDER.POST_CARD} solid black`,
  borderRadius: SIZE.BORDER_RADIUS.POST_CARD,

  "&:hover": {
    h2: { color: COLOR.TEXT.LINK },
  },
};

export const textArea = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.5rem",
  margin: "1rem",

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
