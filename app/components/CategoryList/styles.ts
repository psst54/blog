import { color } from "@styles/color";
import { mq } from "@styles/size";

export const Container = {
  display: "flex",

  width: "100%",
  maxHeight: "100%",
  padding: "0.5rem",
  paddingRight: 0,

  border: `2px solid ${color.border.standard}`,
  borderRadius: "1rem",
  boxShadow: `6px 6px 0px 0px ${color.primary.standard}`,

  [mq[0]]: {
    border: "none",
    boxShadow: "none",
  },
};

export const Inner = {
  flexGrow: 1,
  overflow: "auto",
  width: "100%",
  maxHeight: "100%",
  paddingRight: "0.5rem",
};
