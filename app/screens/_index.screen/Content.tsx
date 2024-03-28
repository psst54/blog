import PostGrid from "@components/PostGrid";
import { contentContainer, recentPostsConatiner, title } from "@styles/main";
import type { Post } from "~/types";

export default function Content({ posts }: { posts: Post[] }) {
  return (
    <div css={contentContainer}>
      <div css={recentPostsConatiner}>
        <h1 css={title}>최근 포스트</h1>

        <PostGrid posts={posts} />
      </div>
    </div>
  );
}
