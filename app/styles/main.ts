import { color } from "@styles/color";
import { size, mq } from "@styles/size";

export const background = {
  display: "flex",
  width: "100%",
  height: "100%",
  background: color.background.standard,
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
    paddingTop: `calc(${size.TOPBAR_HEIGHT} + 1rem)`,
  },

  [mq[1]]: {
    padding: "1rem",
    paddingTop: `calc(${size.TOPBAR_HEIGHT} + 1rem)`,
  },
};
export const title = {
  marginBottom: "1rem",
  fontSize: "2rem",
  fontWeight: 800,
};
