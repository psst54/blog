import type { Post } from "~/types";
import PostListView from "@components/PostListView";
import { contentContainer } from "@styles/main";
import Header from "./Header";

export default function Content({ postList }: { postList: Post[] }) {
  return (
    <div css={contentContainer}>
      <section>
        <Header />
        <PostListView posts={postList} />
      </section>
    </div>
  );
}
