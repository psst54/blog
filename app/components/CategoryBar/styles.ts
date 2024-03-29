import { SIZE, mq } from "@styles/size";

export const container = {
  width: SIZE.CATEGORY_WIDTH,
  flexShrink: 0,

  paddingTop: "1rem",

  [mq[0]]: {
    display: "none",
  },
};

export const categoryWrapper = {
  position: "fixed" as const,
  width: SIZE.CATEGORY_WIDTH,
  height: "calc(100dvh - 1rem - 2rem)",
};
