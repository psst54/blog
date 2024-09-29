import { COLOR } from "@constants/color";
import { background } from "../Page/styles";

export const container = {
  display: "flex",
  gap: "1rem",

  width: "100%",
  margin: "1rem 0",

  overflow: "auto",

  "&::-webkit-scrollbar-thumb": {
    background: "transparent",
  },

  "&:hover": {
    "&::-webkit-scrollbar-thumb": {
      background: COLOR.BORDER.LIGHT,
    },
  },
};

export const linkStyle = {
  color: "initial",
  textDecoration: "none",
};

export const divideLine = {
  border: "none",
  borderBottom: `1px solid ${COLOR.BORDER.LIGHT}`,
};
