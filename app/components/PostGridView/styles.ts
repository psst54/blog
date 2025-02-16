import { COLOR } from "@constants/color";
import { mq } from "~/constants/size";

export const CARD_SIZE = "15rem";

export const container = {
  display: "flex",
  gap: "0.5rem",

  width: "100%",
  marginTop: "1rem",
  padding: "0 1rem",

  overflowY: "hidden" as const,
  overflowX: "auto" as const,

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
