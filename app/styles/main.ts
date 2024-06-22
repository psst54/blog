import { COLOR } from "~/constants/color";
import { SIZE, mq } from "~/constants/size";

export const background = {
  display: "flex",
  width: "100%",
  height: "100%",
  background: COLOR.BACKGROUND.STANDARD,

  paddingTop: SIZE.TOP_NAV_HEIGHT,
};

export const categoryContainer = {
  display: "flex",
  width: "100%",
  background: "transparent",
};
export const contentContainer = {
  flexGrow: 1,
  width: "0px",
  display: "flex",
  flexDirection: "column" as const,

  background: "transparent",
};

export const recentPostsConatiner = {
  padding: "1.5rem",

  width: "100%",
  overflow: "auto",

  [mq[0]]: {
    paddingTop: `calc(${SIZE.TOPBAR_HEIGHT} + 1rem)`,
  },

  [mq[1]]: {
    padding: "1rem",
    paddingTop: `calc(${SIZE.TOPBAR_HEIGHT} + 1rem)`,
  },
};
export const title = {
  marginBottom: "1rem",
  fontSize: "2rem",
  fontWeight: 800,
};
