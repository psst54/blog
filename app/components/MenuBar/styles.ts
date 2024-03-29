import { mq } from "~/constants/size";

const MENU_WIDTH = "6rem";

export const Container = {
  flexShrink: 0,
  width: MENU_WIDTH,
  height: "100dvh",
  paddingBottom: "1rem",

  [mq[0]]: {
    width: 0,
  },
};

export const Inner = {
  position: "fixed",
  display: "flex",
  flexDirection: "column" as "column",
  gap: "1rem",
  alignItems: "center",

  width: "MENU_WIDTH",
  height: "100%",
  padding: "1rem",

  overflowY: "auto",

  [mq[0]]: {
    display: "none",
    width: "1rem",
  },
};
