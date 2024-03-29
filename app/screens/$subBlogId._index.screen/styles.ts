import { SIZE, mq } from "@styles/size";

export const container = {
  width: "100%",
  height: "100%",
  padding: "1rem 1.5rem",

  wordBreak: "break-word" as const,

  [mq[0]]: {
    paddingTop: `calc(${SIZE.TOPBAR_HEIGHT} + 1rem)`,
  },

  [mq[1]]: {
    padding: "1rem",
    paddingTop: `calc(${SIZE.TOPBAR_HEIGHT} + 1rem)`,
  },
};
