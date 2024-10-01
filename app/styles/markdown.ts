import { COLOR } from "@constants/color";
import { SIZE, mq } from "@constants/size";

export const styledH1 = {
  padding: "1rem 0 0 0",

  code: {
    padding: "0 0.5rem",
    borderRadius: "0.75rem",
  },

  [mq[0]]: {
    scrollMarginTop: SIZE.TOP_NAV_HEIGHT,
  },
};
export const styledH2 = {
  padding: "1rem 0 0.25rem 0",

  code: {
    padding: "0 0.5rem",
    borderRadius: "0.75rem",
  },

  [mq[0]]: {
    scrollMarginTop: SIZE.TOP_NAV_HEIGHT,
  },
};
export const styledH3 = {
  padding: "0.8rem 0 0.25rem 0",
  [mq[0]]: {
    scrollMarginTop: SIZE.TOP_NAV_HEIGHT,
  },
};
export const styledP = {
  lineHeight: 1.6,
  marginBottom: "0.25rem",
};
export const styledA = {
  color: COLOR.TEXT.LINK,
  textDecoration: "underline",
  lineHeight: 1.6,

  cursor: "pointer",
};
export const styledCode = {
  padding: "0 0.25rem",
  background: COLOR.BACKGROUND.CODE,
  border: "1px solid " + COLOR.BORDER.CODE,
  borderRadius: "0.4rem",

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

  maxWidth: "100%",
  border: `2px solid ${COLOR.BORDER.STANDARD}`,
  borderRadius: "1rem",
  boxShadow: `6px 6px 0px 0px ${COLOR.BORDER.STANDARD}`,
};
export const styledCodeWrapper = {
  color: COLOR.TEXT.REVERSE,
  span: { color: COLOR.TEXT.REVERSE },
};
export const styledHr = {
  margin: "1.5rem 0",
  border: "none",
  borderBottom: `1px solid ${COLOR.BORDER.LIGHT}`,
};
