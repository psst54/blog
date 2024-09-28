import { COLOR } from "@constants/color";

export const container = {
  display: "flex",
  width: "100%",
  overflow: "auto",
  gap: "1rem",

  margin: "1rem 0",
};

export const linkStyle = {
  textDecoration: "none",
  color: "initial",
};

export const divideLine = {
  border: "none",
  borderBottom: `1px solid ${COLOR.BORDER.LIGHT}`,
};
