import PostHeader from "@components/PostHeader";
import PostGrid from "@components/PostGrid";
import { size } from "@styles/size";
import { Post } from "@types";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export default function PostPageScreen({
  content,
  plainCategoryData,
}: {
  content: Post;
}) {
  return (
    <div css={{ width: "100%", height: "100%" }}>
      <div
        css={{
          width: "100%",
          height: "100%",
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
        <PostHeader
          id={content.id}
          title={content?.title}
          subTitle={content?.sub_title}
          tags={content?.tags}
          postDate={content?.created_at}
          plainCategoryData={plainCategoryData}
        />
        <PostGrid posts={content?.posts} />
      </div>
    </div>
  );
}
