import { mq } from "@styles/size";

const POST_WIDTH = "18rem";

export const Container = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, ${POST_WIDTH})`,
  gap: "1.5rem",

  [mq[0]]: {
    gridTemplateColumns: `repeat(auto-fill, minmax(${POST_WIDTH}, 1fr))`,
  },
  [mq[1]]: {},
};

export const LinkStyle = { textDecoration: "none", color: "initial" };
