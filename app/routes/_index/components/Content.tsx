import type { Post } from "~/types";
import PostListView from "@components/PostListView";
import PostGridView from "@components/PostGridView";
import PinnedHeader from "./PinnedHeader";
import LatestHeader from "./LatestHeader";

export default function Content({ postList }: { postList: Post[] }) {
  return (
    <div>
      <PinnedHeader />
      <PostGridView posts={postList} />

      <LatestHeader />
      <PostListView posts={postList} />
    </div>
  );
}
