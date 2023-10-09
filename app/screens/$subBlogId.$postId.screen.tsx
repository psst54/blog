import Content from "@components/PostContent";
import PostList from "@components/PostList";

import styles from "@styles/katex.css";
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
        padding: "2rem 1.5rem",

        wordBreak: "break-word",

        [mq[1]]: {
          padding: "1rem",
        },
      }}
    >
      {content?.tags.length > 0 && (
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.25rem",
            marginBottom: "0.5rem",
          }}
        >
          {content?.tags.map(
            (tag: { text: string; isSpoiler: boolean }, tagIdx: number) => (
              <div
                key={tagIdx}
                css={{
                  padding: "0.25rem 0.75rem",
                  background: "#4D4D4D",
                  borderRadius: "0.5rem",
                }}
              >
                <p
                  css={[
                    { color: "#ffffff" },
                    tag.isSpoiler && {
                      color: "#aaa",
                      filter: "blur(0.25rem)",
                      "&:hover": { color: "#ffffff", filter: "none" },
                    },
                  ]}
                >
                  {tag.text}
                </p>
              </div>
            )
          )}
        </div>
      )}
      <h1 css={{ fontSize: "2rem", fontWeight: 500, wordBreak: "keep-all" }}>
        {content?.title}
      </h1>
      {content?.sub_title && (
        <h2
          css={{
            marginTop: "0.5rem",
            color: "#555555",
            fontSize: "1rem",
            fontWeight: 500,
            wordBreak: "keep-all",
          }}
        >
          {content?.sub_title}
        </h2>
      )}

      <hr
        css={{ width: "100%", border: "1px solid #70E3E3", margin: "1rem 0" }}
      />

      {content?.type === "post" && <Content content={content?.content} />}

      {content?.type === "database" && <PostList content={content?.posts} />}
    </div>
  );
}
