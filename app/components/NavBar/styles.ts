import { COLOR } from "@constants/color";
import { SIZE } from "@constants/size";

export const navbar = {
  position: "fixed" as const,
  top: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  height: SIZE.TOP_NAV_HEIGHT,
  background: COLOR.BACKGROUND.STANDARD,
  padding: "0 1rem",

  zIndex: 1,

  boxShadow: "0 0 1rem " + COLOR.BORDER.LIGHT,
};
