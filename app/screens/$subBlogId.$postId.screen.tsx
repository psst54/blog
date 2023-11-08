import PostHeader from "@components/PostHeader";
import Content from "@components/PostContent";
import PostGrid from "@components/PostGrid";
import { size, mq } from "@styles/size";
import { PlainCategory, Post } from "~/types";

export default function PostDetailPageScreen({
  content,
  plainCategoryData,
}: {
  content: Post;
  plainCategoryData: PlainCategory[];
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
      <PostHeader
        id={content.id}
        title={content?.title}
        subTitle={content?.subTitle}
        tags={content?.tags}
        postDate={content?.created_at}
        plainCategoryData={plainCategoryData}
      />
      {content?.type === "post" && <Content content={content?.content} />}
      {content?.type === "database" && <PostGrid posts={content?.posts} />}
    </div>
  );
}
