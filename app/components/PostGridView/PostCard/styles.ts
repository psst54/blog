import { COLOR } from "~/constants/color";
import { SIZE } from "~/constants/size";
import { CARD_SIZE } from "../styles";

export const container = {
  position: "relative" as const,
  display: "flex",
  flexDirection: "column" as const,

  width: CARD_SIZE,
  height: CARD_SIZE,
  padding: "0.75rem 0.8rem",

  background: COLOR.BACKGROUND.REVERSE,
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

  overflow: "auto",
  zIndex: 1,
};

export const titleArea = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.25rem",
};

export const text = {
  color: COLOR.TEXT.REVERSE,
  fontSize: "1.25rem",
  wordBreak: "keep-all" as const,
};

export const subText = {
  ...text,
  fontSize: "1rem",
  color: COLOR.TEXT.LIGHT,
};
