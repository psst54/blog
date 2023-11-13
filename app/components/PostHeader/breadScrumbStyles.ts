import { color } from "@styles/color";

export const Container = {
  display: "flex",
  gap: "0.5rem",
  marginBottom: "0.5rem",
  alignItems: "center",
};

export const ItemContainer = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  overflow: "hidden",
};

export const Text = {
  textDecoration: "none",
  wordBreak: "keep-all" as "keep-all",
  overflow: "hidden",
  whiteSpace: "nowrap" as "nowrap",
  textOverflow: "ellipsis",

  "&:hover": {
    color: color.secondary.standard,
  },
};
