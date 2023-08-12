import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

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
} from "@styles/markdown";

const components = {
  h1: (props: any) => <h1 css={styledH1} {...props} />,
  h2: (props: any) => <h2 css={styledH2} {...props} />,
  h3: (props: any) => <h3 css={styledH3} {...props} />,
  h4: (props: any) => <h4 css={styledH3} {...props} />,
  h5: (props: any) => <h5 css={styledH3} {...props} />,
  h6: (props: any) => <h6 css={styledH3} {...props} />,
  p: (props: any) => <p css={styledP} {...props} />,
  a: (props: any) => <a target="_blank" css={styledA} {...props} />,
  li: (props: any) => <li css={styledLi} {...props} />,
  ol: (props: any) => <ol css={styledOl} {...props} />,
  ul: (props: any) => <ul css={styledUl} {...props} />,
  blockquote: (props: any) => <blockquote css={styledBlockquote} {...props} />,
  pre: (props: any) => <pre {...props} />,
  code: (props: any) => {
    const match = /language-(\w+)/.exec(props.className || "");
    return !props.inline && match ? (
      <SyntaxHighlighter
        children={String(props.children).replace(/\n$/, "")}
        style={nord}
        language={match[1]}
        PreTag="div"
        {...props}
        css={{
          "::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            background: "#53A8E2",
          },
        }}
      />
    ) : (
      <code css={styledCode} {...props}>
        {props.children}
      </code>
    );
  },
};

export default function Content({ content }: { content: string }) {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        flexDirection: "column",

        ".math": {
          flexShrink: 1,
          maxWidth: "100%",
          overflowX: "auto",
          overflowY: "hidden",

          "::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "::-webkit-scrollbar-thumb": {
            borderRadius: "4px",
            background: "#53A8E2",
          },
        },
        ".katex-mathml": {
          display: "none",
        },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
