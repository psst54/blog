import { size, mq } from "@styles/size";

export const container = {
  width: size.CATEGORY_WIDTH,
  flexShrink: 0,

  paddingTop: "1rem",

  [mq[0]]: {
    display: "none",
  },
};

export const categoryWrapper = {
  position: "fixed" as "fixed",
  width: size.CATEGORY_WIDTH,
  height: "calc(100dvh - 1rem - 2rem)",
};
