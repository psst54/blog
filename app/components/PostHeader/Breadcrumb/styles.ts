import { COLOR } from "@constants/color";

export const container = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  height: "1.5rem",
};

export const itemContainer = {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  overflow: "hidden",
};

export const breadcrumbText = {
  textDecoration: "none",
  wordBreak: "keep-all" as const,
  overflow: "hidden",
  whiteSpace: "nowrap" as const,
  textOverflow: "ellipsis",

  "&:hover": {
    color: COLOR.SECONDARY.STANDARD,
  },
};
