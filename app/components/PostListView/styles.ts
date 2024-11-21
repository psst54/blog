import { mq } from "~/constants/size";

export const container = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  columnGap: "3rem",

  [mq[1]]: {
    gridTemplateColumns: "1fr",
  },
};

export const linkStyle = {
  textDecoration: "none",
  color: "initial",
};
