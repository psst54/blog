import { mq } from "~/constants/size";

const POST_WIDTH = "18rem";

export const container = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, ${POST_WIDTH})`,
  gap: "1.5rem",
  paddingBottom: "1rem",

  [mq[0]]: {
    gridTemplateColumns: `repeat(auto-fill, minmax(${POST_WIDTH}, 1fr))`,
  },
  [mq[1]]: {},
};

export const linkStyle = { textDecoration: "none", color: "initial" };
