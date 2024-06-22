import PostHeader from "@components/PostHeader";
import Content from "@components/PostContent";
import { SIZE, mq } from "~/constants/size";
import type { Category, Post, Tag } from "~/types";
import Database from "./Database";

export default function PostDetailPageScreen({
  content,
  categoryData,
}: {
  content: {
    id: string;
    title: string;
    subTitle?: string;
    tags: Tag[];
    created_at: string;
    type: "post" | "database";
    posts: Post[];
    content: Post;
  };
  categoryData: Category[];
}) {
  return (
    <div css={container}>
      <PostHeader
        id={content.id}
        title={content.title}
        subTitle={content?.subTitle}
        tags={content?.tags}
        postDate={content?.created_at}
        categoryData={categoryData}
      />
      {content?.type === "post" && <Content content={content?.content} />}
      {content?.type === "database" && <Database posts={content?.posts} />}
    </div>
  );
}

const container = {
  width: "100%",
  padding: "1rem 1.5rem",

  wordBreak: "break-word" as const,

  [mq[1]]: {
    padding: "1rem",
  },
};
