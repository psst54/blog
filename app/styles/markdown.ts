import { color } from "@styles/color";
import { size } from "@styles/size";

export const styledH1 = {
  padding: "1rem 0 0.2rem 0",
  scrollMarginTop: size.TOPBAR_HEIGHT,
};
export const styledH2 = {
  padding: "1rem 0 0.2rem 0",
  scrollMarginTop: size.TOPBAR_HEIGHT,
};
export const styledH3 = {
  padding: "0.8rem 0 0.2rem 0",
  scrollMarginTop: size.TOPBAR_HEIGHT,
};
export const styledP = {
  padding: "0.3rem 0",
  lineHeight: "1.4rem",
};
export const styledA = {
  color: "blue",
  textDecoration: "underline",
  padding: "0.3rem 0",
  lineHeight: "1.4rem",

  cursor: "pointer",
};
export const styledCode = {
  padding: "0 0.2rem",
  borderRadius: "0.3rem",
  background: "#2F343F",

  color: "#fff",
  fontFamily: "Pretendard",
};
export const styledLi = {
  marginLeft: "1.5rem",
  lineHeight: "1.4rem",
  padding: "0.3rem 0",
};
export const styledOl = {
  padding: "0.3rem 0",
};
export const styledUl = {
  padding: "0.3rem 0",
};
export const styledBlockquote = {
  borderLeft: "3px solid black",
  margin: "0.5rem 0",
  padding: "0 1rem",
  lineHeight: "1.4rem",
};
export const styledImg = {
  margin: "auto",
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
