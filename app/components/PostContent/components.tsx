import { type ReactNode } from "react";
import { Link } from "@remix-run/react";
import { COLOR } from "@constants/color";
import {
  styledH1,
  styledH2,
  styledH3,
  styledA,
  styledCode,
  styledLi,
  styledBlockquote,
  styledImg,
  styledHr,
} from "@styles/markdown";
import Text from "../atoms/Text";

export function H1({ children }: { children: ReactNode }) {
  return (
    <div css={{ display: "flex", marginBottom: "0.25rem" }}>
      <h1 css={styledH1} children={children} id={getId(children)} />
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

export function H2({ children }: { children: ReactNode }) {
  return <h2 css={styledH2} children={children} id={getId(children)} />;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 css={styledH3} children={children} id={getId(children)} />;
}

export function P({ children }: { children: ReactNode }) {
  return <Text.Body>{children}</Text.Body>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  if (href[0] === "#")
    return <Link css={styledA} to={href} children={children} />;
  return <Link target="_blank" css={styledA} to={href} children={children} />;
}

export function Img({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size: string;
}) {
  return <img css={[styledImg, { width: size }]} alt={alt} src={src} />;
}

export function Blockquote({ children }: { children: ReactNode }) {
  return <blockquote css={styledBlockquote} children={children} />;
}

export function Code({ children }: { children: ReactNode }) {
  return <code css={styledCode} children={children} />;
}

export function Li({ children }: { children: ReactNode }) {
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
