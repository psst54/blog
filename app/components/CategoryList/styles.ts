import { COLOR } from "~/constants/color";
import { mq } from "~/constants/size";

export const container = {
  display: "flex",

  width: "100%",
  maxHeight: "100%",
  padding: "0.5rem",
  paddingRight: 0,

  border: `2px solid ${COLOR.BORDER.STANDARD}`,
  borderRadius: "1rem",
  boxShadow: `6px 6px 0px 0px ${COLOR.PRIMARY.STANDARD}`,

  [mq[0]]: {
    border: "none",
    boxShadow: "none",
  },
};

export const inner = {
  flexGrow: 1,
  overflow: "auto",
  width: "100%",
  maxHeight: "100%",
  paddingRight: "0.5rem",
};
