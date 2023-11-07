import { Link } from "@remix-run/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";
import { color } from "@styles/color";

import {
  styledH1,
  styledH2,
  styledH3,
  styledP,
  styledA,
  styledCode,
  styledLi,
  styledOl,
  styledUl,
  styledBlockquote,
  styledImg,
  styledCodeWrapper,
} from "@styles/markdown";

function getId(child) {
  return solve(child)
    .replace(/\s+/g, "-")
    .replace(/[^\w\sㄱ-ㅎㅏ-ㅣ가-힣-]/g, "")
    .toLowerCase();
}

function solve(child) {
  return child
    .map((item) => {
      if (typeof item === "string") return item;
      return solve(item.props.children);
    })
    .join("");
}

const components = {
  h1: (props: any) => {
    return (
      <div css={{ display: "flex", marginBottom: "0.25rem" }}>
        <h1
          css={styledH1}
          children={props.children}
          id={getId(props.children)}
        />
        <hr
          css={{
            flexGrow: 1,
            border: "none",
            borderBottom: `2px solid ${color.border.light}`,
          }}
        />
      </div>
    );
  },
  h2: (props: any) => (
    <h2 css={styledH2} children={props.children} id={getId(props.children)} />
  ),
  h3: (props: any) => (
    <h3 css={styledH3} children={props.children} id={getId(props.children)} />
  ),
  h4: (props: any) => <h4 css={styledH3} children={props.children} />,
  h5: (props: any) => <h5 css={styledH3} children={props.children} />,
  h6: (props: any) => <h6 css={styledH3} children={props.children} />,
  p: (props: any) => <p css={styledP} children={props.children} />,
  a: (props: any) => {
    if (props.href[0] === "#")
      return <Link css={styledA} to={props.href} children={props.children} />;

    return (
      <Link
        target="_blank"
        css={styledA}
        to={props.href}
        children={props.children}
      />
    );
  },
  li: (props: any) => <li css={styledLi} children={props.children} />,
  ol: (props: any) => <ol css={styledOl} children={props.children} />,
  ul: (props: any) => <ul css={styledUl} children={props.children} />,
  blockquote: (props: any) => (
    <blockquote css={styledBlockquote} children={props.children} />
  ),
  img: (props: any) => <img css={styledImg} alt={props.alt} src={props.src} />,
  pre: (props: any) => <pre children={props.children} />,
  code: (props: any) => {
    const match = /language-(\w+)/.exec(props.className || "");
    return !props.inline && match ? (
      <div css={styledCodeWrapper}>
        <SyntaxHighlighter
          children={String(props.children).replace(/\n$/, "")}
          style={nord}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      </div>
    ) : (
      <code css={styledCode} children={props.children} />
    );
  },
};

export default function Content({ content }: { content: string }) {
  return (
    <div
      css={{
        ".math": {
          flexShrink: 1,
          maxWidth: "100%",
          overflowX: "auto",
        },
        ".katex-mathml": {
          display: "none",
        },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[
          [remarkMath],
          [remarkGfm],
          [remarkToc, { tight: true, maxDepth: 3, ordered: true }],
        ]}
        rehypePlugins={[rehypeKatex]}
        components={components}
      >
        {"# Table of Contents\n" + content}
      </ReactMarkdown>
    </div>
  );
}
