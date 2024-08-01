import type { Post } from "~/types";
import PostListView from "@components/PostListView";
import Header from "./Header";

export default function Content({ postList }: { postList: Post[] }) {
  return (
    <section>
      <Header />
      <PostListView posts={postList} />
    </section>
  );
}
