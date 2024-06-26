import PostListView from "@components/PostListView";
import { contentContainer, title } from "@styles/main";
import type { Post } from "~/types";

export default function Content({ posts }: { posts: Post[] }) {
  return (
    <div css={contentContainer}>
      <h1 css={title}>최근 포스트</h1>
      <PostListView posts={posts} />
    </div>
  );
}
