import { COLOR } from "~/constants/color";
import { SIZE, mq } from "~/constants/size";

export const navbar = {
  position: "fixed" as const,
  top: 0,

  width: "100%",
  height: SIZE.TOP_NAV_HEIGHT,
  background: COLOR.BACKGROUND.STANDARD,

  zIndex: 1,

  boxShadow: "0 0 1rem " + COLOR.BORDER.LIGHT,
};

export const container = {
  display: "flex",
  width: "100%",
  height: "100%",

  alignItems: "center",
  justifyContent: "space-between",
};

export const pcContainer = {
  [mq[0]]: { display: "none" },

  display: "flex",

  padding: "0 1rem",
};

export const mobileContainer = {
  display: "none",

  [mq[0]]: {
    display: "flex",

    padding: "0 1rem",
  },
};
