import { size, mq } from "@styles/size";

export const container = {
  width: "100%",
  height: "100%",
  padding: "1rem 1.5rem",

  wordBreak: "break-word" as "break-word",

  [mq[0]]: {
    paddingTop: `calc(${size.TOPBAR_HEIGHT} + 1rem)`,
  },

  [mq[1]]: {
    padding: "1rem",
    paddingTop: `calc(${size.TOPBAR_HEIGHT} + 1rem)`,
  },
};
