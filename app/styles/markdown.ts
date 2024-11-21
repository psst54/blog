import { COLOR } from "@constants/color";
import { SIZE, mq } from "@constants/size";

export const styledH1 = {
  padding: "1.5rem 0 0 0",

  fontWeight: 800,

  code: {
    padding: "0 0.5rem",
    borderRadius: "0.75rem",
  },

  [mq[0]]: {
    scrollMarginTop: SIZE.TOP_NAV_HEIGHT,
  },
};
export const styledH2 = {
  padding: "1.5rem 0 0.5rem 0",

  fontWeight: 900,

  code: {
    padding: "0 0.5rem",
    borderRadius: "0.75rem",
  },

  [mq[0]]: {
    scrollMarginTop: SIZE.TOP_NAV_HEIGHT,
  },
};
export const styledH3 = {
  padding: "1.25rem 0 0.5rem 0",

  fontWeight: 900,

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
  borderRadius: "0.25rem",

  fontFamily: '"Pretendard Variable", Pretendard',
  lineHeight: 1.6,
};

export const styledOl = {
  margin: "0.3rem",
};
export const styledUl = {
  margin: "0.3rem",
};
export const styledLi = {
  margin: "0.3rem 0 0.3rem 1.5rem",
  marginLeft: "1.5rem",

  lineHeight: 1.6,
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
  border: `1px solid ${COLOR.BORDER.LIGHT}`,
  borderRadius: "0.5rem",
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
