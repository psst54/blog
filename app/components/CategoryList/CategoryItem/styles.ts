import { COLOR } from "~/constants/color";

export const ItemContainer = (indent: number) => {
  return {
    display: "flex",
    alignItems: "center",

    width: "100%",
    height: "2.25rem",
    paddingRight: "0.5rem",
    paddingLeft: `calc(${indent} * 1rem + 0.2rem)`,

    borderRadius: "2rem",

    color: COLOR.TEXT.STANDARD,
    fontWeight: 500,

    "&:hover": {
      background: COLOR.PRIMARY.VERY_LIGHT + "80", // 50%
    },
  };
};

export const Title = {
  flexGrow: 1,
  marginLeft: "0.1rem",

  overflow: "hidden",
  whiteSpace: "nowrap" as const,
  textOverflow: "ellipsis",
  wordBreak: "break-all" as const,

  color: "inherit",
};

export const ToggleButton = {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "1.8rem",
  height: "1.8rem",
  background: "transparent",

  borderRadius: "100%",
  border: "none",
  outline: "none",

  "&:hover": {
    background: COLOR.PRIMARY.LIGHT + "80", // 50%
  },
  cursor: "pointer",
};
