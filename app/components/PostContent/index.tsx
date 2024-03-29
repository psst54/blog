import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { css } from "@emotion/react";
import { H1, H2, H3, P, A, Img, Blockquote, Code, Li, Hr } from "./components";
import { styledCodeWrapper } from "@styles/markdown";

export default function Content({ content }) {
  return <div>{renderNodes(content)}</div>;
}

function renderNodes(node) {
  if (!node) return <></>;

  switch (node.type) {
    case "text": {
      if (!node.value) return <></>;
      return node.value;
    }

    case "root": {
      return node.children.map((child) => renderNodes(child));
    }

    case "raw": {
      return;
    }

    default: {
      switch (node.tagName) {
        case "hr": {
          return <Hr />;
        }

        case "h1": {
          return (
            <H1
              children={node.children.map((child) => renderNodes(child))}
              {...node.properties}
            />
          );
        }

        case "h2": {
          return (
            <H2
              children={node.children.map((child) => renderNodes(child))}
              {...node.properties}
            />
          );
        }

        case "h3": {
          return (
            <H3
              children={node.children.map((child) => renderNodes(child))}
              {...node.properties}
            />
          );
        }

        case "p": {
          return (
            <P
              children={node.children.map((child) => renderNodes(child))}
              {...node.properties}
            />
          );
        }

        case "img": {
          return <Img {...node.properties} />;
        }

        case "a": {
          return (
            <A
              children={node.children.map((child) => renderNodes(child))}
              {...node.properties}
            />
          );
        }

        case "blockquote": {
          return (
            <Blockquote
              children={node.children.map((child) => renderNodes(child))}
              {...node.properties}
            />
          );
        }

        case "li": {
          return (
            <Li
              children={node.children.map((child) => renderNodes(child))}
              {...node.properties}
            />
          );
        }

        case "strong": {
          return (
            <span
              style={{ fontWeight: 800 }}
              children={node.children.map((child) => renderNodes(child))}
              {...node.properties}
            />
          );
        }

        case "code": {
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

        default: {
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
      }
    }
  }
}
