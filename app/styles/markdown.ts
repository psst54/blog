import { color } from "@styles/color";
import { SIZE, mq } from "@styles/size";

export const styledH1 = {
  padding: "1rem 0 0 0",
  [mq[0]]: {
    scrollMarginTop: SIZE.TOPBAR_HEIGHT,
  },
};
export const styledH2 = {
  padding: "1rem 0 0.25rem 0",
  [mq[0]]: {
    scrollMarginTop: SIZE.TOPBAR_HEIGHT,
  },
};
export const styledH3 = {
  padding: "0.8rem 0 0.25rem 0",
  [mq[0]]: {
    scrollMarginTop: SIZE.TOPBAR_HEIGHT,
  },
};
export const styledP = {
  lineHeight: 1.6,
  marginBottom: "0.25rem",
};
export const styledA = {
  color: color.text.link,
  textDecoration: "underline",
  lineHeight: 1.6,

  cursor: "pointer",
};
export const styledCode = {
  padding: "0 0.25rem",
  borderRadius: "0.3rem",
  background: color.background.toSecondary,

  color: "inherit",
  fontFamily: "Pretendard",
};
export const styledLi = {
  marginLeft: "1.5rem",
  lineHeight: 1.6,
  paddingBottom: "0.25rem",
};
export const styledBlockquote = {
  borderLeft: "3px solid black",
  margin: "0.5rem 0",
  padding: "0 1rem",
  lineHeight: 1.6,
};
export const styledImg = {
  margin: "auto",
  marginBottom: "calc(6px + 0.25rem)",
  display: "block",

  maxWidth: "100%",
  border: `2px solid ${color.border.standard}`,
  borderRadius: "1rem",
  boxShadow: `6px 6px 0px 0px ${color.border.standard}`,
};
export const styledCodeWrapper = {
  color: color.text.reverse,
  span: { color: color.text.reverse },
};
export const styledHr = {
  margin: "1.5rem 0",
  border: "none",
  borderBottom: `1px solid ${color.border.light}`,
};
