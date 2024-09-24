import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { css } from "@emotion/react";
import { H1, H2, H3, P, A, Img, Blockquote, Code, Li, Hr } from "./components";
import { styledCodeWrapper } from "@styles/markdown";
import { TBody, THead, Table, Td, Th } from "./Table";

export default function Content({ content }) {
  return <main>{renderNodes(content, 0)}</main>;
}

function renderNodes(node, index) {
  if (!node) return;

  switch (node.type) {
    case "text": {
      if (!node.value) return;
      return node.value;
    }

    case "root": {
      return node.children.map((child, index) => renderNodes(child, index));
    }

    case "raw": {
      return;
    }

    default: {
      switch (node.tagName) {
        case "hr": {
          return <Hr key={index} />;
        }

        case "h1": {
          return (
            <H1
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "h2": {
          return (
            <H2
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "h3": {
          return (
            <H3
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "p": {
          return (
            <P
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "img": {
          return <Img key={index} {...node.properties} />;
        }

        case "a": {
          return (
            <A
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "blockquote": {
          return (
            <Blockquote
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "li": {
          return (
            <Li
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "ul": {
          return (
            <ul key={index} {...node.properties}>
              {node.children.map((child, index) => renderNodes(child, index))}
            </ul>
          );
        }

        case "strong": {
          return (
            <span
              key={index}
              style={{ fontWeight: 800 }}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "code": {
          if (!node.properties?.className)
            return (
              <Code
                key={index}
                children={node.children.map((child, index) =>
                  renderNodes(child, index)
                )}
                {...node.properties}
              />
            );

          return (
            <div key={index} css={styledCodeWrapper}>
              <SyntaxHighlighter
                children={node.children.map((child, index) =>
                  renderNodes(child, index)
                )}
                style={nord}
                language={node.properties?.className[0]?.split("language-")[1]}
                PreTag="div"
              />
            </div>
          );
        }

        case "table": {
          return (
            <Table
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "thead": {
          return (
            <THead
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "tbody": {
          return (
            <TBody
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "tr": {
          return (
            <tr
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "td": {
          return (
            <Td
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "th": {
          return (
            <Th
              key={index}
              children={node.children.map((child, index) =>
                renderNodes(child, index)
              )}
              {...node.properties}
            />
          );
        }

        case "br": {
          return <br />;
        }

        default: {
          const className = node?.properties?.className?.join(" ");
          const style = node?.properties?.style;
          return (
            <node.tagName
              key={index}
              className={className}
              css={css`
                ${style}
              `}
            >
              {node.children?.map((child, index) => renderNodes(child, index))}
            </node.tagName>
          );
        }
      }
    }
  }
}
