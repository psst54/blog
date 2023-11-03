import Content from "@components/PostContent";
import PostGrid from "@components/PostGrid";
import Tag from "@components/Tag";

import styles from "@styles/katex.css";
import { color } from "@styles/color";
import { size } from "@styles/size";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default function PostDetailPageScreen({
  content,
  subBlogId,
}: {
  subBlogId: string;
}) {
  return (
    <div
      css={{
        width: "100%",
        padding: "1rem 1.5rem",

        wordBreak: "break-word",

        [mq[0]]: {
          paddingTop: `calc(${size.TOPBAR_HEIGHT} + 1rem)`,
        },

        [mq[1]]: {
          padding: "1rem",
          paddingTop: `calc(${size.TOPBAR_HEIGHT} + 1rem)`,
        },
      }}
    >
      <h1 css={{ fontSize: "2.4rem", fontWeight: 600, wordBreak: "keep-all" }}>
        {content?.title}
      </h1>
      {content?.sub_title && (
        <h2
          css={{
            marginTop: "0.5rem",
            color: color.text.secondary,
            fontSize: "1.2rem",
            fontWeight: 500,
            wordBreak: "keep-all",
          }}
        >
          {content?.sub_title}
        </h2>
      )}
      {content?.tags.length > 0 && (
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          {content?.tags.map(
            (tag: { text: string; isSpoiler: boolean }, tagIndex: number) => (
              <Tag key={tagIndex} item={tag} />
            )
          )}
        </div>
      )}

      <hr
        css={{
          width: "100%",
          border: `1px solid ${color.border.standard}`,
          margin: "1rem 0",
        }}
      />

      {content?.type === "post" && <Content content={content?.content} />}
      {content?.type === "database" && <PostGrid posts={content?.posts} />}
    </div>
  );
}
