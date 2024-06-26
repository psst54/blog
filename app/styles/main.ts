import { COLOR } from "~/constants/color";
import { SIZE, mq } from "~/constants/size";

export const background = {
  display: "flex",
  justifyContent: "center",

  width: "100%",
  minHeight: "100vh",
  background: COLOR.BACKGROUND.STANDARD,

  paddingTop: SIZE.TOP_NAV_HEIGHT,
};

export const contentContainer = {
  display: "flex",
  flexDirection: "column" as const,

  width: "100%",
  maxWidth: SIZE.CONTENT_MAX_WIDTH,
  background: "transparent",
  padding: "1.5rem",

  [mq[1]]: {
    padding: "1rem",
  },
};

export const title = {
  marginBottom: "1rem",
  fontSize: "2rem",
  fontWeight: 800,
};
