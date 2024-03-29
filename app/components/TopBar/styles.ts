import { COLOR } from "~/constants/color";
import { SIZE, mq } from "~/constants/size";

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
    background: COLOR.BACKGROUND.STANDARD,

    borderBottom: `2px solid ${COLOR.BORDER.STANDARD}`,

    zIndex: 1,
  },
};
