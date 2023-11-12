import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { css } from "@emotion/react";
import { H1, H2, H3, P, A, Img, Blockquote, Code, Li } from "./components";
import { styledCodeWrapper } from "@styles/markdown";

export default function Content({ content }) {
  return <div>{renderNodes(content)}</div>;
}

function renderNodes(node) {
  if (!node) return <></>;

  if (node.type === "text") {
    if (!node.value) return <></>;
    return node.value;
  }

  if (node.type === "root") {
    return node.children.map((child) => renderNodes(child));
  }

  if (node.tagName === "hr") {
    return <hr />;
  }

  if (node.tagName === "h1") {
    return (
      <H1
        children={node.children.map((child) => renderNodes(child))}
        {...node.properties}
      />
    );
  }
  if (node.tagName === "h2") {
    return (
      <H2
        children={node.children.map((child) => renderNodes(child))}
        {...node.properties}
      />
    );
  }
  if (node.tagName === "h3") {
    return (
      <H3
        children={node.children.map((child) => renderNodes(child))}
        {...node.properties}
      />
    );
  }

  if (node.tagName === "p") {
    return (
      <P
        children={node.children.map((child) => renderNodes(child))}
        {...node.properties}
      />
    );
  }

  if (node.tagName === "img") {
    return <Img {...node.properties} />;
  }

  if (node.tagName === "a") {
    return (
      <A
        children={node.children.map((child) => renderNodes(child))}
        {...node.properties}
      />
    );
  }

  if (node.tagName === "blockquote") {
    return (
      <Blockquote
        children={node.children.map((child) => renderNodes(child))}
        {...node.properties}
      />
    );
  }

  if (node.tagName === "li") {
    return (
      <Li
        children={node.children.map((child) => renderNodes(child))}
        {...node.properties}
      />
    );
  }

  if (node.tagName === "code") {
    if (!node.properties?.className)
      return (
        <Code
          children={node.children.map((child) => renderNodes(child))}
          {...node.properties}
        />
      );

    return (
      <div css={styledCodeWrapper}>
        <SyntaxHighlighter
          children={node.children.map((child) => renderNodes(child))}
          style={nord}
          language={node.properties?.className[0]?.split("language-")[1]}
          PreTag="div"
        />
      </div>
    );
  }

  const className = node?.properties?.className?.join(" ");
  const style = node?.properties?.style;
  return (
    <node.tagName
      className={className}
      css={css`
        ${style}
      `}
    >
      {node.children?.map((child) => renderNodes(child))}
    </node.tagName>
  );
}
