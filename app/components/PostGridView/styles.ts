import { COLOR } from "@constants/color";
import { mq } from "~/constants/size";

export const container = {
  display: "flex",
  gap: "1rem",

  width: "100%",
  marginTop: "1rem",
  padding: "0 1rem",

  overflow: "auto",

  "&::-webkit-scrollbar-thumb": {
    background: "transparent",
  },

  "&:hover": {
    "&::-webkit-scrollbar-thumb": {
      background: COLOR.BORDER.LIGHT,
    },
  },

  [mq[1]]: { padding: "0 0.5rem" },
};

export const linkStyle = {
  color: "initial",
  textDecoration: "none",
};

export const divideLine = {
  border: "none",
  borderBottom: `1px solid ${COLOR.BORDER.LIGHT}`,
};
