import type { Post } from "~/types";
import PostListView from "@components/PostListView";
import { contentContainer, title } from "@styles/main";

export default function Content({ postList }: { postList: Post[] }) {
  return (
    <div css={contentContainer}>
      <h1 css={title}>최근 포스트</h1>
      <PostListView posts={postList} />
    </div>
  );
}
