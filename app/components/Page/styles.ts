import { COLOR } from "@constants/color";
import { SIZE, mq } from "@constants/size";

export const background = {
  display: "flex",
  justifyContent: "center",

  width: "100%",
  minHeight: "100vh",
  background: COLOR.BACKGROUND.STANDARD,

  paddingTop: SIZE.TOP_NAV_HEIGHT,
};

export const contentWrapper = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "1rem",

  width: "100%",
  maxWidth: "1280px",
  padding: "1rem 0",

  [mq[0]]: {
    maxWidth: "100%",
  },

  [mq[1]]: {
    padding: "0.5rem 0",
  },
};
