import { COLOR } from "~/constants/color";

export const Title = {
  // fontSize: "2rem",
  // fontWeight: 600,
  wordBreak: "keep-all" as const,
};

export const SubTitle = {
  marginTop: "0.5rem",
  color: COLOR.TEXT.SECONDARY,
  fontSize: "1.2rem",
  fontWeight: 500,
  wordBreak: "keep-all" as const,
};

export const DateText = {
  marginTop: "0.5rem",

  color: COLOR.TEXT.SECONDARY,
  textAlign: "right" as const,
};

export const DivideLine = {
  width: "100%",
  border: `1px solid ${COLOR.BORDER.STANDARD}`,
  marginTop: "1rem",
};
