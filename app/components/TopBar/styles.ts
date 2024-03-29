import { color } from "@styles/color";
import { SIZE, mq } from "@styles/size";

export const Container = {
  display: "none",

  [mq[0]]: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    width: "100%",
    height: SIZE.TOPBAR_HEIGHT,
    padding: "0 1rem",
    background: color.background.standard,

    borderBottom: `2px solid ${color.border.standard}`,

    zIndex: 1,
  },
};
