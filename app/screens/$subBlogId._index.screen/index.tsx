import PostHeader from "@components/PostHeader";
import PostGrid from "@components/PostGrid";
import { Post, PlainCategory } from "~/types";
import { container } from "./styles";

export default function PostPageScreen({
  content,
  plainCategoryData,
}: {
  content: Post;
  plainCategoryData: PlainCategory[];
}) {
  return (
    <div css={{ width: "100%", height: "100%" }}>
      <div css={container}>
        <PostHeader
          id={content.id}
          title={content?.title}
          subTitle={content?.subTitle}
          tags={content?.tags}
          postDate={content?.created_at}
          plainCategoryData={plainCategoryData}
        />
        <PostGrid posts={content?.posts} />
      </div>
    </div>
  );
}
