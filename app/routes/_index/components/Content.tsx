import type { Post } from "~/types";
import PostListView from "@components/PostListView";
import { contentContainer, title } from "@styles/main";

export default function Content({ postList }: { postList: Post[] }) {
  return (
    <div css={contentContainer}>
      <section>
        <h2 css={title}>최근 포스트</h2>
        <PostListView posts={postList} />
      </section>
    </div>
  );
}
