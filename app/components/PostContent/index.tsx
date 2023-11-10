import { useState, useEffect, createElement } from "react";
import { Link } from "@remix-run/react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

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
  styledCodeWrapper,
} from "@styles/markdown";

import { unified } from "unified";

import { components } from "./components";

async function test(content) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeKatex);

  const tree = processor.parse(content);
  return tree;
}

export default function Content({ content }: { content: string }) {
  const [parsed, setParsed] = useState(null);

  // .process(await read("example.md"));

  useEffect(() => {
    test(content).then((res) => {
      setParsed(res);
    });
  }, []);

  return <div>{renderNodes(parsed)}</div>;
}

function renderNodes(node) {
  if (!node) return <></>;

  if (node.type === "root") {
    return node.children.map((child) => renderNodes(child));
  }

  if (node.type === "heading") {
    if (node.depth === 1) {
      return (
        <components.h1
          children={node.children.map((child) => renderNodes(child))}
        />
      );
    }
    if (node.depth === 2) {
      return (
        <components.h2
          children={node.children.map((child) => renderNodes(child))}
        />
      );
    }
    if (node.depth === 3) {
      return (
        <components.h3
          children={node.children.map((child) => renderNodes(child))}
        />
      );
    }
    if (node.depth === 4) {
      return <h4>{node.children.map((child) => renderNodes(child))}</h4>;
    }
    if (node.depth === 5) {
      return <h5>{node.children.map((child) => renderNodes(child))}</h5>;
    }
    return;
  }

  if (node.type === "paragraph") {
    return (
      <components.p
        children={node.children.map((child) => renderNodes(child))}
      />
    );
  }

  if (node.type === "link") {
    return (
      <components.a
        href={node.url}
        children={node.children.map((child) => renderNodes(child))}
      />
    );
  }

  if (node.type === "image") {
    return <components.img src={node.url} alt={node.alt} />;
  }

  if (node.type === "text") {
    return node.value;
  }

  if (node.type === "blockquote") {
    return (
      <components.blockquote
        children={node.children.map((child) => renderNodes(child))}
      />
    );
  }

  if (node.type === "inlineCode") {
    return <code>{node.value}</code>;
  }

  if (node.type === "code") {
    return <code>{node.value}</code>;
  }

  console.log(node);
}
