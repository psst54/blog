import { COLOR } from "~/constants/color";

export const container = {
  display: "flex",
  flexDirection: "column" as const,
};

export const linkStyle = {
  textDecoration: "none",
  color: "initial",
};

export const divideLine = {
  border: "none",
  borderBottom: `1px solid ${COLOR.BORDER.LIGHT}`,
};
