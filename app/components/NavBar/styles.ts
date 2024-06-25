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
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  height: "100%",
  padding: "0 1rem",
};
