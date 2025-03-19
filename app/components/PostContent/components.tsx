import { Link } from "@remix-run/react";
import { COLOR } from "~/constants/color";
import {
  styledH1,
  styledH2,
  styledH3,
  styledP,
  styledA,
  styledCode,
  styledLi,
  styledBlockquote,
  styledImg,
  styledHr,
  styledOl,
  styledUl,
} from "~/styles/markdown";

export function H1({ children }) {
  return (
    <div css={{ display: "flex", marginBottom: "0.5rem" }}>
      <h2 css={styledH1} children={children} id={getId(children)} />
      <hr
        css={{
          flexGrow: 1,
          border: "none",
          borderBottom: `2px solid ${COLOR.BORDER.LIGHT}`,
        }}
      />
    </div>
  );
}

export function H2({ children }) {
  return <h3 css={styledH2} children={children} id={getId(children)} />;
}

export function H3({ children }) {
  return <h4 css={styledH3} children={children} id={getId(children)} />;
}

export function P({ children }) {
  return <p css={styledP} children={children} />;
}

export function A({ href, children }) {
  if (href[0] === "#")
    return <Link css={styledA} to={href} children={children} />;
  return <Link target="_blank" css={styledA} to={href} children={children} />;
}

export function Img({ src, alt }) {
  return <img css={styledImg} alt={alt} src={src} />;
}

export function Blockquote({ children }) {
  return <blockquote css={styledBlockquote} children={children} />;
}

export function Code({ children }) {
  return <code css={styledCode} children={children} />;
}

export function Ol({ children }) {
  return <ol css={styledOl} children={children} />;
}

export function Ul({ children }) {
  return <ul css={styledUl} children={children} />;
}

export function Li({ children }) {
  return <li css={styledLi} children={children} />;
}

export function Hr() {
  return <hr css={styledHr} />;
}

//--------------------

function getId(child) {
  return solve(child)
    .replace(/\s+/g, "-")
    .replace(/[^\w\sㄱ-ㅎㅏ-ㅣ가-힣-]/g, "")
    .toLowerCase();
}

function solve(child) {
  if (!child) return;
  if (typeof child === "string") return child;
  return child
    .map((item) => {
      if (typeof item === "string") return item;
      return solve(item.props.children);
    })
    .join("");
}
