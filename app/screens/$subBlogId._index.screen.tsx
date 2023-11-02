import PostGrid from "@components/PostGrid";
import Tag from "@components/Tag";
import { color } from "@styles/color";
import { size } from "@styles/size";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default function PostPageScreen({
  content,
  subBlogId,
}: {
  subBlogId: string;
}) {
  return (
    <div css={{ width: "100%", height: "100%" }}>
      <div
        css={{
          width: "100%",
          height: "100%",
          padding: "2rem 1.5rem",

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
        {content?.tags && content.tags.length > 0 && (
          <div
            css={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.25rem",
              marginBottom: "0.5rem",
            }}
          >
            {content.tags.map(
              (tag: { text: string; isSpoiler: boolean }, tagIndex: number) => (
                <Tag key={tagIndex} item={tag} />
              )
            )}
          </div>
        )}
        <h1 css={{ fontSize: "2rem", fontWeight: 800, wordBreak: "keep-all" }}>
          {content?.title}
        </h1>
        {content?.sub_title && (
          <h2
            css={{
              marginTop: "0.5rem",
              color: color.text.secondary,
              fontSize: "1rem",
              fontWeight: 500,
              wordBreak: "keep-all",
            }}
          >
            {content.sub_title}
          </h2>
        )}

        <hr
          css={{
            width: "100%",
            border: `1px solid ${color.border.standard}`,
            margin: "1rem 0",
          }}
        />
        <PostGrid posts={content?.posts} />
      </div>
    </div>
  );
}
