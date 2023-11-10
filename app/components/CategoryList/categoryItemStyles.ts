import { color } from "@styles/color";

export const ItemContainer = (indent: number) => {
  return {
    display: "flex",
    alignItems: "center",

    width: "100%",
    height: "2.25rem",
    paddingRight: "0.5rem",
    paddingLeft: `calc(${indent} * 1rem + 0.2rem)`,

    borderRadius: "2rem",
  };
};

export const Title = {
  flexGrow: 1,
  marginLeft: "0.1rem",
  fontSize: "1rem",
  fontWeight: 400,

  overflow: "hidden",
  whiteSpace: "nowrap" as "nowrap",
  textOverflow: "ellipsis",
  wordBreak: "break-all" as "break-all",
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

  "&:hover": { background: color.primary.shadow + "B2" },
  cursor: "pointer",
};
