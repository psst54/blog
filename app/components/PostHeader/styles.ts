import { COLOR } from "~/constants/color";

export const Title = {
  wordBreak: "keep-all" as const,
};

export const SubTitle = {
  color: COLOR.TEXT.LITTLE_LIGHT,
  fontWeight: 500,
  wordBreak: "keep-all" as const,
};

export const DateText = {
  marginTop: "0.5rem",

  color: COLOR.TEXT.LITTLE_LIGHT,
  textAlign: "right" as const,
};

export const DivideLine = {
  width: "100%",
  border: `1px solid ${COLOR.BORDER.STANDARD}`,
  marginTop: "1rem",
};
