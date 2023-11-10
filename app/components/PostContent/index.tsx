import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkToc from "remark-toc";

import { components } from "./components";

export default function Content({ content }: { content: string }) {
  return (
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
  );
}
